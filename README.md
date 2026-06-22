# Meridian — freight forwarder site

A **mock** marketing site for an independent freight forwarder. The look is
*industrial-editorial*: warm paper, near-black ink, one safety-amber accent;
a strong grotesk (Archivo) for headlines and a monospace (IBM Plex Mono) for
the numbers, labels and lane codes. Borders over shadows, type over decoration,
copy that says the real thing instead of a slogan. Built with React + Vite,
React Router and Framer Motion. Multi-page and fully responsive.

> This is a demo. The company, the numbers, the reviews and the tracking data
> are all invented.

## Run it

```bash
npm install      # first time only
npm run dev      # start dev server → http://localhost:5173
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Pages (React Router)

| Route | Page |
|---|---|
| `/` | **Home** — paper hero with a live shipment docket, services index, how-it-works, an ink stats ledger, coverage map, testimonials, CTA |
| `/services/:slug` | **Service** — one data-driven template for `road`, `ocean`, `air`, `warehousing`, `customs`, `supply-chain`. Quote-form hero, benefits, steps, an options table, FAQ, cross-links |
| `/about` | **About** — story, mission, values, stats, a dated timeline |
| `/track` | **Track** — interactive tracking widget + tracking FAQ |
| `/contact` | **Contact** — info panel + quote form with a success state |
| `*` | **404** — a freight-flavoured not-found page |

All service content lives in one place — [`src/data/services.jsx`](src/data/services.jsx) —
so editing copy, pricing, steps or FAQs updates both the home index and the
service pages.

## Design notes

- **Palette & type** are CSS custom properties at the top of [`src/index.css`](src/index.css):
  `--paper`, `--ink`, the single `--accent`, and the `--font-display` / `--font-mono` / `--font-body` trio.
- **Layout** leans on a hairline grid — bordered card grids, rule-divided stat
  rails, left-aligned section heads numbered in mono — rather than drop shadows.
- **Motion is restrained on purpose**: a scroll-progress hairline, gentle
  scroll-reveals, count-up stats, a slow text marquee, and the once-per-session
  truck loader. No shimmer, no drifting glows. Everything honours
  `prefers-reduced-motion`.

## Structure

- `src/pages/` — one file per route
- `src/components/` — Layout (navbar + footer + scroll handling), the home
  sections (Hero, Services, Stats, Coverage, Testimonials, CTA, Contact,
  Tracking), and shared bits (FAQ, QuoteForm, Reveal, Loader, TruckArt,
  ScrollProgress)
- `src/data/services.jsx` — the service content
- `src/hooks/useCountUp.js` — the count-up hook for the stats ledger

## Tech

- **React 18** + **Vite 5**
- **Framer Motion** — entrance, scroll and the loader
- **lucide-react** — icons
- Plain CSS with design tokens in `src/index.css`

## Make it yours

- Brand name / mark: search `Meridian` and the `Boxes` icon in `Navbar.jsx` / `Footer.jsx`
- Colours & fonts: edit the CSS variables at the top of `src/index.css` (`--paper`, `--ink`, `--accent`, the font stacks)
- Copy & data: each section component keeps its content in a plain array near the top; service pages are driven entirely by `src/data/services.jsx`
