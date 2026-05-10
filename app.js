import { readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const failures = [];
const warnings = [];

const textExtensions = new Set([
  ".html",
  ".css",
  ".js",
  ".mjs",
  ".json",
  ".md",
  ".svg",
  ".txt",
  ".webmanifest"
]);

const ignoredDirs = new Set([".git", "node_modules", "dist", "coverage"]);

function read(path) {
  return readFileSync(join(root, path), "utf8");
}

function assert(condition, message) {
  if (!condition) failures.push(message);
}

function warn(condition, message) {
  if (!condition) warnings.push(message);
}

function listFiles(dir = ".") {
  return readdirSync(join(root, dir)).flatMap((entry) => {
    if (ignoredDirs.has(entry)) return [];
    const path = dir === "." ? entry : join(dir, entry);
    const full = join(root, path);
    if (statSync(full).isDirectory()) return listFiles(path);
    return [path];
  });
}

function readTextFiles() {
  return listFiles()
    .filter((file) => textExtensions.has(extname(file)))
    .map((file) => ({ file, content: read(file) }));
}

const index = read("index.html");
const app = read("app.js");
const cspMatch = index.match(/http-equiv="Content-Security-Policy"[\s\S]*?content="([^"]+)"/);
const csp = cspMatch?.[1] || "";

assert(Boolean(cspMatch), "index.html is missing a Content Security Policy meta tag.");
for (const directive of [
  "default-src 'self'",
  "script-src 'self'",
  "base-uri 'none'",
  "form-action 'none'",
  "frame-ancestors 'none'",
  "object-src 'none'"
]) {
  assert(csp.includes(directive), `CSP is missing required directive: ${directive}`);
}

assert(!/<script[^>]+src=["']https?:\/\//i.test(index), "index.html loads an external script.");
assert(!/<script(?![^>]+src=)[\s>]/i.test(index), "index.html contains inline script content.");
assert(!/\son[a-z]+\s*=/i.test(index), "index.html contains inline event handlers.");
assert(!/<form\b[^>]*\saction\s*=/i.test(index), "index.html contains a form action despite CSP form-action none.");

for (const pattern of [
  { name: "eval", regex: /\beval\s*\(/ },
  { name: "new Function", regex: /\bnew\s+Function\s*\(/ },
  { name: "setTimeout string execution", regex: /\bsetTimeout\s*\(\s*["'`]/ },
  { name: "setInterval string execution", regex: /\bsetInterval\s*\(\s*["'`]/ },
  { name: "document.write", regex: /\bdocument\.write\s*\(/ },
  { name: "dynamic script creation", regex: /createElement\s*\(\s*["']script["']\s*\)/i }
]) {
  assert(!pattern.regex.test(app), `app.js uses prohibited runtime pattern: ${pattern.name}`);
}

for (const pattern of [
  { name: "fetch", regex: /\bfetch\s*\(/ },
  { name: "XMLHttpRequest", regex: /\bXMLHttpRequest\b/ },
  { name: "WebSocket", regex: /\bWebSocket\b/ },
  { name: "EventSource", regex: /\bEventSource\b/ }
]) {
  assert(!pattern.regex.test(app), `app.js adds a network API before the security model is updated: ${pattern.name}`);
}

assert(app.includes("function escapeHtml"), "app.js is missing the escapeHtml helper.");
assert(app.includes("escapeHtml(entry.reason)"), "Journal reason rendering is not visibly escaped.");
assert(app.includes("escapeHtml(pack.reason)"), "Decision pack reason rendering is not visibly escaped.");

const storageKeys = [...app.matchAll(/localStorage\.(?:getItem|setItem)\(\s*["']([^"']+)["']/g)].map((match) => match[1]);
assert(storageKeys.length > 0, "security audit did not find localStorage keys to review.");
for (const key of storageKeys) {
  assert(key.startsWith("niveshnadi-"), `localStorage key is not namespaced: ${key}`);
}

for (const requiredDoc of [
  "SECURITY.md",
  "docs/SECURITY_MODEL.md",
  "docs/DATA_CLASSIFICATION.md",
  "docs/SECURITY_RELEASE_CHECKLIST.md"
]) {
  assert(read(requiredDoc).trim().length > 500, `${requiredDoc} is missing or too short.`);
}

const secretPatterns = [
  { name: "private key", regex: /-----BEGIN (?:RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----/ },
  { name: "GitHub token", regex: /gh[pousr]_[A-Za-z0-9_]{20,}/ },
  { name: "AWS access key", regex: /AKIA[0-9A-Z]{16}/ },
  { name: "Google API key", regex: /AIza[0-9A-Za-z_-]{35}/ },
  { name: "Slack token", regex: /xox[baprs]-[0-9A-Za-z-]{20,}/ },
  { name: "generic bearer token", regex: /Bearer\s+[A-Za-z0-9._~+/=-]{24,}/ },
  { name: "password assignment", regex: /\b(password|passwd|pwd)\b\s*[:=]\s*["'][^"']{8,}["']/i },
  { name: "secret assignment", regex: /\b(secret|api[_-]?key|token)\b\s*[:=]\s*["'][^"']{12,}["']/i }
];

for (const { file, content } of readTextFiles()) {
  for (const pattern of secretPatterns) {
    if (pattern.regex.test(content)) {
      failures.push(`${file} appears to contain ${pattern.name}.`);
    }
  }
}

warn(
  index.includes("style-src 'self' 'unsafe-inline'"),
  "CSP style-src is stricter than expected; update the security model if inline styles are removed."
);

if (warnings.length) {
  console.warn("NiveshNadi security audit warnings:");
  for (const warning of warnings) console.warn(`- ${warning}`);
}

if (failures.length) {
  console.error("NiveshNadi security audit failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("NiveshNadi security audit passed.");
