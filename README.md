# Prism Widgets — landing page

The landing page for Prism Widgets, built with React, Vite, Tailwind CSS and components from [React Bits](https://reactbits.dev) (in `src/rb/`).

## Run locally

```sh
npm install
npm run dev        # http://localhost:5173
npm run build      # → dist/ (static files, works from any folder)
```

## Edit

* Links, version, download URL and RAM figure: `src/site.ts`
* Sections: `src/sections/` (Hero, Features, Showcase, Guide)
* Screenshots: `public/shots/` (WebP)

## Download button

It downloads `PrismWidgets.exe` straight from the main branch of the app repo:
`https://github.com/mdadnanafzal/Prism-Widgets/raw/main/PrismWidgets.exe`.
Push a new exe to that repo and the button serves it automatically. To change the link, edit `DOWNLOAD_URL` in `src/site.ts`.

## Deploy (Vercel)

Import this repository on vercel.com. Vite is detected automatically (build `npm run build`, output `dist`); no settings need changing. Every push to `main` redeploys.
