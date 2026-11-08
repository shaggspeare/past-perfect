# Past Perfect — website

One-page site for Past Perfect, a furniture restoration workshop in Kyiv (copy in Ukrainian).
Vite + plain HTML, CSS and JavaScript — no framework.

## Run

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # serve the build locally
```

Needs Node.js 20.19+ or 22.12+. The build uses relative paths, so `dist/` can be deployed to any host or subfolder.

## Structure

```
index.html              page content: sections, copy, links
src/styles/main.css     design tokens + styles, one block per section
src/main.js             starts the interactive parts
src/js/gallery.js       «Було / Стало» before/after slider and work tabs
src/js/colour.js        «Приміряйте колір» paint swatches
src/content/works.js    the five before/after works (images + captions)
src/assets/textures/    generated textures standing in for photos
src/assets/photos/      put real photos here
public/favicon.svg
```

Fonts (Cormorant, Manrope, IBM Plex Mono) are self-hosted through Fontsource, so the site makes no requests to Google.

## Before going live

All images are generated wood, linen and paint textures in place of photos. Replace:

- **Hero background**: `.hero__bg` in `index.html`
- **Portrait of Тетяна**: `.portrait` in `index.html` (remove the `[ фото … ]` label)
- **Service thumbnails**: the four `.svc__thumb` images
- **Before/after works**: `src/content/works.js`, five 16:9 pairs (the first pair in `index.html` is only the no-JS fallback)
- **Shop items**: the three `.product` cards (photo, name, price, details)

Text placeholders are in square brackets: `[Назва речі]`, `[ціна]`, `[що саме зроблено]`, `[Розміри · матеріал · що зроблено]`. Prices read «за запитом».
