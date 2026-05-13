# Nadi Account Readiness Lab

The Account Readiness Lab defines what must be true before NiveshNadi opens paid retail accounts. Phase 1 accounts should remember research state only: selected funds, profile context, saved packs, watchlists, review snapshots, dossiers, memos, entitlement status, and export history. They should not collect PAN, folio numbers, CAS files, bank details, UPI details, card data, nominee information, tax documents, address data, ARN/EUIN, or distributor client-book information.

The lab separates four launch questions: how a user signs in, what research state is stored, how paid entitlement unlocks limits, and how the user exports or deletes account data. This keeps the low-fee retail product practical without turning it into an execution, advisory, or distributor-management system.

Before paid beta, the team should choose an auth provider, document session and recovery rules, define encrypted storage, wire entitlement status from the payment gateway, and test export/delete flows. Support and audit logs should record account, payment, entitlement, export, deletion, and correction events without exposing private notes.

Phase 2 distributor features stay outside this boundary. ARN/EUIN, PAN consent, MFD client books, household or family handoff, and role-based distributor permissions should require a separate consent model and cannot silently enter the Phase 1 retail account flow.
