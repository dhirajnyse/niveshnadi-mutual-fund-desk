# Nadi Privacy Control Room

The Nadi Privacy Control Room is the Phase 1 transparency layer for browser-local data. As the product grows into saved reviews, dossiers, receipts, watchlists, alerts, briefing snapshots, and research memory, the user needs one clear place to see what the prototype has stored on the current device.

In this static release, the room reads only NiveshNadi local-storage keys in the browser. It shows active buckets, record counts, approximate storage size, free-text attention, and a copyable privacy report. It also offers per-bucket clearing and a deliberate all-local-research clear action. These controls are intentionally scoped to the current browser only.

## V110 Export/Delete Execution Board

V110 adds an operating view for the future account launch route. The board converts the privacy promise into a visible sequence: export preview, export request receipt, readable research bundle, delete preview, deletion job, completion receipt, retention rule, redaction pass, and support-safe status.

The board remains a prototype dry run. It does not create a production backend job, download bundle, account-level delete queue, or immutable receipt. It does show the fields and blockers the backend must satisfy before paid accounts can rely on export and deletion controls.

The V110 execution route keeps the Phase 1 boundary clear: exported data should include only research objects and metadata the user can inspect, while deletion should clear saved research and retain only minimal non-sensitive completion proof. PAN, folio, CAS, bank, payment, contact, ARN/EUIN, distributor client-book, and private support text remain excluded.

Phase 1 does not store PAN, folio, CAS, bank details, account credentials, ARN, EUIN, distributor client records, contact details, uploaded documents, or execution instructions. The app is still a research workflow prototype and does not transmit these browser-local artifacts to a server.

Before NiveshNadi adds login, cloud sync, payments, portfolio import, distributor workflows, or client management, this model must be upgraded into a full privacy architecture: explicit consent, account-level export and deletion, encryption strategy, retention policy, audit logs, role-based access, client-data separation, and regulatory review for the Phase 2 distributor desk.
