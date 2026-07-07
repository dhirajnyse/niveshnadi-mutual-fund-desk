# NiveshNadi Changelog

## NiveshNadi Phase 1 v494 Payment Sandbox Event Simulator

- Version: `0.494.0`
- Data version: `20260707-v494-01`
- Changes made: Added Payment Sandbox Event Simulator to the Build Tracker Release Doctor with fake checkout, invoice, webhook, entitlement, refund, and rollback event rows; fixture envelopes; emitted fields; expected states; rejected private fields; recovery rules; simulator rules; no-go lines; receipt fields; dedicated copy action; Build Tracker and Release Doctor brief coverage; proof archive roll-forward with v493 commit; next-batch planner roll-forward; and release markers rolled forward to v494.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`, `scripts/static-check.mjs`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check; v494 marker scan.
- Known risks: Payment Sandbox Event Simulator is a fake-event contract only; production still needs real provider integration, signed webhook verification, payment reconciliation, durable entitlement storage, refund processing, support tooling, privacy/security/legal review, deployment verification, and live payment tests.

## NiveshNadi Phase 1 v493 Account Persistence Fixture Runner

- Version: `0.493.0`
- Data version: `20260707-v493-01`
- Changes made: Added Account Persistence Fixture Runner to the Build Tracker Release Doctor with account shell creation, research memory save, export packet, deletion, support-safe status, and entitlement join fixtures; allowed inputs; blocked fields; expected states; rollback rules; run order; no-go lines; receipt fields; dedicated copy action; Build Tracker and Release Doctor brief coverage; proof archive roll-forward with v492 commit; next-batch planner roll-forward; and release markers rolled forward to v493.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`, `scripts/static-check.mjs`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check; v493 marker scan.
- Known risks: Account Persistence Fixture Runner is a static replay contract only; production still needs authenticated account APIs, durable storage, consent flows, export/delete workers, redaction enforcement, entitlement reconciliation, support tooling, privacy/security/legal review, deployment verification, and live backend tests.

## NiveshNadi Phase 1 v492 Live Backend API Skeleton

- Version: `0.492.0`
- Data version: `20260707-v492-01`
- Changes made: Added Live Backend API Skeleton to the Build Tracker Release Doctor with source receipt, account fixture, entitlement status, support-safe status, and release audit endpoint contracts; methods; routes; owners; accepted fields; blocked fields; response states; hold rules; sequence; no-go lines; receipt fields; dedicated copy action; Build Tracker and Release Doctor brief coverage; proof archive roll-forward with v491 commit; next-batch planner roll-forward; and release markers rolled forward to v492.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`, `scripts/static-check.mjs`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check; v492 marker scan.
- Known risks: Live Backend API Skeleton is a static endpoint contract only; production still needs actual server implementation, authentication, authorization, durable storage, schema validation, rate limiting, audit logging, privacy/security/legal review, deployment verification, and live backend tests.

## NiveshNadi Phase 1 v491 Production Data Source Gate

- Version: `0.491.0`
- Data version: `20260707-v491-01`
- Changes made: Added Production Data Source Gate to the Build Tracker Release Doctor with AMFI scheme/NAV, AMC factsheet, SID/KIM, portfolio disclosure, TER, riskometer, and benchmark/category source families; owners; routes; cadence; receipt names; source proof and hold rules; sequence; no-go lines; receipt fields; dedicated copy action; Build Tracker and Release Doctor brief coverage; proof archive roll-forward with v490 commit; next-batch planner roll-forward; and release markers rolled forward to v491.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`, `scripts/static-check.mjs`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check; v491 marker scan; browser visual QA across desktop and mobile routes.
- Known risks: Production Data Source Gate is a static source-readiness contract only; production still needs live AMFI/AMC integrations, PDF extraction, parser quarantine, durable source storage, reviewer signoff workflow, correction/rollback automation, privacy/security/legal review, deployment verification, and live source ingestion tests.

## NiveshNadi Phase 1 v490 Payment Entitlement Proof Cabinet

