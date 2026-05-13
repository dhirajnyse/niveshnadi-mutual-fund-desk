# Reviewer Release Binder

Reviewer Release Binder is the Phase 1 v91 bridge between saved reviewer decisions and the Claim Release Gate. The Reviewer Decision Ledger proves that a release, hold, freeze, or correction posture was saved. The Binder turns that saved decision into a practical release packet by mapping the source receipt, public surface, evidence lock, reviewer status, rollout scope, rollback note, and next route.

When the latest reviewer decision is approved, the Binder can apply the mapped values into the Claim Release Gate so the release reviewer does not have to manually translate the Workbench handoff. When the decision is a hold, freeze, or correction, the Binder keeps the next route pointed to Source QA, Source Drift, or Correction Notice workflow instead of making the surface look release-ready.

The Binder is still Phase 1 browser-local launch workflow metadata. It does not store PAN, folio, CAS, bank data, credentials, private investor notes, distributor client files, or transaction instructions. Before launch, this bridge should connect to backend audit receipts with immutable reviewer identity, source dates, old and new claim text, visible citation path, rollback reference, and correction-notice linkage.
