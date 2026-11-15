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

It points to `https://github.com/mdadnanafzal/Prism-Widgets/releases/latest/download/PrismWidgets.exe`.
For it to work, publish a release in the Prism-Widgets app repo and attach the file named exactly **PrismWidgets.exe**.

## Deploy (Vercel)

Import this repository on vercel.com. Vite is detected automatically (build `npm run build`, output `dist`); no settings need changing. Every push to `main` redeploys.
