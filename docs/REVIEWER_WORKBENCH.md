# Nadi Reviewer Workbench

The Nadi Reviewer Workbench is the Phase 1 review desk that sits between the Surface Release Queue and the heavier claim release, rollback, and correction workflows. It turns the highest priority mapped surface into a human-readable reviewer handoff so public-facing research claims do not move only because a score or queue item looks healthy.

The workbench lets the operator select the next queue item, a release candidate, a preview proof item, or a freeze fix item. It then applies a reviewer posture: use the queue posture, approve for release gate, hold in preview, freeze and fix, or route into correction review. The evidence lock changes the review discipline between standard evidence pack, strict citation lock, and fast triage.

V290 adds Reviewer Release Rehearsal inside the workbench. The rehearsal shows the operating path from Source Intake Pack to reviewer decision, release binder, claim-release gate, and rollback or correction route. It also exposes launch hard stops so a reviewer can see why a source-backed claim remains rehearsal-only, held, or ready to bind.

V291 connects the rehearsal to Backend Source Receipt Job. Backend Audit Receipts now reads the rehearsal posture alongside source intake, import job, worker, alert delivery, failed-run store, reviewer sign-off, and rollback evidence so a source-backed claim can become an implementation-ready backend job only after the human review path is visible.

V292 carries reviewer posture into Scheduled Worker Receipt Contract. Worker tickets cannot close unless reviewer sign-off, release recovery, rollback evidence, correction posture, and affected public-surface state agree with the backend receipt chain.

V293 adds the closeout rehearsal after worker tickets are drafted. The reviewer posture must agree with failed-run replay, alert delivery proof, rollback evidence, recovery queue state, and affected surface state before a worker ticket can be marked closeout-ready.

V294 uses that reviewer posture inside Backend Implementation Handoff Pack. Engineering packets now include owner rules, permission tests, release dependencies, and launch blockers that keep reviewer sign-off, rollback evidence, correction posture, and affected public-surface recovery tied to the API contract.

V295 carries reviewer posture into Public Recovery Publish Drill. Investor-visible correction wording, Trust Center state, support-safe summary, freeze or resume proof, monitor window, and public receipt cannot move unless reviewer closeout agrees with the release scope and evidence lock.

V296 turns reviewer closeout into a CI smoke gate. The public recovery closeout fixture now checks investor notice, Trust Center state, support script, reviewer closeout, rollback evidence, monitor window, and no-private-data attestation before the backend release gate can pass.

Each generated handoff includes source receipt, surface status, strictness threshold, reviewer priority, evidence lock, due posture, owner, fallback language, and the next decision route. The output is intentionally product-release control only. It excludes PAN, folio, CAS, bank data, contact data, account credentials, private notes, and distributor client records.

Before launch, this desk should connect to saved reviewer decisions, source-date history, visible citation links, release receipts, rollback logs, and correction notice records. Until that live workflow exists, the workbench remains a transparent prototype layer that shows how review discipline should operate before a public metric, claim, research packet, or trust surface is treated as release-ready.
