# Web-Automation-with-Cypress
Web Automation with Cypress based on automationexercise.com site

## Overview

This repository contains Cypress end-to-end tests (see `cypress/e2e`). Below are the essential steps to get started.

Prerequisites

- Node.js (LTS recommended). Check with `node --version`.
- npm (comes with Node).

Quick install (PowerShell)

```powershell
git clone https://github.com/VitorVieiraSilva/Web-Automation-with-Cypress.git
cd Web-Automation-with-Cypress
npm install
```

Run tests

- Interactive test runner:

```powershell
npm run cy:open
```

- Headless (CI-friendly):

```powershell
npm test
```

- Run a single spec:

```powershell
npx cypress run --spec "cypress/e2e/login.cy.js"
```

Notes

- Scripts in `package.json`:
	- `cy:open` → `cypress open`
	- `test` → `cypress run`
- Use `cypress.env.json` or environment variables for secrets (don't commit secrets).

Quick troubleshooting

- Remove `node_modules` and reinstall if things break:

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json -ErrorAction SilentlyContinue
npm install
```

- If a browser won't launch, make sure a supported browser (Chrome, Edge, Firefox) is installed.
