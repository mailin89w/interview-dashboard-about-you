# interview-dashboards

Private interview-prep dashboards. Start at `index.html` — it lists employers,
each with the jobs prepared for that company, newest first.

## Structure

```
index.html                              homepage: employer cards → job list modal
data/employers.json                     employer + job registry (single source of truth)
assets/                                 shared design + logic for every page
  dashboard.css                         vars, topbar, sidebar, grid, modal — used by all dashboards
  dashboard-template.js                 renders a dashboard's shell + all interaction logic
  home.css / home.js                    homepage-only styles/logic
  auth-gate.js                          client-side password gate (see Access below)
  avatar-daniela.jpg
dashboards/<employer-slug>/<job-slug>/
  index.html                            thin shell: loads dashboard.css + content.js + dashboard-template.js
  content.js                            job-specific sidebar facts, box titles, modal content (DE/EN)
```

## Adding a new dashboard

1. Create `dashboards/<employer-slug>/<job-slug>/content.js` with `window.DASHBOARD_DATA`
   (`documentTitle`, `facts.de`/`facts.en`, `titles[1..9]`, `content.de[1..9]`/`content.en[1..9]`).
   Copy an existing `content.js` as a starting point.
2. Create `dashboards/<employer-slug>/<job-slug>/index.html` — copy the existing one verbatim,
   paths are already relative and depth-independent as long as you keep the same nesting depth.
3. Add an entry to `data/employers.json` (new employer object, or a new job under an existing one).

Layout, styling, and behavior (sidebar, 3x3 grid, modals, tabs, accordion, DE/EN, light/dark) are
never duplicated — they all live in `assets/`.

## Access

GitHub Pages on a free-plan account has no private-visibility option — a Pages site built from
this repo is reachable by anyone with the URL, private repo or not. Since this repo is on the free
plan, it's public (required for Pages to build at all) and protected only by:

- a client-side password gate (`assets/auth-gate.js`) — a JS prompt gate, not real security,
  bypassable by anyone reading the source or using devtools
- `robots.txt` (`Disallow: /`) and `<meta name="robots" content="noindex, nofollow">` on every page,
  to keep it out of search engines

Good enough for unsensitive interview notes, not for anything actually sensitive. Real
access control (Pages visibility matching repo visibility) requires GitHub Pro/Team/Enterprise.
