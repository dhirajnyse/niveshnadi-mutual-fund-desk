# Nadi Account Vault Blueprint

The Account Vault Blueprint translates the Phase 1 retail account plan into concrete saved-research storage boundaries. It defines the account-backed objects NiveshNadi can safely keep: profile context, saved research packs, watchlist triggers, review snapshots, entitlement state, redacted audit events, and export or deletion requests. These objects help an investor resume research without turning the platform into a broker, execution venue, distributor book, or personal financial record system.

The blueprint intentionally excludes PAN, folio numbers, CAS files, bank details, UPI details, card data, nominee information, tax documents, address data, ARN/EUIN, distributor client books, and private family or tax notes. Those fields belong either outside the product or inside a later Phase 2 consent architecture.

Before launch, each vault collection needs row ownership, encryption, backup rules, retention policy, and redacted support visibility. Paid plan access should be enforced by server-side entitlement state, not by browser flags. Account export should show what is included and what is excluded. Account deletion should clear saved research while leaving only a minimal non-sensitive completion receipt when legally required.

This document is a production planning artifact for the current static prototype. It does not approve live storage, payment processing, regulated advice, transaction execution, or distributor-client management.
