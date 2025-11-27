# GitHub Codespaces Setup

This repo ships with a devcontainer for GitHub Codespaces. It provisions Node 20, Playwright deps, and recommended extensions (GitHub Copilot + Continue).

## 1) Enable Codespaces and Create One
- In GitHub: Repository → Code → Codespaces → Create codespace on main.
- Choose a 4-core machine if you plan to run Playwright/UI tests.

## 2) Add Codespaces Secrets (Environment Variables)
In GitHub: Settings → Codespaces → Secrets.
Add the following as needed (they’ll be available as env vars in the Codespace):
- ANTHROPIC_API_KEY, ANTHROPIC_ORG_ID (optional, for Continue)
- OPENAI_API_KEY, TOGETHER_API_KEY, GEMINI_API_KEY, XAI_API_KEY (optional, for Continue)
- DATABASE_URL (Neon Postgres connection string)
- ADMIN_CACHE_KEY (optional, for admin cache clear route)

These map directly to `.continue/config.json` and the server’s runtime.

## 3) First Boot
The devcontainer runs:
- `npm install`
- `npx playwright install --with-deps` (installs browsers + system deps)

Recommended extensions (auto-installed in the container):
- GitHub Copilot (+ Chat)
- Continue
- ESLint, Prettier, Playwright

## 4) Run the App
- Start the server: Terminal → Run Task → "Dev Server" (or run `npm run dev`).
- The server listens on `0.0.0.0:${PORT:-5000}`. The devcontainer forwards 5000 and opens it in your browser.
- Health check: `GET /healthz` should return 200.

## 5) Using Continue in Codespaces
- The workspace `.continue/config.json` is already configured for multiple providers.
- Continue reads API keys from env vars. Set them via Codespaces Secrets (step 2).
- After adding new secrets, run: Command Palette → "Codespaces: Rebuild Container" to load them into the environment.

## 6) Playwright UI Tests (optional)
Run headless UI tests:
```sh
npm run test:ui
```
Artifacts can be viewed via Playwright’s HTML report locally or via CI artifacts if you enable the workflow.

## Notes
- Vite is mounted via dev middleware in dev; only port 5000 is used.
- If you change ports, update `.devcontainer/devcontainer.json` → `forwardPorts`.
