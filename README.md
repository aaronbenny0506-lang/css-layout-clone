# Tally — Website Layout Clone

A from-scratch homepage build for a fictional freelance time-tracking & invoicing product, "Tally." Built with plain HTML, CSS (Grid + Flexbox) and a small amount of vanilla JS, no frameworks, no CSS libraries.

## What's here

```

├── index.html     # page structure
├── styles.css     # all styling, organized into numbered sections
├── script.js      # mobile nav toggle + the hero's live timer
└── README.md
```


## How it's built

- **CSS Grid** drives page-level structure: the hero's two-column layout, the feature ledger, the numbers section, the pricing row and the footer columns.
- **Flexbox** handles alignment inside components: the nav bar, buttons, the ledger mock panel's rows and card internals.
- **Breakpoints:** desktop (default), tablet (`max-width: 1024px`), mobile (`max-width: 640px`), see the numbered media-query section at the bottom of `styles.css`.
- **Hover states:** nav links and footer links get an underline sweep, buttons invert color and lift slightly, feature rows tint on hover and pricing cards lift with a brass border.

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
