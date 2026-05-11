# Data Classification

NiveshNadi should collect the least data needed for the job. This is especially important because future phases may touch PAN, distributor identity, client portfolios, and financial behavior.

## Classes

| Class | Examples | Current Status | Storage Rule |
| --- | --- | --- | --- |
| Public product data | Demo fund names, categories, educational copy, pricing copy | Used today | May live in static files |
| Local research notes | Journal entries, decision-pack reason, watchlist choices, alert triggers | Used today | Browser local storage only, no PAN or client data |
| Local profile inputs | Suitability Passport horizon, risk comfort, liquidity need, SIP budget, experience, emergency buffer | Used today | In-memory only unless the user later opts into saved history |
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

These keys must not contain PAN, ARN, EUIN, folio numbers, phone numbers, emails, CAS text, payment identifiers, or production access tokens.

The Suitability Passport currently keeps profile fields in page memory only. If saved passport history is added later, it must use local storage only for non-identity research inputs until account storage is designed.

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
