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
const changelog = read("CHANGELOG.md");
const packageJson = JSON.parse(read("package.json"));
const releaseLabel = app.match(/const RELEASE_LABEL = "([^"]+)";/)?.[1] || "";
const dataVersion = app.match(/const DATA_VERSION = "([^"]+)";/)?.[1] || "";

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
assert(index.includes("id=\"market-strategy\""), "index.html is missing the Market Strategy Room.");
assert(index.includes("id=\"paid-beta-pack\""), "index.html is missing the Paid Beta Evidence Pack.");
assert(index.includes("id=\"founder-invite-path\""), "index.html is missing the Founder Invite Proof Path.");
assert(index.includes("id=\"founder-cohort-control\""), "index.html is missing the Founder Cohort Control Room.");
assert(index.includes("id=\"cohort-receipt-backend\""), "index.html is missing the Cohort Receipt Backend.");
assert(index.includes("id=\"cohort-decision-replay\""), "index.html is missing the Cohort Decision Replay.");
assert(index.includes("id=\"paid-cohort-expansion-gate\""), "index.html is missing the Paid Cohort Expansion Gate.");
assert(index.includes("id=\"founder-beta-operating-room\""), "index.html is missing the Founder Beta Operating Room.");
assert(index.includes("id=\"paid-beta-support-ledger\""), "index.html is missing the Paid Beta Support Ledger.");
assert(index.includes("id=\"journal\""), "index.html is missing Decision Journal.");
assert(index.includes("id=\"workspaceJump\""), "index.html is missing the Workspace Navigator.");
assert(index.includes("id=\"workspaceStatus\""), "index.html is missing the Workspace Command status.");
assert(index.includes("id=\"toolPaletteToggle\"") && index.includes("id=\"toolPaletteSearch\"") && index.includes("id=\"toolPaletteResults\""), "index.html is missing the Tool Command Palette.");
assert(index.includes("id=\"simpleModeToggle\"") && index.includes("id=\"simplicityPath\""), "index.html is missing the Simple View controls.");
assert(index.includes("nav-mode-strip"), "index.html is missing the Smart Navigation phase rail.");
assert(index.includes("id=\"nadiSignalStrip\""), "index.html is missing the Nadi Signal Strip.");
assert(index.includes("id=\"build-tracker\""), "index.html is missing the Nadi Build Tracker.");
assert(index.includes("id=\"build-phases\""), "index.html is missing the Nadi Build Phases Room.");
assert(index.includes("id=\"launch-readiness\""), "index.html is missing the Nadi Launch Readiness Board.");
assert(index.includes("id=\"payment-readiness\""), "index.html is missing the Nadi Payment Readiness Lab.");
assert(index.includes("id=\"payment-wiring\""), "index.html is missing the Nadi Payment Wiring Console.");
assert(index.includes("id=\"payment-sandbox\""), "index.html is missing the Nadi Payment Gateway Sandbox Route.");
assert(index.includes("id=\"gateway-webhook-drill\""), "index.html is missing the Nadi Gateway Decision and Webhook Drill.");
assert(index.includes("id=\"provider-pilot-receipt\""), "index.html is missing the Nadi Payment Provider Pilot Receipt Contract.");
assert(index.includes("id=\"pilot-receipt-vault\""), "index.html is missing the Nadi Pilot Receipt Vault.");
assert(index.includes("id=\"paid-pilot-launch-gate\""), "index.html is missing the Nadi Paid Pilot Launch Gate.");
assert(index.includes("id=\"backend-ticket-factory\""), "index.html is missing the Nadi Backend Ticket Factory.");
assert(index.includes("id=\"receipt-replay-engine\""), "index.html is missing the Nadi Receipt Replay Engine.");
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
assert(index.includes("id=\"fundGenome\""), "index.html is missing the Nadi Fund Genome.");
assert(index.includes("id=\"futureShockMap\""), "index.html is missing the Nadi Future Shock Map.");
assert(index.includes("id=\"memoryCapsule\""), "index.html is missing the Nadi Memory Capsule.");
assert(index.includes("id=\"researchAutopilot\""), "index.html is missing the Nadi Research Autopilot.");
assert(index.includes("floating-dock"), "index.html is missing the floating action dock.");
assert(index.includes("floatingSearchToggle") && index.includes("floatingSearchInput"), "index.html is missing floating search controls.");
assert(index.includes("scrollTopButton"), "index.html is missing the back-to-top button.");
assert(!/\son[a-z]+\s*=/i.test(index), "index.html contains an inline event handler.");

