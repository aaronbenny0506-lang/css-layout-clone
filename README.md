# Tally : Website Layout Clone

A from-scratch homepage build for a fictional freelance time-tracking & invoicing product, "Tally." Built with plain HTML and CSS only (Grid + Flexbox + `@keyframes`) no JavaScript, no frameworks, no CSS libraries.

## What's here

```

├── index.html     # page structure
├── styles.css     # all styling, organized into numbered sections
└── README.md
```


## How it's built

- **CSS Grid** drives page-level structure: the hero's two-column layout, the feature ledger, the numbers section, the pricing row and the footer columns.
- **Flexbox** handles alignment inside components: the nav bar, buttons, the ledger mock panel's rows and card internals.
- **Breakpoints:** desktop (default), tablet (`max-width: 1024px`), mobile (`max-width: 640px`), see the numbered media-query section at the bottom of `styles.css`.
- **Hover states:** nav links and footer links get an underline sweep, buttons invert color and lift slightly, feature rows tint on hover and pricing cards lift with a brass border.
- **Mobile nav - pure CSS:** a visually-hidden checkbox (`#navCheck`) paired with a `<label>` drives the hamburger menu via the `:checked` pseudo-class and the `~` sibling combinator — no JS needed to open/close it or animate the hamburger into an X.
  - Trade-off: since there's no JS, tapping a nav link no longer auto-closes the mobile menu (it did before via a JS listener). The menu still closes on a second tap of the hamburger, or once the page scrolls to the anchor.
- **"Live" hero panel - pure CSS:** the timer no longer ticks with real seconds (that required `setInterval` in JS). Instead, `@keyframes live-pulse` gives the green status dot a soft heartbeat, and `@keyframes timer-blink` blinks the timer's colon, enough to read as "live" without any script.

## Run it locally

No build step. Either:

- Open `index.html` directly in a browser, or
- Serve it so relative paths behave exactly like production:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```
