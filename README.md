# React AI Boilerplate

Opinionated [Create React App](https://github.com/facebook/create-react-app) + **TypeScript** starter (**`strict`** in **`tsconfig.json`**): Cursor **rules** and **skills** under `.cursor/`, a **strict** **`src/core`** (generic **`layout/`**, **`components/`** — reusable widgets only — and **`assets/`**) vs **`src/modules`** (all feature logic, each with **`components/`**, **`hooks/`**, **`utils/`**), **Tailwind CSS**, **FontAwesome**, **React Router**, **themes**, and **Prettier**.

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
.cursor/rules/project-instructions.mdc   ← always-on agent guidance
.cursor/skills                          ← vibe-coding skills (indexed in vibe-coding/SKILL.md)
tsconfig.json                          ← TS compiler options (`strict:true`)
src/index.tsx                           ← SPA entry (`antd/dist/reset.css`, Tailwind, FA)
src/react-app-env.d.ts                 ← `react-scripts` type refs + asset modules
src/App.tsx                            ← Theme + Ant `ConfigProvider`, auth, `Routes` from registry
src/context/ThemeContext.tsx           ← ThemeProvider / useTheme, toggles html.dark
src/core/theme/tokens.css              ← semantic light/dark CSS variables
src/context/AuthContext.tsx            ← dummy in-memory `signIn` / `signOut`
src/routes/authenticatedRoutes.tsx      ← **single source**: `/home` nav + child `<Route>` defs
src/core/layout/Navbar.tsx             ← login toolbar only
src/core/layout/AppShell.tsx           ← Ant `Layout` + `<Outlet />`, drawer
src/core/layout/AppSidebar.tsx        ← collapsible `Sider` + `Menu` (FA icons)
src/core/layout/ShellHeader.tsx        ← sidebar toggle, drawer opener, theme, user popover
src/core/layout/UserMenuPopover.tsx   ← avatar, version from `package.json`, sign out
src/core/layout/RequireAuth.tsx       ← guard (redirect to `/login`)
src/core/layout/GuestRoute.tsx        ← redirect signed-in users to `/home`
src/core/components/                   ← Logo, ThemeToggle, BackgroundEffect
src/core/assets/logo.svg
src/modules/login/login.tsx           ← `/` and `/login`
src/modules/home/home.tsx             ← `/home`
src/modules/samples/samples.tsx      ← `/home/samples`
```

**Routing:** add a **page module** and **one row** in [`src/routes/authenticatedRoutes.tsx`](src/routes/authenticatedRoutes.tsx); paths and sidebar labels stay in sync automatically.

**Boundaries:** **`core`** = shared chrome only: **`layout/`**, **`assets/`**, and **`components/`** for **reusable** UI (anything used by multiple modules). **`modules/*/components/`** = feature-only widgets. Hooks and utils stay in **modules**. See **`.cursor/rules/project-instructions.mdc`**.

**Auth (boilerplate):** **In-memory only** — refresh clears the session. Swap `AuthContext` for real tokens/session when you fork.

## Theming

- **No saved choice:** Follows the OS via `prefers-color-scheme` (auto). If the preference is not dark or is unavailable, the app stays **light**.
- **After using the theme toggle:** Saves `themeUserOverride` as `light` or `dark`. Legacy `theme` in `localStorage` is read once and migrated. The app **listens for system changes** only while you have not set an override.
- `ThemeToggle` toggles **`classList` on `<html>`** so Tailwind’s `darkMode: 'class'` applies and CSS variables in **`src/core/theme/tokens.css`** switch to the dark palette.
- **Semantic colors:** Define light/dark values once in **`src/core/theme/tokens.css`** (`--color-background`, `--color-foreground`, etc.) and consume them via Tailwind utilities such as **`bg-background`**, **`text-muted`**, **`border-border`** — avoid pairing raw grays with **`dark:`** for app chrome.
- Adjust brand tokens primarily in **`tailwind.config.js`** (Agilit‑e palette is seeded by default).

## Formatting & lint

- Prettier rules live in `.prettierrc`. Run **`npm run format`** before pushes.
- ESLint inherits CRA’s **`react-app`** preset.

## Ant Design

- **`ConfigProvider`** theme follows **`ThemeContext`** (`darkAlgorithm` vs default).
- Prefer **FontAwesome** for icons in menus and chrome; use Ant for layout primitives (`Layout`, `Menu`, `Drawer`, `Popover`, etc.).

## Extending toward a real AI app

| Goal                           | Hint                                                                                    |
| ------------------------------ | --------------------------------------------------------------------------------------- |
| Add an authenticated dashboard | Replace dummy **`AuthContext`**, wire APIs; keep shell under **`core/layout`**          |
| Plug in assistants / MCP       | Keep API keys server-side only; hydrate UI from REST/WS endpoints or edge functions     |
| Extend Ant Design usage        | Tune tokens and pair with Tailwind; keep FontAwesome for chrome icons per project rules |

## Learn more

CRA docs live at https://facebook.github.io/create-react-app/. React docs live at https://react.dev/. Tailwind docs: https://tailwindcss.com/docs.
