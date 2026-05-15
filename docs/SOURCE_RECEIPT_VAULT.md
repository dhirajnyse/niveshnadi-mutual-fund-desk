# Nadi Source Receipt Vault

The Source Receipt Vault is the browser-local audit trail for live-source dry runs. It saves source metadata after a dry-run rehearsal so NiveshNadi can show what was checked, which claim surface was affected, what stayed frozen, who should review it, and why the source was or was not ready for claim release.

Each source receipt stores source family, owner, cadence, source age, freshness score, parser confidence, citation visibility, dry-run status, release surface, claim surface, freeze rule, reviewer, blockers, validation checks, release label, and data version. It deliberately avoids PAN, folio, CAS, bank data, credentials, contact records, private notes, distributor client records, tax data, and user account files.

V118 adds Live Data Production Receipts. The latest saved or preview receipt is wrapped into a production envelope with an envelope ID, launch verdict, source date age, parser version, citation path, reviewer status, claim surface, launch surface posture, replay sequence, production blockers, and guardrails. This makes the question sharper: can this source safely update a live-looking public claim, or must it remain in preview/freeze?

The vault is not an investor advice record. It is product evidence. It helps the team prove that AMFI, AMC factsheet, SID/KIM, portfolio disclosure, benchmark, TER, and riskometer claims were not silently refreshed without source-date proof and reviewer release.

Launch use:

- save one receipt after each dry-run source rehearsal,
- compare release candidates, preview-only sources, frozen sources, and citation gaps,
- keep blockers visible before reviewer release,
- bind the latest receipt into a production envelope before public use,
- replay import, validation, claim-surface mapping, reviewer release, and backend audit events,
- route failed receipts to source refresh, parser QA, citation mapping, or claim rollback,
- preserve privacy by storing source metadata only.
