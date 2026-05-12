# Nadi Receipt Vault

Nadi Receipt Vault is the proof-memory layer for NiveshNadi. It extends the Research Receipt by letting an individual investor save browser-local receipt snapshots over time and compare whether their research discipline is improving before they act, wait, switch, review, or avoid.

The vault stores receipt metadata only: selected fund name, category, risk band, receipt score, evidence score, claim flag count, behavior guard score, compare-set count, watch status, alert count, review date, next proof checks, release label, and data version. It deliberately does not store PAN, folio, CAS, bank data, credentials, client identifiers, tax data, distributor identifiers, or the free-form receipt note body.

The feature creates:

- a current receipt preview before anything is saved,
- a latest saved receipt hero with score and review date,
- receipt, evidence, claim, compare, and alert deltas from the prior saved receipt,
- recent receipt cards for fast self-review,
- copyable vault text for a clean research trail,
- and clear privacy boundaries for local-only storage.

Launch guardrails:

- Keep the vault browser-local until a full account, consent, retention, encryption, and deletion design exists.
- Do not convert saved receipts into advice, suitability approval, transaction instruction, or guaranteed-return language.
- Do not store personal identifiers or account documents in receipt snapshots.
- Use the vault as evidence of workflow discipline, not evidence that the selected fund is suitable for a specific person.
