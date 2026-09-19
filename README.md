# Tally — Website Layout Clone

A from-scratch homepage build for a fictional freelance time-tracking & invoicing product, "Tally." Built with plain HTML, CSS (Grid + Flexbox), and a small amount of vanilla JS — no frameworks, no CSS libraries.

## What's here

```
.
├── index.html     # page structure
├── styles.css     # all styling, organized into numbered sections
├── script.js      # mobile nav toggle + the hero's live timer
└── README.md
```

## Before you submit

Open `index.html` and replace the placeholder μid in the hero section (search for `μ-2026-0000`) with your own — it appears both as visible text and as a tooltip on hover.

## How it's built

- **CSS Grid** drives page-level structure: the hero's two-column layout, the feature ledger, the numbers section, the pricing row, and the footer columns.
- **Flexbox** handles alignment inside components: the nav bar, buttons, the ledger mock panel's rows, and card internals.
- **Breakpoints:** desktop (default), tablet (`max-width: 1024px`), mobile (`max-width: 640px`) — see the numbered media-query section at the bottom of `styles.css`.
- **Hover states:** nav links and footer links get an underline sweep, buttons invert color and lift slightly, feature rows tint on hover, and pricing cards lift with a brass border.

## Run it locally

No build step. Either:

- Open `index.html` directly in a browser, or
- Serve it so relative paths behave exactly like production:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy with GitHub Pages

```bash
git init
git add .
git commit -m "Website layout clone: Tally homepage"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Then in the repo: **Settings → Pages → Deploy from a branch → `main` / `root`**. GitHub will publish the site at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

## Testing checklist

- [ ] Resize the browser from full desktop width down to ~360px and confirm nothing overlaps
- [ ] Toggle the mobile menu (hamburger icon appears under 640px)
- [ ] Hover every button, nav link, feature row, and pricing card
- [ ] Check in at least two browsers (e.g. Chrome + Firefox/Safari)
- [ ] Confirm the hosted GitHub Pages URL matches the local version
