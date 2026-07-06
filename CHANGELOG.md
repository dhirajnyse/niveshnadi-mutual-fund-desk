# NiveshNadi Changelog

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
