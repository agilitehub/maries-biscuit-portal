---
name: vibe-coding-module
description: >-
  React AI Boilerplate: TypeScript CRA, strict src/core vs modules, core/components,
  Ant Design, Tailwind, FontAwesome; ThemeContext.
---

# Vibe coding — modules, layout, and reusable components

Use this when creating or extending **route screens**, **feature UI**, or **shared chrome**.

## Strict split: `core` vs `modules`

| Location                     | What belongs here                                                                                                                                |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **`src/core`**               | **Generic** layout, **reusable** components (`core/components`), shared assets — **no** feature/domain logic, **no** module-only hooks or utils. |
| **`src/modules/<segment>/`** | **Custom logic** for that route: **`components/`** (module-only UI), **`hooks/`**, **`utils/`**, route file.                                     |
| **`src/context/`**           | **App-wide** providers (e.g. theme), not feature state.                                                                                          |

**Promotion:** module code moves into **`src/core/components/`** (or **`core/layout/`**) only when a **second** consumer exists and it stays **generic**.

## Base directories

| Area                                                    | Base directory                        |
| ------------------------------------------------------- | ------------------------------------- |
| **Route page (thin entry)**                             | `src/modules/<segment>/<segment>.tsx` |
| **Module-only UI**                                      | `src/modules/<segment>/components/`   |
| **Module-only hooks**                                   | `src/modules/<segment>/hooks/`        |
| **Module-only utils**                                   | `src/modules/<segment>/utils/`        |
| **Optional module API layer**                           | `src/modules/<segment>/services/`     |
| **Generic layout chrome**                               | `src/core/layout/`                    |
| **Reusable components** (cross-module / shared widgets) | **`src/core/components/`**            |
| **Shared static files**                                 | `src/core/assets/`                    |
| **App-wide theme**                                      | `src/context/ThemeContext.tsx`        |
| **Semantic light/dark colors**                          | `src/core/theme/tokens.css`           |

**Naming:** folder name matches the URL segment (`login` → `login/login.tsx`). **kebab-case** for multi-word segments.

## Every module uses the same skeleton

Under **`src/modules/<segment>/`**:

1. **`<segment>.tsx`** — default export = page; compose **`core/layout`**, **`core/components`**, and **`./components`**.
2. **`components/`** — UI **not** reused outside this module (yet).
3. **`hooks/`** — `use*` tied to this module.
4. **`utils/`** — pure helpers scoped to this module.

**Imports from core** from a typical route file: **`../../core/layout/...`**, **`../../core/components/...`** (add `../` when importing from **`./components`** inside the module).

## Core layout (`src/core/layout`)

- **Navbar**, page shells — **FontAwesome** for icons in layouts as needed.

## Core components (`src/core/components/`)

All **reusable** React pieces live here (**Logo**, **ThemeToggle**, **BackgroundEffect**, future shared widgets). Do **not** put feature-specific UI in this folder.

- **Icons:** **FontAwesome** — **do not** use **`@ant-design/icons`**.
- **`ThemeToggle`** uses **`useTheme()`** from **`ThemeContext`**; **`ThemeProvider`** wraps the app in **`App.tsx`**.

## Logic placement

- **Feature** state and effects → **module `hooks/`** (or thin route file until refactor).
- **Generic** helpers: duplicate small helpers until **two modules** share them; then extract to **`src/core`** only if genuinely generic — colocate **`utils.ts`** under **`core`** only when clearly cross-cutting; favour **`core/components`** for UI reuse.

## Ant Design (AntD)

**Required** for user-facing interactive UI. Import from `'antd'`:

```tsx
import { Button, Form, Input } from 'antd'
```

| Use Ant Design for | Use Tailwind for |
| ------------------ | ---------------- |
| `Button`, `Input`, `Input.TextArea`, `Form`, `Select`, `Modal`, `Card`, `Table`, `Spin`, `Alert` | Page layout, grids, spacing, responsive breakpoints |
| Form validation via Ant `Form` rules | Brand colours, decorative/marketing styling on wrappers |
| Loading/disabled states via Ant props | Semantic tokens from **`tokens.css`** (`bg-background`, `text-muted`, etc.) |

**Rules:**

- Do **not** use raw `<button>`, `<input>`, `<textarea>`, or `<select>` for user-facing UI.
- Compose Ant components inside Tailwind wrappers (`className` on a wrapping `div` or on the Ant component itself).
- Icons: **FontAwesome only** — never **`@ant-design/icons`**.
- **`ConfigProvider`** in **`App.tsx`** handles Ant light/dark; keep it in sync with **`ThemeContext`**.

## Code style: comments and styling

- Add **comments only** when the logic is **non-obvious** (security, rare edge cases, subtle invariants). Otherwise prefer clear naming and structure over comments.
- Use **Tailwind** for layout and visual polish; use **arbitrary values** (`top-[7%]`, `shadow-[…]`) when scale tokens are not enough. Avoid **`style={{}}`** unless a value truly cannot be expressed in Tailwind.
- Reserve **`index.css`** / **`App.css`** for minimal global base styles.

## Tailwind and dark mode

Prefer **semantic theme tokens** from **`src/core/theme/tokens.css`** (`bg-background`, `text-muted`, `border-border`, etc.) over raw **`gray-*` + `dark:`** pairs. Use **`dark:`** only when behaviour differs between modes (e.g. show/hide decorative layers), not for standard chrome colors. **`html.dark`** is toggled by **`ThemeContext`**.

## CRA notes

Entry **`src/index.tsx`**, root **`src/App.tsx`**. Prefer **relative imports** unless aliases are configured.

## Quick reference

| Task                | Where                                                                    |
| ------------------- | ------------------------------------------------------------------------ |
| New route/feature   | `src/modules/<segment>/` + **`components/`**, **`hooks/`**, **`utils/`** |
| **Reusable** widget | **`src/core/components/`**                                               |
| Layout shell only   | **`src/core/layout/`**                                                   |
| Router              | **`src/App.tsx`**                                                        |
| Toolbar links       | **vibe-coding-navigation**                                               |

Mirror **`login`** and **`Navbar`** for import paths.
