# Publisher Handoff Kit

The Publisher Handoff Kit is a founder workflow inside the Nadi Build Tracker. Its job is to make every prototype release easy to move into GitHub Desktop without accidentally publishing the wrong folder, stale assets, or internal release packaging.

The kit points to the runtime-only folder created during packaging. That folder contains the files GitHub Pages needs: `index.html`, `app.js`, `styles.css`, `package.json`, `README.md`, `LICENSE`, `SECURITY.md`, `site.webmanifest`, `robots.txt`, `.nojekyll`, `assets`, and `data`. The release parent folder and the zip are handoff artifacts, not the content to paste into the GitHub Pages repository.

The intended flow is simple:

1. Open the `release-vNNN\github-pages-runtime-only` folder.
2. Copy all contents into the GitHub Desktop repository folder for `niveshnadi-mutual-fund-desk`.
3. Review the changed files in GitHub Desktop.
4. Commit with the release message shown by the kit.
5. Push origin and open GitHub Pages with a fresh cache key.

The kit also creates a copyable handoff note so the founder can keep the publishing steps, folder paths, release zip name, commit message, and Pages verification URL in one place. It does not change investor-facing research logic, advice boundaries, live data readiness, payment readiness, legal readiness, or security posture. It is a release discipline tool for the prototype builder.
