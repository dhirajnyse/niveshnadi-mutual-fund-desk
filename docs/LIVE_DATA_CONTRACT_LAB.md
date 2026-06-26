# Nadi Live Data Contract Lab

The Live Data Contract Lab turns live mutual fund data work into a visible launch gate before any investor-facing claim is allowed to look current. It maps each official or licensed source family to an ingestion path, primary key, source date field, validation rules, freshness rule, citation requirement, and failure behavior.

Phase 1 stays research-only and demo-first. The lab does not collect PAN, folio, CAS, bank details, credentials, distributor client records, contact data, or private notes. Its job is to define what must be true before AMFI scheme and NAV data, AMC factsheets, SID/KIM documents, portfolio disclosures, TER, riskometer, or benchmark data can leave prototype mode.

Every contract should answer four launch questions:

- What official or licensed source is being used?
- Which fields can be displayed, and which fields remain hidden until validated?
- What source date, citation path, and extraction status will be shown or stored?
- What exact public behavior happens when the source is stale, mismatched, blocked by rights, or missing?

The intended path is source discovery, source-date capture, normalized contract schema, validation checks, source receipt, stale-source rule, preview release, and claim-release approval. If a source breaks, NiveshNadi should freeze the narrowest affected field, show demo or stale status clearly, keep rollback receipts, and avoid silent refreshes.

In V289, these contracts feed the Source Intake Pack. The pack reuses each contract's primary key, source date field, validation expectations, citation proof, and failure behavior so reviewers can see whether a source is ready for dry run, reviewer-controlled release, or continued freeze.
