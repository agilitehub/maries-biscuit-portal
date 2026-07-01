# Marie's Biscuits

Public marketing site for **Marie's Biscuits** — handcrafted, small-batch biscuits. Built with [Create React App](https://github.com/facebook/create-react-app) + **TypeScript**, **Ant Design** (interactive UI), **Tailwind CSS** (layout and brand styling), **FontAwesome** (icons), and **React Router**.

## Prerequisites

- Node 18+
- npm (or swap commands for Yarn / PNPM).

## Scripts

| Command                | Purpose                              |
| ---------------------- | ------------------------------------ |
| `npm start`            | Dev server (`http://localhost:3000`) |
| `npm run build`        | Production bundle in `build/`        |
| `npm run format`       | Prettier write                       |
| `npm run format:check` | Prettier CI check                    |
| `npm run deploy`       | Production build + Firebase Hosting deploy |
| `npm run deploy:hosting` | Deploy existing `build/` only (skip rebuild) |

## Environment variables

Copy [`.env.example`](.env.example) to `.env` for local dev. For production builds (including Firebase deploy), set the same `REACT_APP_*` values in `.env.production` or export them in your shell **before** `npm run build`. Create React App bakes them in at build time; Firebase Hosting only serves static files.

| Variable | Purpose |
| --- | --- |
| `REACT_APP_AGILITE_API_URL` | Agilit-e API base URL (contact form) |
| `REACT_APP_AGILITE_API_KEY` | Agilit-e API key |

## Firebase Hosting

This site deploys to [Firebase Hosting](https://firebase.google.com/docs/hosting) from the CRA `build/` output. Config: [`firebase.json`](firebase.json), project alias: [`.firebaserc`](.firebaserc).

### One-time setup

1. Create a project in the [Firebase console](https://console.firebase.google.com/) (or use an existing one).
2. In the project, open **Build → Hosting** and click **Get started** (enables Hosting on that project).
3. Install the CLI globally if you prefer (`npm install -g firebase-tools`); otherwise use `npx firebase` or the npm scripts below.
4. Log in: `npx firebase login`
5. Set your project ID in [`.firebaserc`](.firebaserc) — replace `YOUR_FIREBASE_PROJECT_ID`, or run:
   ```bash
   npx firebase use --add
   ```
   and pick your project (writes `.firebaserc` for you).
6. Ensure production env vars are set (see **Environment variables**), then deploy:
   ```bash
   npm run deploy
   ```

### Deploy commands

- **`npm run deploy`** — `npm run build` then upload `build/` to Firebase.
- **`npm run deploy:hosting`** — upload only (use when `build/` is already up to date).

After deploy, the CLI prints your live URL (default `https://<project-id>.web.app` and `https://<project-id>.firebaseapp.com`).

### Optional console configuration

| Task | Where |
| --- | --- |
| Custom domain | Firebase console → Hosting → **Add custom domain** |
| Preview channels | `npx firebase hosting:channel:deploy preview-name` |
| CI/CD | [Firebase GitHub Action](https://github.com/marketplace/actions/deploy-to-firebase-hosting) with a service account |

[`firebase.json`](firebase.json) includes SPA rewrites so React Router paths (`/biscuits`, `/pricelist`, etc.) resolve to `index.html`.

## Project map

```
src/App.tsx                         ← Theme + Ant ConfigProvider, public Routes
src/routes/siteRoutes.tsx           ← Single source: nav items + child <Route> defs
src/core/layout/SiteLayout.tsx      ← Navbar + <Outlet /> + SiteFooter
src/core/layout/Navbar.tsx          ← Top nav with mobile menu
src/core/layout/SiteFooter.tsx      ← Site footer
src/core/theme/tokens.css           ← Warm bakery semantic light/dark tokens
src/modules/home/                   ← `/` landing (hero, products, about, contact)
src/modules/biscuits/               ← `/biscuits` product range
src/modules/pricelist/              ← `/pricelist` booklet price list + PDF export
public/assets/pricelist/            ← Logo and product photos for the booklet
```

**Routing:** add a **page module** and **one row** in [`src/routes/siteRoutes.tsx`](src/routes/siteRoutes.tsx); paths and navbar labels stay in sync automatically.

**Boundaries:** **`core`** = shared chrome only. **`modules/*/components/`** = feature-only widgets. See **`.cursor/rules/project-instructions.mdc`**.

## Theming

- **No saved choice:** Follows the OS via `prefers-color-scheme`. Legacy `theme` in `localStorage` is migrated to `themeUserOverride`.
- **After using the theme toggle:** Saves `themeUserOverride` as `light` or `dark`.
- **Palette:** Forest green and gold via **`src/core/theme/tokens.css`** and **`marie-*`** Tailwind utilities.
- **Typography:** Playfair Display (headings) + Nunito Sans (body).

## Extending the site

| Goal                    | Hint                                                              |
| ----------------------- | ----------------------------------------------------------------- |
| Add a new page          | Scaffold `src/modules/<segment>/`, register in `siteRoutes.tsx`   |
| Contact form            | Agilit-e SMTP connector via `REACT_APP_AGILITE_*` env vars          |
| Product photos          | Add images under module or `public/assets/pricelist/` and update cards |
| PDF price list          | Open `/pricelist`, click **Download PDF**, then Save as PDF in the print dialog |
| Online ordering         | New module + payment integration when ready                       |

## Learn more

CRA docs: https://facebook.github.io/create-react-app/. React: https://react.dev/. Tailwind: https://tailwindcss.com/docs.
