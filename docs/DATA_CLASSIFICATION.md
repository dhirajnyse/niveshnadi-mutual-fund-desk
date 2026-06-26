# Data Classification

NiveshNadi should collect the least data needed for the job. This is especially important because future phases may touch PAN, distributor identity, client portfolios, and financial behavior.

## Classes

| Class | Examples | Current Status | Storage Rule |
| --- | --- | --- | --- |
| Public product data | Demo fund names, categories, educational copy, pricing copy | Used today | May live in static files |
| Local research notes | Journal entries, decision-pack reason, watchlist choices, alert triggers | Used today | Browser local storage only, no PAN or client data |
| Local profile inputs | Suitability Passport horizon, risk comfort, liquidity need, SIP budget, experience, emergency buffer | Used today | In-memory only unless the user later opts into saved history |
| Local change-review inputs | Switch Decision Lab concern, holding period, SIP amount under review, conviction, friction | Used today | In-memory only unless the user later opts into saved history |
| Local blueprint inputs | Portfolio Blueprint Lab fund weights, draft SIP amount, horizon, style, review cadence | Used today | In-memory only unless the user later opts into saved history |
| Local rebalance inputs | Rebalance Guard current weights, corpus value, future SIP route, tolerance band, review mode | Used today | In-memory only unless saved as a generic watchlist review trigger |
| Local portfolio-review inputs | Portfolio Review Room focus, review date, conviction, and review note | Used today | In-memory only unless saved as a generic watchlist review trigger |
| Local review-vault snapshots | Review score, focus, posture, selected fund names, queue items, evidence score, drift, TER, trigger counts, note status | Used today | Browser local storage only; do not store free-form note text or identifiers |
| Local investor review records | Record label, stance, audience, boundary, record code, score, review date, compact metrics, fund names, queue items, and guardrails | Used today | Browser local storage only; do not store PAN, folio, CAS text, contact data, or client identifiers |
| Local research dossiers | Dossier label, mode, depth, boundary, selected fund names, categories, risk bands, scores, evidence score, review score, section summaries, and review queue items | Used today | Browser local storage only; do not store PAN, folio, CAS text, contact data, client identifiers, or free-form private notes |
| Local review-rhythm inputs | Review focus, cadence, primary review date, review note | Used today | In-memory unless saved as a watchlist review trigger |
| Account data | Name, email, phone, password credentials, login sessions | Future | Server-side only, encrypted where appropriate, secure sessions |
| Investor identifiers | PAN, KYC references, folio references, CAS metadata | Future restricted | Never in local storage; encrypted, masked, access-controlled |
| Distributor identifiers | ARN, EUIN, distributor PAN, team membership | Future restricted | Server-side with role-based access and audit trail |
| Portfolio records | Holdings, transaction history, SIP/STP details, CAS imports | Future restricted | Server-side, encrypted, consent-based, export-controlled |
| Payment records | Plan, invoice, tax data, payment status | Future restricted | Use hosted payment provider; do not store card data |
| Operational logs | Login events, export events, admin changes, API errors | Future restricted | Redact sensitive data and define retention |

## Current Local Storage Keys

The current prototype may use only these browser-local keys:

- `niveshnadi-journal`
- `niveshnadi-watchlist`
- `niveshnadi-alerts`
- `niveshnadi-review-vault`
- `niveshnadi-investor-records`
- `niveshnadi-research-dossiers`

These keys must not contain PAN, ARN, EUIN, folio numbers, phone numbers, emails, CAS text, payment identifiers, or production access tokens.

The Suitability Passport, Switch Decision Lab, Portfolio Blueprint Lab, Rebalance Guard, Portfolio Review Room, and Review Rhythm Board currently keep profile, change-review, blueprint, rebalance, portfolio-review, and rhythm form fields in page memory only. If the user saves a rhythm, drift, or portfolio-review trigger, it uses the existing `niveshnadi-alerts` local storage key. Review Vault stores compact review snapshots in `niveshnadi-review-vault` without free-form note text. Investor Record Desk stores compact review records in `niveshnadi-investor-records` without PAN, CAS, account, contact, or client data. Research Dossier Builder stores compact dossier snapshots in `niveshnadi-research-dossiers` without identity data or free-form private notes. If saved passport, switch, blueprint, rebalance, portfolio-review, or rhythm history is added later, it must use local storage only for non-identity research inputs until account storage is designed.

## Data Minimization Rules

- Ask for less data first.
- Prefer user-controlled research inputs over identity data.
- Do not collect PAN until there is a clear feature, legal basis, retention rule, and security design.
- Do not collect distributor client data until Phase 2 access control and audit logs exist.
- Do not keep data forever by default; every stored class needs a retention decision.

## Masking Rules

Future restricted identifiers should be masked by default:

- PAN: show only the last four characters unless the user explicitly reveals it.
- Phone: show only the last four digits.
- Email: mask the local part when displayed in admin or support tools.
- ARN/EUIN: show only where needed for compliance context.

## Local Storage Ban List

Never store the following in browser local storage:

- PAN.
- ARN or EUIN.
- Passwords.
- Session tokens.
- API keys.
- Payment identifiers.
- CAS file contents.
- Folio numbers.
- Client names attached to regulated identifiers.

## Release Rule

If a new feature adds a data field, classify it here before the code ships. If the field is restricted, the feature must have server-side storage, access control, encryption, audit logs, and a retention rule before launch.
