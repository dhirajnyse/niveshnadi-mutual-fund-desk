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
assert(index.includes("id=\"why-lens\""), "index.html is missing the Why This Fund Lens.");
assert(index.includes("id=\"starter-guide\""), "index.html is missing the First 5-Minute Start guide.");
assert(index.includes("id=\"investor-passport\""), "index.html is missing the Retail Investor Passport.");
assert(index.includes("id=\"coach-desk\""), "index.html is missing Nadi Coach Q&A.");
assert(index.includes("id=\"research-lanes\""), "index.html is missing Research Lanes.");
assert(index.includes("id=\"research-pulse\""), "index.html is missing Research Pulse.");
assert(index.includes("id=\"category-playbook\""), "index.html is missing the Category Playbook.");
assert(index.includes("id=\"suitability-passport\""), "index.html is missing the Suitability Passport.");
assert(index.includes("id=\"fit-heatmap\""), "index.html is missing the Goal-Fund Fit Heatmap.");
assert(index.includes("id=\"red-flag-radar\""), "index.html is missing the Red Flag Radar.");
assert(index.includes("id=\"switch-lab\""), "index.html is missing the Switch Decision Lab.");
assert(index.includes("id=\"peer-bench\""), "index.html is missing the Peer Benchmark Board.");
assert(index.includes("id=\"compare\""), "index.html is missing the Fund Compare Matrix.");
assert(index.includes("id=\"goal-fit\""), "index.html is missing the Goal Fit Compass.");
assert(index.includes("id=\"journey\""), "index.html is missing the First SIP Coach.");
assert(index.includes("id=\"calculator\""), "index.html is missing the SIP/STP lab.");
assert(index.includes("id=\"risk-lab\""), "index.html is missing the Risk Stress Lab.");
assert(index.includes("id=\"cost-lab\""), "index.html is missing the Cost Reality Lab.");
assert(index.includes("id=\"readiness-gate\""), "index.html is missing the Investor Readiness Gate.");
assert(index.includes("id=\"portfolio\""), "index.html is missing Portfolio X-Ray.");
assert(index.includes("id=\"blueprint\""), "index.html is missing the Portfolio Blueprint Lab.");
assert(index.includes("id=\"rebalance-guard\""), "index.html is missing the Rebalance Guard.");
assert(index.includes("id=\"portfolio-review\""), "index.html is missing the Portfolio Review Room.");
assert(index.includes("id=\"review-vault\""), "index.html is missing the Review Vault.");
assert(index.includes("id=\"investor-record\""), "index.html is missing the Investor Record Desk.");
assert(index.includes("id=\"research-dossier\""), "index.html is missing the Research Dossier Builder.");
assert(index.includes("id=\"evidence\""), "index.html is missing the Evidence Ledger.");
assert(index.includes("id=\"citation-binder\""), "index.html is missing the Citation Binder.");
assert(index.includes("id=\"fund-house-lens\""), "index.html is missing the Fund House Lens.");
assert(index.includes("id=\"data-readiness\""), "index.html is missing the Data Readiness Room.");
assert(index.includes("id=\"live-data-contracts\""), "index.html is missing the Live Data Contract Lab.");
assert(index.includes("id=\"source-dry-run\""), "index.html is missing the Source Dry-Run Board.");
assert(index.includes("id=\"source-receipts\""), "index.html is missing the Source Receipt Vault.");
assert(index.includes("id=\"claim-surface-map\""), "index.html is missing the Claim Surface Map.");
assert(index.includes("id=\"surface-release-queue\""), "index.html is missing the Surface Release Queue.");
assert(index.includes("id=\"reviewer-workbench\""), "index.html is missing the Reviewer Workbench.");
assert(index.includes("id=\"reviewer-decision-ledger\""), "index.html is missing the Reviewer Decision Ledger.");
assert(index.includes("id=\"reviewer-release-binder\""), "index.html is missing the Reviewer Release Binder.");
assert(index.includes("id=\"backend-audit-receipts\""), "index.html is missing the Backend Audit Receipts workspace.");
assert(index.includes("id=\"source-qa\""), "index.html is missing the Source QA Queue.");
assert(index.includes("id=\"source-intake\""), "index.html is missing the Source Intake Console.");
assert(index.includes("id=\"source-drift\""), "index.html is missing the Source Drift Monitor.");
assert(index.includes("id=\"claim-release\""), "index.html is missing the Claim Release Gate.");
assert(index.includes("id=\"claim-ledger\""), "index.html is missing the Claim Release Ledger.");
assert(index.includes("id=\"claim-rollback\""), "index.html is missing the Claim Rollback Console.");
assert(index.includes("id=\"correction-notice\""), "index.html is missing the Correction Notice Builder.");
assert(index.includes("id=\"correction-ledger\""), "index.html is missing the Correction Notice Ledger.");
assert(index.includes("id=\"trust-center\""), "index.html is missing the Nadi Trust Center.");
assert(index.includes("id=\"action-planner\""), "index.html is missing the Nadi Action Planner.");
assert(index.includes("id=\"doc-decoder\""), "index.html is missing the Nadi Doc Decoder.");
assert(index.includes("id=\"glossary\""), "index.html is missing the Retail Glossary.");
assert(index.includes("id=\"behavior-guard\""), "index.html is missing the Behavior Guard.");
assert(index.includes("id=\"claim-checker\""), "index.html is missing the Claim Checker.");
assert(index.includes("id=\"research-receipt\""), "index.html is missing the Research Receipt.");
assert(index.includes("id=\"receipt-vault\""), "index.html is missing the Receipt Vault.");
assert(index.includes("id=\"review-rhythm\""), "index.html is missing the Review Rhythm Board.");
assert(index.includes("id=\"watchlist\""), "index.html is missing the Watchlist and Alerts Room.");
assert(index.includes("id=\"decision-pack\""), "index.html is missing the Nadi Decision Pack.");
assert(index.includes("id=\"pricing\""), "index.html is missing the Pricing section.");
assert(index.includes("id=\"journal\""), "index.html is missing Decision Journal.");
assert(index.includes("id=\"workspaceJump\""), "index.html is missing the Workspace Navigator.");
assert(index.includes("id=\"workspaceStatus\""), "index.html is missing the Workspace Command status.");
assert(index.includes("nav-mode-strip"), "index.html is missing the Smart Navigation phase rail.");
assert(index.includes("id=\"nadiSignalStrip\""), "index.html is missing the Nadi Signal Strip.");
assert(index.includes("id=\"build-tracker\""), "index.html is missing the Nadi Build Tracker.");
assert(index.includes("id=\"launch-readiness\""), "index.html is missing the Nadi Launch Readiness Board.");
assert(index.includes("id=\"payment-readiness\""), "index.html is missing the Nadi Payment Readiness Lab.");
assert(index.includes("id=\"payment-wiring\""), "index.html is missing the Nadi Payment Wiring Console.");
assert(index.includes("id=\"payment-sandbox\""), "index.html is missing the Nadi Payment Gateway Sandbox Route.");
assert(index.includes("id=\"entitlement-bridge\""), "index.html is missing the Nadi Entitlement Bridge.");
assert(index.includes("id=\"subscription-ops\""), "index.html is missing the Nadi Subscription Ops Console.");
assert(index.includes("id=\"subscription-backend\""), "index.html is missing the Nadi Subscription Backend Blueprint.");
assert(index.includes("id=\"account-readiness\""), "index.html is missing the Nadi Account Readiness Lab.");
assert(index.includes("id=\"account-launch-route\""), "index.html is missing the Nadi Retail Account Launch Route.");
assert(index.includes("id=\"account-launch\""), "index.html is missing the Nadi Account Launch Shell.");
assert(index.includes("id=\"account-vault\""), "index.html is missing the Nadi Account Vault Blueprint.");
assert(index.includes("id=\"daily-brief\""), "index.html is missing the Nadi Daily Command Brief.");
assert(index.includes("id=\"decision-radar\""), "index.html is missing the Nadi Research Decision Radar.");
assert(index.includes("id=\"question-stack\""), "index.html is missing the Nadi Research Question Stack.");
assert(index.includes("id=\"answer-sheet\""), "index.html is missing the Nadi Research Answer Sheet.");
assert(index.includes("id=\"conviction-ladder\""), "index.html is missing the Nadi Research Conviction Ladder.");
assert(index.includes("id=\"selection-funnel\""), "index.html is missing the Nadi Fund Selection Funnel.");
assert(index.includes("id=\"shortlist-board\""), "index.html is missing the Nadi Shortlist Reason Board.");
assert(index.includes("id=\"proof-gap-queue\""), "index.html is missing the Nadi Proof Gap Queue.");
assert(index.includes("id=\"memo-clearance\""), "index.html is missing the Nadi Memo Clearance Desk.");
assert(index.includes("id=\"clearance-sprint\""), "index.html is missing the Nadi Clearance Sprint Board.");
assert(index.includes("id=\"profile-room\""), "index.html is missing the Nadi Investor Profile Room.");
assert(index.includes("id=\"journey-timeline\""), "index.html is missing the Nadi Journey Timeline.");
assert(index.includes("id=\"research-briefing\""), "index.html is missing the Nadi Research Briefing.");
assert(index.includes("id=\"briefing-vault\""), "index.html is missing the Nadi Briefing Vault.");
assert(index.includes("id=\"research-memory\""), "index.html is missing the Nadi Research Memory.");
assert(index.includes("id=\"privacy-control\""), "index.html is missing the Nadi Privacy Control Room.");
assert(index.includes("id=\"share-safe\""), "index.html is missing the Nadi Share-Safe Export Room.");
assert(index.includes("id=\"consent-gate\""), "index.html is missing the Nadi Consent Handoff Gate.");
assert(index.includes("floating-dock"), "index.html is missing the floating action dock.");
assert(index.includes("floatingSearchToggle") && index.includes("floatingSearchInput"), "index.html is missing floating search controls.");
assert(index.includes("scrollTopButton"), "index.html is missing the back-to-top button.");
assert(!/\son[a-z]+\s*=/i.test(index), "index.html contains an inline event handler.");

