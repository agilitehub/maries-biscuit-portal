---
name: vibe-coding-navigation
description: >-
  How to register routes in App.tsx and keep Navbar (toolbar) links aligned with URLs.
  Use with the vibe-coding index skill when working on URLs or app navigation.
---

# Vibe coding — navigation and routes

Use this when adding or changing **URLs**, **React Router** entries, or **Navbar / toolbar** links.

## Single route table

**File:** `src/App.tsx`

All **page-level** routes live in `<Routes>`:

- **`/`** and **`/login`** — **`LoginPage`** from **`src/modules/login/login.tsx`** (first paint + parity for auth redirects/bookmarks).
- **Future routes you add** — import from **`src/modules/...`** and register additional `<Route>` entries.

**Parity rule:** `path`, the **`src/modules`** folder name (`login/login.tsx`), and **`Link`** `to` props stay aligned. Multi-word paths use kebab-case folders.

## Adding a new route screen

1. **Create** `src/modules/<segment>/` with **`components/`**, **`hooks/`**, and **`utils/`** (use `.gitkeep` until populated).
2. **Add** `src/modules/<segment>/<segment>.tsx` — default export = page; keep it thin; import from **`./components`**, **`./hooks`**, **`./utils`** (see **vibe-coding-module**).
3. **Import** the page in `App.tsx`.
4. **Add** `<Route path='/your-segment' element={<YourPage />} />`.
5. **Link** from **Navbar** with **`react-router-dom`** **`Link`** (`to='/your-segment'`) when needed.

## Toolbar vs stacked routes

**Navbar** is shared per screen (`login` renders it internally today). Mirror this pattern (`module` imports **`Navbar`**) whenever you compose full-height experiences that need persistent chrome — or lift **`Navbar`** to an `App` shell once multiple siblings need identical framing.

## Checklist: new page discoverable from the toolbar

1. `src/modules/<segment>/<segment>.tsx` exists (default export) and the module has **`components/`**, **`hooks/`**, **`utils/`** scaffolded.
2. `<Route>` in `src/App.tsx` with matching path.
3. **`Navbar.tsx`** updated if users should navigate there from chrome.
4. No duplicate paths; prefer kebab-case segments.

## `src/core` policy for navigation

**Small, targeted edits** to **`Navbar.tsx`** are expected for new links. Avoid rewriting responsive menu behaviour unless requirements demand it.

For **modules vs core**, see **vibe-coding-module**.

## Quick reference

| What              | Where                                 |
| ----------------- | ------------------------------------- |
| Route definitions | `src/App.tsx` (`<Routes>`, `<Route>`) |
| Seed login route  | `src/modules/login/login.tsx`         |
| Toolbar / Navbar  | `src/core/layout/Navbar.tsx`          |
| Route screens     | `src/modules/<segment>/<segment>.tsx` |
