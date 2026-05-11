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
const packageJson = JSON.parse(read("package.json"));

assert(index.includes("Content-Security-Policy"), "index.html is missing a CSP meta tag.");
assert(index.includes("NiveshNadi Mutual Fund Desk"), "index.html is missing the product title.");
assert(index.includes("id=\"screener\""), "index.html is missing the screener section.");
assert(index.includes("id=\"category-playbook\""), "index.html is missing the Category Playbook.");
assert(index.includes("id=\"suitability-passport\""), "index.html is missing the Suitability Passport.");
assert(index.includes("id=\"fit-heatmap\""), "index.html is missing the Goal-Fund Fit Heatmap.");
assert(index.includes("id=\"red-flag-radar\""), "index.html is missing the Red Flag Radar.");
assert(index.includes("id=\"peer-bench\""), "index.html is missing the Peer Benchmark Board.");
assert(index.includes("id=\"compare\""), "index.html is missing the Fund Compare Matrix.");
assert(index.includes("id=\"goal-fit\""), "index.html is missing the Goal Fit Compass.");
assert(index.includes("id=\"journey\""), "index.html is missing the First SIP Coach.");
assert(index.includes("id=\"calculator\""), "index.html is missing the SIP/STP lab.");
assert(index.includes("id=\"risk-lab\""), "index.html is missing the Risk Stress Lab.");
assert(index.includes("id=\"cost-lab\""), "index.html is missing the Cost Reality Lab.");
assert(index.includes("id=\"readiness-gate\""), "index.html is missing the Investor Readiness Gate.");
assert(index.includes("id=\"portfolio\""), "index.html is missing Portfolio X-Ray.");
assert(index.includes("id=\"evidence\""), "index.html is missing the Evidence Ledger.");
assert(index.includes("id=\"data-readiness\""), "index.html is missing the Data Readiness Room.");
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
assert(app.includes("function renderCategoryPlaybook") && app.includes("function makeCategoryPlaybookNote"), "app.js is missing Category Playbook behavior.");
assert(app.includes("function renderSuitabilityPassport") && app.includes("function makeSuitabilityPassportNote"), "app.js is missing Suitability Passport behavior.");
assert(app.includes("function renderGoalFundFitHeatmap") && app.includes("function makeGoalFundFitNote"), "app.js is missing Goal-Fund Fit Heatmap behavior.");
assert(app.includes("function renderRedFlagRadar") && app.includes("function makeRedFlagNote"), "app.js is missing Red Flag Radar behavior.");
assert(app.includes("function renderPeerBenchmarkBoard") && app.includes("function makePeerBenchmarkNote"), "app.js is missing Peer Benchmark Board behavior.");
assert(app.includes("function renderStressLab") && app.includes("function makeStressNote"), "app.js is missing Risk Stress Lab behavior.");
assert(app.includes("function renderCostRealityLab") && app.includes("function makeCostNote"), "app.js is missing Cost Reality Lab behavior.");
assert(app.includes("function renderInvestorReadinessGate") && app.includes("function makeReadinessNote"), "app.js is missing Investor Readiness Gate behavior.");
assert(app.includes("renderGoalFitCompass"), "app.js is missing Goal Fit Compass behavior.");
assert(app.includes("function renderCompareMatrix") && app.includes("function makeCompareNote"), "app.js is missing Fund Compare Matrix behavior.");
assert(app.includes("renderFirstSipCoach"), "app.js is missing First SIP Coach behavior.");
assert(app.includes("renderWatchlistRoom"), "app.js is missing Watchlist and Alerts behavior.");
assert(app.includes("renderDecisionPack"), "app.js is missing Nadi Decision Pack behavior.");
assert(app.includes("function analyzePortfolio"), "app.js is missing portfolio analysis.");
assert(app.includes("function portfolioThesis") && app.includes("function duplicationScore"), "app.js is missing Portfolio Intelligence behavior.");
assert(app.includes("function renderEvidenceLedger") && app.includes("EVIDENCE_SOURCES"), "app.js is missing Evidence Ledger behavior.");
assert(app.includes("function renderDataReadinessRoom") && app.includes("DATA_PIPELINES"), "app.js is missing Data Readiness Room behavior.");
assert(app.includes("bindFloatingSearch"), "app.js is missing floating search behavior.");
assert(app.includes("bindScrollTopButton"), "app.js is missing scroll-to-top behavior.");
assert(app.includes("localStorage"), "app.js is missing browser-local decision journal storage.");

