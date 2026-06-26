# Nadi Correction Notice Ledger

The Nadi Correction Notice Ledger is the audit trail for public correction notices. It extends the Correction Notice Builder by saving each generated notice as a browser-local product-control record.

The purpose is simple: if a research claim, source date, label, risk field, cost field, wording, or holdings surface changes, NiveshNadi should remember the correction story in a structured way. This gives the team a launch-safe review trail without storing investor identity or account data.

## What it stores

- Fund name, category, and risk band.
- Notice audience, status, change type, tone, visibility, owner, posture, notice score, and exposure risk.
- Public wording draft.
- Internal reviewer note.
- Affected claim surfaces.
- Evidence checks such as source date, citation path, release ledger entry, and reviewer visibility.
- Rollback posture and release-gate decision context.

## What it does not store

The ledger must never store PAN, folio, CAS, account credentials, bank data, client identifiers, contact data, family notes, free-form private investor notes, or distributor-client records.

This remains a product-control ledger, not a customer relationship management database.

## Workflow

1. Build a correction notice from the current fund and source-control posture.
2. Save the notice into the browser-local ledger.
3. Review the status mix, public visibility count, all-user exposure count, affected surfaces, and latest public wording.
4. Copy the ledger brief for release review.
5. Clear the browser-local ledger when testing, demoing, or preparing a clean release package.

## Launch use

Before live launch, this ledger should connect to a controlled backend audit table with role-based access, immutable timestamps, source evidence links, reviewer identity, and versioned release notes. Even then, the ledger should remain identity-light and should not become a place for PAN, folio, account, contact, or private investor data.

## Compliance posture

The Correction Notice Ledger supports transparency and operational discipline. It does not approve an investment, recommend a fund, provide personalized advice, execute a transaction, approve distributor workflow, or guarantee returns.
