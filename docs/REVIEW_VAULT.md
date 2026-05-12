# Review Vault

Review Vault is the Phase 1 v28 browser-local memory layer for NiveshNadi. It lets a retail investor save Portfolio Review Room snapshots and compare whether review discipline is improving over time. Phase 1 v29 adds Investor Record Desk, which can use the latest vault snapshot as the source for a clean review record.

## What It Does

- Saves local snapshots of review score, focus, posture, review date, selected fund names, review queue, drift, evidence, TER, triggers, and attention count.
- Shows score, evidence, and drift deltas from the prior snapshot.
- Keeps the latest queue and tracked fund list visible so the user can return to unfinished research.
- Copies a Review Vault brief for a journal, decision pack, or offline record.
- Feeds compact snapshot data into Investor Record Desk without exposing free-form review notes.
- Lets the user clear all saved snapshots from the browser.

## Privacy Boundary

The vault uses the `niveshnadi-review-vault` local storage key. It does not store PAN, folio, CAS text, transaction history, account credentials, distributor identifiers, or client data. To reduce sensitivity, the vault stores a note status instead of storing the free-form Portfolio Review Room note.

## Compliance Boundary

The vault is a workflow memory tool. It can say whether review discipline improved or worsened. It must not say that a higher score approves, certifies, recommends, or clears a transaction. It should keep the language around review, evidence, source date, drift, cost, behavior, and next checkpoint.

## Paid Value Later

Nadi Plus can sync vault history, compare review versions, export PDF review histories, and attach snapshots to decision packs after authentication and retention controls are designed. The value is research memory and habit formation, not personalized investment advice.
