import { readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const failures = [];

function read(path) {
  return readFileSync(join(root, path), "utf8");
}

function assert(condition, message) {
  if (!condition) failures.push(message);
}

function listFiles(dir) {
  return readdirSync(join(root, dir)).flatMap((entry) => {
    const path = join(dir, entry);
    const full = join(root, path);
    return statSync(full).isDirectory() ? listFiles(path) : [path];
  });
}

const index = read("index.html");
const app = read("app.js");
const styles = read("styles.css");

assert(index.includes("Content-Security-Policy"), "index.html is missing a CSP meta tag.");
assert(index.includes("NiveshNadi Mutual Fund Desk"), "index.html is missing the product title.");
assert(index.includes("id=\"screener\""), "index.html is missing the screener section.");
assert(index.includes("id=\"goal-fit\""), "index.html is missing the Goal Fit Compass.");
assert(index.includes("id=\"journey\""), "index.html is missing the First SIP Coach.");
assert(index.includes("id=\"calculator\""), "index.html is missing the SIP/STP lab.");
assert(index.includes("id=\"portfolio\""), "index.html is missing Portfolio X-Ray.");
assert(index.includes("id=\"watchlist\""), "index.html is missing the Watchlist and Alerts Room.");
assert(index.includes("id=\"decision-pack\""), "index.html is missing the Nadi Decision Pack.");
assert(index.includes("id=\"pricing\""), "index.html is missing the Pricing section.");
assert(index.includes("id=\"journal\""), "index.html is missing Decision Journal.");
assert(index.includes("floatingSearchToggle") && index.includes("floatingSearchInput"), "index.html is missing floating search controls.");
assert(index.includes("scrollTopButton"), "index.html is missing the back-to-top button.");
assert(!/\son[a-z]+\s*=/i.test(index), "index.html contains an inline event handler.");

assert(app.includes("const DATA_VERSION"), "app.js is missing DATA_VERSION.");
assert(app.includes("Nadi Large Cap Core Fund"), "app.js is missing demo fund data.");
assert(app.includes("function runSip"), "app.js is missing SIP calculation.");
assert(app.includes("function runStp"), "app.js is missing STP calculation.");
assert(app.includes("renderGoalFitCompass"), "app.js is missing Goal Fit Compass behavior.");
assert(app.includes("renderFirstSipCoach"), "app.js is missing First SIP Coach behavior.");
assert(app.includes("renderWatchlistRoom"), "app.js is missing Watchlist and Alerts behavior.");
assert(app.includes("renderDecisionPack"), "app.js is missing Nadi Decision Pack behavior.");
assert(app.includes("function analyzePortfolio"), "app.js is missing portfolio analysis.");
assert(app.includes("bindFloatingSearch"), "app.js is missing floating search behavior.");
assert(app.includes("bindScrollTopButton"), "app.js is missing scroll-to-top behavior.");
assert(app.includes("localStorage"), "app.js is missing browser-local decision journal storage.");

assert(styles.includes("--mint") && styles.includes("--gold") && styles.includes("--blue"), "styles.css is missing brand color tokens.");
assert(styles.includes(".floating-search") && styles.includes(".scroll-top-button"), "styles.css is missing floating control styles.");
assert(styles.includes(".journey-grid") && styles.includes(".journey-output"), "styles.css is missing First SIP Coach styles.");
assert(styles.includes(".watch-grid") && styles.includes(".watch-card"), "styles.css is missing Watchlist and Alerts styles.");
assert(styles.includes(".pack-grid") && styles.includes(".pack-card"), "styles.css is missing Nadi Decision Pack styles.");
assert(styles.includes(".pricing-grid") && styles.includes(".pricing-card"), "styles.css is missing pricing section styles.");
assert(!styles.includes("letter-spacing: -"), "styles.css uses negative letter spacing.");
assert(!styles.includes("vw;"), "styles.css appears to scale font size directly with viewport width.");

for (const file of listFiles("data").filter((name) => name.endsWith(".json"))) {
  try {
    JSON.parse(read(file));
  } catch (error) {
    failures.push(`${file} is not valid JSON: ${error.message}`);
  }
}

for (const file of [
  "README.md",
  "docs/BRAND_SYSTEM.md",
  "docs/COMPLIANCE_NOTES.md",
  "docs/DATA_ROADMAP.md",
  "docs/DECISION_PACK.md",
  "docs/JOURNEY_COACH.md",
  "docs/MONETIZATION.md",
  "docs/REPO_HANDOFF.md",
  "docs/WATCHLIST_ALERTS.md"
]) {
  assert(read(file).trim().length > 300, `${file} is missing or too short.`);
}

if (failures.length) {
  console.error("NiveshNadi static checks failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("NiveshNadi static checks passed.");
