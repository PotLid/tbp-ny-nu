# TBP NY-Nu

Website for the Tau Beta Pi New York Nu chapter at the University at Buffalo.

## About This Project

Core - [Next.js](https://nextjs.org/) (Pages Router)

Language - [TypeScript](https://www.typescriptlang.org/)

Styling - [Tailwind CSS](https://tailwindcss.com/)

Animation - [Framer Motion](https://www.framer.com/motion/)

Icons - [Font Awesome](https://fontawesome.com/)

Dependencies - Refer to `package.json`

## Getting Started

Install dependencies, then run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Pages live in `pages/` (`/`, `/about`, `/chapter`, `/contact`, `/tbp`), shared UI in `components/`, and global styles in `styles/globals.css`. The site auto-updates as you edit files.

## Scripts

```bash
npm run dev         # start the dev server
npm run build        # production build
npm run start        # serve the production build (run build first)
npm run lint          # lint the project
npm run lint:fix      # lint and auto-fix
npm run lint:watch    # continuously lint files as they change
```

If you use VS Code, install the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) — this repo's `.vscode/settings.json` is already set up to auto-fix lint issues on save.

## Deploy on Vercel

This project deploys on [Vercel](https://vercel.com/). Pushing a branch creates a preview deployment; merging to `main` deploys to production.
