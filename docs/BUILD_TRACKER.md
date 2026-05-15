# Nadi Build Tracker

The Nadi Build Tracker is a project-control layer for the prototype. It answers the founder question: which phase are we in, how close are we, what has already been built, what is launch-ready, and what is going to be implemented next. It sits inside the app so the product can be tested and the roadmap can be reviewed in the same workspace.

The tracker separates the work into build lanes: brand and static foundation, retail self-research cockpit, decision discipline and memo path, trust and evidence layer, portfolio review habits, launch and monetization, and Phase 2 distributor-client management. Each lane has a product-build score, launch-readiness score, current status, completed modules, and the next implementation target.

V123 marks Incident Receipt Replay as the active build lane. The tracker now points the next sprint toward alert delivery backend work after Backend Audit Receipts can show job IDs, import gate IDs, worker IDs, runbook IDs, alert route IDs, incident receipt IDs, incident replay IDs, closeout IDs, owner queues, acknowledgement windows, escalation paths, freeze actions, failed-run replay legs, expected rows, event chain, payload fields, retry policy, monitoring alerts, pause rules, rejected-row quarantine, rollback policy, saved receipt proof, reviewer release dependency, and audit-readiness blockers.

V124 moves the long phase detail into a dedicated Build Phases Room after the compact Build Tracker. The executive tracker now stays short with build progress, launch readiness, sprint cards, status counts, and a route into the phase room. The phase room carries phase cards, launch gates, completed-module lists, next moves, Phase 2 distributor boundary, and roadmap guardrails so the founder can still track pace without making the landing experience too long.

V125 ships Alert Delivery Backend inside Backend Audit Receipts. The tracker now treats the live-data alert path as a delivery problem, not only a routing or replay problem: alerts must fan out to Ops, Reviewer, Release Ops, and append-only audit channels; every attempt needs an idempotency key, delivery state, acknowledgement proof, retry policy, dead-letter queue, reviewer escalation, and redacted receipt fields before launch readiness can improve.

V126 ships Failed-Run Event Store inside Backend Audit Receipts. The tracker now moves the live-data lane from delivery proof into durable failure memory: every failed import needs a run envelope, parser log, rejected-row digest, event sequence, replay cursor, delivery receipt join, retention rule, and recovery blocker before the public surface can safely move again.

V127 ships Reviewer Sign-off Bridge inside Backend Audit Receipts. The tracker now treats failed-run recovery as a controlled reviewer handoff: the event store, delivery receipt, source receipt, replay cursor, reviewer posture, rollback or correction reference, release scope, and support-safe wording must agree before a frozen or corrected public surface can move.

V128 ships Rollback Evidence Store inside Backend Audit Receipts. The tracker now makes recovery proof visible: reviewer-approved rollback, correction, and resume decisions need evidence packets, old and proposed claim states, affected surface IDs, support-safe summaries, correction receipts, resume receipts, and surface recovery IDs before the launch lane can claim a source failure was safely resolved.

V129 ships Public Recovery Rehearsal inside Backend Audit Receipts. The tracker now shows that recovery proof must be rehearsed as a public-surface operation: frozen surfaces, correction previews, resume queues, support scripts, public surface diffs, release checks, and monitoring windows must line up before any visible claim is unfrozen, corrected, or resumed.

V130 ships Recovery Release Queue inside Backend Audit Receipts. The tracker now turns the recovery rehearsal into owned work: evidence intake, correction publish, support response, surface resume, monitor arm, and closeout review tasks need queue IDs, owners, SLAs, proof fields, release gates, and blockers before the launch lane can treat recovery as release-ready.

The percentages are intentionally separated. Product-build progress measures prototype depth and usable workflow coverage. Launch readiness stays lower until live data feeds, source dates, citation paths, authentication, subscriptions, backend storage, payment rails, audit logs, disclosures, security scanning, and professional review are production-ready.

For the founder, the tracker should remain through completion. It gives a clean pace signal version by version, keeps the current sprint visible, exposes live-data/account/payment/compliance launch gates, and creates a copyable roadmap brief for planning discussions. For future Phase 2, it should expand into distributor readiness with ARN, EUIN, PAN-consent boundaries, client book workflow, role-based access, and privacy controls.
