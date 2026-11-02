# Muko-Gawa — mukogawa.com

The website of **Muko-Gawa: Bleeding Light**, a dark-fantasy manga by Israel Subirá (writer) and
Guilherme Match (illustrator). The person you're working with is **Israel, the owner. He is not a
programmer.** Talk to him in **Portuguese (Brazil)**, in plain words, no jargon. Explain what you
changed and how he can see it, not how the code works.

## Golden rules
1. **Change only what he asked for.** Never "improve", tidy, refactor, restyle or reorganise anything
   else. If something else looks wrong, tell him and ask; don't fix it on your own.
2. **Ask before anything visual he didn't describe.** If a request is vague ("make it nicer"), ask what
   exactly, or show one option first.
3. **Every change is checked before it goes live** (see "How to make a change"). If the check shows a
   page changed that he didn't ask about, stop and tell him.
4. **Never push straight to `main`.** `main` is what's live on mukogawa.com. Work on a branch and open a
   pull request; it goes live when he merges it.
5. On the Portuguese pages keep all text in **Portuguese** (the only English is the title "Bleeding Light"). English text lives in `content/en.ts`.
6. Never add secrets, passwords or keys to the code. Nothing here needs any.

## Where things are
| What he wants to change | File |
|---|---|
| **Any text** on any page (titles, paragraphs, buttons, the menu) | `content/pt.ts` (Portuguese) and `content/en.ts` (English) — the only places text lives; same keys in both |
| **Links** (Catarse, Orvalho, Instagram, Discord, YouTube) | `lib/links.ts` |
| The Home video (YouTube id) and the phone video | `content/pt.ts` → `video` (English has no video yet: `has.video` in `content/en.ts`) |
| Images | `public/img/` (replace a file with one of the same name and shape; WebP, keep it small) |
| Newsletter form destination (Google Form) | `lib/newsletter.ts` |
| Old mukogawa.com addresses that redirect | `public/<old-path>/index.html` |
| Domain | `public/CNAME` (`mukogawa.com`) |

Languages: every page exists once per language, at `/pt/…` and `/en/…` (list in `lib/links.ts` → `LANGS`).
Each language has its own address words and #section names (`SLUGS` and `ANCHORS` in `lib/links.ts`):
`/pt/campanha/#projeto` is `/en/project/#project`.
`mukogawa.com/` and the old addresses (`/campanha/` etc.) are small pages in `public/` that pick the visitor's
language. What each language shows (video, rewards, store) is `has` in its `content/` file.

Pages: `app/[lang]/page.tsx` (Home), `views/Campanha.tsx` (menu label "Projeto"), `views/Autores.tsx`,
`views/Loja.tsx` (served at each language's address by `app/[lang]/[slug]/page.tsx`). Changing these, `components/` or `app/globals.css` changes layout — only do it when he
asked for a layout change, and always run the layout check.

## How the site is built (read before touching layout)
- Next.js static export (`output: "export"`) → plain files in `out/`, published by GitHub Pages
  (`.github/workflows/deploy.yml`: every push to `main` builds and publishes).
- **Every page has two layouts in the same file:** the desktop one (`.desk`, a fixed 1648-wide design
  canvas: elements placed with `<A x y w h>` in design pixels) and the phone one (`.mob`, a normal
  one-column layout from `components/m/`). CSS shows one: **phone layout below 1100px wide** (phones and
  iPads in portrait), desktop from 1100px (iPad landscape, computers). A change to one layout does not
  change the other — if he wants it on both, edit both.
- The breakpoint 1100 is written in 4 places: `app/globals.css`, `components/Video.tsx`,
  `components/HomeScroll.tsx`, `components/m/MVideo.tsx`.
- Motion: the red hero (comic montage, glitch, smoke), blood drips (`components/Drip.tsx`), parallax and
  fade-in on scroll (`components/HomeScroll.tsx`, `data-speed` / `data-rise`), the angel that descends and
  lands behind the rocks (`components/AngelLand.tsx`). These are delicate; don't touch unless asked.
- Fonts: Darkcastle (titles) — **personal-use licence file; a commercial licence must be bought.**
  Shippori Mincho (body, subset), Barlow, IM Fell, Pier Sans.
- Newsletter: both forms post to a Google Form whose answers land in a Google Sheet he owns. The site
  can't confirm delivery (Google doesn't allow it); "Pronto!" shows when it's sent.

## How to make a change
1. `git checkout -b <short-name>` (a branch).
2. Before editing anything that isn't pure text: `npm run build`, then `npm run serve` (another terminal),
   then `npm run baseline`.
3. Make the change.
4. `npm run build` (must pass) and `npm run lint` (no errors).
5. If you took a baseline: `npm run check`. Every page listed as CHANGED must be one he asked for.
   Text-only edits in `content/pt.ts` can skip 2 and 5, but still build.
6. Show him: `npm run serve` and open http://localhost:3021 — or give him the pull request.
7. Commit, push the branch, open a pull request with a one-line description in Portuguese. He merges it
   on GitHub when he's happy; GitHub publishes it in about a minute.

## If something goes wrong
- The live site is whatever is on `main`. To undo the last change: on GitHub, open the merged pull request
  and click **Revert**, then merge that. Never force-push `main`.
- Build fails on GitHub: open the repo's **Actions** tab, read the red step, fix on a branch.
