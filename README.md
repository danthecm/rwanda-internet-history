# Rwanda's Digital Evolution

An interactive history of Rwanda's internet and ICT development, from the policy
foundations laid after 1994 through to present-day infrastructure and
socio-economic outcomes.

Built with React Router 8 (framework mode, SSR), React 19 and Tailwind CSS 4.

## Pages

| Route             | Subject                                                     | Status      |
| ----------------- | ----------------------------------------------------------- | ----------- |
| `/`               | Policy foundations & genesis, 1994–2010 (Vision 2020, NICI)  | Complete    |
| `/infrastructure` | The physical grid, domestic peering (RINEX & RICTA), 5G      | Complete    |
| `/metrics`        | Digital public services (IremboGov) and Vision 2050 targets  | Complete    |

## Getting started

```bash
npm install
npm run dev
```

The app runs at `http://localhost:3000`.

```bash
npm run lint     # ESLint
npm run build    # production build into build/
npm run start    # serve the production build
```

## Project layout

```
app/
├── assets/          Images and icons, imported by URL through Vite
├── components/
│   ├── layout/      Nav bar, footer, page shell — the frame around every route
│   ├── policy/      Sections composing page 1 (one component per band)
│   └── ui/          Reusable presentational primitives, no page knowledge
├── data/            All copy and content, separated from presentation
├── pages/           Page composition — arranges sections, holds no copy
├── routes/          Thin route modules: meta tags plus the matching page
├── app.css          Tailwind theme: design tokens and custom utilities
└── routes.js        Route table, derived from data/navigation.js
```

### Conventions

**Content lives in `app/data/`, never inline in a component.** Components take
copy as props or import it from a data module. This keeps text editable without
touching layout, and lets the same component serve several sections.

**Design tokens live in `app/app.css`.** Colours are declared once in the
`@theme` block and used through Tailwind utilities (`bg-panel`, `text-muted`).
Several tokens deviate from the Figma comp to meet WCAG AA contrast — each of
those carries a comment recording the original value and the measured ratio.
Prefer a token over a raw hex or an arbitrary value.

**`~/` resolves to `app/`.** The alias is declared in `vite.config.js`;
`jsconfig.json` mirrors it for editor navigation only.

**Pages clear the nav bar with `<Page>`.** The nav is absolutely positioned so
the home hero can run underneath it, which means ordinary pages need their own
top padding. `components/layout/page.jsx` supplies it along with the standard
content column — use it for new pages rather than hand-rolling the padding.

## Deployment

A multi-stage `Dockerfile` is included:

```bash
docker build -t rwanda-internet-history .
docker run -p 3000:3000 rwanda-internet-history
```

The built-in server (`npm run start`) is production-ready on any Node host.
Deploying without Docker needs `package.json`, the lockfile, and `build/`.

## Attribution

Photography is credited in place. Written for educational purposes as part of a
University of London project.
