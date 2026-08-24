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

## Contributing

**Branches:** `main` is production, `dev` is kept in sync with it as a staging line. Both are protected by a [repo ruleset](https://github.com/PotLid/tbp-ny-nu/rules/21255889):

- No direct pushes to `main`/`dev` — changes only land through a pull request, even for repo owners/admins.
- No force-pushes or branch deletion on `main`/`dev`.
- Every PR must pass CI (`npm run lint` + `next build`, see `.github/workflows/ci.yml`) before it can merge. No approval is currently required — a green check is enough.

**Who can push what:**

- Only people with write access to this repo (currently the maintainers listed under repo Settings → Collaborators) can create branches or open PRs directly against this repo.
- Anyone else — including the general public, since this repo is public — can still contribute by forking the repo and opening a PR from their fork. That PR still has to pass CI, and still needs a maintainer to merge it.

**The actual workflow:**

```bash
git checkout -b your-branch-name
# make changes, commit
git push -u origin your-branch-name
gh pr create --base dev   # or --base main for something urgent
```

Once CI passes, merge the PR on GitHub (or `gh pr merge`). There's no server-side hook forcing `dev` before `main` — either base works — but routing non-trivial changes through `dev` first gives you a preview deployment to sanity-check before it reaches production.

## Deploy on Vercel

This project deploys on [Vercel](https://vercel.com/) (Hobby plan). Every pushed branch and every PR (including from forks) automatically gets its own preview deployment URL — this works regardless of who pushes it, since it's tied to the GitHub integration, not to Vercel account access. Only `main` is wired as the Production Branch, so merging into `main` is what actually ships to the live site; merging into `dev` just updates its preview.

Note: this project has no environment variables, so there's nothing sensitive at stake in preview builds either way.
