# Haodong Liang

Personal academic website: [harris-liang.github.io](https://harris-liang.github.io/).

## Updating

- Content and links: `app/page.tsx`
- Styles: `app/globals.css`
- Page metadata: `app/layout.tsx`
- CV: `public/Haodong-Liang-CV.pdf`
- Images: `public/`

Changes to `main` are automatically built and published to GitHub Pages.

## Local development

Requires Node.js 22 and pnpm 11.19.0.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Run `pnpm build` to generate the static site in `dist/client/`, then `pnpm check:static` to validate it.

## Credits

The small ICL illustrations are [Twemoji](https://github.com/jdecked/twemoji) graphics by Twitter, Inc. and other contributors, licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). See [attribution details](public/illustrations/ATTRIBUTION.txt).
