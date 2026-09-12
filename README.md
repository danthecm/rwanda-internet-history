# Rwanda's Digital Evolution

An interactive history of Rwanda's internet and ICT development, from the policy
foundations laid after 1994 through to present-day infrastructure and
socio-economic outcomes.

Built with React Router 8 (framework mode, SSR), React 19 and Tailwind CSS 4 and Echarts library.

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
University of London student project.
