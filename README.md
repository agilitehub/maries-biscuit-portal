# React AI Boilerplate

Opinionated [Create React App](https://github.com/facebook/create-react-app) starter: Cursor **rules** and **skills** under `.cursor/`, a **strict** **`src/core`** (generic **`layout/`**, **`components/`** — reusable widgets only — and **`assets/`**) vs **`src/modules`** (all feature logic, each with **`components/`**, **`hooks/`**, **`utils/`**), **Tailwind CSS**, **FontAwesome**, **React Router**, **themes**, and **Prettier**.

## Prerequisites

- Node 18+
- npm (or swap commands for Yarn / PNPM).

## Scripts

| Command                | Purpose                              |
| ---------------------- | ------------------------------------ |
| `npm start`            | Dev server (`http://localhost:3000`) |
| `npm run build`        | Production bundle in `build/`        |
| `npm test`             | Jest via CRA                         |
| `npm run format`       | Prettier write                       |
| `npm run format:check` | Prettier CI check                    |

## Project map

```
.cursor/rules/project-instructions.mdc   ← always-on agent guidance
.cursor/skills                          ← vibe-coding skills (indexed in vibe-coding/SKILL.md)
src/context/ThemeContext.js             ← ThemeProvider / useTheme, toggles html.dark
src/core/layout/Navbar.js               ← toolbar (imports from core/components)
src/core/components/                    ← Logo, ThemeToggle, BackgroundEffect (+ future reusable UI)
src/core/assets/logo.svg               ← CRA default React emblem (`Logo` imports it via SVGR)
src/modules/login/login.js             ← route entry (`/` and `/login`)
src/modules/login/components/           ← login-only UI
src/modules/login/hooks/
src/modules/login/utils/
```

**Boundaries:** **`core`** = shared chrome only: **`layout/`**, **`assets/`**, and **`components/`** for **reusable** UI (anything used by multiple modules). **`modules/*/components/`** = feature-only widgets. Hooks and utils stay in **modules**. See **`.cursor/rules/project-instructions.mdc`**.

## Theming

- **No saved choice:** Follows the OS via `prefers-color-scheme` (auto). If the preference is not dark or is unavailable, the app stays **light**.
- **After using the theme toggle:** Saves `themeUserOverride` as `light` or `dark`. Legacy `theme` in `localStorage` is read once and migrated. The app **listens for system changes** only while you have not set an override.
- `ThemeToggle` toggles **`classList` on `<html>`** so Tailwind’s `darkMode: 'class'` utilities apply (`dark:bg-gray-950`, etc.).
- Adjust brand tokens primarily in **`tailwind.config.js`** (Agilit‑e palette is seeded by default).

## Formatting & lint

- Prettier rules live in `.prettierrc`. Run **`npm run format`** before pushes.
- ESLint inherits CRA’s **`react-app`** preset.

## Extending toward a real AI app

| Goal                           | Hint                                                                                    |
| ------------------------------ | --------------------------------------------------------------------------------------- |
| Add an authenticated dashboard | Introduce `/app` routes, lift auth state/context, evolve `Navbar` into full app chrome   |
| Plug in assistants / MCP       | Keep API keys server-side only; hydrate UI from REST/WS endpoints or edge functions     |
| Introduce Ant Design           | Allowed per Cursor rules — pair with Tailwind wrappers, still use FontAwesome for icons |

## Learn more

CRA docs live at https://facebook.github.io/create-react-app/. React docs live at https://react.dev/. Tailwind docs: https://tailwindcss.com/docs.