- Version: `0.490.0`
- Data version: `20260707-v490-01`
- Changes made: Added Payment Entitlement Proof Cabinet to the Build Tracker Release Doctor with checkout, invoice, webhook, entitlement grant, refund rollback, support closeout, and redaction/audit gates; owners; routes; receipt names; replay rules; hold lines; no-go lines; receipt fields; dedicated copy action; Build Tracker and Release Doctor brief coverage; proof archive roll-forward; next-batch planner roll-forward; and release markers rolled forward to v490.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`, `scripts/static-check.mjs`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check; v490 marker scan.
- Known risks: Payment Entitlement Proof Cabinet is a static release-readiness contract only; production still needs payment provider integration, signed webhook verification, durable entitlement storage, invoice/refund reconciliation, support tooling, redaction scanners, privacy/security/legal review, deployment verification, and live payment tests.

## NiveshNadi Phase 1 v489 Visual QA CI Adapter

- Version: `0.489.0`
- Data version: `20260707-v489-01`
- Changes made: Added Visual QA CI Adapter to the Build Tracker Release Doctor with visual CI job rows for Build Tracker, Account Readiness, Backend Audit, and Mobile Cockpit; route and viewport markers; artifact policies; pass/fail gates; failure routing; outputs; receipt fields; dedicated copy action; Build Tracker and Release Doctor brief coverage; proof archive roll-forward; next-batch planner roll-forward; and release markers rolled forward to v489.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`, `scripts/static-check.mjs`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check; v489 marker scan.
- Known risks: Visual QA CI Adapter is a static automation contract only; production still needs a real CI runner, screenshot capture, baseline storage, perceptual diffing, artifact retention/deletion enforcement, reviewer workflow, deployment verification, and live visual regression tests.

## NiveshNadi Phase 1 v488 Support Operations Incident Drill

- Version: `0.488.0`
- Data version: `20260707-v488-01`
- Changes made: Added Support Operations Incident Drill to the Build Tracker Release Doctor with private-data exposure fear, deletion dispute, entitlement mismatch, stale queue, source correction, and refund confusion incident rows; freeze commands; support-safe replies; recovery receipts; closeout rules; sequence; no-go lines; receipt fields; dedicated copy action; Build Tracker and Release Doctor brief coverage; proof archive roll-forward; next-batch planner roll-forward; and release markers rolled forward to v488.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`, `scripts/static-check.mjs`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check; v488 marker scan.
- Known risks: Support Operations Incident Drill is a static operations rehearsal only; production still needs authenticated support tooling, real case queues, role permissions, incident automations, support SLAs, refund/payment integrations, redaction scanners, privacy/security/legal review, deployment verification, and live support tests.

## NiveshNadi Phase 1 v487 Backend Account Smoke Harness

- Version: `0.487.0`
- Data version: `20260707-v487-01`
- Changes made: Added Backend Account Smoke Harness to the Build Tracker Release Doctor with account vault, saved research, export, deletion, support repair, and entitlement smoke rows; request shapes; expected responses; idempotency rules; rollback proof; hold lines; no-private-data boundaries; sequence; no-go lines; receipt fields; dedicated copy action; Build Tracker and Release Doctor brief coverage; proof archive roll-forward; next-batch planner roll-forward; and release markers rolled forward to v487.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`, `scripts/static-check.mjs`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check; v487 marker scan.
- Known risks: Backend Account Smoke Harness is a static release-readiness contract only; production still needs authenticated account APIs, durable storage, real export and deletion workers, payment entitlement services, support tooling, redaction scanners, privacy/security/legal review, deployment verification, and live backend tests.

## NiveshNadi Phase 1 v486 Calm Executive Workspace Compression

