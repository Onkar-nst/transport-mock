# Meridian Logistics — freight & logistics landing page

A clean, trust-focused, heavily-animated **mock** marketing site for a freight forwarding
company. Built with React + Vite and Framer Motion. Single-page, fully responsive.

> This is a demo. The company, numbers, reviews, and tracking data are all fictional.

## Run it

```bash
npm install      # first time only
npm run dev      # start dev server → http://localhost:5173
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## What's inside

One scrolling landing page composed of section components in `src/components/`:

| Section | Animation highlights |
|---|---|
| **Navbar** | transparent → frosted on scroll, animated underlines, mobile drawer |
| **Hero** | staggered entrance, floating live-tracking card, animated SVG route + moving dot |
| **Logos** | infinite seamless marquee of partner brands |
| **Services** | scroll-reveal cards with hover lift, icon tilt, gradient top-bar |
| **Stats** | numbers count up when scrolled into view (`useCountUp` hook) |
| **Process** | 4-step flow with staggered reveal |
| **Tracking** | interactive widget — type a number, animated progress bar + timeline |
| **Coverage** | dotted world map with pulsing hubs and animated trade-lane arcs |
| **Testimonials** | star ratings, hover lift |
| **CTA + Footer** | gradient call-to-action band, social links |

## Tech

- **React 18** + **Vite 5**
- **Framer Motion** — entrance, scroll, and loop animations
- **lucide-react** — icons
- Plain CSS with design tokens in `src/index.css`
- Respects `prefers-reduced-motion`

## Make it yours

- Brand name / logo: search `Meridian` and the `Boxes` icon in `Navbar.jsx` / `Footer.jsx`
- Colors: edit the CSS variables at the top of `src/index.css` (`--blue-600`, `--accent`, …)
- Copy & data: each section component has its content in a plain array near the top
