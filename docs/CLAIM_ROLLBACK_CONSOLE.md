# Nadi Claim Rollback Console

The Nadi Claim Rollback Console is the recovery layer after a release decision has been saved. The Claim Release Gate decides whether a public research claim can be released, and the Claim Release Ledger preserves that decision. The rollback console handles the next operational question: what should happen if a released or previewed claim later looks stale, wrong, confusing, poorly worded, or affected by an extraction problem.

The console combines the latest saved ledger entry, the current release gate posture, issue trigger, severity, public exposure, rollback action, notice mode, and owner. It then produces a posture such as immediate rollback, freeze and correct, correction note, or monitor only. This keeps public claim repair disciplined: hide or freeze the affected surface first when risk is high, verify source evidence and prior approved value, choose whether a user-visible correction is needed, and then save the repaired decision back into the release ledger.

The rollback note should capture issue trigger, old claim, replacement claim, source date, citation path, affected public surfaces, reviewer, owner, notice mode, and linked ledger entry. This is product-control evidence only. It does not approve an investment, transaction, recommendation, tax view, distributor workflow, or return expectation.

The privacy boundary is strict. Rollback records must not store PAN, folio number, CAS text, bank data, account credentials, distributor client records, contact details, or private investor notes.
