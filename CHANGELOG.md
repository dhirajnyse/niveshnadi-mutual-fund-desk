# NiveshNadi Changelog

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