- Version: `0.486.0`
- Data version: `20260707-v486-01`
- Changes made: Added Calm Executive Workspace Compression to the Build Tracker Release Doctor with a compact first-read layer for current answer, top blocker, next proof, 100% rule, priority bands, compression rules, receipt fields, dedicated copy action, Build Tracker and Release Doctor brief coverage, proof archive roll-forward, next-batch planner roll-forward, responsive styling for the compact strip, startup-safe render guards so one optional room cannot freeze the workspace at placeholders, static-check coverage for v482-v486 contracts, and release markers rolled forward to v486.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`, `scripts/static-check.mjs`, `styles.css`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check; v486 marker scan; browser visual QA across Build Tracker, Account Readiness, Backend Audit Receipts, and mobile main route.
- Known risks: Calm executive compression is a static first-read UI layer only; production still needs live data integrations, authenticated account custody, payment gateway proof, legal/privacy/security review, support tooling, CI visual QA, founder signoff, deployment verification, and live backend tests before any production-ready claim.

## NiveshNadi Phase 1 v485 Production Launch Proof Cabinet

- Version: `0.485.0`
- Data version: `20260707-v485-01`
- Changes made: Added Production Launch Proof Cabinet to the Build Tracker Release Doctor with live data, account custody, payment, legal, security, support, visual QA, and founder signoff gates; owners; required receipts; scores; hold lines; no-go lines; signoff rules; receipt fields; dedicated copy action; Build Tracker and Release Doctor brief coverage; proof archive roll-forward; next-batch planner roll-forward; and release markers rolled forward to v485.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check; v485 marker scan.
- Known risks: Production launch proof cabinet is a static release-readiness contract only; production still needs live data integrations, authenticated account custody, payment gateway proof, legal/privacy/security review, support tooling, CI visual QA, founder signoff, deployment verification, and live backend tests before any production-ready claim.

## NiveshNadi Phase 1 v484 Visual Runner Result Archive

- Version: `0.484.0`
- Data version: `20260707-v484-01`
- Changes made: Added Visual Runner Result Archive to the Build Tracker Release Doctor with route result rows, viewports, DOM markers, baseline and current hashes, console state, overflow state, retry state, reviewer state, release hold, image deletion receipt, share rules, receipt fields, dedicated copy action, Build Tracker and Release Doctor brief coverage, proof archive roll-forward, next-batch planner roll-forward, and release markers rolled forward to v484.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check; v484 marker scan.
- Known risks: Visual runner result archive is static release QA proof only; production still needs a real screenshot runner, hash comparison, CI integration, artifact storage/deletion enforcement, reviewer workflow, privacy/security/legal review, deployment verification, and live visual regression tests.

## NiveshNadi Phase 1 v483 Support Case Queue Telemetry

- Version: `0.483.0`
- Data version: `20260707-v483-01`
- Changes made: Added Support Case Queue Telemetry inside Account Readiness with queue counters, support case rows, age bands, freeze states, redaction state, support-safe status, escalation routes, receipt fields, dedicated copy action, Account Readiness brief coverage, proof archive roll-forward, next-batch planner roll-forward, and release markers rolled forward to v483.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check; v483 marker scan.
- Known risks: Support case queue telemetry is a static support-readiness contract only; production still needs authenticated support tooling, durable queue storage, real SLA timers, redaction scanners, incident workflow, role permissions, privacy/security/legal review, deployment verification, and live support tests.

## NiveshNadi Phase 1 v482 Account Lifecycle Smoke Receipts

- Version: `0.482.0`
- Data version: `20260707-v482-01`
- Changes made: Added Account Lifecycle Smoke Receipts inside Account Readiness with account shell, saved research, export, deletion, and support smoke lanes; owners; routes; allowed and blocked fields; pass rules; hold rules; receipt fields; dedicated copy action; Account Readiness brief coverage; proof archive roll-forward; next-batch planner roll-forward; and release markers rolled forward to v482.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check; v482 marker scan.
- Known risks: Account lifecycle smoke receipts are static backend-readiness proof only; production still needs authenticated account APIs, durable storage, real export and deletion workers, redaction scanners, support queue integration, permission enforcement, privacy/security/legal review, deployment verification, and live backend tests.

## NiveshNadi Phase 1 v481 Launch Proof Dashboard Polish

- Version: `0.481.0`
- Data version: `20260707-v481-01`
- Changes made: Added Launch Proof Dashboard Polish to the Build Tracker Release Doctor with launch proof lanes for static release, visual proof, account custody, payments, legal/security, and support; next proof wording; share answers; no-go lines; receipt fields; dedicated copy action; Release Doctor brief coverage; Build Tracker brief coverage; proof archive roll-forward; next-batch planner roll-forward; and release markers rolled forward to v481.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check; v481 marker scan; browser visual QA across Build Tracker, Account Readiness, Backend Audit Receipts, and mobile main route.
- Known risks: Launch proof dashboard is a static readiness summary only; production still needs real live-data integrations, authenticated account custody, payment gateway proof, legal/security/privacy review, support tooling, CI visual runner, deployment verification, and founder signoff before any public launch or production-ready claim.

## NiveshNadi Phase 1 v480 Visual Regression Runner Contract

- Version: `0.480.0`
- Data version: `20260707-v480-01`
- Changes made: Added Visual Regression Runner Contract to the Build Tracker Release Doctor with named route run envelopes, pass/hold rules, output states, final share gates, receipt fields, deletion proof, dedicated copy action, Release Doctor brief coverage, Build Tracker brief coverage, proof archive roll-forward, and release markers rolled forward to v480.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check; v480 marker scan.
- Known risks: Visual regression runner contract is a static release QA contract only; production still needs an actual capture runner, screenshot hashing service, perceptual diff engine, CI integration, storage/deletion enforcement, reviewer workflow, privacy/security/legal review, and deployment verification.

## NiveshNadi Phase 1 v479 Support Safe Account Status Console

- Version: `0.479.0`
- Data version: `20260707-v479-01`
- Changes made: Added Support Safe Account Status Console inside Account Readiness with public status rows, visible and hidden field policies, ticket links, escalation rules, reply boundaries, receipt fields, no-go rules, dedicated copy action, Account Readiness brief coverage, and release markers rolled forward to v479.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check; v479 marker scan.
- Known risks: Support-safe account status console is a static support contract only; production still needs authenticated support tooling, real case queues, role permissions, redaction scanners, incident freezes, support analytics, privacy/legal/security review, and deployment verification.

## NiveshNadi Phase 1 v478 Export Delete Backend Ticket Room

- Version: `0.478.0`
- Data version: `20260707-v478-01`
- Changes made: Added Export Delete Backend Ticket Room inside Account Readiness with export and deletion ticket rows, owners, accepted fields, blocked fields, acceptance proof, support-safe status, schema links, acceptance gates, receipt fields, no-go rules, dedicated copy action, Account Readiness brief coverage, and release markers rolled forward to v478.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check; v478 marker scan.
- Known risks: Export/delete backend ticket room is a static implementation contract only; production still needs real backend queues, authenticated account jobs, generated export files, deletion workers, idempotent retries, support tooling, redaction scans, privacy/legal/security review, and deployment verification.

## NiveshNadi Phase 1 v477 Account Object Schema Map

- Version: `0.477.0`
- Data version: `20260707-v477-01`
- Changes made: Added Account Object Schema Map inside Account Readiness with future account object families, schema IDs, allowed fields, blocked fields, retention owners, support visibility, deletion policy, receipt fields, launch rules, dedicated copy action, Account Readiness brief coverage, and release markers rolled forward to v477.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check; v477 marker scan.
- Known risks: Account object schema map is a static readiness contract only; production still needs real account storage, authentication, server-side schemas, migrations, redaction scanners, support permissions, deletion enforcement, privacy/legal/security review, and deployment verification.

## NiveshNadi Phase 1 v476 Custody API Readiness

- Version: `0.476.0`
- Data version: `20260707-v476-02`
- Changes made: Added Custody API Readiness inside Backend Audit Receipts with endpoint rows, idempotency keys, permission policies, audit events, support-safe response boundaries, receipt fields, no-go rules, dedicated copy action, Backend Audit brief coverage, release markers rolled forward to v476, and a QA shell hotfix that keeps the compact header, side rail, and workspace width from creating horizontal overflow.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`, `styles.css`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check; v476 marker scan; browser visual QA across Build Tracker, Account Readiness, Backend Audit Receipts, and mobile main route.
- Known risks: Custody API readiness is a static contract only; production still needs real authenticated endpoints, server-side idempotency, permission enforcement, append-only audit storage, redaction scans, support-safe response filtering, privacy/security/legal review, deployment verification, and continued visual regression comparison as the side rail grows.

