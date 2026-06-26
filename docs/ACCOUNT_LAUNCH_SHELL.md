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

## Guardrails

The shell intentionally stays research-only. It does not collect PAN, folio, KYC, bank details, distributor ARN/EUIN, client books, or transaction credentials. Before launch, the production implementation must add provider-specific authentication, encrypted storage policies, audit receipts, subscription entitlement checks, deletion workflow evidence, support access logs, and a written Phase 2 firewall for distributor workflows.
