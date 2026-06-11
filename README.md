# Marie's Biscuits

Public marketing site for **Marie's Biscuits** — handcrafted, small-batch biscuits. Built with [Create React App](https://github.com/facebook/create-react-app) + **TypeScript**, **Tailwind CSS**, **FontAwesome**, **Ant Design** (layout primitives where used), and **React Router**.

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
| Real contact form       | Wire `ContactForm` to an API or form service (e.g. Formspree)     |
| Product photos          | Add images under module or `public/assets/pricelist/` and update cards |
| PDF price list          | Open `/pricelist`, click **Download PDF**, then Save as PDF in the print dialog |
| Online ordering         | New module + payment integration when ready                       |

## Learn more

CRA docs: https://facebook.github.io/create-react-app/. React: https://react.dev/. Tailwind: https://tailwindcss.com/docs.