assert(app.includes("const DATA_VERSION"), "app.js is missing DATA_VERSION.");
assert(Boolean(releaseLabel), "app.js is missing a parseable RELEASE_LABEL.");
assert(Boolean(dataVersion), "app.js is missing a parseable DATA_VERSION.");
assert(index.includes(releaseLabel), "index.html is missing the current release label.");
assert(index.includes(dataVersion), "index.html is missing the current data version.");
assert(changelog.includes(releaseLabel), "CHANGELOG.md is missing the current release label.");
assert(changelog.includes(dataVersion), "CHANGELOG.md is missing the current data version.");
assert(changelog.includes("Files changed"), "CHANGELOG.md entries must record files changed.");
assert(changelog.includes("Checks run"), "CHANGELOG.md entries must record checks run.");
assert(changelog.includes("Known risks"), "CHANGELOG.md entries must record known risks.");
assert(app.includes("Nadi Large Cap Core Fund"), "app.js is missing demo fund data.");
assert(app.includes("function whyFundLens") && app.includes("function makeWhyFundNote"), "app.js is missing Why This Fund Lens behavior.");
assert(app.includes("function renderSignalStrip") && app.includes("function makeSignalStripNote"), "app.js is missing Nadi Signal Strip behavior.");
assert(app.includes("function renderResearchAutopilot") && app.includes("function makeResearchAutopilotNote") && app.includes("function makeLiveDataGateNote") && app.includes("function makeClaimPassportNote") && app.includes("function makePassportShareSealNote") && app.includes("function makeMitraRecoveryShieldNote") && app.includes("function evaluateRecoveryLinkFirewall") && app.includes("function buildRecoveryRouteReceipt") && app.includes("function renderMitraRouteReceipt") && app.includes("function buildMitraScamImmunityDrill") && app.includes("function renderMitraScamDrill") && app.includes("function buildMitraFamilySafeShare") && app.includes("function renderMitraFamilySafeShare") && app.includes("function buildMitraOfficialRouteDirectory") && app.includes("function renderMitraOfficialRouteDirectory") && app.includes("function buildMitraInvestorSourceCheck") && app.includes("function renderMitraInvestorSourceCheck") && app.includes("function buildMitraSourceHandshake") && app.includes("function renderMitraSourceHandshake") && app.includes("function buildMitraSafeReleaseVerdict") && app.includes("function renderMitraSafeReleaseVerdict") && app.includes("function buildMitraSafetyStackTimeline") && app.includes("function renderMitraSafetyStackTimeline") && app.includes("function buildMitraSafetyActionRouter") && app.includes("function renderMitraSafetyActionRouter") && app.includes("function buildMitraRecoveryActionReceipt") && app.includes("function renderMitraRecoveryActionReceipt") && app.includes("function buildMitraRecoveryFollowUpRoom") && app.includes("function renderMitraRecoveryFollowUpRoom") && app.includes("function buildMitraRecoveryReminderCard") && app.includes("function renderMitraRecoveryReminderCard") && app.includes("function buildMitraRecoveryRecheckTrail") && app.includes("function renderMitraRecoveryRecheckTrail") && app.includes("function buildMitraRecoveryOutcomeLedger") && app.includes("function renderMitraRecoveryOutcomeLedger") && app.includes("function makeMitraFirewallNote") && app.includes("function makeMitraRouteReceiptNote") && app.includes("function makeMitraScamDrillNote") && app.includes("function makeMitraFamilySafeShareNote") && app.includes("function makeMitraOfficialRouteDirectoryNote") && app.includes("function makeMitraInvestorSourceCheckNote") && app.includes("function makeMitraSourceHandshakeNote") && app.includes("function makeMitraSafeReleaseVerdictNote") && app.includes("function makeMitraSafetyStackTimelineNote") && app.includes("function makeMitraSafetyActionRouterNote") && app.includes("function makeMitraRecoveryActionReceiptNote") && app.includes("function makeMitraRecoveryFollowUpRoomNote") && app.includes("function makeMitraRecoveryReminderCardNote") && app.includes("function makeMitraRecoveryRecheckTrailNote") && app.includes("function makeMitraRecoveryOutcomeLedgerNote") && app.includes("function makeAutopilotMissionReceipt") && app.includes("function makeAutopilotMissionClockNote") && app.includes("function makeAutopilotCommandCard") && app.includes("function makeNadiProofGraphNote") && app.includes("function makeNoBuyGateNote") && app.includes("function makeFomoFirewallNote") && app.includes("function makeDissentEngineNote") && app.includes("researchAutopilotConfig") && app.includes("function rememberAutopilotRoute") && app.includes("AUTOPILOT_ROUTE_MEMORY_KEY") && app.includes("autopilotMissionPlan") && app.includes("copyLiveDataGate") && app.includes("copyClaimPassport") && app.includes("copyPassportShareSeal") && app.includes("copyMitraRecoveryShield") && app.includes("copyMitraFirewall") && app.includes("copyMitraRouteReceipt") && app.includes("copyMitraScamDrill") && app.includes("copyMitraFamilySafeShare") && app.includes("copyMitraOfficialRouteDirectory") && app.includes("copyMitraInvestorSourceCheck") && app.includes("copyMitraSourceHandshake") && app.includes("copyMitraSafeReleaseVerdict") && app.includes("copyMitraSafetyStackTimeline") && app.includes("copyMitraSafetyActionRouter") && app.includes("copyMitraRecoveryActionReceipt") && app.includes("copyMitraRecoveryFollowUpRoom") && app.includes("copyMitraRecoveryReminderCard") && app.includes("copyMitraRecoveryRecheckTrail") && app.includes("copyMitraRecoveryOutcomeLedger") && app.includes("copyMissionReceipt") && app.includes("copyMissionClock") && app.includes("copyAutopilotCommandCard") && app.includes("copyNadiProofGraph") && app.includes("copyNoBuyGate") && app.includes("copyFomoFirewall") && app.includes("copyDissentEngine"), "app.js is missing Nadi Research Autopilot behavior.");
assert(app.includes("function renderFundGenome") && app.includes("function makeFundGenomeNote"), "app.js is missing Nadi Fund Genome behavior.");
assert(app.includes("function renderFutureShockMap") && app.includes("function makeFutureShockMapNote"), "app.js is missing Nadi Future Shock Map behavior.");
assert(app.includes("function renderMemoryCapsule") && app.includes("function makeMemoryCapsuleNote") && app.includes("function memoryReplayMetric") && app.includes("niveshnadi-memory-capsules"), "app.js is missing Nadi Memory Capsule behavior.");
assert(app.includes("function renderBuildTracker") && app.includes("function makeBuildTrackerBrief"), "app.js is missing Nadi Build Tracker behavior.");
assert(app.includes("function safeAppStep") && app.includes("function recordStartupIssue") && app.includes("render all"), "app.js is missing startup guard rendering.");
assert(app.includes("executiveCalmCompression") && app.includes("release-doctor-compression") && app.includes("function makeCalmExecutiveCompressionBrief") && app.includes("data-copy-calm-executive-compression") && styles.includes(".release-doctor-compression"), "app/styles are missing v486 Calm Executive Workspace Compression.");
assert(app.includes("backendAccountSmokeHarness") && app.includes("function makeBackendAccountSmokeHarnessBrief") && app.includes("data-copy-backend-account-smoke-harness"), "app.js is missing v487 Backend Account Smoke Harness.");
assert(app.includes("supportOperationsIncidentDrill") && app.includes("function makeSupportOperationsIncidentDrillBrief") && app.includes("data-copy-support-operations-incident-drill"), "app.js is missing v488 Support Operations Incident Drill.");
assert(app.includes("visualQaCiAdapter") && app.includes("function makeVisualQaCiAdapterBrief") && app.includes("data-copy-visual-qa-ci-adapter"), "app.js is missing v489 Visual QA CI Adapter.");
assert(app.includes("paymentEntitlementProofCabinet") && app.includes("function makePaymentEntitlementProofCabinetBrief") && app.includes("data-copy-payment-entitlement-proof-cabinet"), "app.js is missing v490 Payment Entitlement Proof Cabinet.");
assert(app.includes("productionDataSourceGate") && app.includes("function makeProductionDataSourceGateBrief") && app.includes("data-copy-production-data-source-gate"), "app.js is missing v491 Production Data Source Gate.");
assert(app.includes("liveBackendApiSkeleton") && app.includes("function makeLiveBackendApiSkeletonBrief") && app.includes("data-copy-live-backend-api-skeleton"), "app.js is missing v492 Live Backend API Skeleton.");
assert(app.includes("accountPersistenceFixtureRunner") && app.includes("function makeAccountPersistenceFixtureRunnerBrief") && app.includes("data-copy-account-persistence-fixture-runner"), "app.js is missing v493 Account Persistence Fixture Runner.");
assert(app.includes("paymentSandboxEventSimulator") && app.includes("function makePaymentSandboxEventSimulatorBrief") && app.includes("data-copy-payment-sandbox-event-simulator"), "app.js is missing v494 Payment Sandbox Event Simulator.");
assert(app.includes("sourceIngestionChecksumRunner") && app.includes("function makeSourceIngestionChecksumRunnerBrief") && app.includes("data-copy-source-ingestion-checksum-runner"), "app.js is missing v495 Source Ingestion Checksum Runner.");
assert(app.includes("founderReleaseAuditRoom") && app.includes("function makeFounderReleaseAuditRoomBrief") && app.includes("data-copy-founder-release-audit-room"), "app.js is missing v496 Founder Release Audit Room.");
assert(app.includes("productionBackendStarterService") && app.includes("function makeProductionBackendStarterServiceBrief") && app.includes("data-copy-production-backend-starter-service"), "app.js is missing v497 Production Backend Starter Service.");
assert(app.includes("sourceFetcherProofWorker") && app.includes("function makeSourceFetcherProofWorkerBrief") && app.includes("data-copy-source-fetcher-proof-worker"), "app.js is missing v498 Source Fetcher Proof Worker.");
assert(app.includes("paymentWebhookVerificationLab") && app.includes("function makePaymentWebhookVerificationLabBrief") && app.includes("data-copy-payment-webhook-verification-lab"), "app.js is missing v499 Payment Webhook Verification Lab.");
assert(app.includes("accountSupportOperationsConsole") && app.includes("function makeAccountSupportOperationsConsoleBrief") && app.includes("data-copy-account-support-operations-console"), "app.js is missing v500 Account Support Operations Console.");
assert(app.includes("liveBetaPilotAudit") && app.includes("function makeLiveBetaPilotAuditBrief") && app.includes("data-copy-live-beta-pilot-audit"), "app.js is missing v501 Live Beta Pilot Audit.");
assert(app.includes("backendRepositoryHandoffPack") && app.includes("function makeBackendRepositoryHandoffPackBrief") && app.includes("data-copy-backend-repository-handoff-pack"), "app.js is missing v502 Backend Repository Handoff Pack.");
assert(app.includes("backendCiProofHarness") && app.includes("function makeBackendCiProofHarnessBrief") && app.includes("data-copy-backend-ci-proof-harness"), "app.js is missing v503 Backend CI Proof Harness.");
assert(app.includes("deploymentEnvironmentReadinessMap") && app.includes("function makeDeploymentEnvironmentReadinessMapBrief") && app.includes("data-copy-deployment-environment-readiness-map"), "app.js is missing v504 Deployment Environment Readiness Map.");
assert(app.includes("dataRetentionExecutionChecklist") && app.includes("function makeDataRetentionExecutionChecklistBrief") && app.includes("data-copy-data-retention-execution-checklist"), "app.js is missing v505 Data Retention Execution Checklist.");
assert(app.includes("pilotInviteCopyApprovalRoom") && app.includes("function makePilotInviteCopyApprovalRoomBrief") && app.includes("data-copy-pilot-invite-copy-approval-room"), "app.js is missing v506 Pilot Invite Copy Approval Room.");
assert(app.includes("pilotSupportDryRunBoard") && app.includes("function makePilotSupportDryRunBoardBrief") && app.includes("data-copy-pilot-support-dry-run-board"), "app.js is missing v507 Pilot Support Dry Run Board.");
assert(app.includes("founderBetaCohortLedger") && app.includes("function makeFounderBetaCohortLedgerBrief") && app.includes("data-copy-founder-beta-cohort-ledger"), "app.js is missing v508 Founder Beta Cohort Ledger.");
assert(app.includes("liveSourceConnectorSpikePlan") && app.includes("function makeLiveSourceConnectorSpikePlanBrief") && app.includes("data-copy-live-source-connector-spike-plan"), "app.js is missing v509 Live Source Connector Spike Plan.");
assert(app.includes("paymentProviderSandboxIntegrationPlan") && app.includes("function makePaymentProviderSandboxIntegrationPlanBrief") && app.includes("data-copy-payment-provider-sandbox-integration-plan"), "app.js is missing v510 Payment Provider Sandbox Integration Plan.");
assert(app.includes("accountAuthProviderDecisionRoom") && app.includes("function makeAccountAuthProviderDecisionRoomBrief") && app.includes("data-copy-account-auth-provider-decision-room"), "app.js is missing v511 Account Auth Provider Decision Room.");
assert(app.includes("pilotSupportSlaEvidenceBinder") && app.includes("function makeReleaseDoctorBatchProofBrief") && app.includes("data-copy-pilot-support-sla-evidence-binder"), "app.js is missing v512 Pilot Support SLA Evidence Binder.");
assert(app.includes("betaEntitlementReplayBoard") && app.includes("data-copy-beta-entitlement-replay-board"), "app.js is missing v513 Beta Entitlement Replay Board.");
assert(app.includes("sourceConnectorFailureReplayBoard") && app.includes("data-copy-source-connector-failure-replay-board"), "app.js is missing v514 Source Connector Failure Replay Board.");
assert(app.includes("paymentObservabilityReceiptBoard") && app.includes("data-copy-payment-observability-receipt-board"), "app.js is missing v515 Payment Observability Receipt Board.");
assert(app.includes("accountRecoverySmokeProofBoard") && app.includes("data-copy-account-recovery-smoke-proof-board"), "app.js is missing v516 Account Recovery Smoke Proof Board.");
assert(app.includes("founderBetaReleaseEvidencePacket") && app.includes("data-copy-founder-beta-release-evidence-packet"), "app.js is missing v517 Founder Beta Release Evidence Packet.");
assert(app.includes("supportEscalationAnalyticsStrip") && app.includes("data-copy-support-escalation-analytics-strip"), "app.js is missing v518 Support Escalation Analytics Strip.");
assert(app.includes("sourceIncidentReleaseNotes") && app.includes("data-copy-source-incident-release-notes"), "app.js is missing v519 Source Incident Release Notes.");
assert(app.includes("paymentIncidentCommandMemo") && app.includes("data-copy-payment-incident-command-memo"), "app.js is missing v520 Payment Incident Command Memo.");
assert(app.includes("sourceCorrectionRenewalReceipt") && app.includes("data-copy-source-correction-renewal-receipt"), "app.js is missing v554 Source Correction Renewal Receipt.");
assert(app.includes("paymentReplayAcceptanceReceipt") && app.includes("data-copy-payment-replay-acceptance-receipt"), "app.js is missing v555 Payment Replay Acceptance Receipt.");
assert(app.includes("accountRetentionDryRunReceiptVault") && app.includes("data-copy-account-retention-dry-run-receipt-vault"), "app.js is missing v556 Account Retention Dry-Run Receipt Vault.");
assert(app.includes("betaCommandRenewalReceipt") && app.includes("data-copy-beta-command-renewal-receipt"), "app.js is missing v557 Beta Command Renewal Receipt.");
assert(app.includes("supportRepairRenewalReceipt") && app.includes("data-copy-support-repair-renewal-receipt"), "app.js is missing v558 Support Repair Renewal Receipt.");
assert(app.includes("sourceCorrectionRenewalAgingGuard") && app.includes("data-copy-source-correction-renewal-aging-guard"), "app.js is missing v559 Source Correction Renewal Aging Guard.");
assert(app.includes("paymentAcceptanceAgingGuard") && app.includes("data-copy-payment-acceptance-aging-guard"), "app.js is missing v560 Payment Acceptance Aging Guard.");
assert(app.includes("accountRetentionDryRunAgingGuard") && app.includes("data-copy-account-retention-dry-run-aging-guard"), "app.js is missing v561 Account Retention Dry-Run Aging Guard.");
assert(app.includes("betaCommandRenewalAgingGuard") && app.includes("data-copy-beta-command-renewal-aging-guard"), "app.js is missing v562 Beta Command Renewal Aging Guard.");
assert(app.includes("supportRepairRenewalAgingGuard") && app.includes("data-copy-support-repair-renewal-aging-guard"), "app.js is missing v563 Support Repair Renewal Aging Guard.");
assert(app.includes("sourceCorrectionRenewalCloseoutReceipt") && app.includes("data-copy-source-correction-renewal-closeout-receipt"), "app.js is missing v564 Source Correction Renewal Closeout Receipt.");
assert(app.includes("paymentAcceptanceCloseoutReceipt") && app.includes("data-copy-payment-acceptance-closeout-receipt"), "app.js is missing v565 Payment Acceptance Closeout Receipt.");
assert(app.includes("accountRetentionDryRunCloseoutReceipt") && app.includes("data-copy-account-retention-dry-run-closeout-receipt"), "app.js is missing v566 Account Retention Dry-Run Closeout Receipt.");
assert(app.includes("betaCommandRenewalCloseoutReceipt") && app.includes("data-copy-beta-command-renewal-closeout-receipt"), "app.js is missing v567 Beta Command Renewal Closeout Receipt.");
assert(app.includes("visualRunnerResultArchive") && app.includes("productionLaunchProofCabinet"), "app.js is missing v484-v485 release doctor proof archives.");
assert(app.includes("function visualRegressionRunnerEnvelopeRows") && !app.includes("resultRows: visualRegressionRunnerContract.runEnvelope"), "app.js has an unsafe visual runner sibling-object reference.");
assert(app.includes("function renderBuildPhasesRoom") && app.includes("function makeBuildPhasesBrief") && app.includes("buildPhaseGridMarkup"), "app.js is missing Nadi Build Phases Room behavior.");
assert(app.includes("function publisherHandoffKit") && app.includes("function makePublisherHandoffBrief") && app.includes("data-copy-publisher-handoff"), "app.js is missing Publisher Handoff Kit behavior.");
assert(app.includes("BUILD_TRACKER_CURRENT_SPRINT") && app.includes("launchReadiness") && app.includes("distributorPreview"), "app.js is missing V78 executive Build Tracker behavior.");
assert(app.includes("function renderMarketStrategyRoom") && app.includes("function makeMarketStrategyBrief") && app.includes("function makeMarketMoatFlywheelBrief") && app.includes("function marketTrustToPaidRadar") && app.includes("function makeTrustToPaidRadarBrief") && app.includes("function marketPaidBetaCohortConsole") && app.includes("function makePaidBetaCohortConsoleBrief") && app.includes("function marketFounderInviteWaveRoom") && app.includes("function makeFounderInviteWaveBrief") && app.includes("function marketPaidBetaInviteReceiptLedger") && app.includes("function makePaidBetaInviteLedgerBrief") && app.includes("function marketPaidBetaObjectionReplayRoom") && app.includes("function makePaidBetaObjectionReplayBrief") && app.includes("function marketPaidBetaOfferLab") && app.includes("function makePaidBetaOfferLabBrief") && app.includes("function marketFounderBetaLandingScript") && app.includes("function makeFounderBetaLandingScriptBrief") && app.includes("function marketFounderBetaPagePreview") && app.includes("function makeFounderBetaPagePreviewBrief") && app.includes("function marketFounderBetaTrafficRehearsal") && app.includes("function makeFounderBetaTrafficRehearsalBrief") && app.includes("function marketFounderBetaExperimentBoard") && app.includes("function makeFounderBetaExperimentBoardBrief") && app.includes("function marketFounderBetaLearningLedger") && app.includes("function makeFounderBetaLearningLedgerBrief") && app.includes("function marketFounderBetaScaleGate") && app.includes("function makeFounderBetaScaleGateBrief") && app.includes("copyMarketMoatFlywheel") && app.includes("copyTrustToPaidRadar") && app.includes("copyPaidBetaCohortConsole") && app.includes("copyFounderInviteWaveRoom") && app.includes("copyPaidBetaInviteLedger") && app.includes("copyPaidBetaObjectionReplay") && app.includes("copyPaidBetaOfferLab") && app.includes("copyFounderBetaLandingScript") && app.includes("copyFounderBetaPagePreview") && app.includes("copyFounderBetaTrafficRehearsal") && app.includes("copyFounderBetaExperimentBoard") && app.includes("copyFounderBetaLearningLedger") && app.includes("copyFounderBetaScaleGate") && app.includes("MARKET_STRATEGY_SIGNALS"), "app.js is missing Market Strategy Room behavior.");
assert(app.includes("function renderPaidBetaEvidencePack") && app.includes("function makePaidBetaEvidenceBrief") && app.includes("PAID_BETA_EVIDENCE_REQUIREMENTS"), "app.js is missing Paid Beta Evidence Pack behavior.");
assert(app.includes("function renderFounderInviteProofPath") && app.includes("function makeFounderInviteProofBrief") && app.includes("FOUNDER_INVITE_PROOF_STEPS"), "app.js is missing Founder Invite Proof Path behavior.");
assert(app.includes("function renderFounderCohortControlRoom") && app.includes("function makeFounderCohortControlBrief") && app.includes("FOUNDER_COHORT_CONTROL_RECORDS"), "app.js is missing Founder Cohort Control Room behavior.");
assert(app.includes("function renderCohortReceiptBackend") && app.includes("function makeCohortReceiptBackendBrief") && app.includes("COHORT_RECEIPT_BACKEND_STREAMS"), "app.js is missing Cohort Receipt Backend behavior.");
assert(app.includes("function renderCohortDecisionReplay") && app.includes("function makeCohortDecisionReplayBrief") && app.includes("COHORT_DECISION_REPLAY_CASES"), "app.js is missing Cohort Decision Replay behavior.");
assert(app.includes("function renderPaidCohortExpansionGate") && app.includes("function makePaidCohortExpansionBrief") && app.includes("PAID_COHORT_EXPANSION_GATES"), "app.js is missing Paid Cohort Expansion Gate behavior.");
assert(app.includes("function renderFounderBetaOperatingRoom") && app.includes("function makeFounderBetaOperatingBrief") && app.includes("FOUNDER_BETA_OPERATING_LANES"), "app.js is missing Founder Beta Operating Room behavior.");
assert(app.includes("function renderPaidBetaSupportLedger") && app.includes("function makePaidBetaSupportLedgerBrief") && app.includes("PAID_BETA_SUPPORT_CASES"), "app.js is missing Paid Beta Support Ledger behavior.");
assert(app.includes("function renderLaunchReadinessBoard") && app.includes("function makeLaunchReadinessBrief") && app.includes("LAUNCH_READINESS_GATES") && app.includes("function paidBetaProductionGate"), "app.js is missing Launch Readiness Board behavior.");
assert(app.includes("function renderPaymentReadinessLab") && app.includes("function makePaymentReadinessBrief") && app.includes("PAYMENT_READINESS_STEPS"), "app.js is missing Payment Readiness Lab behavior.");
assert(app.includes("function renderPaymentWiringConsole") && app.includes("function makePaymentWiringBrief") && app.includes("function paymentGatewayRetentionPolicy") && app.includes("PAYMENT_WIRING_STATES"), "app.js is missing Payment Wiring Console behavior.");
assert(app.includes("function renderPaymentGatewaySandbox") && app.includes("function makePaymentSandboxBrief") && app.includes("function paidBetaRunbook") && app.includes("PAYMENT_SANDBOX_TESTS"), "app.js is missing Payment Gateway Sandbox behavior.");
assert(app.includes("function renderGatewayWebhookDrill") && app.includes("function makeGatewayWebhookBrief") && app.includes("GATEWAY_WEBHOOK_DRILL_REQUIREMENTS"), "app.js is missing Gateway Decision and Webhook Drill behavior.");
assert(app.includes("function renderProviderPilotReceiptContract") && app.includes("function makeProviderPilotReceiptBrief") && app.includes("function providerPaymentTwin") && app.includes("PROVIDER_PILOT_RECEIPT_FIELDS"), "app.js is missing Payment Provider Pilot Receipt Contract behavior.");
assert(app.includes("function renderPilotReceiptVault") && app.includes("function makePilotReceiptVaultBrief") && app.includes("PILOT_RECEIPT_VAULT_LANES"), "app.js is missing Pilot Receipt Vault behavior.");
assert(app.includes("function renderPaidPilotLaunchGate") && app.includes("function makePaidPilotLaunchGateBrief") && app.includes("PAID_PILOT_LAUNCH_GATES"), "app.js is missing Paid Pilot Launch Gate behavior.");
assert(app.includes("function renderBackendTicketFactory") && app.includes("function makeBackendTicketFactoryBrief") && app.includes("function backendTicketCloseout") && app.includes("BACKEND_TICKET_FACTORY_TEMPLATES"), "app.js is missing Backend Ticket Factory behavior.");
assert(app.includes("function renderReceiptReplayEngine") && app.includes("function makeReceiptReplayEngineBrief") && app.includes("RECEIPT_REPLAY_ENGINE_CASES"), "app.js is missing Receipt Replay Engine behavior.");
assert(app.includes("function renderEntitlementBridge") && app.includes("function makeEntitlementBridgeBrief") && app.includes("ENTITLEMENT_BRIDGE_STATES") && app.includes("ENTITLEMENT_ACCESS_MATRIX"), "app.js is missing Entitlement Bridge behavior.");
assert(app.includes("function renderSubscriptionOpsConsole") && app.includes("function makeSubscriptionOpsBrief") && app.includes("function productionSupportTooling") && app.includes("SUBSCRIPTION_OPS_STATES"), "app.js is missing Subscription Ops Console behavior.");
assert(app.includes("function renderSubscriptionBackendBlueprint") && app.includes("function makeSubscriptionBackendBrief") && app.includes("function backendSupportReceipts") && app.includes("function paymentAdapterRepairBoard") && app.includes("SUBSCRIPTION_BACKEND_CONTRACTS"), "app.js is missing Subscription Backend Blueprint behavior.");
assert(app.includes("function renderAccountReadinessLab") && app.includes("function makeAccountReadinessBrief") && app.includes("ACCOUNT_READINESS_STEPS"), "app.js is missing Account Readiness Lab behavior.");
assert(app.includes("supportCaseQueueTelemetry") && app.includes("accountLifecycleSmokeReceipts") && app.includes("function makeSupportCaseQueueTelemetryBrief") && app.includes("function makeAccountLifecycleSmokeReceiptsBrief"), "app.js is missing v482-v483 account readiness receipts.");
assert(app.includes("function renderAccountLaunchRoute") && app.includes("function makeAccountLaunchRouteBrief") && app.includes("function founderBetaChecklist") && app.includes("function founderAuthDecisionBoard") && app.includes("function founderStorageDecisionBoard") && app.includes("function founderInviteGate") && app.includes("function founderInviteReceipt") && app.includes("function founderSupportDrill") && app.includes("function founderSupportCasebook") && app.includes("function supportOperationsHandoff") && app.includes("ACCOUNT_LAUNCH_ROUTE_GATES"), "app.js is missing Retail Account Launch Route behavior.");
assert(app.includes("function renderAccountLaunchShell") && app.includes("function makeAccountLaunchBrief") && app.includes("ACCOUNT_LAUNCH_STATES"), "app.js is missing Account Launch Shell behavior.");
assert(app.includes("function renderAccountVaultBlueprint") && app.includes("function makeAccountVaultBrief") && app.includes("function backendStorageHandoffBoard") && app.includes("function accountVaultLimitFromAccess") && app.includes("function accountVaultSupportRepairJoinBoard") && app.includes("ACCOUNT_VAULT_COLLECTIONS"), "app.js is missing Account Vault Blueprint behavior.");
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
assert(app.includes("function renderProfileRoom") && app.includes("function makeProfileRoomBrief") && app.includes("function profileInvestorTwin"), "app.js is missing Nadi Investor Profile Room behavior.");
assert(app.includes("function renderJourneyTimeline") && app.includes("function makeJourneyTimelineBrief"), "app.js is missing Nadi Journey Timeline behavior.");
assert(app.includes("function renderResearchBriefing") && app.includes("function makeResearchBriefingNote"), "app.js is missing Nadi Research Briefing behavior.");
assert(app.includes("function renderBriefingVault") && app.includes("function makeBriefingVaultBrief"), "app.js is missing Nadi Briefing Vault behavior.");
assert(app.includes("function renderResearchMemory") && app.includes("function makeResearchMemoryBrief"), "app.js is missing Nadi Research Memory behavior.");
assert(app.includes("function renderPrivacyControlRoom") && app.includes("function makePrivacyControlReport") && app.includes("function exportDeleteExecutionBoard"), "app.js is missing Nadi Privacy Control Room behavior.");
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
assert(app.includes("function renderStressLab") && app.includes("function makeStressNote") && app.includes("function stressRehearsalPlan") && app.includes("function makeStressRehearsalNote") && app.includes("function stressPanicTriagePlan") && app.includes("function makeStressTriageNote") && app.includes("copyStressRehearsal") && app.includes("copyStressTriage"), "app.js is missing Risk Stress Lab behavior.");
assert(app.includes("function renderCostRealityLab") && app.includes("function makeCostNote"), "app.js is missing Cost Reality Lab behavior.");
assert(app.includes("function renderInvestorReadinessGate") && app.includes("function makeReadinessNote"), "app.js is missing Investor Readiness Gate behavior.");
assert(app.includes("renderGoalFitCompass"), "app.js is missing Goal Fit Compass behavior.");
assert(app.includes("function renderCompareMatrix") && app.includes("function makeCompareNote"), "app.js is missing Fund Compare Matrix behavior.");
assert(app.includes("renderFirstSipCoach"), "app.js is missing First SIP Coach behavior.");
assert(app.includes("renderWatchlistRoom"), "app.js is missing Watchlist and Alerts behavior.");
assert(app.includes("renderDecisionPack") && app.includes("function decisionFlightRecorder") && app.includes("function decisionAntiHypeCourt") && app.includes("function decisionRegretLab") && app.includes("function decisionMotiveMri") && app.includes("function decisionMultiverse"), "app.js is missing Nadi Decision Pack behavior.");
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
assert(app.includes("function renderSourceReceiptVault") && app.includes("function makeSourceReceiptVaultBrief") && app.includes("function sourceReceiptProductionEnvelope") && app.includes("niveshnadi-source-receipts"), "app.js is missing Source Receipt Vault behavior.");
assert(app.includes("function renderClaimSurfaceMap") && app.includes("function makeClaimSurfaceMapBrief") && app.includes("CLAIM_SURFACE_MAP"), "app.js is missing Claim Surface Map behavior.");
assert(app.includes("function renderSurfaceReleaseQueue") && app.includes("function makeSurfaceReleaseQueueBrief"), "app.js is missing Surface Release Queue behavior.");
assert(app.includes("function renderReviewerWorkbench") && app.includes("function makeReviewerWorkbenchBrief"), "app.js is missing Reviewer Workbench behavior.");
assert(app.includes("function renderReviewerDecisionLedger") && app.includes("function makeReviewerDecisionLedgerBrief"), "app.js is missing Reviewer Decision Ledger behavior.");
assert(app.includes("function renderReviewerReleaseBinder") && app.includes("function bindReviewerDecisionToClaimReleaseGate") && app.includes("function makeReviewerReleaseBinderBrief"), "app.js is missing Reviewer Release Binder behavior.");
assert(app.includes("function renderBackendAuditReceipts") && app.includes("BACKEND_AUDIT_STREAMS") && app.includes("function makeBackendAuditReceiptBrief") && app.includes("function paymentReconciliationReplay") && app.includes("function productionSourceImportJobs") && app.includes("function sourceImportWorkerBlueprint") && app.includes("function sourceWorkerAlertRouting") && app.includes("function sourceAlertDeliveryBackend") && app.includes("function sourceFailedRunEventStore") && app.includes("function sourceReviewerSignoffBridge") && app.includes("function sourceRollbackEvidenceStore") && app.includes("function sourcePublicRecoveryRehearsal") && app.includes("function sourceRecoveryReleaseQueue") && app.includes("function sourceCorrectionPublishConsole") && app.includes("function sourceIncidentReceiptReplay") && app.includes("function launchFreezeAutomation"), "app.js is missing Backend Audit Receipts behavior.");
assert(app.includes("function renderSourceQaQueue") && app.includes("function makeSourceQaNote"), "app.js is missing Source QA Queue behavior.");
assert(app.includes("function renderSourceIntakeConsole") && app.includes("function makeSourceIntakeNote") && app.includes("function sourceIntakeProductionGate"), "app.js is missing Source Intake Console behavior.");
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
assert(app.includes("function lockHashLanding") && app.includes("HASH_LANDING_TOLERANCE"), "app.js is missing Anchor Landing Guard behavior.");
assert(app.includes("SIMPLE_MODE_KEY") && app.includes("SIMPLE_MODE_VERSION_KEY") && app.includes("savedVersion !== DATA_VERSION") && app.includes("function bindSimpleModeToggle") && app.includes("function applySimpleMode"), "app.js is missing release-aware Simple View behavior.");
assert(app.includes("SIMPLE_FUND_SHELF_LIMIT") && app.includes("data-expand-fund-shelf") && styles.includes(".quiet-fund-shelf"), "app/styles are missing Quiet Fund Shelf behavior.");
assert(index.includes("id=\"simpleFilterToggle\"") && app.includes("function applySimpleFiltersOpen") && styles.includes(".simple-filter-toggle") && styles.includes("simple-filters-open"), "app is missing the One Search First filter reveal.");
assert(index.includes("id=\"calmDecisionGate\"") && app.includes("function renderCalmDecisionGate") && styles.includes(".calm-decision-gate") && styles.includes(".calm-gate-hero"), "app is missing the Calm Decision Gate.");
assert(app.includes("function oneBreathBrief") && app.includes("one-breath-brief") && styles.includes(".one-breath-brief"), "app/styles are missing the One Breath Brief.");
assert(app.includes("function threeMinuteCalmRoute") && app.includes("calm-route-mini") && styles.includes(".calm-route-mini"), "app/styles are missing the Three Minute Calm Route.");
assert(app.includes("function calmDecisionMantra") && app.includes("calm-mantra-strip") && styles.includes(".calm-mantra-strip"), "app/styles are missing the Calm Decision Mantra.");
assert(index.includes("id=\"serenityStartSurface\"") && app.includes("function renderSerenityStartSurface") && app.includes("function serenityStartSurface") && app.includes("One fund. One fair peer. One written reason.") && app.includes("Search first. Filters can wait.") && app.includes("Begin with one name, then let the desk slow the decision down.") && app.includes("Give this fund three quiet minutes before any conclusion.") && app.includes("One source, one peer, one written line.") && app.includes("is being checked for shortlist fit, not chosen today.") && app.includes("Pause") && app.includes("Verify") && app.includes("Write") && app.includes("No personal IDs") && styles.includes(".serenity-start-surface") && styles.includes(".serenity-start-rule") && styles.includes(".serenity-start-hint") && styles.includes(".serenity-plain-start") && styles.includes(".serenity-action-path") && styles.includes(".serenity-commitment-cue") && styles.includes(".serenity-shortlist-boundary") && styles.includes(".serenity-action-button") && styles.includes(".serenity-promise-row") && styles.includes("body.simple-mode .quiet-start-ribbon") && styles.includes("body.simple-mode .command-copy > p:not(.release-pill)") && styles.includes("display: none") && styles.includes("body.simple-mode .calm-gate-hero"), "app/styles are missing the One Calm Start surface.");
assert(app.includes("function quietConvictionMeter") && app.includes("Quiet conviction") && app.includes("Still research") && app.includes("Research warming") && app.includes("Conviction stays low until evidence, peer, and memo checks are visible.") && app.includes("Clear the next check before conviction rises.") && styles.includes(".serenity-conviction-meter"), "app/styles are missing Quiet Conviction Meter behavior.");
assert(app.includes("function learningLoopLedger") && app.includes("Closed-loop learning") && app.includes("Learning loop observing") && app.includes("Anonymous patterns only") && app.includes("Human review before release") && app.includes("No personal IDs") && styles.includes(".serenity-learning-loop") && styles.includes(".serenity-learning-safeguards"), "app/styles are missing Learning Loop Ledger behavior.");
assert(app.includes("function federatedTrustLoop") && app.includes("Federated trust loop") && app.includes("Local actions improve this desk; only anonymous patterns can help other organizations.") && app.includes("No raw notes shared") && app.includes("No investor identity") && styles.includes(".serenity-federated-strip"), "app/styles are missing Federated Trust Loop behavior.");
assert(app.includes("function learningConsentGate") && app.includes("Learning consent gate") && app.includes("Learning is useful only after consent, anonymization, and review are clear.") && app.includes("No cross-organization learning without consent.") && app.includes("Anonymous aggregate only") && app.includes("Opt-out by design") && styles.includes(".serenity-consent-gate"), "app/styles are missing Learning Consent Gate behavior.");
assert(app.includes("function privacyLearningLedger") && app.includes("function calmReviewCompass") && app.includes("function learningFlywheelContract") && app.includes("function calmLearningReceipt") && app.includes("Calm review compass") && app.includes("Observe, decide, improve") && app.includes("One fund, one fair peer, one source date.") && app.includes("Keep, watch, or pause only after memo.") && app.includes("Anonymous patterns can train the desk after review.") && app.includes("Learning flywheel contract") && app.includes("Capture only the research pattern.") && app.includes("Review before the desk learns.") && app.includes("Improve only with consent.") && app.includes("No personal IDs enter the learning loop.") && app.includes("Privacy-safe learning ledger") && app.includes("Learning receipt") && app.includes("This action teaches the desk only after review.") && app.includes("Anonymous signal") && app.includes("Human review pending") && app.includes("Only anonymous patterns can improve the desk.") && app.includes("Organization learning waits for consent.") && app.includes("No PAN, folio, CAS, contact, or bank data.") && app.includes("Calm learning receipt") && app.includes("The desk learns only from reviewed patterns, never from identity.") && app.includes("Draft lesson only") && app.includes("Learning mode") && app.includes("Anonymous pattern") && app.includes("Raw private notes") && app.includes("Action without human review") && app.includes("Useful reinforcement begins after evidence, memo, review, and consent.") && index.includes("Phase 1 v284") && styles.includes(".privacy-learning-ledger") && styles.includes(".privacy-ledger-grid") && styles.includes(".privacy-receipt-strip") && styles.includes(".calm-review-compass") && styles.includes(".learning-flywheel-contract") && styles.includes(".learning-contract-rules") && styles.includes(".learning-contract-guards") && styles.includes(".calm-learning-receipt") && styles.includes(".calm-learning-receipt-grid") && styles.includes(".calm-learning-receipt-deny") && styles.includes(".calm-learning-receipt-strip") && styles.includes(".serenity-start-surface > div") && styles.includes("justify-content: space-between") && styles.includes("body.simple-mode .serenity-federated-strip") && styles.includes(".role-item p") && styles.includes("max-width: 44ch"), "V284 Calm Learning Receipt styles are missing.");
assert(app.includes("function calmImprovementPromise") && app.includes("Calm improvement promise") && app.includes("Improve the route, not the investor") && app.includes("Every reviewed lesson should make the next screen quieter.") && app.includes("Next user benefit") && app.includes("What improves") && app.includes("What stays private") && app.includes("No identity, private notes, or unreviewed action.") && app.includes("The product learns to reduce confusion, not to push behavior.") && index.includes("Phase 1 v285") && styles.includes(".calm-improvement-promise") && styles.includes(".calm-improvement-grid") && styles.includes("body.simple-mode .calm-learning-receipt"), "V285 Calm Improvement Promise behavior is missing.");
assert(app.includes("function calmEvidenceBeacon") && app.includes("Source-date beacon") && app.includes("Evidence before confidence") && app.includes("The desk should stay quiet until source dates, citations, TER, holdings, and riskometer checks are visible.") && app.includes("Trust the score only after the source trail is visible.") && app.includes("No PAN") && app.includes("No push") && app.includes("Review first") && index.includes("Phase 1 v286") && styles.includes(".calm-evidence-beacon") && styles.includes(".calm-evidence-beacon-grid") && styles.includes(".calm-evidence-beacon-guards"), "V286 Source-Date Beacon behavior is missing.");
assert(app.includes("function quietDecisionRail") && app.includes("Quiet decision rail") && app.includes("One decision, three calm checks.") && app.includes("The desk advances only when the next check is clear.") && app.includes("Next calm check") && app.includes("Open Evidence before confidence.") && index.includes("Phase 1 v287") && styles.includes(".quiet-decision-rail") && styles.includes(".quiet-decision-steps") && styles.includes(".quiet-decision-now") && styles.includes("body.simple-mode .privacy-learning-ledger"), "V287 Quiet Decision Rail behavior is missing.");
assert(app.includes("function outcomeLearningSignal") && app.includes("Outcome learning signal") && app.includes("The desk learns only after a decision is saved, reviewed, and turned into an anonymous lesson.") && app.includes("Better prompts, safer gates, and clearer defaults improve from reviewed patterns, not raw notes.") && app.includes("No return prediction") && app.includes("Org review before sharing") && styles.includes(".serenity-outcome-signal"), "app/styles are missing Outcome Learning Signal behavior.");
assert(app.includes("function syncWorkspaceFocusClass") && app.includes("investorRecordFocus"), "app.js is missing Review Step Focus hash behavior.");
assert(app.includes("SIMPLE_ROOM_FOCUS_CLASS_BY_HASH") && app.includes("simpleRoomFocus") && app.includes("getClientRects().length") && app.includes("landingGap"), "app.js is missing Clean Room Landing behavior.");
assert(app.includes("SIMPLE_WORKSPACE_ROUTES") && app.includes("function renderWorkspaceJumpForMode"), "app.js is missing Guided Selector behavior.");
assert(app.includes("function renderToolPaletteResults") && app.includes("function openToolPalette") && app.includes("data-tool-palette-route"), "app.js is missing Tool Command Palette behavior.");
assert(app.includes("SIMPLE_JOURNEY_STEPS") && app.includes("function renderSimplicityPath"), "app.js is missing Live Route Rail behavior.");
assert(app.includes("SIMPLE_ROUTE_STEP_BY_HASH") && app.includes("function simpleStepHashFromRoute") && app.includes("renderSimplicityPath(signalStripConfig(), activeHash || fallbackHash)"), "app.js is missing Live Step Sync behavior.");
assert(app.includes("function simpleJourneyQuestion") && app.includes("simplicity-question"), "app.js is missing One-Question Gate behavior.");
assert(index.includes("id=\"roomFocusNote\"") && app.includes("SIMPLE_ROOM_CUES") && app.includes("function renderSimpleRoomCue") && app.includes("inline-room-focus-note") && styles.includes(".room-focus-note") && styles.includes("body.simple-mode.simple-room-focus .inline-room-focus-note"), "app/styles are missing Room Step Cue behavior.");
assert(app.includes("SIMPLE_PROGRESS_KEY") && app.includes("function simpleProgressMemory") && app.includes("is-visited") && styles.includes(".room-progress-meter") && styles.includes(".simple-step.is-visited"), "app/styles are missing Simple Progress Memory behavior.");
assert(app.includes("SIMPLE_LAST_ROOM_KEY") && app.includes("simpleSessionResumeRoute") && app.includes("simplicity-resume") && app.includes("room-cue-actions") && styles.includes(".simplicity-resume") && styles.includes(".room-cue-actions"), "app/styles are missing Resume Room Cue behavior.");
assert(app.includes("function resetSimpleProgressMemory") && app.includes("data-simple-progress-reset") && styles.includes(".simplicity-reset"), "app/styles are missing Fresh Start Cue behavior.");
assert(app.includes("isComplete") && app.includes("finishStep") && app.includes("simplicity-finish") && styles.includes(".room-progress-meter.is-complete") && styles.includes(".simplicity-finish"), "app/styles are missing Research Round Complete Cue behavior.");
assert(app.includes("function researchRoundReceipt") && app.includes("function renderResearchRoundReceipt") && app.includes("review-round-receipt") && styles.includes(".review-round-receipt") && styles.includes(".review-round-step"), "app/styles are missing Research Round Receipt behavior.");
assert(app.includes("data-review-round-save") && app.includes("review-round-action") && app.includes("actionKind") && styles.includes(".review-round-action"), "app/styles are missing Save Round Action behavior.");
assert(app.includes("reviewCue") && app.includes("review-next-cue") && app.includes("review-next-action") && styles.includes(".review-next-cue") && styles.includes(".review-next-action"), "app/styles are missing Next Review Cue behavior.");
assert(app.includes("function renderReviewFinishLine") && app.includes("review-finish-line") && app.includes("review-finish-pills") && styles.includes(".review-finish-line") && styles.includes(".review-finish-pills"), "app/styles are missing Review Finish Line behavior.");
assert(app.includes("function startNextResearchRound") && app.includes("data-review-next-round") && styles.includes(".review-next-round-action"), "app/styles are missing Start Next Round behavior.");
assert(styles.includes("body.simple-mode .workspace-jump select") && styles.includes("min-width: 0"), "styles.css is missing Simple View mobile workspace jump width guard.");
assert(app.includes("function investorTakeaway") && app.includes("signal-takeaway"), "app.js is missing Investor Takeaway behavior.");
assert(app.includes("function decisionReadiness") && app.includes("decision-readiness"), "app.js is missing Decision Readiness behavior.");
assert(app.includes("function doNextCue") && app.includes("signal-next-action"), "app.js is missing Do Next Cue behavior.");
assert(app.includes("function threeStepPlan") && app.includes("signal-plan-step"), "app.js is missing Three-Step Plan behavior.");
assert(app.includes("localStorage"), "app.js is missing browser-local decision journal storage.");

