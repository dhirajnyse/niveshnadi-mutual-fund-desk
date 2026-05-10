# Evidence Ledger

Evidence Ledger is the trust layer for NiveshNadi. It maps the selected fund's visible research signals to the sources that must eventually support those signals before the product uses live data.

## Purpose

Retail investors need to know not only what a fund screen says, but where the information came from and whether it is current. The Evidence Ledger makes that discipline visible. It shows demo-mapped and planned source records for AMFI data, AMC factsheets, SID, KIM, portfolio disclosures, benchmark data, riskometer changes, and TER history.

## Current Prototype Behavior

The current version uses demo research fields only. For a selected fund, the ledger shows:

- Evidence readiness score.
- Nadi score and category context.
- Source cards for each required feed.
- Source cadence and field mapping.
- Launch gate for each source.
- Copyable evidence log.

This is not a live-data claim. It is a readiness map that prepares the product for source-backed research.

Phase 1 v13 adds the Data Readiness Room next to the Evidence Ledger. Evidence Ledger answers "what source supports this claim?" while Data Readiness Room answers "is that source pipeline fresh, validated, cited, and ready to launch?" Together they keep the product from showing live-looking research without source discipline.

## Launch Rule

Before any research signal is treated as live, the product should show:

- Source name.
- Source date.
- Citation path or document link.
- Extraction status.
- Whether the signal is fund-level, category-level, benchmark-level, or portfolio-level.

If the source date or citation path is missing, the UI should label the signal as demo, planned, stale, or needs review.

The Data Readiness Room should become the launch gate for this rule. Each feed should carry a freshness threshold, validation checklist, owner, mapped fields, citation posture, and launch blockers before evidence becomes current.

## Future Live Feeds

Recommended source stack:

- AMFI scheme master, NAV history, and AUM references.
- AMC monthly factsheet PDFs or structured factsheet feeds.
- SID and KIM documents with version dates.
- Monthly portfolio disclosure files.
- Benchmark and index metadata.
- Riskometer and total expense ratio history.

## Compliance Boundary

Evidence Ledger should improve transparency. It should not imply that a cited fund is recommended, suitable, or best for a named investor. The language should remain research-only and should support the broader compliance boundary described in `docs/COMPLIANCE_NOTES.md`.
