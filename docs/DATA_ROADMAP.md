# Data Roadmap

## Current state

The prototype uses demo data in `app.js` and metadata in `data/fund-universe.demo.json`.

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
- Factsheet, SID, and KIM source links.

## Priority integrations

1. AMFI category and NAV data.
2. AMC factsheet parser.
3. SID/KIM citation extractor.
4. Manual CAS-style portfolio entry.
5. MFCentral or MFU integration review.

## Evidence policy

Investor-facing fund claims must be tied to source records. Demo and imported data must be visibly labeled until verified.
