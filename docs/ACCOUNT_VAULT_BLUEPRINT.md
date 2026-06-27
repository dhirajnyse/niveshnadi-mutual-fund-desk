# Nadi Account Vault Blueprint

The Account Vault Blueprint translates the Phase 1 retail account plan into concrete saved-research storage boundaries. It defines the account-backed objects NiveshNadi can safely keep: profile context, saved research packs, watchlist triggers, review snapshots, entitlement state, redacted audit events, and export or deletion requests. These objects help an investor resume research without turning the platform into a broker, execution venue, distributor book, or personal financial record system.

V148 adds Account Vault Limits. The vault now reads the Entitlement Access Matrix and shows how each plan controls saved packs, watchlist alerts, dossiers, share-safe exports, future live refresh, support repair, and open screener access. Each limit names the storage row, receipt gate, write/freeze behavior, and source route so account storage cannot quietly become an unlimited browser flag.

V149 adds Support Repair Joins. The vault now shows how each limit joins to a support-safe repair path: support case, entitlement receipt, vault object, audit field, reviewer role, rollback reference, and closeout posture. This keeps support from fixing account state through private notes, screenshots, or browser flags.

## Backend Storage Handoff Board

V109 adds a backend handoff layer for the vault. It does not create a production database; it makes the cutover contract visible before implementation. The board requires account row ownership, migration batch ID, handoff receipt, backup and restore proof, export bundle, deletion receipt, support redaction, entitlement join, and rollback marker before saved research can be treated as backend-owned.

## Account Vault Endpoint Contracts

V304 adds endpoint contracts after the backend storage handoff. The vault now names the backend routes that must exist before saved research can leave browser-local storage: migration, restore proof, entitlement join, account export, account deletion, support repair mutation, and audit export. Each endpoint carries method, path, service, owner, payload fields, request log, receipt log, replay or rollback log, monitor event, acceptance rule, no-go rule, and closeout receipt fields.

V305 connects these endpoint contracts to Production Account and Payment Smoke in Backend Audit Receipts. Migration, restore, entitlement join, export/delete, support repair, audit export, provider webhook, receipt replay, and reconciliation evidence now need a smoke fixture before paid account storage or payment-linked access can widen.

V306 connects the vault to Account Recovery and Retention Receipts in the Retail Account Launch Route. Vault restore proof, deletion closeout, and support notices now need lifecycle receipt IDs, proof fields, retention windows, rollback references, and blocked-data scans before account-backed saved research can be trusted.

V307 connects those lifecycle receipts to worker acceptance tickets. Vault restore and deletion cannot move into implementation until their workers have endpoint contracts, payload fields, request and receipt logs, replay or retained-proof behavior, redaction logs, monitor events, owner acknowledgement, and closeout no-go rules.

V308 connects those worker tickets to Account Lifecycle Worker Smoke Harness. Vault restore and deletion cannot move toward release until their smoke fixtures prove command refs, artifact URIs, deterministic seed events, state-hash assertions, replay or retained-proof behavior, redaction scans, monitor events, owner review, and deployment no-go rules.

V309 connects those smoke fixtures to Account Lifecycle Production Owner Gates. Vault restore and deletion cannot move toward deploy runbooks until owner pass/fail gates prove deploy command refs, incident rollback posture, release-note evidence, support closeout, receipt fields, and production no-go rules.

V310 connects those owner gates to Account Lifecycle Deploy Runbook Packet. Vault restore and deletion cannot move toward staged rollout until deploy steps prove command receipts, environment checks, rollback contacts, monitor windows, release evidence, support comms, production closeout, and final no-go rules.

V311 connects those deploy runbooks to Account Lifecycle Rollout Approval Archive. Vault restore and deletion cannot move beyond staged rollout until approval proof, live monitor windows, release captain signoff, support readiness, rollback approvals, post-deploy evidence, and archive no-go checks are complete.

The blueprint intentionally excludes PAN, folio numbers, CAS files, bank details, UPI details, card data, nominee information, tax documents, address data, ARN/EUIN, distributor client books, and private family or tax notes. Those fields belong either outside the product or inside a later Phase 2 consent architecture.

Before launch, each vault collection needs row ownership, encryption, backup rules, retention policy, and redacted support visibility. Paid plan access should be enforced by server-side entitlement state, not by browser flags. Account export should show what is included and what is excluded. Account deletion should clear saved research while leaving only a minimal non-sensitive completion receipt when legally required.

The vault limit model should become a server-side policy table before launch. Suggested fields are `feature_key`, `plan_id`, `limit_value`, `storage_collection`, `entitlement_state`, `receipt_gate`, `usage_count`, `write_state`, `freeze_reason`, and `support_repair_id`.

The support repair join model should become an append-only repair table before launch. Suggested fields are `support_case_id`, `feature_key`, `account_id_hash`, `vault_object_id`, `prior_state`, `proposed_state`, `source_receipt_id`, `reviewer_role`, `rollback_ref`, `user_notice_id`, `closeout_reason`, and `repair_status`.

This document is a production planning artifact for the current static prototype. It does not approve live storage, payment processing, regulated advice, transaction execution, or distributor-client management.
