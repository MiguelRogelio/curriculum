# Curriculum — Miguel Rogelio Rodriguez Federico

A single-page CV built as a static site: React 19, TypeScript, Vite. No backend, no
runtime data fetching, so it drops straight onto GitHub Pages.

## Run it

```bash
pnpm install
pnpm dev        # http://localhost:5173
pnpm build      # typecheck + production bundle into dist/
pnpm preview    # serve the built bundle
```

## Editing the content

All copy lives in `src/data/profile.ts`. The components read from it and never
hardcode text, so changing a job title or adding a project is a one-file edit.

There is one `TODO(miguel)` in that file: the Quality Inspector role has a generic
duties line that needs your real inspection and audit work.

## Adding a technology icon

`src/components/TechIcon.tsx` maps an icon key to a component. Brand marks come from
`react-icons/si` (Simple Icons). Microsoft withdrew its marks from that set, so SQL
Server, SSMS, Power Apps, Power Fx, SharePoint and Visual Studio use neutral
geometric glyphs defined in the same file, as do bcrypt, EtherNet/IP and the PLCs,
which have no official mark. To add one, add the key to `icons` and reference it from
`skillGroups`.

## Deploying to GitHub Pages

`.github/workflows/deploy.yml` builds on every push to `main` and publishes `dist/`.

1. Push this folder to a GitHub repository.
2. In the repository, go to **Settings → Pages** and set **Source** to
   **GitHub Actions**.
3. Push to `main`. The workflow builds and deploys.

The asset base path is resolved in `vite.config.ts` from `GITHUB_REPOSITORY`, so a
project site at `owner.github.io/<repo>/` works without editing any config. A user
site (`owner.github.io`) is detected and served from the root. To override, set
`VITE_BASE`.

## Notes

- The layout follows a conventional resume document: centered masthead, centered
  section headings over a full-measure rule, and entries set as
  organization/title on the left with context/dates on the right.
- The animated masthead field is pure CSS — three blurred radial light sources on
  long offset loops, animating `transform` only. `prefers-reduced-motion` stops it.
- Palette is black and blue only, defined as custom properties at the top of
  `global.css`. Change `--blue` to retheme the accent in one place.
- The page is dark-only by design; `color-scheme` is set to match.
- A print stylesheet inverts it to ink on white for a paper copy.