## NiveshNadi Phase 1 v475 Baseline Compare Automation

- Version: `0.475.0`
- Data version: `20260707-v475-01`
- Changes made: Added Baseline Compare Automation to the Build Tracker Release Doctor with automated visual compare runs, failure thresholds, retry rules, receipt fields, deletion proof, dedicated copy action, Release Doctor brief coverage, and release markers rolled forward to v475.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check; v475 marker scan.
- Known risks: Baseline compare automation is a contract in the static prototype only; production still needs an actual runner, screenshot capture service, perceptual diff thresholds, artifact deletion enforcement, CI integration, reviewer workflow, privacy review, and deployment verification.

## NiveshNadi Phase 1 v474 Support Case Audit

- Version: `0.474.0`
- Data version: `20260707-v474-01`
- Changes made: Added Support Case Audit inside Account Readiness with support-safe case views, escalation windows, case receipts, reply rules, receipt fields, no-go rules, dedicated copy action, Account Readiness brief coverage, and release markers rolled forward to v474.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check; v474 marker scan.
- Known risks: Support audit is a readiness contract only; production still needs real support tooling, authenticated case queues, role-based permissions, private-data redaction scans, incident freezes, escalation workflows, support analytics, privacy/legal review, and deployment verification.

## NiveshNadi Phase 1 v473 Account Export Proof

- Version: `0.473.0`
- Data version: `20260707-v473-01`
- Changes made: Added Account Export Proof inside Account Readiness with export sections, manifest rows, redaction rules, receipt fields, no-go rules, dedicated copy action, Account Readiness brief coverage, and release markers rolled forward to v473.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check; v473 marker scan.
- Known risks: Export proof is a readiness contract only; production still needs real account storage, generated export files, authenticated download links, backend manifest generation, redaction scanners, retention deletion, support-safe status views, privacy/legal review, and deployment verification.

## NiveshNadi Phase 1 v472 Consent Migration Closeout

