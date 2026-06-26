# Data Roadmap

## Current state

The prototype uses demo data in `app.js` and metadata in `data/fund-universe.demo.json`. Phase 1 v13 adds the Data Readiness Room so each future source pipeline can be scored before it becomes investor-visible.

## Target data model

Each fund record should eventually include:

- Scheme code and ISIN.
- AMC and fund house metadata.
- Category based on current SEBI/AMFI classification.
- Direct and regular plan expense ratio.
- Benchmark and tracking information.
- Rolling returns, volatility, and drawdown.
- Portfolio holdings and sector exposure.
- Fund manager tenure and style notes.
- Exit load, lock-in, tax notes, and riskometer.
- Factsheet, SID, KIM, portfolio disclosure, benchmark, riskometer, and TER source links with source date and validation state.

## Priority integrations

1. AMFI category and NAV data.
2. AMC factsheet parser.
3. SID/KIM citation extractor.
4. Manual CAS-style portfolio entry.
5. Evidence Ledger source dates for AMFI, AMC factsheet, SID, KIM, benchmark, riskometer, TER, and portfolio disclosure records.
6. Data Readiness Room integration with field-level confidence, stale source flags, and citation checks.
7. MFCentral or MFU integration review.

## Evidence policy

Investor-facing fund claims must be tied to source records. Demo and imported data must be visibly labeled until verified. No live data claim should pass unless the Data Readiness Room can show source date, extraction status, field validation, citation path, and any stale-source warning.
