# NiveshNadi Changelog

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