- Version: `0.472.0`
- Data version: `20260707-v472-01`
- Changes made: Added Consent Migration Closeout inside Account Readiness with proof gates, object-family closeout rows, owner signoff IDs, redaction scan IDs, rollback rules, receipt fields, no-go rules, dedicated copy action, Account Readiness brief coverage, and release markers rolled forward to v472.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check; v472 marker scan.
- Known risks: The closeout is a consent and custody contract only; production still needs real explicit-consent capture, account storage, export generation, backend dry-run writes, rollback execution, support-safe status views, private-data scans, privacy/legal review, and deployment verification.

## NiveshNadi Phase 1 v471 Custody Ticket Closeout

- Version: `0.471.0`
- Data version: `20260706-v471-01`
- Changes made: Added Custody Ticket Closeout inside Backend Audit Receipts with owner-signoff rows for every custody bridge ticket, accepted field counts, support-safe views, no-private-data scan IDs, delete-or-supersede receipt IDs, launch no-go rules, guardrails, dedicated copy action, Backend Audit brief coverage, Release Doctor memory rolled forward to v470, and a desktop section-heading fit guard so long toolbars no longer crush titles into vertical letters.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`, `styles.css`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check; v471 marker scan; local browser visual QA for backend heading fit, overflow, toolbar wrap, and closeout visibility
- Known risks: The closeout is a backend custody contract only; production still needs real account storage, permission checks, owner signoff, support tooling, delete/supersede execution, private-data scans, audit-log persistence, idempotent APIs, privacy/legal/security review, and deployment verification.

## NiveshNadi Phase 1 v470 Visual QA Baseline Store

- Version: `0.470.0`
- Data version: `20260706-v470-01`
- Changes made: Added Visual QA Baseline Store to the Release Doctor with route/viewport/DOM-marker baselines, screenshot-hash storage fields, comparison result fields, release-hold failure routing, raw-image deletion proof, dedicated copy action, Build Tracker and Release Doctor brief coverage, and Release Doctor memory rolled forward to v469.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check; v470 marker scan
- Known risks: The baseline store is a QA custody contract only; production still needs automated screenshot capture, stable baseline storage, visual diff comparison, reviewer signoff, CI failure routing, raw-image deletion receipts, privacy review, and secure artifact retention.

## NiveshNadi Phase 1 v469 Deletion Support Closeout

- Version: `0.469.0`
- Data version: `20260706-v469-01`
- Changes made: Added Deletion Support Closeout inside Account Readiness with support-safe request/running/closeout views, closeout receipts, reply template, escalation rules, receipt fields, dedicated copy action, Account Readiness brief coverage, and Release Doctor memory rolled forward to v468.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check; v469 marker scan
- Known risks: The support closeout is a rehearsal only; production still needs real account deletion workers, support permissions, notification delivery, redaction scans, retained-proof storage, privacy/legal review, recovery/escalation tooling, and audit-log enforcement.

## NiveshNadi Phase 1 v468 Receipt Owner Audit

- Version: `0.468.0`
- Data version: `20260706-v468-01`
- Changes made: Added Receipt Owner Audit inside Backend Audit Receipts with owner rows for every custody bridge ticket, support-safe status views, audit-boundary fields, escalation routes, stale-proof rules, blocked private-data language, dedicated toolbar copy action, full backend audit brief coverage, and Release Doctor memory rolled forward to v467.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check; v468 marker scan
- Known risks: The owner audit is an ownership and support-view contract only; production still needs actual backend owners, support permissions, audit-log storage, reviewer identity, escalation tooling, privacy/legal signoff, and enforcement against private-data leakage.

## NiveshNadi Phase 1 v467 Account Consent Migration Preview

- Version: `0.467.0`
- Data version: `20260706-v467-01`
- Changes made: Added Account Consent Migration Preview inside Account Readiness with explicit consent gates, export-before-sync proof, account vault dry-run requirements, delete and rollback support routes, migration object rows, receipt fields, blocked-data rules, dedicated copy action, Account Readiness brief coverage, and Release Doctor memory rolled forward to v466.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check; v467 marker scan
- Known risks: The preview is a consent and custody contract only; production still needs real account storage, explicit consent capture, export generation, migration workers, support redaction, deletion execution, rollback workflows, privacy/legal review, and backend audit receipts.

## NiveshNadi Phase 1 v466 Backend Custody Bridge

- Version: `0.466.0`
- Data version: `20260706-v466-01`
- Changes made: Added Backend Custody Bridge inside Backend Audit Receipts with backend-owned custody ticket IDs for saved research, review memory, source cleanup, memo handoff, and visual QA baseline proof; added bridge metrics, receipt fields, guardrails, proof-route buttons, dedicated copy action, full backend audit brief coverage, and Release Doctor memory rolled forward to v465.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check; v466 marker scan; local preview smoke and visual QA.
- Known risks: The bridge is a backend engineering contract only; production still needs real account storage, consent capture, deletion execution, source ingestion workers, visual CI storage, idempotent APIs, privacy review, support tooling, and reviewer sign-off.

## NiveshNadi Phase 1 v465 Visual Regression Handoff

- Version: `0.465.0`
- Data version: `20260706-v465-01`
- Changes made: Added Visual Regression Handoff to the Release Doctor with route-and-viewport baselines, comparison rules, release-hold failure routing, screenshot deletion boundaries, a copyable visual handoff, Build Tracker brief coverage, and Release Doctor memory rolled forward to v464.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check; v465 marker scan
- Known risks: Handoff is a QA contract only; production still needs screenshot automation, hash storage, CI baseline comparison, failure triage, screenshot deletion receipts, privacy review, and reviewer sign-off.

## NiveshNadi Phase 1 v464 Account Deletion Rehearsal

- Version: `0.464.0`
- Data version: `20260706-v464-01`
- Changes made: Added Account Deletion Rehearsal to Account Readiness with export preview, freeze sync, delete job, retained-proof, and support-notice steps, blocked-data list, closeout tests, dedicated copyable deletion rehearsal, and Account Readiness brief coverage; rolled Release Doctor memory forward to v463.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check; v464 marker scan
- Known risks: The rehearsal is a deletion-readiness model only; production still needs actual account storage, deletion workers, export files, support-safe notifications, retained-proof policy, legal retention review, audit logs, idempotency, and recovery/escalation tests.

## NiveshNadi Phase 1 v463 Saved Research Custody Map

- Version: `0.463.0`
- Data version: `20260706-v463-01`
- Changes made: Added Saved Research Custody Map to Account Readiness with memo receipts, review snapshots, source receipts, viewport proof, and dossier/export object families, each with keep fields, sync trigger, deletion rule, blocked private data, dedicated copyable custody map, and Account Readiness brief coverage; rolled Release Doctor memory forward to v462.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check; v463 marker scan
- Known risks: The custody map is a migration design only; production still needs authentication, encrypted account storage, consent capture, export preview, deletion execution, support redaction, audit logs, reviewer ownership, privacy review, and migration tests.

## NiveshNadi Phase 1 v462 Retention Action Router

- Version: `0.462.0`
- Data version: `20260706-v462-01`
- Changes made: Added Retention Action Router to the Release Doctor with one next action, route, proof lock, and hold condition for release proof, memo handoff, review memory, source cleanup, and viewport proof; rolled Release Doctor memory forward to v461.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check; v462 marker scan
- Known risks: The router coordinates retained proof surfaces only; production still needs account storage, source custody, actual deletion execution, reviewer identity, backend audit logs, automated visual regression, privacy review, and rollback evidence.

## NiveshNadi Phase 1 v461 Source Custody Deletion Receipts

- Version: `0.461.0`
- Data version: `20260706-v461-01`
- Changes made: Added Source Custody Deletion Receipts to the Source Receipt Vault live-data focus with supersede stale source, delete failed receipt, freeze claim surface, reviewer sign-off routes, dedicated copyable deletion-receipts note, and Source Vault brief coverage; rolled Release Doctor memory forward to v460.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check; v461 marker scan
- Known risks: Deletion receipts are a product cleanup model only; production still needs backend event storage, actual delete/supersede execution, reviewer identity, audit logs, source replacement binding, privacy review, and rollback evidence.

## NiveshNadi Phase 1 v460 Viewport Proof History

- Version: `0.460.0`
- Data version: `20260706-v460-01`
- Changes made: Added Viewport Proof History to the Release Doctor with compact phone, large phone, and tablet-bridge proof rows, retest triggers, retention policy, dedicated copyable viewport-history note, and Build Tracker brief coverage; rolled Release Doctor memory forward to v459.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check; v460 marker scan
- Known risks: Viewport proof history is release UI evidence only; automated screenshot comparison, device testing, screenshot deletion receipts, and production visual-regression gates are still future work.

## NiveshNadi Phase 1 v459 Review Memory Persistence

- Version: `0.459.0`
- Data version: `20260706-v459-01`
- Changes made: Added Review Memory Persistence to the Review Vault export polish with account-history receipt, owner/cadence rules, keep/sync/supersede/exclude policy, dedicated copyable memory note, and Review Vault export coverage; rolled Release Doctor memory forward to v458.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check; v459 marker scan
- Known risks: Review memory persistence remains a product custody plan; production still needs account auth, consent capture, deletion receipts, backend audit logs, reviewer ownership, and privacy/security review.

## NiveshNadi Phase 1 v458 Memo Receipt Persistence

- Version: `0.458.0`
- Data version: `20260706-v458-01`
- Changes made: Added Memo Receipt Persistence to the Decision Pack with a saved-research custody receipt, keep/sync/retire/exclude policy cards, dedicated copyable persistence note, and Decision Pack export coverage; rolled Release Doctor memory forward to v457.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check; v458 marker scan
- Known risks: Persistence is a product/custody plan only; durable account storage, consent, deletion events, backend audit logs, review-owner controls, and production privacy review are still future work.

## NiveshNadi Phase 1 v457 Retention Health Summary

- Version: `0.457.0`
- Data version: `20260706-v457-01`
- Changes made: Added a Retention Health Summary to the Release Doctor with proof-surface status, custody direction, private-data exclusion, a dedicated copyable retention health brief, and Build Tracker brief coverage; rolled Release Doctor proof memory forward to v456.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check; v457 marker scan
- Known risks: The summary maps proof retention posture only; durable account storage, source custody, deletion receipts, backend audit logs, and production reviewer sign-off remain future work.

## NiveshNadi Phase 1 v456 Live Data Receipt Retention

- Version: `0.456.0`
- Data version: `20260706-v456-01`
- Changes made: Added Live Data Receipt Retention inside the Source Receipt Vault with a source-proof retention receipt ID, latest-receipt keep rule, expired/superseded proof retirement, private-investor-data exclusion boundary, future backend custody note, and a dedicated copyable live-retention brief; rolled Release Doctor memory forward to v455.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check; v456 marker scan
- Known risks: Live-data retention still uses browser-local/demo receipt memory; production needs backend receipt custody, delete/supersede events, reviewer sign-off, licensed data feeds, and rollback evidence.

## NiveshNadi Phase 1 v455 Mobile Audit Retention

- Version: `0.455.0`
- Data version: `20260706-v455-01`
- Changes made: Added Mobile Audit Retention to the Release Doctor with a retention receipt ID, three-viewport keep rule, retest triggers, private-screenshot deletion boundary, future automated visual QA custody note, and a dedicated copyable retention note; rolled Release Doctor memory forward to v454.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check; v455 marker scan
- Known risks: Mobile retention records compact viewport proof only; it still does not replace browser visual QA, automated screenshot comparison, device testing, or live production evidence.

## NiveshNadi Phase 1 v454 Review Export Retention

- Version: `0.454.0`
- Data version: `20260706-v454-01`
- Changes made: Added Review Export Retention to the Review Vault export polish with a retention receipt ID, latest-six snapshot limit, delete-on-purpose-change rule, no-private-data exclusion boundary, and dedicated copyable retention note; rolled Release Doctor memory forward to v453.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check; v454 marker scan
- Known risks: Export retention remains browser-local and research-only; durable account retention, deletion receipts, review-owner consent, and backend custody still belong to the production account layer.

## NiveshNadi Phase 1 v453 Memo Handoff Receipt

- Version: `0.453.0`
- Data version: `20260706-v453-01`
- Changes made: Added a Memo Handoff Receipt inside the Decision Pack with handoff readiness verdict, retained fields, no-private-data retention boundary, hold-if state, and a dedicated copyable receipt; rolled release proof memory forward to v452.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check; v453 marker scan
- Known risks: The receipt organizes browser-local memo context only; it still depends on account-backed saved research, source verification, review dates, and user-written reasons before durable production memory exists.

## NiveshNadi Phase 1 v452 Proof Archive Retention

- Version: `0.452.0`
- Data version: `20260706-v452-01`
- Changes made: Added Proof Archive Retention to the Release Doctor with latest-five retention, oldest-receipt retirement, no-private-data fields, founder review cadence, and a dedicated copyable archive-retention receipt; rolled release proof memory forward to v451 and prepared the remaining retention batch.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check; v452 marker scan
- Known risks: Archive retention proves release lineage only; it still does not certify live data, account storage, payments, legal review, security posture, or production launch readiness.

## NiveshNadi Phase 1 v451 Live Data Readiness Focus

- Version: `0.451.0`
- Data version: `20260706-v451-01`
- Changes made: Added a Live Data Readiness Focus inside the Source Receipt Vault with source-date, citation, TER/expense, holdings, riskometer, receipt-field, production-envelope, blocker, and copyable handoff checks; rolled Release Doctor memory forward to v450 and prepared the next batch plan.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`, `styles.css`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check; browser visual QA across desktop, tablet, and mobile before final push
- Known risks: The focus organizes source proof but still uses demo/browser-local receipt data until production source jobs, licensed feeds, backend receipts, reviewer sign-off, and legal launch controls are connected.

