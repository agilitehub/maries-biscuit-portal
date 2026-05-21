---
name: vibe-coding
description: >-
  Main entry for the React AI Boilerplate frontend conventions. Points to skills for
  React Router wiring, toolbar (Navbar) links, and route modules versus
  src/core layout and reusable core/components. CRA + TypeScript, Tailwind, FontAwesome, ThemeContext light/dark;
  Ant Design is a declared dependency and project standard but not yet used in src.
---

# Vibe coding (main)

Use this skill when adding **routes**, **full-screen pages**, **auth-style pages**, or when refactoring **module** vs **core** layout.

## Sub-skills (read these for detail)

| Topic                                                                                                        | Skill                      | Path                                             |
| ------------------------------------------------------------------------------------------------------------ | -------------------------- | ------------------------------------------------ |
| `App.tsx` routes, paths, Navbar `Link`s                                                                      | **vibe-coding-navigation** | `.cursor/skills/vibe-coding-navigation/SKILL.md` |
| `src/modules` folders, `src/core` layout + `core/components`, Tailwind + FontAwesome (+ Ant when introduced) | **vibe-coding-module**     | `.cursor/skills/vibe-coding-module/SKILL.md`     |

**When wiring a new URL or toolbar link:** read **vibe-coding-navigation** (and **vibe-coding-module** for where the screen file lives).

**When building UI, sections, or shared chrome:** read **vibe-coding-module** (and **vibe-coding-navigation** if the feature needs a new path or menu item).

## One-minute overview

- **New top-level route (e.g. `/settings`):** add `<Route path='...' element={...} />` in **`src/App.tsx`**, scaffold **`src/modules/<segment>/<segment>.tsx`**, import the page, and update **`Navbar`** when users need discovery — full steps in **vibe-coding-navigation**.
- **Default entry (`/`):** seeded **`modules/login`** so the login screen is first paint; **`/login`** resolves to the same module for parity with bookmarks and auth redirects.
- **Route screens** live under **`src/modules/<name>/`**: thin **`<name>.tsx`** plus **`components/`**, **`hooks/`**, **`utils/`** (optional **`services/`**) for **feature logic** — import **`core/layout`** + **`core/components`** (**Navbar**, **Logo**, …) for reusable shell UI.
- **UI stack (today):** **Tailwind** for layout and styling; **native HTML** form elements and buttons in route modules; **FontAwesome** for icons. **Ant Design** is in the stack per project rules but **not imported in `src/` yet** — if you add it, use FontAwesome for icons, not `@ant-design/icons`.
- **Theme:** `ThemeProvider` / `useTheme()` from **`src/context/ThemeContext.tsx`**; toggle drives **`document.documentElement`** `dark` class for `dark:` Tailwind.
- **`src/core`:** **generic only** — **`layout/`**, **`components/`** (reusable widgets), **`assets/`**. **Feature-only components** stay in **`src/modules/<segment>/components/`**; **`src/modules`:** hooks, utils, route file — see **vibe-coding-module**.

## Quick map

| Task                                                      | Go to                                                  |
| --------------------------------------------------------- | ------------------------------------------------------ |
| New path, Router entry, or toolbar link                   | **vibe-coding-navigation**                             |
| New full-page screen, section component, or styling rules | **vibe-coding-module**                                 |
| New route + link                                          | Read **both**; navigation first, then the module file. |
