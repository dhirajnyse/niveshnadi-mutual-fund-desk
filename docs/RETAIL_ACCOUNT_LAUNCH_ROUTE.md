# Nadi Retail Account Launch Route

The Retail Account Launch Route is the Phase 1 account milestone layer for moving NiveshNadi from a static self-research prototype toward a controlled retail account beta. It does not implement production login or database storage. Instead, it shows the founder and product team what must be true before real users can sign in, save research, attach paid entitlement, recover access, export data, delete data, and receive support.

## Founder Beta Checklist

V102 adds a compact Founder Beta Checklist inside the route output. It separates ready, dry-run, and blocked proof areas for invite boundary, authentication, account vault, export/delete, entitlement, support, monitoring, and the Phase 2 firewall.

## Founder Auth Decision Board

V108 adds the identity decision layer before storage and invite gates. It shows auth receipt, login method, recovery route, session policy, rate limits, abuse controls, support handoff, and blockers when the provider is undecided.

## Founder Storage Decision Board

V107 adds the storage decision layer before the beta checklist. It decides whether the selected storage route can carry saved research into a retail account vault, shows the storage receipt, schema contracts, migration rehearsal, export/delete posture, backup rule, and blockers for browser-local or manual storage.

## Founder Invite Gate

V103 converts the checklist into an invite decision. It shows the current invite cap, beta posture, review cadence, no-go conditions, and next proof needed before moving from founder-supervised users to a wider retail beta.

## Founder Invite Receipt

V104 adds a receipt layer for beta invite batches. It captures receipt ID, invite cap, route posture, owner, review rhythm, next proof, rollback trigger, no-go conditions, and the fields that remain blocked from Phase 1 retail accounts.

## Founder Support Drill

V105 turns the invite receipt into an operating drill. It shows support posture, response cadence, ticket queue, escalation path, pause trigger, and redaction rules before any invite batch widens.

## Founder Support Casebook

V106 turns the support drill into a first-case operating artifact. It creates a support case receipt, issue surface, response script, case workflow, redaction checklist, and beta pause decision so founder support can be tested without collecting PAN, folio, CAS, payment credentials, distributor fields, or private investment notes.

## Support Operations Handoff

V111 binds the support drill and casebook into a launch handoff. It shows support intake, redaction gate, support receipt, escalation ladder, pause rule, and support tooling readiness so founder-supervised support can move from manual judgement to receipt-bound operations before paid retail accounts widen.

## Account Recovery and Retention Receipts

V306 adds the account lifecycle layer after support operations. It turns auth recovery, session retention, vault restore, deletion closeout, and support notices into receipt lanes with event names, receipt IDs, proof fields, retention windows, owner routes, blocked-data guardrails, no-go rules, and a copyable lifecycle brief before paid account access can widen.

The route keeps the first account launch deliberately small. A founder account pilot or paid beta cohort is safer than a broad public release because account recovery, saved research migration, entitlement repair, and support redaction can be tested with limited blast radius. The public beta cutover should stay blocked until auth provider selection, account database ownership, backups, export/delete jobs, payment entitlement, audit receipts, rate limits, monitoring, support workflows, and legal/compliance copy are ready.

The key product promise is simple: Phase 1 accounts remember self-research, not investment identity. Allowed data should be limited to email or login identifier, research profile context, saved packs, watchlist, review metadata, dossiers, entitlement state, export receipts, deletion receipts, and redacted support receipts. PAN, folio, CAS, bank data, card data, UPI credentials, nominees, ARN/EUIN, distributor client books, and personalized advisory records stay outside the retail account route.

Every launch route dry run should produce account audit receipts. Important receipts include auth provider selection, session policy, account shell creation, research vault migration, entitlement join, export request, delete request, support redacted view, recovery request, and Phase 2 firewall validation. These receipts should be backend-owned in a future implementation and should not rely on browser-local state as the source of truth.

V304 connects this route to Account Vault Endpoint Contracts. Account launch remains blocked until migration, restore, entitlement join, export, deletion, support repair, and audit export endpoints have payload contracts, receipt logs, replay or rollback proof, monitor events, owner acknowledgement, and blocked-data scans.

V305 connects the route to Production Account and Payment Smoke. The first paid account widening should wait until account-vault endpoints, provider webhooks, entitlement joins, receipt replay, privacy export/delete, support repair, and payment reconciliation all have smoke fixture proof and release no-go checks inside Backend Audit Receipts.

V306 then requires account lifecycle receipts. Recovery, session issuance, saved-research restore, deletion closeout, and support notices must produce backend-owned proof before the first paid account cohort treats account access as operational.

The route also protects the Phase 2 roadmap. Mutual fund distributor workflows can come later, but they require separate consent, role-based access, ARN/EUIN handling, PAN-consent boundaries, client-book permissions, distributor audit trails, and regulatory review. The retail self-research launch should not accidentally become a distributor or advisory system.
