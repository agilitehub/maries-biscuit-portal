---
name: vibe-coding-navigation
description: >-
  How to register routes in App.js and keep Navbar (toolbar) links aligned with URLs.
  Use with the vibe-coding index skill when working on URLs or app navigation.
---

# Vibe coding — navigation and routes

Use this when adding or changing **URLs**, **React Router** entries, or **Navbar / toolbar** links.

## Single route table

**File:** `src/App.js`

All **page-level** routes live in `<Routes>`:

- **`/`** and **`/login`** — **`LoginPage`** from **`src/modules/login/login.js`** (first paint + parity for auth redirects/bookmarks).
- **Future routes you add** — import from **`src/modules/...`** and register additional `<Route>` entries.

**Parity rule:** `path`, the **`src/modules`** folder name (`login/login.js`), and **`Link`** `to` props stay aligned. Multi-word paths use kebab-case folders.

## Adding a new route screen

1. **Create** `src/modules/<segment>/` with **`components/`**, **`hooks/`**, and **`utils/`** (use `.gitkeep` until populated).
2. **Add** `src/modules/<segment>/<segment>.js` — default export = page; keep it thin; import from **`./components`**, **`./hooks`**, **`./utils`** (see **vibe-coding-module**).
3. **Import** the page in `App.js`.
4. **Add** `<Route path='/your-segment' element={<YourPage />} />`.
5. **Link** from **Navbar** with **`react-router-dom`** **`Link`** (`to='/your-segment'`) when needed.

## Toolbar vs stacked routes

**Navbar** is shared per screen (`login` renders it internally today). Mirror this pattern (`module` imports **`Navbar`**) whenever you compose full-height experiences that need persistent chrome — or lift **`Navbar`** to an `App` shell once multiple siblings need identical framing.

## Checklist: new page discoverable from the toolbar

1. `src/modules/<segment>/<segment>.js` exists (default export) and the module has **`components/`**, **`hooks/`**, **`utils/`** scaffolded.
2. `<Route>` in `src/App.js` with matching path.
3. **Navbar.js** updated if users should navigate there from chrome.
4. No duplicate paths; prefer kebab-case segments.

## `src/core` policy for navigation

**Small, targeted edits** to **`Navbar.js`** are expected for new links. Avoid rewriting responsive menu behaviour unless requirements demand it.

For **modules vs core**, see **vibe-coding-module**.

## Quick reference

| What              | Where                                |
| ----------------- | ------------------------------------ |
| Route definitions | `src/App.js` (`<Routes>`, `<Route>`) |
| Seed login route  | `src/modules/login/login.js`         |
| Toolbar / Navbar  | `src/core/layout/Navbar.js`          |
| Route screens     | `src/modules/<segment>/<segment>.js` |