assert(packageJson.scripts?.["security:audit"] === "node scripts/security-audit.mjs", "package.json is missing security:audit script.");
assert(packageJson.scripts?.check?.includes("security-audit.mjs"), "package.json check script does not run the security audit.");

assert(styles.includes("--mint") && styles.includes("--gold") && styles.includes("--blue"), "styles.css is missing brand color tokens.");
assert(styles.includes("scroll-padding-top") && styles.includes("scroll-margin-top"), "styles.css is missing sticky-header anchor offset rules.");
assert(styles.includes(".workspace-band[id]") && styles.includes("--anchor-offset: 132px"), "styles.css is missing stronger section anchor landing rules.");
assert(styles.includes(".workspace-jump") && styles.includes(".nav-mode-strip") && styles.includes(".nav-stack"), "styles.css is missing Smart Navigation Shell styles.");
assert(styles.includes(".tool-palette") && styles.includes(".tool-palette-result") && styles.includes(".tool-palette-toggle"), "styles.css is missing Tool Command Palette styles.");
assert(styles.includes(".simple-mode-toggle") && styles.includes(".simplicity-path") && styles.includes("body.simple-mode"), "styles.css is missing Simple View styles.");
assert(index.includes("brand-home-link") && index.includes("version-quick-badge") && styles.includes(".brand-home-link") && styles.includes(".version-quick-badge"), "index/styles are missing the header version badge and logo home link.");
assert(index.includes("quiet-start-ribbon") && index.includes("One fund. One fair peer. One written reason.") && styles.includes(".quiet-start-ribbon"), "index/styles are missing the Quiet Start Ribbon.");
assert(app.includes("calm-next-action") && app.includes("Next calm step") && styles.includes(".primary-next-action span"), "app/styles are missing the Calm Next Action card.");
assert(index.includes("calm-focus-shell") && styles.includes(".calm-focus-shell") && styles.includes("body.simple-mode .calm-focus-shell") && styles.includes("body.simple-mode .desk-stats") && styles.includes("display: none"), "app/styles are missing Calm Focus Surface simplification.");
assert(index.includes("quiet-step-rail") && styles.includes(".quiet-step-rail") && styles.includes("body.simple-mode .quiet-step-rail .nav-mode-strip a[aria-current=\"page\"]") && styles.includes("font-size: 0"), "app/styles are missing Quiet Step Rail simplification.");
assert(styles.includes("body.simple-mode .app-header") && styles.includes("body.simple-mode .brand-logo") && styles.includes("body.simple-mode .nav-mode-strip a"), "styles.css is missing Compact Simple Header styles.");
assert(index.includes("id=\"headerNextAction\"") && app.includes("function renderHeaderNextAction") && app.includes("headerNextAction.dataset.signalRoute") && styles.includes(".header-next-action") && styles.includes("body.simple-mode .header-next-action:not([hidden])"), "app/styles are missing Sticky Next Cue behavior.");
assert(styles.includes(".simplicity-question"), "styles.css is missing One-Question Gate styles.");
assert(index.includes("serenity-path") && app.includes("serenity-checkline") && app.includes("Only question now") && styles.includes("body.simple-mode .serenity-path .simple-step"), "app/styles are missing Calm One-Question Path simplification.");
assert(app.includes("signal-fund-context") && styles.includes(".signal-fund-context"), "app/styles are missing Quiet Signal Card fund context.");
assert(styles.includes(".signal-takeaway"), "styles.css is missing Investor Takeaway styles.");
assert(styles.includes(".decision-readiness") && styles.includes(".readiness-pill"), "styles.css is missing Decision Readiness styles.");
assert(styles.includes(".signal-next-action"), "styles.css is missing Do Next Cue styles.");
assert(styles.includes(".signal-plan-step"), "styles.css is missing Three-Step Plan styles.");
assert(!styles.includes("body.simple-mode .nadi-signal-strip article:nth-child(5),"), "styles.css hides the Three-Step Plan in Simple View.");
assert(styles.includes("body.simple-mode .signal-plan") && styles.includes("grid-column: 1 / -1"), "styles.css is missing Simple Plan Priority layout.");
assert(styles.includes("body.simple-mode .signal-plan .signal-plan-list") && styles.includes("repeat(3, minmax(0, 1fr))"), "styles.css is missing Simple View horizontal plan steps.");
assert(app.includes("signal-copy-button") && styles.includes("body.simple-mode .signal-copy-button") && styles.includes("display: none"), "Simple View should hide the Signal Strip copy control.");
assert(styles.includes("body.simple-mode .nadi-signal-strip article:nth-child(2)") && styles.includes("body.simple-mode .nadi-signal-strip article:nth-child(3)"), "Simple View should hide repeated signal context cards.");
assert(app.includes("step-focus-marker") && app.includes("plan-focus-marker") && styles.includes(".step-focus-marker"), "app/styles are missing visible current-step focus markers.");
assert(app.includes("primary-next-action") && app.includes("journey.next.reason") && styles.includes(".primary-next-action") && styles.includes("order: -1") && styles.includes("grid-column: 1 / -1"), "app/styles are missing the one-move route control.");
assert(index.indexOf("id=\"simplicityPath\"") > -1 && index.indexOf("class=\"desk-stats\"") > -1 && index.indexOf("id=\"simplicityPath\"") < index.indexOf("class=\"desk-stats\"") && styles.includes("body.simple-mode .desk-stats div:not(:first-child)"), "first fold should show the simple route before status cards and trim Simple View status clutter.");
assert(styles.includes("body.simple-mode .control-grid label:not(:first-child)") && styles.includes("display: none") && styles.includes("body.simple-mode .control-grid input[type=\"search\"]"), "Simple View should keep one search-first filter on the first screen.");
assert(index.includes("class=\"search-starters\"") && index.includes("data-search-preset") && app.includes("data-search-preset") && styles.includes("body.simple-mode .search-starters"), "Simple View starter search chips are missing.");
assert(app.includes("renderSearchPresetCounts") && app.includes("searchPresetCount") && styles.includes(".search-starters .signal-chip small"), "Starter search chip counts are missing.");
assert(index.includes("id=\"searchFeedback\"") && app.includes("searchFeedback") && app.includes("data-clear-search") && styles.includes("body.simple-mode .search-feedback"), "Simple View search feedback strip is missing.");
assert(app.includes("search-rescue") && app.includes("No match found") && app.includes("Clear search") && styles.includes(".search-rescue-actions"), "Search rescue zero-result state is missing.");
assert(app.includes("data-open-top-match") && app.includes("Open top match") && styles.includes(".search-feedback .signal-chip.is-primary"), "Search feedback top-match action is missing.");
assert(app.includes("search-top-match") && app.includes("Top match:") && styles.includes(".search-feedback .search-top-match"), "Search feedback top-match preview is missing.");
assert(styles.includes("body.simple-mode .nav-primary") && styles.includes("body.simple-mode .nav-mode-strip"), "styles.css is missing Calm Header Simple View rules.");
assert(styles.includes("body.simple-mode .market-snapshot") && styles.includes("body.simple-mode .workspace-grid"), "styles.css is missing First Screen Focus Simple View rules.");
assert(styles.includes("body.simple-mode:not(.investor-record-focus) .investor-record-band"), "styles.css is missing Review Step Focus Simple View rules.");
assert(styles.includes("body.simple-mode.simple-profile-focus .memo-clearance-band") && styles.includes("body.simple-mode.simple-review-focus .dossier-band"), "styles.css is missing Clean Room Landing Simple View rules.");
assert(app.includes("SIMPLE_ROOM_FOCUS_CLASS_BY_HASH") && styles.includes("body.simple-mode.simple-room-focus .workspace-band:not(.command-band)") && styles.includes("body.simple-mode.simple-find-focus #screener") && styles.includes("body.simple-mode.simple-review-focus #review-vault"), "styles.css is missing Simple Focus Lens room isolation rules.");
assert(styles.includes(".nadi-signal-strip") && styles.includes(".signal-score"), "styles.css is missing Nadi Signal Strip styles.");
assert(styles.includes(".research-autopilot") && styles.includes(".autopilot-command-card") && styles.includes(".autopilot-live-gate") && styles.includes(".autopilot-claim-passport") && styles.includes(".autopilot-share-seal") && styles.includes(".mitra-shield") && styles.includes(".mitra-firewall") && styles.includes(".mitra-route-receipt") && styles.includes(".mitra-scam-drill") && styles.includes(".mitra-family-share") && styles.includes(".mitra-route-directory") && styles.includes(".mitra-source-check") && styles.includes(".mitra-source-handshake") && styles.includes(".mitra-release-verdict") && styles.includes(".mitra-safety-stack") && styles.includes(".mitra-action-router") && styles.includes(".mitra-action-receipt") && styles.includes(".mitra-follow-up-room") && styles.includes(".mitra-reminder-card") && styles.includes(".mitra-recheck-trail") && styles.includes(".mitra-outcome-ledger") && styles.includes(".autopilot-proof-graph") && styles.includes(".autopilot-no-buy-gate") && styles.includes(".autopilot-fomo-firewall") && styles.includes(".autopilot-dissent-engine") && styles.includes(".autopilot-command-grid") && styles.includes(".autopilot-lane-grid") && styles.includes(".autopilot-mission-grid") && styles.includes(".autopilot-receipt-grid") && styles.includes(".autopilot-clock-grid"), "styles.css is missing Nadi Research Autopilot styles.");
assert(styles.includes(".fund-genome") && styles.includes(".fund-gene-grid"), "styles.css is missing Nadi Fund Genome styles.");
assert(styles.includes(".future-shock-map") && styles.includes(".future-shock-strip"), "styles.css is missing Nadi Future Shock Map styles.");
assert(styles.includes(".memory-capsule") && styles.includes(".memory-capsule-grid") && styles.includes(".memory-replay-grid"), "styles.css is missing Nadi Memory Capsule styles.");
assert(styles.includes(".build-tracker-output") && styles.includes(".build-tracker-hero"), "styles.css is missing Nadi Build Tracker styles.");
assert(styles.includes(".build-phases-output") && styles.includes(".build-phases-hero") && styles.includes(".build-room-bridge"), "styles.css is missing Nadi Build Phases Room styles.");
assert(styles.includes(".publisher-handoff-card") && styles.includes(".publisher-handoff-grid") && styles.includes(".publisher-handoff-steps"), "styles.css is missing Publisher Handoff Kit styles.");
assert(styles.includes(".build-sprint-strip") && styles.includes(".build-readiness-grid") && styles.includes(".build-phase2-card"), "styles.css is missing V78 executive Build Tracker styles.");
assert(styles.includes(".launch-readiness-output") && styles.includes(".launch-gate-grid") && styles.includes(".launch-ladder-grid") && styles.includes(".paid-beta-gate") && styles.includes(".paid-beta-gate-components"), "styles.css is missing Launch Readiness Board styles.");
assert(styles.includes(".payment-readiness-output") && styles.includes(".payment-step-grid") && styles.includes(".payment-flow-grid"), "styles.css is missing Payment Readiness Lab styles.");
assert(styles.includes(".payment-wiring-output") && styles.includes(".payment-wiring-state-grid") && styles.includes(".payment-wiring-flow-grid") && styles.includes(".payment-retention-board") && styles.includes(".payment-retention-lane-grid"), "styles.css is missing Payment Wiring Console styles.");
assert(styles.includes(".payment-sandbox-output") && styles.includes(".payment-sandbox-test-grid") && styles.includes(".payment-sandbox-flow-grid") && styles.includes(".payment-beta-runbook") && styles.includes(".payment-beta-lane-grid"), "styles.css is missing Payment Gateway Sandbox styles.");
assert(styles.includes(".gateway-webhook-output") && styles.includes(".gateway-webhook-hero") && styles.includes(".gateway-webhook-requirement-grid"), "styles.css is missing Gateway Decision and Webhook Drill styles.");
assert(styles.includes(".provider-pilot-output") && styles.includes(".provider-pilot-hero") && styles.includes(".provider-pilot-field-grid") && styles.includes(".provider-twin-board") && styles.includes(".provider-twin-flow-grid"), "styles.css is missing Payment Provider Pilot Receipt Contract styles.");
assert(styles.includes(".pilot-vault-output") && styles.includes(".pilot-vault-hero") && styles.includes(".pilot-vault-lane-grid"), "styles.css is missing Pilot Receipt Vault styles.");
assert(styles.includes(".paid-pilot-gate-output") && styles.includes(".paid-pilot-gate-hero") && styles.includes(".paid-pilot-gate-grid"), "styles.css is missing Paid Pilot Launch Gate styles.");
assert(styles.includes(".backend-ticket-output") && styles.includes(".backend-ticket-hero") && styles.includes(".backend-ticket-grid") && styles.includes(".backend-ticket-closeout") && styles.includes(".backend-ticket-closeout-grid"), "styles.css is missing Backend Ticket Factory styles.");
assert(styles.includes(".receipt-replay-output") && styles.includes(".receipt-replay-hero") && styles.includes(".receipt-replay-case-grid"), "styles.css is missing Receipt Replay Engine styles.");
assert(styles.includes(".entitlement-output") && styles.includes(".entitlement-state-grid") && styles.includes(".entitlement-flow-grid") && styles.includes(".entitlement-access-matrix") && styles.includes(".entitlement-proof-grid"), "styles.css is missing Entitlement Bridge styles.");
assert(styles.includes(".subscription-ops-output") && styles.includes(".subscription-ops-state-grid") && styles.includes(".subscription-ops-flow-grid") && styles.includes(".subscription-support-tooling") && styles.includes(".subscription-support-tool-grid"), "styles.css is missing Subscription Ops Console styles.");
assert(styles.includes(".subscription-backend-output") && styles.includes(".subscription-backend-contract-grid") && styles.includes(".subscription-backend-flow-grid") && styles.includes(".subscription-adapter-repairs") && styles.includes(".subscription-adapter-repairs-grid") && styles.includes(".subscription-support-receipts") && styles.includes(".subscription-support-receipts-grid"), "styles.css is missing Subscription Backend Blueprint styles.");
assert(styles.includes(".account-readiness-output") && styles.includes(".account-step-grid") && styles.includes(".account-flow-grid"), "styles.css is missing Account Readiness Lab styles.");
assert(styles.includes(".account-route-output") && styles.includes(".account-route-form label") && styles.includes(".account-route-beta") && styles.includes(".account-route-check-grid") && styles.includes(".account-route-auth") && styles.includes(".account-route-auth-control-grid") && styles.includes(".account-route-storage") && styles.includes(".account-route-storage-contract-grid") && styles.includes(".account-route-invite") && styles.includes(".account-route-invite-grid") && styles.includes(".account-route-receipt") && styles.includes(".account-route-receipt-grid") && styles.includes(".account-route-support") && styles.includes(".account-route-support-queue") && styles.includes(".account-route-casebook") && styles.includes(".account-route-case-flow") && styles.includes(".account-route-ops") && styles.includes(".account-route-ops-lane-grid") && styles.includes(".account-route-gate-grid") && styles.includes(".account-route-map-grid"), "styles.css is missing Retail Account Launch Route styles.");
assert(styles.includes(".account-launch-output") && styles.includes(".account-launch-state-grid") && styles.includes(".account-launch-flow-grid"), "styles.css is missing Account Launch Shell styles.");
assert(styles.includes(".account-vault-output") && styles.includes(".account-vault-handoff") && styles.includes(".account-vault-handoff-contract-grid") && styles.includes(".account-vault-limit-grid") && styles.includes(".account-vault-repair") && styles.includes(".account-vault-repair-join-grid") && styles.includes(".account-vault-collection-grid") && styles.includes(".account-vault-flow-grid"), "styles.css is missing Account Vault Blueprint styles.");
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
assert(styles.includes(".profile-room-grid") && styles.includes(".profile-room-hero") && styles.includes(".profile-twin-board") && styles.includes(".profile-twin-scenario-grid"), "styles.css is missing Nadi Investor Profile Room styles.");
assert(styles.includes(".journey-timeline-rail") && styles.includes(".journey-timeline-hero"), "styles.css is missing Nadi Journey Timeline styles.");
assert(styles.includes(".briefing-layout") && styles.includes(".briefing-card"), "styles.css is missing Nadi Research Briefing styles.");
assert(styles.includes(".briefing-vault-output") && styles.includes(".briefing-vault-card"), "styles.css is missing Nadi Briefing Vault styles.");
assert(styles.includes(".research-memory-output") && styles.includes(".research-memory-event"), "styles.css is missing Nadi Research Memory styles.");
assert(styles.includes(".privacy-control-output") && styles.includes(".privacy-store-card") && styles.includes(".privacy-execution") && styles.includes(".privacy-execution-job-grid"), "styles.css is missing Nadi Privacy Control Room styles.");
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
assert(styles.includes(".stress-grid") && styles.includes(".stress-hero") && styles.includes(".stress-rehearsal") && styles.includes(".stress-rehearsal-lane-grid") && styles.includes(".stress-triage") && styles.includes(".stress-triage-route-grid"), "styles.css is missing Risk Stress Lab styles.");
assert(styles.includes(".cost-grid") && styles.includes(".cost-hero"), "styles.css is missing Cost Reality Lab styles.");
assert(styles.includes(".readiness-grid") && styles.includes(".readiness-hero"), "styles.css is missing Investor Readiness Gate styles.");
assert(styles.includes(".journey-grid") && styles.includes(".journey-output"), "styles.css is missing First SIP Coach styles.");
assert(styles.includes(".watch-grid") && styles.includes(".watch-card"), "styles.css is missing Watchlist and Alerts styles.");
assert(styles.includes(".pack-grid") && styles.includes(".pack-card") && styles.includes(".pack-flight-recorder") && styles.includes(".pack-flight-grid") && styles.includes(".pack-court") && styles.includes(".pack-court-grid") && styles.includes(".pack-regret-lab") && styles.includes(".pack-regret-grid") && styles.includes(".pack-motive-mri") && styles.includes(".pack-motive-grid") && styles.includes(".pack-multiverse") && styles.includes(".pack-multiverse-grid"), "styles.css is missing Nadi Decision Pack styles.");
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
assert(styles.includes(".source-receipt-output") && styles.includes(".source-receipt-grid") && styles.includes(".source-receipt-panel-grid") && styles.includes(".source-production-envelope") && styles.includes(".source-production-field-grid"), "styles.css is missing Source Receipt Vault styles.");
assert(styles.includes(".claim-surface-output") && styles.includes(".claim-surface-grid") && styles.includes(".claim-surface-flow-grid"), "styles.css is missing Claim Surface Map styles.");
assert(styles.includes(".surface-queue-output") && styles.includes(".surface-queue-grid") && styles.includes(".surface-queue-flow-grid"), "styles.css is missing Surface Release Queue styles.");
assert(styles.includes(".reviewer-workbench-output") && styles.includes(".reviewer-workbench-grid"), "styles.css is missing Reviewer Workbench styles.");
assert(styles.includes(".reviewer-decision-output") && styles.includes(".reviewer-decision-card"), "styles.css is missing Reviewer Decision Ledger styles.");
assert(styles.includes(".reviewer-release-output") && styles.includes(".reviewer-release-card"), "styles.css is missing Reviewer Release Binder styles.");
assert(styles.includes(".backend-audit-output") && styles.includes(".backend-audit-card") && styles.includes(".payment-replay-board") && styles.includes(".payment-replay-leg-grid") && styles.includes(".source-job-board") && styles.includes(".source-job-grid") && styles.includes(".source-worker-board") && styles.includes(".source-worker-alert-grid") && styles.includes(".source-alert-board") && styles.includes(".source-alert-route-grid") && styles.includes(".source-delivery-board") && styles.includes(".source-delivery-channel-grid") && styles.includes(".source-failed-board") && styles.includes(".source-failed-event-grid") && styles.includes(".source-signoff-board") && styles.includes(".source-signoff-lane-grid") && styles.includes(".source-rollback-board") && styles.includes(".source-rollback-packet-grid") && styles.includes(".source-recovery-board") && styles.includes(".source-recovery-surface-grid") && styles.includes(".recovery-release-board") && styles.includes(".recovery-release-task-grid") && styles.includes(".correction-publish-board") && styles.includes(".correction-publish-control-grid") && styles.includes(".correction-publish-wording") && styles.includes(".source-incident-board") && styles.includes(".source-incident-leg-grid") && styles.includes(".launch-freeze-board") && styles.includes(".launch-freeze-trigger-grid"), "styles.css is missing Backend Audit Receipts styles.");
assert(styles.includes(".source-queue-layout") && styles.includes(".source-queue-card"), "styles.css is missing Source QA Queue styles.");
assert(styles.includes(".source-intake-layout") && styles.includes(".source-intake-card") && styles.includes(".source-import-gate") && styles.includes(".source-import-control-grid"), "styles.css is missing Source Intake Console styles.");
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
assert(styles.includes(".market-strategy-output") && styles.includes(".market-strategy-hero") && styles.includes(".market-strategy-gate-grid") && styles.includes(".market-flywheel-card") && styles.includes(".market-flywheel-grid") && styles.includes(".trust-paid-radar") && styles.includes(".trust-paid-stage-grid") && styles.includes(".paid-beta-cohort-console") && styles.includes(".paid-beta-cohort-scenario-grid") && styles.includes(".founder-invite-wave-room") && styles.includes(".founder-invite-wave-grid") && styles.includes(".paid-beta-invite-ledger") && styles.includes(".paid-beta-invite-ledger-row-grid") && styles.includes(".paid-beta-objection-room") && styles.includes(".paid-beta-objection-grid") && styles.includes(".paid-beta-offer-lab") && styles.includes(".paid-beta-offer-lab-variant-grid") && styles.includes(".founder-beta-landing-script") && styles.includes(".founder-beta-landing-proof-grid") && styles.includes(".founder-beta-page-preview") && styles.includes(".founder-beta-page-preview-surface") && styles.includes(".founder-beta-traffic-rehearsal") && styles.includes(".founder-beta-traffic-source-grid") && styles.includes(".founder-beta-experiment-board") && styles.includes(".founder-beta-experiment-grid") && styles.includes(".founder-beta-learning-ledger") && styles.includes(".founder-beta-learning-row-grid") && styles.includes(".founder-beta-scale-gate") && styles.includes(".founder-beta-scale-gate-grid"), "styles.css is missing Market Strategy Room styles.");
assert(styles.includes(".paid-beta-pack-output") && styles.includes(".paid-beta-pack-hero") && styles.includes(".paid-beta-proof-grid"), "styles.css is missing Paid Beta Evidence Pack styles.");
assert(styles.includes(".founder-invite-output") && styles.includes(".founder-invite-hero") && styles.includes(".founder-invite-proof-grid"), "styles.css is missing Founder Invite Proof Path styles.");
assert(styles.includes(".founder-cohort-output") && styles.includes(".founder-cohort-hero") && styles.includes(".founder-cohort-ledger"), "styles.css is missing Founder Cohort Control Room styles.");
assert(styles.includes(".cohort-receipt-output") && styles.includes(".cohort-receipt-hero") && styles.includes(".cohort-receipt-stream-grid"), "styles.css is missing Cohort Receipt Backend styles.");
assert(styles.includes(".cohort-replay-output") && styles.includes(".cohort-replay-hero") && styles.includes(".cohort-replay-case-grid"), "styles.css is missing Cohort Decision Replay styles.");
assert(styles.includes(".paid-expansion-output") && styles.includes(".paid-expansion-hero") && styles.includes(".paid-expansion-gate-grid"), "styles.css is missing Paid Cohort Expansion Gate styles.");
assert(styles.includes(".founder-beta-ops-output") && styles.includes(".founder-beta-ops-hero") && styles.includes(".founder-beta-ops-lane-grid"), "styles.css is missing Founder Beta Operating Room styles.");
assert(styles.includes(".paid-support-output") && styles.includes(".paid-support-hero") && styles.includes(".paid-support-case-grid"), "styles.css is missing Paid Beta Support Ledger styles.");
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
  "CHANGELOG.md",
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
  "docs/PUBLISHER_HANDOFF_KIT.md",
  "docs/TOOL_COMMAND_PALETTE.md",
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
  "docs/MARKET_STRATEGY_ROOM.md",
  "docs/PAID_BETA_EVIDENCE_PACK.md",
  "docs/FOUNDER_INVITE_PROOF_PATH.md",
  "docs/FOUNDER_COHORT_CONTROL_ROOM.md",
  "docs/COHORT_RECEIPT_BACKEND.md",
  "docs/COHORT_DECISION_REPLAY.md",
  "docs/PAID_COHORT_EXPANSION_GATE.md",
  "docs/FOUNDER_BETA_OPERATING_ROOM.md",
  "docs/PAID_BETA_SUPPORT_LEDGER.md",
  "docs/GATEWAY_WEBHOOK_DRILL.md",
  "docs/PROVIDER_PILOT_RECEIPT_CONTRACT.md",
  "docs/PILOT_RECEIPT_VAULT.md",
  "docs/PAID_PILOT_LAUNCH_GATE.md",
  "docs/BACKEND_TICKET_FACTORY.md",
  "docs/RECEIPT_REPLAY_ENGINE.md",
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
