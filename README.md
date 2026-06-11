# PosiJump Productions

The marketing site for PosiJump Productions, a Pittsburgh-based marketing practice for small businesses.

Live at [posijump.com](https://posijump.com).

## Stack

Plain HTML / CSS / minimal vanilla JS. No build step. Hosted on Netlify.

- Tailwind CSS via CDN (config inline in each page)
- Inter, Archivo Black, and JetBrains Mono via Google Fonts
- SVG favicon + 180x180 apple-touch-icon
- Cobalt duotone treatment on photography (SVG filter)

## Local dev

```
node serve.mjs
```

Serves the site at http://localhost:3006. The dev server handles directory index lookups so `/case-studies/` resolves to `case-studies/index.html`.

## Deploy

```
netlify deploy --prod --dir .
```

## Structure

```
index.html                       Homepage
portfolio/                       Portfolio (writing, sites, podcasts, ads)
case-studies/                    Hub + 4 detail pages
styles.css                       Shared brand system
nav.js                           Mobile menu toggle behavior
favicon.svg                      SVG favicon (path-based J)
apple-touch-icon.png             180x180 iOS icon
Images/                          Photography (web + originals)
Images/ads/                      Ad creatives + web-optimized versions
posijump-brand-guidelines.md     Voice, palette, type, design system
serve.mjs                        Local dev server
```

## Brand reference

The full voice + design system lives in `posijump-brand-guidelines.md`. The short version:

- Colors: Stage Black `#17181b`, Liner Note `#e8e4dc`, Concrete `#3a3d42`, Highlighter `#d9f266`, Cobalt `#1e3a8a`
- Type: Archivo Black (display), Inter (body), JetBrains Mono (accent)
- Voice: confident, direct, warm, dry. No jargon, no em dashes.
- Motion: animate only `transform` and `opacity`. Never `transition-all`.