## NiveshNadi Phase 1 v450 Mobile Calm Audit

- Version: `0.450.0`
- Data version: `20260706-v450-01`
- Changes made: Added a copyable Mobile Calm Audit to the Release Doctor, rolled release proof memory forward to v449, narrowed the remaining batch plan to v451, and hardened phone-width command/action grids against crowded controls and horizontal drift.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`, `styles.css`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check
- Known risks: The audit defines and supports mobile layout discipline, but full assurance still depends on the final browser visual QA pass across desktop, tablet, and phone before publishing the batch.

## NiveshNadi Phase 1 v449 Saved Review Export Polish

- Version: `0.449.0`
- Data version: `20260706-v449-01`
- Changes made: Added a share-safe Review Vault export card, export scoring, short copyable review brief, included/excluded field lists, line budget, and private-data boundary.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check
- Known risks: Export polish summarizes browser-local review memory only; it still depends on the user avoiding private notes and verifying live source data before relying on a saved review.

## NiveshNadi Phase 1 v448 Search-to-Memo Handoff

- Version: `0.448.0`
- Data version: `20260706-v448-01`
- Changes made: Added a Search-to-Memo Handoff to the Decision Pack with selected-fund context, search phrase, top blocker scoring, next route, memo prompt, receipt fields, and a dedicated copy action.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check
- Known risks: The handoff reduces repeated typing but still depends on the investor writing and reviewing the final memo reason before treating it as durable research.

## NiveshNadi Phase 1 v447 Release Proof Archive

- Version: `0.447.0`
- Data version: `20260706-v447-01`
- Changes made: Added a Release Proof Archive to the Release Doctor with the previous five verified release receipts, release keys, commits, proof notes, retention boundary, and a copyable archive brief.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check
- Known risks: The archive proves static release lineage only; it does not certify live data, accounts, payments, legal, or security launch readiness.

## NiveshNadi Phase 1 v446 Next Batch Planner

- Version: `0.446.0`
- Data version: `20260706-v446-01`
- Changes made: Added a copyable Next Batch Planner to the Release Doctor with five route-linked candidate releases: release proof archive, search-to-memo handoff, saved review export polish, mobile calm audit, and live-data readiness focus.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check; browser visual QA across desktop, tablet, and mobile before final push
- Known risks: The next batch plan is intentionally a product plan, not committed scope; final implementation order may change after the next inspection pass.

## NiveshNadi Phase 1 v445 Workspace Fit Guard

- Version: `0.445.0`
- Data version: `20260706-v445-01`
- Changes made: Added a Workspace Fit Guard to the Release Doctor and copied release output; hardened sticky-header/side-rail clearance with a minimum rail offset, stable scrollbar gutter, and contained rail scrolling.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`, `styles.css`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check
- Known risks: CSS hardening reduces overlap risk, but final assurance still depends on the browser visual QA pass across the selected desktop, tablet, and mobile viewports.

