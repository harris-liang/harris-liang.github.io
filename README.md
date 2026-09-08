# Haodong Liang — academic homepage

This is the standalone GitHub Pages version of the personal homepage. It preserves the approved content and design and does not depend on ChatGPT Sites or Cloudflare at runtime.

Intended repository: `harris-liang/harris-liang.github.io`

Intended website: `https://harris-liang.github.io/` (available only after GitHub Pages is enabled and deployment succeeds).

## Updating the site

- Biography, research descriptions, publications and links: `app/page.tsx`
- Layout and colors: `app/globals.css`
- Page title and description: `app/layout.tsx`
- CV: replace `public/Haodong-Liang-CV.pdf` with the same filename.
- Portrait and research diagrams: `public/`

Commit changes to `main`. The included GitHub Actions workflow builds the static site and publishes it when Pages is enabled.

## Local development

Use Node.js 22 and the pnpm version declared in `package.json`.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Build and check:

```sh
pnpm build
pnpm check:static
```

The complete static website is emitted into `dist/client/`, not `out/`. Only that directory is published; no server runtime is required. Root-relative asset URLs are intentional for this account homepage.

## First publication

1. Confirm that the website content, portrait, CV and source may be public.
2. Create `harris-liang.github.io` under the `harris-liang` account, without overwriting an existing repository.
3. Upload this source to its `main` branch.
4. In repository Settings → Pages, choose **GitHub Actions** as the build and deployment source.
5. Run or rerun **Publish homepage** under Actions, and wait for both jobs to succeed.

The previous website is independent and is not changed or removed by this migration.

The two earlier AI-generated illustrations, the original untracked photo, old hosting configuration, credentials and local build caches are deliberately not included.

## Illustration credits

The small apple, bird and carrot illustrations in the in-context learning diagram are [Twemoji](https://github.com/jdecked/twemoji) graphics by Twitter, Inc. and other contributors, licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). The original 72 × 72 PNGs are unchanged and are displayed at a smaller size.

- `public/illustrations/icl-apple.png`: red apple, U+1F34E
- `public/illustrations/icl-bird.png`: bird, U+1F426
- `public/illustrations/icl-carrot.png`: carrot, U+1F955

Exact source URLs and a copy of the graphics license are included in `public/illustrations/ATTRIBUTION.txt` and `public/illustrations/LICENSE-GRAPHICS.txt`. These assets are stored locally; no third-party image requests are needed to display the diagram.
