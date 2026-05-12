# Nadi Correction Notice Builder

The Nadi Correction Notice Builder is the public correction layer for NiveshNadi. It turns a claim-release or rollback concern into a clear notice package that can be shown on a fund page, user banner, release log, or internal reviewer note.

The builder exists because trust is not only about preventing mistakes. A serious research product also needs a calm, repeatable way to explain what changed, what did not change, who owns the correction, and which surfaces were affected.

## What it does

- Reads the current selected fund, latest claim release gate, claim release ledger context, and rollback console posture.
- Lets the product team choose audience, correction status, change type, tone, visibility, and owner.
- Produces a public wording draft for investors without personalized advice.
- Produces an internal reviewer note with release gate and rollback context.
- Lists affected surfaces and evidence checks before a corrected field is treated as current.
- Keeps a strict privacy boundary around PAN, folio, CAS, bank, account, contact, credential, and client identifiers.

## Notice posture

The builder calculates a notice readiness score and posture from:

- Correction status, such as investigating, corrected, reverted, or verified.
- Visibility, such as preview, single fund, category surface, or all public users.
- Rollback urgency and recovery score.
- Release gate evidence score.
- Change type risk, especially value, risk, cost, holdings, and source-date changes.
- Owner readiness, with compliance and product owners adding stronger release discipline.

Possible postures include Freeze notice, Rollback notice, Verified correction, Public correction notice, and Internal correction note.

## Public wording discipline

The public wording intentionally stays plain and limited. It explains that a field is being reviewed, corrected, reverted, or verified. It does not say a fund should be bought, sold, switched, increased, stopped, or treated as best.

The notice is a research-support communication. It should be attached to source dates, citation paths, release ledger entries, and reviewer status before launch.

## Guardrails

Correction notices must not include:

- PAN, folio, CAS, bank, account, contact, credential, or client identifiers.
- Personalized recommendation language.
- Return guarantee or best-fund language.
- Transaction instructions.
- Distributor-client workflow approval.

## Launch use

In live-data mode, every public correction should be tied to a source date, old value, corrected value, affected surface list, reviewer, owner, release ledger entry, and rollback decision. The Phase 1 static version demonstrates this workflow without storing personal investor data.