## NiveshNadi Phase 1 v444 Visual QA Receipt

- Version: `0.444.0`
- Data version: `20260706-v444-01`
- Changes made: Added a copyable Visual QA Receipt to the Release Doctor with desktop, tablet, and mobile viewport checks, a visual QA receipt ID, and known-risk wording.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check
- Known risks: The receipt defines the viewport checks; the actual browser pass is still executed once the five-version batch reaches its final candidate.

## NiveshNadi Phase 1 v443 Release Batch Checklist

- Version: `0.443.0`
- Data version: `20260706-v443-01`
- Changes made: Added a compact Release Doctor checklist for source alignment, static/security checks, visual QA, deploy stamp proof, and known-risk notes; included the checklist in copied Build Tracker and Release Doctor output.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check
- Known risks: The checklist records required proof, but the browser visual QA pass is still executed at the end of the five-version batch before final publishing.

## NiveshNadi Phase 1 v442 Batch Changelog Ledger

- Version: `0.442.0`
- Data version: `20260706-v442-01`
- Changes made: Added a durable changelog ledger and static release checks that require each current release entry to include changes, files changed, checks run, and known risks.
- Files changed: `CHANGELOG.md`, `README.md`, `app.js`, `docs/BUILD_TRACKER.md`, `index.html`, `package.json`, `release-stamp.txt`, `scripts/static-check.mjs`
- Checks run: `node --check .\app.js`; `npm.cmd run check`; Git diff hygiene check
- Known risks: This release records release evidence only; browser visual QA is still handled as a separate batch verification step before publishing the full five-version batch.
