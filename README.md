# Resume

Deployed with Cloudflare Workers, configured with the `cf` CLI and `cloudflare.config.ts`.

## Authentication

Wrangler credentials are repo-local and managed by [direnv](https://direnv.net).
`.envrc` points `WRANGLER_HOME` and `XDG_CONFIG_HOME` at `.wrangler-home/`, which is
git-ignored, so this project never touches your global Cloudflare profile.

Load it once per shell:

```bash
cd /home/pbdzadmin/PycharmProjects/p-b-d-z/resume
direnv allow
```

Check which account you're pointed at before deploying:

```bash
npx wrangler whoami
```

This project deploys to **Pobuda Estates LLC** (`2342c30bd94a1fd213123e21aec3167d`),
which is pinned in `cloudflare.config.ts`.

## Development

```bash
npm install
npm run dev
```

## Deployment

```bash
npm run deploy
```

This uploads the Worker and serves it at `https://resume.pbdz.workers.dev`,
`https://resume.pbdz.xyz`, and `https://resume.pobudz.net`.

Note: use `npm run deploy` (`cf deploy`), not `npx wrangler deploy`. Wrangler does not
read `cloudflare.config.ts`, and this repo no longer has a `wrangler.toml`.
`wrangler.config.ts` only carries build settings that `cf` passes through to the
Wrangler bundler.

## Checks

```bash
npm run typecheck
npm run build
```