assert(app.includes("const DATA_VERSION"), "app.js is missing DATA_VERSION.");
assert(app.includes("Nadi Large Cap Core Fund"), "app.js is missing demo fund data.");
assert(app.includes("function whyFundLens") && app.includes("function makeWhyFundNote"), "app.js is missing Why This Fund Lens behavior.");
assert(app.includes("function renderSignalStrip") && app.includes("function makeSignalStripNote"), "app.js is missing Nadi Signal Strip behavior.");
assert(app.includes("function renderBuildTracker") && app.includes("function makeBuildTrackerBrief"), "app.js is missing Nadi Build Tracker behavior.");
assert(app.includes("BUILD_TRACKER_CURRENT_SPRINT") && app.includes("launchReadiness") && app.includes("distributorPreview"), "app.js is missing V78 executive Build Tracker behavior.");
assert(app.includes("function renderLaunchReadinessBoard") && app.includes("function makeLaunchReadinessBrief") && app.includes("LAUNCH_READINESS_GATES"), "app.js is missing Launch Readiness Board behavior.");
assert(app.includes("function renderPaymentReadinessLab") && app.includes("function makePaymentReadinessBrief") && app.includes("PAYMENT_READINESS_STEPS"), "app.js is missing Payment Readiness Lab behavior.");
assert(app.includes("function renderPaymentWiringConsole") && app.includes("function makePaymentWiringBrief") && app.includes("PAYMENT_WIRING_STATES"), "app.js is missing Payment Wiring Console behavior.");
assert(app.includes("function renderPaymentGatewaySandbox") && app.includes("function makePaymentSandboxBrief") && app.includes("PAYMENT_SANDBOX_TESTS"), "app.js is missing Payment Gateway Sandbox behavior.");
assert(app.includes("function renderEntitlementBridge") && app.includes("function makeEntitlementBridgeBrief") && app.includes("ENTITLEMENT_BRIDGE_STATES"), "app.js is missing Entitlement Bridge behavior.");
assert(app.includes("function renderSubscriptionOpsConsole") && app.includes("function makeSubscriptionOpsBrief") && app.includes("SUBSCRIPTION_OPS_STATES"), "app.js is missing Subscription Ops Console behavior.");
assert(app.includes("function renderSubscriptionBackendBlueprint") && app.includes("function makeSubscriptionBackendBrief") && app.includes("SUBSCRIPTION_BACKEND_CONTRACTS"), "app.js is missing Subscription Backend Blueprint behavior.");
assert(app.includes("function renderAccountReadinessLab") && app.includes("function makeAccountReadinessBrief") && app.includes("ACCOUNT_READINESS_STEPS"), "app.js is missing Account Readiness Lab behavior.");
assert(app.includes("function renderAccountLaunchRoute") && app.includes("function makeAccountLaunchRouteBrief") && app.includes("ACCOUNT_LAUNCH_ROUTE_GATES"), "app.js is missing Retail Account Launch Route behavior.");
assert(app.includes("function renderAccountLaunchShell") && app.includes("function makeAccountLaunchBrief") && app.includes("ACCOUNT_LAUNCH_STATES"), "app.js is missing Account Launch Shell behavior.");
assert(app.includes("function renderAccountVaultBlueprint") && app.includes("function makeAccountVaultBrief") && app.includes("ACCOUNT_VAULT_COLLECTIONS"), "app.js is missing Account Vault Blueprint behavior.");
assert(app.includes("function renderDailyCommandBrief") && app.includes("function makeDailyCommandBrief"), "app.js is missing Nadi Daily Command Brief behavior.");
assert(app.includes("function renderDecisionRadar") && app.includes("function makeDecisionRadarBrief"), "app.js is missing Nadi Research Decision Radar behavior.");
assert(app.includes("function renderQuestionStack") && app.includes("function makeQuestionStackBrief"), "app.js is missing Nadi Research Question Stack behavior.");
assert(app.includes("function renderAnswerSheet") && app.includes("function makeAnswerSheetBrief"), "app.js is missing Nadi Research Answer Sheet behavior.");
assert(app.includes("function renderConvictionLadder") && app.includes("function makeConvictionLadderBrief"), "app.js is missing Nadi Research Conviction Ladder behavior.");
assert(app.includes("function renderSelectionFunnel") && app.includes("function makeSelectionFunnelBrief"), "app.js is missing Nadi Fund Selection Funnel behavior.");
assert(app.includes("function renderShortlistReasonBoard") && app.includes("function makeShortlistReasonBoardBrief"), "app.js is missing Nadi Shortlist Reason Board behavior.");
assert(app.includes("function renderProofGapQueue") && app.includes("function makeProofGapQueueBrief"), "app.js is missing Nadi Proof Gap Queue behavior.");
assert(app.includes("function renderMemoClearanceDesk") && app.includes("function makeMemoClearanceBrief"), "app.js is missing Nadi Memo Clearance Desk behavior.");
assert(app.includes("function renderClearanceSprintBoard") && app.includes("function makeClearanceSprintBrief"), "app.js is missing Nadi Clearance Sprint Board behavior.");
assert(app.includes("function renderProfileRoom") && app.includes("function makeProfileRoomBrief"), "app.js is missing Nadi Investor Profile Room behavior.");
assert(app.includes("function renderJourneyTimeline") && app.includes("function makeJourneyTimelineBrief"), "app.js is missing Nadi Journey Timeline behavior.");
assert(app.includes("function renderResearchBriefing") && app.includes("function makeResearchBriefingNote"), "app.js is missing Nadi Research Briefing behavior.");
assert(app.includes("function renderBriefingVault") && app.includes("function makeBriefingVaultBrief"), "app.js is missing Nadi Briefing Vault behavior.");
assert(app.includes("function renderResearchMemory") && app.includes("function makeResearchMemoryBrief"), "app.js is missing Nadi Research Memory behavior.");
assert(app.includes("function renderPrivacyControlRoom") && app.includes("function makePrivacyControlReport"), "app.js is missing Nadi Privacy Control Room behavior.");
assert(app.includes("function renderShareSafeExportRoom") && app.includes("function makeShareSafePack"), "app.js is missing Nadi Share-Safe Export Room behavior.");
assert(app.includes("function renderConsentHandoffGate") && app.includes("function makeConsentHandoffBrief"), "app.js is missing Nadi Consent Handoff Gate behavior.");
assert(app.includes("function scoreAnatomyConfig") && app.includes("function makeScoreAnatomyNote"), "app.js is missing Nadi Score Anatomy behavior.");
assert(app.includes("function renderStarterGuide") && app.includes("function makeStarterGuideNote"), "app.js is missing First 5-Minute Start behavior.");
assert(app.includes("function renderInvestorPassport") && app.includes("function makeInvestorPassportNote"), "app.js is missing Retail Investor Passport behavior.");
assert(app.includes("function renderNadiCoach") && app.includes("function makeCoachNote"), "app.js is missing Nadi Coach Q&A behavior.");
assert(app.includes("function renderResearchLanes") && app.includes("function makeResearchLaneNote"), "app.js is missing Research Lanes behavior.");
assert(app.includes("function renderResearchPulse") && app.includes("function makeResearchPulseNote"), "app.js is missing Research Pulse behavior.");
assert(app.includes("function runSip"), "app.js is missing SIP calculation.");
assert(app.includes("function runStp"), "app.js is missing STP calculation.");
assert(app.includes("function renderCategoryPlaybook") && app.includes("function makeCategoryPlaybookNote"), "app.js is missing Category Playbook behavior.");
assert(app.includes("function renderSuitabilityPassport") && app.includes("function makeSuitabilityPassportNote"), "app.js is missing Suitability Passport behavior.");
assert(app.includes("function renderGoalFundFitHeatmap") && app.includes("function makeGoalFundFitNote"), "app.js is missing Goal-Fund Fit Heatmap behavior.");
assert(app.includes("function renderRedFlagRadar") && app.includes("function makeRedFlagNote"), "app.js is missing Red Flag Radar behavior.");
assert(app.includes("function renderSwitchDecisionLab") && app.includes("function makeSwitchDecisionNote"), "app.js is missing Switch Decision Lab behavior.");
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
assert(app.includes("function renderBlueprintLab") && app.includes("function makeBlueprintNote"), "app.js is missing Portfolio Blueprint Lab behavior.");
assert(app.includes("function renderRebalanceGuard") && app.includes("function makeRebalanceNote"), "app.js is missing Rebalance Guard behavior.");
assert(app.includes("function renderPortfolioReviewRoom") && app.includes("function makePortfolioReviewNote"), "app.js is missing Portfolio Review Room behavior.");
assert(app.includes("function renderReviewVault") && app.includes("function makeReviewVaultBrief"), "app.js is missing Review Vault behavior.");
assert(app.includes("function renderInvestorRecordDesk") && app.includes("function makeInvestorRecordBrief"), "app.js is missing Investor Record Desk behavior.");
assert(app.includes("function renderResearchDossier") && app.includes("function makeResearchDossierBrief"), "app.js is missing Research Dossier Builder behavior.");
assert(app.includes("function renderEvidenceLedger") && app.includes("EVIDENCE_SOURCES"), "app.js is missing Evidence Ledger behavior.");
assert(app.includes("function renderCitationBinder") && app.includes("CITATION_SOURCES"), "app.js is missing Citation Binder behavior.");
assert(app.includes("function renderFundHouseLens") && app.includes("function makeFundHouseLensNote"), "app.js is missing Fund House Lens behavior.");
assert(app.includes("function renderDataReadinessRoom") && app.includes("DATA_PIPELINES"), "app.js is missing Data Readiness Room behavior.");
assert(app.includes("function renderLiveDataContractLab") && app.includes("function makeLiveDataContractBrief") && app.includes("LIVE_DATA_CONTRACTS"), "app.js is missing Live Data Contract Lab behavior.");
assert(app.includes("function renderSourceDryRunBoard") && app.includes("function makeSourceDryRunBrief") && app.includes("LIVE_SOURCE_DRY_RUNS"), "app.js is missing Source Dry-Run Board behavior.");
assert(app.includes("function renderSourceReceiptVault") && app.includes("function makeSourceReceiptVaultBrief") && app.includes("niveshnadi-source-receipts"), "app.js is missing Source Receipt Vault behavior.");
assert(app.includes("function renderClaimSurfaceMap") && app.includes("function makeClaimSurfaceMapBrief") && app.includes("CLAIM_SURFACE_MAP"), "app.js is missing Claim Surface Map behavior.");
assert(app.includes("function renderSurfaceReleaseQueue") && app.includes("function makeSurfaceReleaseQueueBrief"), "app.js is missing Surface Release Queue behavior.");
assert(app.includes("function renderReviewerWorkbench") && app.includes("function makeReviewerWorkbenchBrief"), "app.js is missing Reviewer Workbench behavior.");
assert(app.includes("function renderReviewerDecisionLedger") && app.includes("function makeReviewerDecisionLedgerBrief"), "app.js is missing Reviewer Decision Ledger behavior.");
assert(app.includes("function renderReviewerReleaseBinder") && app.includes("function bindReviewerDecisionToClaimReleaseGate") && app.includes("function makeReviewerReleaseBinderBrief"), "app.js is missing Reviewer Release Binder behavior.");
assert(app.includes("function renderBackendAuditReceipts") && app.includes("BACKEND_AUDIT_STREAMS") && app.includes("function makeBackendAuditReceiptBrief"), "app.js is missing Backend Audit Receipts behavior.");
assert(app.includes("function renderSourceQaQueue") && app.includes("function makeSourceQaNote"), "app.js is missing Source QA Queue behavior.");
assert(app.includes("function renderSourceIntakeConsole") && app.includes("function makeSourceIntakeNote"), "app.js is missing Source Intake Console behavior.");
assert(app.includes("function renderSourceDriftMonitor") && app.includes("function makeSourceDriftNote"), "app.js is missing Source Drift Monitor behavior.");
assert(app.includes("function renderClaimReleaseGate") && app.includes("function makeClaimReleaseNote"), "app.js is missing Claim Release Gate behavior.");
assert(app.includes("function renderClaimReleaseLedger") && app.includes("function makeClaimReleaseLedgerBrief"), "app.js is missing Claim Release Ledger behavior.");
assert(app.includes("function renderClaimRollbackConsole") && app.includes("function makeClaimRollbackNote"), "app.js is missing Claim Rollback Console behavior.");
assert(app.includes("function renderCorrectionNoticeBuilder") && app.includes("function makeCorrectionNoticeBrief"), "app.js is missing Correction Notice Builder behavior.");
assert(app.includes("function renderCorrectionNoticeLedger") && app.includes("function makeCorrectionNoticeLedgerBrief"), "app.js is missing Correction Notice Ledger behavior.");
assert(app.includes("function renderTrustCenter") && app.includes("function makeTrustCenterBrief"), "app.js is missing Nadi Trust Center behavior.");
assert(app.includes("function renderActionPlanner") && app.includes("function makeActionPlannerBrief"), "app.js is missing Nadi Action Planner behavior.");
assert(app.includes("function renderDocDecoder") && app.includes("DOC_DECODER_GUIDES"), "app.js is missing Nadi Doc Decoder behavior.");
assert(app.includes("function renderGlossary") && app.includes("GLOSSARY_TERMS"), "app.js is missing Retail Glossary behavior.");
assert(app.includes("function renderBehaviorGuard") && app.includes("BEHAVIOR_TRIGGERS"), "app.js is missing Behavior Guard behavior.");
assert(app.includes("function renderClaimChecker") && app.includes("CLAIM_PATTERNS"), "app.js is missing Claim Checker behavior.");
assert(app.includes("function renderResearchReceipt") && app.includes("function makeResearchReceiptNote"), "app.js is missing Research Receipt behavior.");
assert(app.includes("function renderReceiptVault") && app.includes("function makeReceiptVaultBrief"), "app.js is missing Receipt Vault behavior.");
assert(app.includes("function renderReviewRhythmBoard") && app.includes("function makeReviewRhythmNote"), "app.js is missing Review Rhythm Board behavior.");
assert(app.includes("bindFloatingSearch"), "app.js is missing floating search behavior.");
assert(app.includes("bindWorkspaceJump"), "app.js is missing Workspace Navigator behavior.");
assert(app.includes("bindScrollTopButton"), "app.js is missing scroll-to-top behavior.");
assert(app.includes("localStorage"), "app.js is missing browser-local decision journal storage.");