assert(packageJson.scripts?.["security:audit"] === "node scripts/security-audit.mjs", "package.json is missing security:audit script.");
assert(packageJson.scripts?.check?.includes("security-audit.mjs"), "package.json check script does not run the security audit.");

assert(styles.includes("--mint") && styles.includes("--gold") && styles.includes("--blue"), "styles.css is missing brand color tokens.");
assert(styles.includes("scroll-padding-top") && styles.includes("scroll-margin-top"), "styles.css is missing sticky-header anchor offset rules.");
assert(styles.includes(".floating-search") && styles.includes(".scroll-top-button"), "styles.css is missing floating control styles.");
assert(styles.includes(".playbook-grid") && styles.includes(".playbook-hero"), "styles.css is missing Category Playbook styles.");
assert(styles.includes(".passport-grid") && styles.includes(".passport-hero"), "styles.css is missing Suitability Passport styles.");
assert(styles.includes(".fit-map-output") && styles.includes(".fit-map-hero"), "styles.css is missing Goal-Fund Fit Heatmap styles.");
assert(styles.includes(".red-flag-output") && styles.includes(".red-flag-hero"), "styles.css is missing Red Flag Radar styles.");
assert(styles.includes(".peer-output") && styles.includes(".peer-hero"), "styles.css is missing Peer Benchmark Board styles.");
assert(styles.includes(".compare-output") && styles.includes(".compare-card"), "styles.css is missing Fund Compare Matrix styles.");
assert(styles.includes(".stress-grid") && styles.includes(".stress-hero"), "styles.css is missing Risk Stress Lab styles.");
assert(styles.includes(".cost-grid") && styles.includes(".cost-hero"), "styles.css is missing Cost Reality Lab styles.");
assert(styles.includes(".readiness-grid") && styles.includes(".readiness-hero"), "styles.css is missing Investor Readiness Gate styles.");
assert(styles.includes(".journey-grid") && styles.includes(".journey-output"), "styles.css is missing First SIP Coach styles.");
assert(styles.includes(".watch-grid") && styles.includes(".watch-card"), "styles.css is missing Watchlist and Alerts styles.");
assert(styles.includes(".pack-grid") && styles.includes(".pack-card"), "styles.css is missing Nadi Decision Pack styles.");
assert(styles.includes(".xray-thesis") && styles.includes(".role-list"), "styles.css is missing Portfolio Intelligence styles.");
assert(styles.includes(".evidence-grid") && styles.includes(".source-card"), "styles.css is missing Evidence Ledger styles.");
assert(styles.includes(".data-grid") && styles.includes(".data-hero"), "styles.css is missing Data Readiness Room styles.");
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
  "SECURITY.md",
  "README.md",
  "docs/BRAND_SYSTEM.md",
  "docs/COMPLIANCE_NOTES.md",
  "docs/COST_REALITY_LAB.md",
  "docs/DATA_ROADMAP.md",
  "docs/DECISION_PACK.md",
  "docs/DATA_CLASSIFICATION.md",
  "docs/EVIDENCE_LEDGER.md",
  "docs/FUND_COMPARE_MATRIX.md",
  "docs/GOAL_FUND_FIT_HEATMAP.md",
  "docs/SUITABILITY_PASSPORT.md",
  "docs/RED_FLAG_RADAR.md",
  "docs/INVESTOR_READINESS_GATE.md",
  "docs/CATEGORY_PLAYBOOK.md",
  "docs/PEER_BENCHMARK_BOARD.md",
  "docs/JOURNEY_COACH.md",
  "docs/LIVE_DATA_READINESS.md",
  "docs/MONETIZATION.md",
  "docs/PORTFOLIO_INTELLIGENCE.md",
  "docs/REPO_HANDOFF.md",
  "docs/RISK_STRESS_LAB.md",
  "docs/SECURITY_MODEL.md",
  "docs/SECURITY_RELEASE_CHECKLIST.md",
  "docs/WATCHLIST_ALERTS.md"
]) {
  assert(read(file).trim().length > 300, `${file} is missing or too short.`);
}

assert(read("scripts/security-audit.mjs").includes("Content Security Policy"), "scripts/security-audit.mjs is missing CSP checks.");

if (failures.length) {
  console.error("NiveshNadi static checks failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("NiveshNadi static checks passed.");
