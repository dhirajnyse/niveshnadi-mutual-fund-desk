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

## Lifecycle Worker Acceptance Tickets

V307 adds the backend handoff layer after account lifecycle receipts. It turns each recovery, session retention, vault restore, deletion closeout, and support notice receipt lane into a worker ticket with endpoint method and path, service, queue, payload fields, request/receipt/replay/redaction/monitor logs, monitor event, acceptance tests, closeout rule, blocker list, owner route, and a copyable worker-ticket packet.

## Account Lifecycle Worker Smoke Harness

V308 adds the release rehearsal layer after worker acceptance tickets. It turns recovery, session retention, vault restore, deletion closeout, and support notice worker tickets into smoke fixtures with command refs, artifact URIs, deterministic seed events, assertion checks, replay expectations, payload scans, monitor events, owner review states, deployment no-go rules, and a copyable smoke packet.

## Account Lifecycle Production Owner Gates

V309 adds the production owner-gate layer after smoke fixtures. It promotes each recovery, session retention, vault restore, deletion closeout, and support notice smoke result into an owner pass/fail gate with deploy command ref, production event, artifact, monitor proof, incident rollback posture, release-note evidence, support closeout, receipt fields, active blockers, and hard production no-go rules.

## Account Lifecycle Deploy Runbook Packet

V310 adds the deploy-runbook layer after production owner gates. It packages each lifecycle owner gate into a deploy step with command receipt ID, environment checklist, rollback contact, monitor window, release evidence, support closeout, rollout timeline, final no-go rule, and copyable deploy packet before the worker can move toward staged rollout approval.

## Account Lifecycle Rollout Approval Archive

V311 adds the rollout-approval layer after deploy runbooks. It binds recovery, session retention, vault restore, deletion closeout, and support notice deploy steps to staged rollout approvals, live monitor windows, release captain signoff, support readiness, rollback approvals, post-deploy evidence archive, receipt fields, active blockers, and final archive no-go rules before the worker can move into post-deploy incident drills.

## Account Lifecycle Post-Deploy Evidence Drill

V312 adds the post-deploy drill layer after rollout approval archives. It binds recovery, session retention, vault restore, deletion closeout, and support notice rollout approvals to incident drill replay, evidence retention policy, live support-readiness dashboard, command archive retention, monitor-to-closeout proof, drill closeout, receipt fields, active blockers, and final post-deploy no-go rules before retention enforcement work begins.

## Account Lifecycle Retention Enforcement Dashboard

V313 adds the retention enforcement layer after post-deploy drills. It binds recovery, session retention, vault restore, deletion closeout, and support notice drill receipts to incident command storage, retention-policy rows, support readiness reporting, monitor closeout jobs, command archive audits, enforcement queue IDs, receipt fields, active blockers, and final retention no-go rules before backend retention job fixtures begin.

V315 connects those enforcement lanes to Account Lifecycle Retention Job Fixtures inside Backend Audit Receipts. Recovery, session, restore, deletion, and support-notice lanes now project into scheduled worker names, queue names, deterministic seed events, support SLA checks, monitor closeout proof, command archive links, receipt fields, and fixture no-go rules before account widening can depend on retention jobs.

V316 connects those retention fixture rows to Account Lifecycle Support SLA Proof inside Backend Audit Receipts. Recovery, session, restore, deletion, and support-notice cases now need acknowledgement receipts, reviewed support-safe response copy, escalation owners, monitor handoff, closeout IDs, and SLA no-go rules before account support can widen.

The route keeps the first account launch deliberately small. A founder account pilot or paid beta cohort is safer than a broad public release because account recovery, saved research migration, entitlement repair, and support redaction can be tested with limited blast radius. The public beta cutover should stay blocked until auth provider selection, account database ownership, backups, export/delete jobs, payment entitlement, audit receipts, rate limits, monitoring, support workflows, and legal/compliance copy are ready.

The key product promise is simple: Phase 1 accounts remember self-research, not investment identity. Allowed data should be limited to email or login identifier, research profile context, saved packs, watchlist, review metadata, dossiers, entitlement state, export receipts, deletion receipts, and redacted support receipts. PAN, folio, CAS, bank data, card data, UPI credentials, nominees, ARN/EUIN, distributor client books, and personalized advisory records stay outside the retail account route.

Every launch route dry run should produce account audit receipts. Important receipts include auth provider selection, session policy, account shell creation, research vault migration, entitlement join, export request, delete request, support redacted view, recovery request, and Phase 2 firewall validation. These receipts should be backend-owned in a future implementation and should not rely on browser-local state as the source of truth.

V304 connects this route to Account Vault Endpoint Contracts. Account launch remains blocked until migration, restore, entitlement join, export, deletion, support repair, and audit export endpoints have payload contracts, receipt logs, replay or rollback proof, monitor events, owner acknowledgement, and blocked-data scans.

V305 connects the route to Production Account and Payment Smoke. The first paid account widening should wait until account-vault endpoints, provider webhooks, entitlement joins, receipt replay, privacy export/delete, support repair, and payment reconciliation all have smoke fixture proof and release no-go checks inside Backend Audit Receipts.

V306 then requires account lifecycle receipts. Recovery, session issuance, saved-research restore, deletion closeout, and support notices must produce backend-owned proof before the first paid account cohort treats account access as operational.

V307 then requires worker acceptance tickets. Recovery, session, restore, delete, and notice receipts must map to queueable backend work with endpoint contracts, payload scans, receipt logs, replay logs, redaction logs, monitor events, owner acknowledgement, and closeout tests before engineering starts implementation.

V308 then requires lifecycle smoke fixtures. Recovery, session, restore, delete, and notice workers must pass command-backed smoke assertions with request logs, receipt logs, replay logs, redaction logs, monitor events, owner review, artifact proof, and deployment no-go checks before a production owner gate can treat them as release candidates.

V309 then requires production owner gates. Recovery, session, restore, delete, and notice workers must have named owner pass/fail decisions, deploy command refs, rollback posture, release-note evidence, support closeout receipts, and hard production no-go checks before they can move into a deploy runbook packet.

V310 then requires a deploy runbook packet. Recovery, session, restore, delete, and notice workers must have command receipts, server environment checks, rollback contacts, monitor windows, release evidence, support comms, release captain closeout, and final production no-go rules before staged rollout approval can begin.

V311 then requires a rollout approval archive. Recovery, session, restore, delete, and notice workers must have staged rollout approval, live monitoring, release captain signoff, support readiness, rollback approval, command receipt archive, and post-deploy evidence fields before post-deploy incident drills can begin.

V312 then requires a post-deploy evidence drill. Recovery, session, restore, delete, and notice workers must replay incidents, retain command and approval evidence, show support-readiness dashboard state, close monitor windows, and record drill closeout before account widening depends on the lifecycle workers.

V313 then requires retention enforcement. Recovery, session, restore, delete, and notice workers must have incident command storage, policy-table rows, support readiness reporting, monitor closeout jobs, command archive audits, and retention no-go clearance before backend retention jobs are treated as closeable.

The route also protects the Phase 2 roadmap. Mutual fund distributor workflows can come later, but they require separate consent, role-based access, ARN/EUIN handling, PAN-consent boundaries, client-book permissions, distributor audit trails, and regulatory review. The retail self-research launch should not accidentally become a distributor or advisory system.
