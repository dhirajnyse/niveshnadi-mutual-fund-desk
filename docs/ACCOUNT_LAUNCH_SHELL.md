# Nadi Account Launch Shell

The Account Launch Shell is the Phase 1 bridge between the browser-only research prototype and a real paid account experience. It does not introduce production authentication by itself; it defines the account states that must be true before login, saved research, entitlements, and support workflows are treated as launch-ready.

## Purpose

- Map the preferred authentication posture before engineering chooses the provider.
- Decide where research profiles, watchlists, dossiers, memos, vault snapshots, and reviewer receipts will be stored.
- Prepare a safe migration path from browser-local research into account-owned research records.
- Link subscription entitlement to the research workspace without storing PAN, folio, CAS, bank, card, or distributor client identifiers.
- Make export, deletion, and redacted support views explicit before paid users arrive.
- Keep Phase 2 distributor data outside the Phase 1 retail account boundary.

## Launch States

The app now models seven account launch states: account shell created, session issued, research profile synced, saved research migrated, entitlement linked, export/delete ready, and support view redacted. Each state has an event name, score, evidence requirement, guardrail, and blocker. This keeps account launch visible as a controlled readiness workflow rather than a hidden backend assumption.

V306 extends the launch route with Account Recovery and Retention Receipts. Account access is not launch-ready until recovery, session retention, vault restore, deletion closeout, and support notice receipts have explicit event names, proof fields, retention windows, blocked-data scans, and no-go rules.

V307 extends those receipts into Lifecycle Worker Acceptance Tickets. Account access is still not launch-ready until recovery, session, restore, deletion, and support notice workers have endpoint contracts, payload scans, queue names, logs, monitor events, acceptance tests, owner acknowledgement, and closeout rules.

V308 extends those worker tickets into Account Lifecycle Worker Smoke Harness. Account access is still not launch-ready until recovery, session, restore, deletion, and support notice workers have command-backed smoke fixtures, artifact URIs, seed events, assertion checks, replay proof, monitor events, owner review states, and deployment no-go rules.

## Guardrails

The shell intentionally stays research-only. It does not collect PAN, folio, KYC, bank details, distributor ARN/EUIN, client books, or transaction credentials. Before launch, the production implementation must add provider-specific authentication, encrypted storage policies, audit receipts, subscription entitlement checks, deletion workflow evidence, support access logs, and a written Phase 2 firewall for distributor workflows.