assert(packageJson.scripts?.["security:audit"] === "node scripts/security-audit.mjs", "package.json is missing security:audit script.");
assert(packageJson.scripts?.check?.includes("security-audit.mjs"), "package.json check script does not run the security audit.");

assert(styles.includes("--mint") && styles.includes("--gold") && styles.includes("--blue"), "styles.css is missing brand color tokens.");
assert(styles.includes("scroll-padding-top") && styles.includes("scroll-margin-top"), "styles.css is missing sticky-header anchor offset rules.");
assert(styles.includes(".workspace-band[id]") && styles.includes("--anchor-offset: 132px"), "styles.css is missing stronger section anchor landing rules.");
assert(styles.includes(".workspace-jump") && styles.includes(".nav-mode-strip") && styles.includes(".nav-stack"), "styles.css is missing Smart Navigation Shell styles.");
assert(styles.includes(".nadi-signal-strip") && styles.includes(".signal-score"), "styles.css is missing Nadi Signal Strip styles.");
assert(styles.includes(".build-tracker-output") && styles.includes(".build-tracker-hero"), "styles.css is missing Nadi Build Tracker styles.");
assert(styles.includes(".build-sprint-strip") && styles.includes(".build-readiness-grid") && styles.includes(".build-phase2-card"), "styles.css is missing V78 executive Build Tracker styles.");
assert(styles.includes(".launch-readiness-output") && styles.includes(".launch-gate-grid") && styles.includes(".launch-ladder-grid"), "styles.css is missing Launch Readiness Board styles.");
assert(styles.includes(".payment-readiness-output") && styles.includes(".payment-step-grid") && styles.includes(".payment-flow-grid"), "styles.css is missing Payment Readiness Lab styles.");
assert(styles.includes(".payment-wiring-output") && styles.includes(".payment-wiring-state-grid") && styles.includes(".payment-wiring-flow-grid"), "styles.css is missing Payment Wiring Console styles.");
assert(styles.includes(".payment-sandbox-output") && styles.includes(".payment-sandbox-test-grid") && styles.includes(".payment-sandbox-flow-grid"), "styles.css is missing Payment Gateway Sandbox styles.");
assert(styles.includes(".entitlement-output") && styles.includes(".entitlement-state-grid") && styles.includes(".entitlement-flow-grid"), "styles.css is missing Entitlement Bridge styles.");
assert(styles.includes(".subscription-ops-output") && styles.includes(".subscription-ops-state-grid") && styles.includes(".subscription-ops-flow-grid"), "styles.css is missing Subscription Ops Console styles.");
assert(styles.includes(".subscription-backend-output") && styles.includes(".subscription-backend-contract-grid") && styles.includes(".subscription-backend-flow-grid"), "styles.css is missing Subscription Backend Blueprint styles.");
assert(styles.includes(".account-readiness-output") && styles.includes(".account-step-grid") && styles.includes(".account-flow-grid"), "styles.css is missing Account Readiness Lab styles.");
assert(styles.includes(".account-route-output") && styles.includes(".account-route-gate-grid") && styles.includes(".account-route-map-grid"), "styles.css is missing Retail Account Launch Route styles.");
assert(styles.includes(".account-launch-output") && styles.includes(".account-launch-state-grid") && styles.includes(".account-launch-flow-grid"), "styles.css is missing Account Launch Shell styles.");
assert(styles.includes(".account-vault-output") && styles.includes(".account-vault-collection-grid") && styles.includes(".account-vault-flow-grid"), "styles.css is missing Account Vault Blueprint styles.");
assert(styles.includes(".daily-command-output") && styles.includes(".daily-command-hero"), "styles.css is missing Nadi Daily Command Brief styles.");
assert(styles.includes(".decision-radar-output") && styles.includes(".decision-radar-hero"), "styles.css is missing Nadi Research Decision Radar styles.");
assert(styles.includes(".question-stack-output") && styles.includes(".question-stack-hero"), "styles.css is missing Nadi Research Question Stack styles.");
assert(styles.includes(".answer-sheet-output") && styles.includes(".answer-sheet-hero"), "styles.css is missing Nadi Research Answer Sheet styles.");
assert(styles.includes(".conviction-ladder-output") && styles.includes(".conviction-ladder-hero"), "styles.css is missing Nadi Research Conviction Ladder styles.");
assert(styles.includes(".selection-funnel-output") && styles.includes(".selection-funnel-hero"), "styles.css is missing Nadi Fund Selection Funnel styles.");
assert(styles.includes(".shortlist-board-output") && styles.includes(".shortlist-board-hero"), "styles.css is missing Nadi Shortlist Reason Board styles.");
assert(styles.includes(".proof-gap-output") && styles.includes(".proof-gap-hero"), "styles.css is missing Nadi Proof Gap Queue styles.");
assert(styles.includes(".memo-clearance-output") && styles.includes(".memo-clearance-hero"), "styles.css is missing Nadi Memo Clearance Desk styles.");
assert(styles.includes(".clearance-sprint-output") && styles.includes(".clearance-sprint-hero"), "styles.css is missing Nadi Clearance Sprint Board styles.");
assert(styles.includes(".profile-room-grid") && styles.includes(".profile-room-hero"), "styles.css is missing Nadi Investor Profile Room styles.");
assert(styles.includes(".journey-timeline-rail") && styles.includes(".journey-timeline-hero"), "styles.css is missing Nadi Journey Timeline styles.");
assert(styles.includes(".briefing-layout") && styles.includes(".briefing-card"), "styles.css is missing Nadi Research Briefing styles.");
assert(styles.includes(".briefing-vault-output") && styles.includes(".briefing-vault-card"), "styles.css is missing Nadi Briefing Vault styles.");
assert(styles.includes(".research-memory-output") && styles.includes(".research-memory-event"), "styles.css is missing Nadi Research Memory styles.");
assert(styles.includes(".privacy-control-output") && styles.includes(".privacy-store-card"), "styles.css is missing Nadi Privacy Control Room styles.");
assert(styles.includes(".share-safe-output") && styles.includes(".share-safe-card"), "styles.css is missing Nadi Share-Safe Export Room styles.");
assert(styles.includes(".consent-gate-output") && styles.includes(".consent-gate-card"), "styles.css is missing Nadi Consent Handoff Gate styles.");
assert(styles.includes(".why-lens-hero") && styles.includes(".why-card-grid"), "styles.css is missing Why This Fund Lens styles.");
assert(styles.includes(".score-anatomy") && styles.includes(".score-part-grid"), "styles.css is missing Nadi Score Anatomy styles.");
assert(styles.includes(".starter-grid") && styles.includes(".starter-step-grid"), "styles.css is missing First 5-Minute Start styles.");
assert(styles.includes(".investor-passport-grid") && styles.includes(".investor-passport-hero"), "styles.css is missing Retail Investor Passport styles.");
assert(styles.includes(".coach-grid") && styles.includes(".coach-hero"), "styles.css is missing Nadi Coach Q&A styles.");
assert(styles.includes(".lane-grid") && styles.includes(".lane-step-grid"), "styles.css is missing Research Lanes styles.");
assert(styles.includes(".pulse-panel") && styles.includes(".pulse-action-grid"), "styles.css is missing Research Pulse styles.");
assert(styles.includes(".floating-dock") && styles.includes(".floating-search") && styles.includes(".scroll-top-button"), "styles.css is missing floating control styles.");
assert(styles.includes(".playbook-grid") && styles.includes(".playbook-hero"), "styles.css is missing Category Playbook styles.");
assert(styles.includes(".passport-grid") && styles.includes(".passport-hero"), "styles.css is missing Suitability Passport styles.");
assert(styles.includes(".fit-map-output") && styles.includes(".fit-map-hero"), "styles.css is missing Goal-Fund Fit Heatmap styles.");
assert(styles.includes(".red-flag-output") && styles.includes(".red-flag-hero"), "styles.css is missing Red Flag Radar styles.");
assert(styles.includes(".switch-output") && styles.includes(".switch-hero"), "styles.css is missing Switch Decision Lab styles.");
assert(styles.includes(".peer-output") && styles.includes(".peer-hero"), "styles.css is missing Peer Benchmark Board styles.");
assert(styles.includes(".compare-output") && styles.includes(".compare-card"), "styles.css is missing Fund Compare Matrix styles.");
assert(styles.includes(".stress-grid") && styles.includes(".stress-hero"), "styles.css is missing Risk Stress Lab styles.");
assert(styles.includes(".cost-grid") && styles.includes(".cost-hero"), "styles.css is missing Cost Reality Lab styles.");
assert(styles.includes(".readiness-grid") && styles.includes(".readiness-hero"), "styles.css is missing Investor Readiness Gate styles.");
assert(styles.includes(".journey-grid") && styles.includes(".journey-output"), "styles.css is missing First SIP Coach styles.");
assert(styles.includes(".watch-grid") && styles.includes(".watch-card"), "styles.css is missing Watchlist and Alerts styles.");
assert(styles.includes(".pack-grid") && styles.includes(".pack-card"), "styles.css is missing Nadi Decision Pack styles.");
assert(styles.includes(".xray-thesis") && styles.includes(".role-list"), "styles.css is missing Portfolio Intelligence styles.");
assert(styles.includes(".blueprint-grid") && styles.includes(".blueprint-hero"), "styles.css is missing Portfolio Blueprint Lab styles.");
assert(styles.includes(".rebalance-grid") && styles.includes(".rebalance-hero"), "styles.css is missing Rebalance Guard styles.");
assert(styles.includes(".review-room-grid") && styles.includes(".review-room-hero"), "styles.css is missing Portfolio Review Room styles.");
assert(styles.includes(".review-vault-output") && styles.includes(".review-vault-card"), "styles.css is missing Review Vault styles.");
assert(styles.includes(".investor-record-output") && styles.includes(".investor-record-card"), "styles.css is missing Investor Record Desk styles.");
assert(styles.includes(".dossier-output") && styles.includes(".dossier-card"), "styles.css is missing Research Dossier Builder styles.");
assert(styles.includes(".evidence-grid") && styles.includes(".source-card"), "styles.css is missing Evidence Ledger styles.");
assert(styles.includes(".citation-layout") && styles.includes(".citation-hero"), "styles.css is missing Citation Binder styles.");
assert(styles.includes(".house-output") && styles.includes(".house-hero"), "styles.css is missing Fund House Lens styles.");
assert(styles.includes(".data-grid") && styles.includes(".data-hero"), "styles.css is missing Data Readiness Room styles.");
assert(styles.includes(".live-contract-output") && styles.includes(".live-contract-grid") && styles.includes(".live-contract-flow-grid"), "styles.css is missing Live Data Contract Lab styles.");
assert(styles.includes(".source-dry-output") && styles.includes(".source-dry-card-grid") && styles.includes(".source-dry-flow-grid"), "styles.css is missing Source Dry-Run Board styles.");
assert(styles.includes(".source-receipt-output") && styles.includes(".source-receipt-grid") && styles.includes(".source-receipt-panel-grid"), "styles.css is missing Source Receipt Vault styles.");
assert(styles.includes(".claim-surface-output") && styles.includes(".claim-surface-grid") && styles.includes(".claim-surface-flow-grid"), "styles.css is missing Claim Surface Map styles.");
assert(styles.includes(".surface-queue-output") && styles.includes(".surface-queue-grid") && styles.includes(".surface-queue-flow-grid"), "styles.css is missing Surface Release Queue styles.");
assert(styles.includes(".reviewer-workbench-output") && styles.includes(".reviewer-workbench-grid"), "styles.css is missing Reviewer Workbench styles.");
assert(styles.includes(".reviewer-decision-output") && styles.includes(".reviewer-decision-card"), "styles.css is missing Reviewer Decision Ledger styles.");
assert(styles.includes(".reviewer-release-output") && styles.includes(".reviewer-release-card"), "styles.css is missing Reviewer Release Binder styles.");
assert(styles.includes(".backend-audit-output") && styles.includes(".backend-audit-card"), "styles.css is missing Backend Audit Receipts styles.");
assert(styles.includes(".source-queue-layout") && styles.includes(".source-queue-card"), "styles.css is missing Source QA Queue styles.");
assert(styles.includes(".source-intake-layout") && styles.includes(".source-intake-card"), "styles.css is missing Source Intake Console styles.");
assert(styles.includes(".source-drift-layout") && styles.includes(".source-drift-card"), "styles.css is missing Source Drift Monitor styles.");
assert(styles.includes(".claim-release-layout") && styles.includes(".claim-release-card"), "styles.css is missing Claim Release Gate styles.");
assert(styles.includes(".claim-ledger-output") && styles.includes(".claim-ledger-card"), "styles.css is missing Claim Release Ledger styles.");
assert(styles.includes(".claim-rollback-layout") && styles.includes(".claim-rollback-card"), "styles.css is missing Claim Rollback Console styles.");
assert(styles.includes(".correction-notice-layout") && styles.includes(".correction-notice-card"), "styles.css is missing Correction Notice Builder styles.");
assert(styles.includes(".correction-ledger-output") && styles.includes(".correction-ledger-card"), "styles.css is missing Correction Notice Ledger styles.");
assert(styles.includes(".trust-center-layout") && styles.includes(".trust-center-card"), "styles.css is missing Nadi Trust Center styles.");
assert(styles.includes(".action-planner-layout") && styles.includes(".action-planner-card"), "styles.css is missing Nadi Action Planner styles.");
assert(styles.includes(".doc-grid") && styles.includes(".doc-hero"), "styles.css is missing Nadi Doc Decoder styles.");
assert(styles.includes(".glossary-grid") && styles.includes(".glossary-term-card"), "styles.css is missing Retail Glossary styles.");
assert(styles.includes(".behavior-layout") && styles.includes(".behavior-hero"), "styles.css is missing Behavior Guard styles.");
assert(styles.includes(".claim-layout") && styles.includes(".claim-hero"), "styles.css is missing Claim Checker styles.");
assert(styles.includes(".receipt-layout") && styles.includes(".receipt-hero"), "styles.css is missing Research Receipt styles.");
assert(styles.includes(".receipt-vault-output") && styles.includes(".receipt-vault-card"), "styles.css is missing Receipt Vault styles.");
assert(styles.includes(".rhythm-grid") && styles.includes(".rhythm-hero"), "styles.css is missing Review Rhythm Board styles.");
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
  "docs/FUND_HOUSE_LENS.md",
  "docs/DOC_DECODER.md",
  "docs/RETAIL_GLOSSARY.md",
  "docs/BEHAVIOR_GUARD.md",
  "docs/CLAIM_CHECKER.md",
  "docs/RESEARCH_RECEIPT.md",
  "docs/RECEIPT_VAULT.md",
  "docs/PORTFOLIO_BLUEPRINT_LAB.md",
  "docs/REBALANCE_GUARD.md",
  "docs/PORTFOLIO_REVIEW_ROOM.md",
  "docs/REVIEW_VAULT.md",
  "docs/INVESTOR_REVIEW_RECORD.md",
  "docs/RESEARCH_DOSSIER.md",
  "docs/CITATION_BINDER.md",
  "docs/SOURCE_QA_QUEUE.md",
  "docs/SOURCE_INTAKE_CONSOLE.md",
  "docs/SOURCE_DRIFT_MONITOR.md",
  "docs/CLAIM_RELEASE_GATE.md",
  "docs/CLAIM_RELEASE_LEDGER.md",
  "docs/CLAIM_ROLLBACK_CONSOLE.md",
  "docs/CORRECTION_NOTICE_BUILDER.md",
  "docs/CORRECTION_NOTICE_LEDGER.md",
  "docs/TRUST_CENTER.md",
  "docs/ACTION_PLANNER.md",
  "docs/RESEARCH_BRIEFING.md",
  "docs/BRIEFING_VAULT.md",
  "docs/RESEARCH_MEMORY.md",
  "docs/PRIVACY_CONTROL_ROOM.md",
  "docs/SHARE_SAFE_EXPORT_ROOM.md",
  "docs/CONSENT_HANDOFF_GATE.md",
  "docs/INVESTOR_PROFILE_ROOM.md",
  "docs/JOURNEY_TIMELINE.md",
  "docs/FIRST_5_MINUTE_START.md",
  "docs/WHY_THIS_FUND_LENS.md",
  "docs/NADI_SIGNAL_STRIP.md",
  "docs/BUILD_TRACKER.md",
  "docs/LAUNCH_READINESS_BOARD.md",
  "docs/PAYMENT_READINESS_LAB.md",
  "docs/PAYMENT_WIRING_CONSOLE.md",
  "docs/PAYMENT_GATEWAY_SANDBOX.md",
  "docs/ENTITLEMENT_BRIDGE.md",
  "docs/SUBSCRIPTION_OPS_CONSOLE.md",
  "docs/SUBSCRIPTION_BACKEND_BLUEPRINT.md",
  "docs/ACCOUNT_READINESS_LAB.md",
  "docs/RETAIL_ACCOUNT_LAUNCH_ROUTE.md",
  "docs/ACCOUNT_LAUNCH_SHELL.md",
  "docs/ACCOUNT_VAULT_BLUEPRINT.md",
  "docs/DAILY_COMMAND_BRIEF.md",
  "docs/DECISION_RADAR.md",
  "docs/RESEARCH_QUESTION_STACK.md",
  "docs/RESEARCH_ANSWER_SHEET.md",
  "docs/RESEARCH_CONVICTION_LADDER.md",
  "docs/FUND_SELECTION_FUNNEL.md",
  "docs/SHORTLIST_REASON_BOARD.md",
  "docs/PROOF_GAP_QUEUE.md",
  "docs/MEMO_CLEARANCE_DESK.md",
  "docs/CLEARANCE_SPRINT_BOARD.md",
  "docs/NADI_SCORE_ANATOMY.md",
  "docs/INVESTOR_PASSPORT.md",
  "docs/NADI_COACH_QA.md",
  "docs/RESEARCH_LANES.md",
  "docs/RESEARCH_PULSE.md",
  "docs/WORKSPACE_NAVIGATOR.md",
  "docs/NAVIGATION_SHELL.md",
  "docs/FUND_COMPARE_MATRIX.md",
  "docs/GOAL_FUND_FIT_HEATMAP.md",
  "docs/SUITABILITY_PASSPORT.md",
  "docs/RED_FLAG_RADAR.md",
  "docs/SWITCH_DECISION_LAB.md",
  "docs/REVIEW_RHYTHM_BOARD.md",
  "docs/INVESTOR_READINESS_GATE.md",
  "docs/CATEGORY_PLAYBOOK.md",
  "docs/PEER_BENCHMARK_BOARD.md",
  "docs/JOURNEY_COACH.md",
  "docs/LIVE_DATA_READINESS.md",
  "docs/LIVE_DATA_CONTRACT_LAB.md",
  "docs/SOURCE_DRY_RUN_BOARD.md",
  "docs/SOURCE_RECEIPT_VAULT.md",
  "docs/CLAIM_SURFACE_MAP.md",
  "docs/SURFACE_RELEASE_QUEUE.md",
  "docs/REVIEWER_WORKBENCH.md",
  "docs/REVIEWER_DECISION_LEDGER.md",
  "docs/REVIEWER_RELEASE_BINDER.md",
  "docs/BACKEND_AUDIT_RECEIPTS.md",
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
