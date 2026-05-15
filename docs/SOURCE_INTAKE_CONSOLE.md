# Nadi Source Intake Console

Nadi Source Intake Console is the live-source onboarding desk for NiveshNadi. It sits after Data Readiness Room and Source QA Queue, then prepares one official source family at a time before anything is allowed to look current inside retail research workflows.

The console scores the selected source by intake path, file or API format, source age, evidence visibility, launch scope, field contract, citation contract, and validation runbook. It highlights whether the source is ready for dry run, still needs mapping QA, should remain intake design only, or must not launch. The output is copyable so data operations, research operations, compliance research, portfolio evidence, market data, and risk controls can hand off the same source-readiness record.

V119 adds the Production Source Import Gate inside the console. The gate creates a stable import gate ID, combines intake score with live data contract strength and saved source receipt proof, then decides whether the source is production-import ready, reviewer-controlled, or blocked. It also lists the required production controls: source URL or file hash, source date, schema version, parser version, accepted and rejected row counts, citation path, reviewer decision, rollback note, job sequence, release policy, and import blockers.

The gate is intentionally strict. A source can be good enough for a demo dry run but still blocked from production import if it has no saved source receipt, no visible citation path, stale source date, weak field contract, parser QA gap, manual-only import path, or missing reviewer release posture. This keeps public cards, scores, X-Ray outputs, dossiers, and decision packs from silently looking live before the audit trail exists.

The privacy boundary is strict. Source intake must use official public files, official URLs, or licensed data sources only. It should never collect PAN, folio, CAS, bank details, credentials, distributor client records, or private investor notes. The goal is to govern source quality, not to approve a fund, personalize advice, execute a transaction, or guarantee returns.
