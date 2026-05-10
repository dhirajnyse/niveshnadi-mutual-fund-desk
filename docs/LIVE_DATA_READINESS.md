# Live Data Readiness Room

The Live Data Readiness Room is the Phase 1 v13 bridge between a demo research product and a source-backed mutual fund platform. It does not fetch live data yet. Instead, it defines the gate that every future AMFI, AMC, SID, KIM, portfolio disclosure, benchmark, riskometer, and TER feed must pass before NiveshNadi shows live claims to investors.

The room scores each source pipeline across source freshness, citation posture, launch mode, validation checks, and known blockers. This is important because mutual fund data can become misleading when a factsheet is stale, a benchmark is unlicensed, a portfolio disclosure date is hidden, or a field is extracted without visible confidence. The product should never treat a number as trustworthy simply because it is available.

Each pipeline has an owner, cadence, freshness threshold, mapped fields, validation checklist, and launch blockers. AMFI scheme and NAV data focuses on scheme identity and NAV dates. AMC factsheets focus on returns, expenses, managers, holdings, and riskometer context. SID and KIM documents focus on objective, loads, risk factors, and suitability language. Portfolio disclosures focus on holdings, sector map, issuer exposure, and debt quality. Benchmark feeds focus on index context and display rights. Riskometer and TER history focus on changes that should trigger investor review.

The compliance rule is simple: no live fund claim should appear without source date, extraction status, field validation, and citation path. Phase 1 must also avoid PAN, folio, CAS, ARN, EUIN, and client records until authentication, consent, storage, and regulatory workflows are designed. This keeps the product useful while preserving a clean boundary between education, self-research, and future advisory or distributor workflows.

Future versions should connect the Data Readiness Room to actual ingestion jobs, automated freshness warnings, field-level confidence scores, citation popovers, source diff history, and CI gates that block deployment when required source fields are missing or stale.
