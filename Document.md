# Document — Maryam Amjad Portfolio

Working record of the changes made to this repository, how each one was
verified, and what remains open.

Last updated: 21 October 2026
Repository state: `main` at `eac4029`, in sync with `origin/main`, working tree clean.

---

## 1. Project

| | |
|---|---|
| Site | https://maryam-amjad-portfolio.vercel.app |
| Repository | https://github.com/MaryamAmjad-Dev/Maryam-Amjad-Portfolio |
| Stack | Next.js, TypeScript, Tailwind CSS, Framer Motion |
| Locales | 10 — `en`, `ur`, `ar`, `fr`, `de`, `zh`, `ja`, `it`, `ko`, `es` |
| Deployment | Vercel Git integration — every push to `main` builds and deploys automatically. No CLI involved. |
| Downloadable CV | `public/resume/Maryam-Amjad-Resume.pdf`, served `public, max-age=0, must-revalidate` so replacing the file at the same URL is cache-safe. |

---

## 2. Change log

Ordered oldest to newest. Every entry was pushed and confirmed live.

### `eb46ee2` Revise MIRA AI header and remove certifications

Header copy correction; certifications panel removed.

### `8cc31db` Make portfolio fully responsive and consistent

Cross-viewport pass.

### `8d54f5f` Rework hero, section structure, and project content

Hero identity, section ordering, project copy.

### `faf8ec3` Rework hero identity and content; fix locale hydration mismatch

Two things in one commit:

- **Content** — hero identity, section order, project content, the eight
  Achievements cards, the hackathons heading, and UNESCO moved to position 4
  in the hackathons list.
- **Bug fix** — the React 19 `<script>` console warning. Root cause was
  app-side, not the library's: `language-provider.tsx` read `localStorage`
  inside a `useState` lazy initializer, so a returning visitor hydrated with a
  different locale than the server rendered. That mismatch re-created
  next-themes' inert `<script>` on every load. Fixed with `useSyncExternalStore`
  plus `getServerLocaleSnapshot`, persistence moved into `setLocale`, and
  `<html lang>` / `dir` set in `useLayoutEffect`. No `dangerouslySetInnerHTML`,
  no DOM workaround, no dependency upgrades.

### `7555c92` Rename primary identity to Prospective Graduate Candidate

"Prospective Graduate Student" → **"Prospective Graduate Candidate"** across 10
files: `badges.ts` (`PRIMARY_ROLE`) plus `hero.primaryRole` in all nine locale
overrides.

### `186104e` Replace the downloadable CV with the updated two-page version

`public/resume/Maryam-Amjad-Resume.pdf` replaced byte-for-byte with the updated
CV (3 pages → 2, duplicated sections removed). The Download CV button is
unchanged and serves the file at the same URL.

### `64dfda0` Rename the Projects section heading

"Academic and Hackathon Projects" in `en.ts` plus `projects.title` in all nine
overrides (`fr`: *Projets académiques et hackathons*).

### `c848338` Stop the header brand from collapsing to a 6px sliver

The nav brand was designed to yield — `min-w-0 flex-1` + `truncate` — while the
10-item list was `shrink-0`. Measured across viewports, the name was truncated
from 1024px up, and at 1280px+ only **6px** of it survived out of the 162px it
needed. It is now `lg:min-w-max` + `lg:shrink-0`, so it is sized to its own
content and cannot be trimmed below it; the `ul` yields instead (`shrink`,
keeping its existing `overflow-x-auto` net). `xl` item padding went `px-3` →
`px-2`, `lg` `px-1.5` → `px-1`.

The `xl`-only " Portfolio" suffix was dropped from the nav: it cost 61px on its
own, and even at 1920px the bar only had ~23px spare. **Decision:** the site
uses the plain "Maryam Amjad" throughout — the full wordmark appears nowhere,
by choice.

### `5d00660` Move Autovance AI to second place in the projects grid

The section renders `portfolioData.projects` in array order, so Autovance sat
fourth. Relocated after the final-year project; content, tags and links
untouched. Order is now:

1. AI Feature Kit
2. **Autovance AI**
3. VeriVoice
4. AMD Model Router
5. HireGen AI
6. MIRA AI
7. University of Lakki Marwat Website Evaluation
8. Maryam AI Portfolio

### `1e74b0f` Stop hero stat labels splitting words mid-syllable

The profile-card labels are uppercase and letter-spaced inside a fixed
3-column grid, and `break-words` splits any word that outgrows its cell:

- `HACKATHONS` rendered as `HACKATHON / S` at 768px and above — cell offered
  **81px**, word needed **87px**.
- Spanish `Herramientas IA` broke as `HERRAMIENTA / S IA` — the word
  `HERRAMIENTAS` needs **90px** in an 85px cell.

Two sizing changes were required together: the cell keeps `px-2` instead of
bumping to `sm:px-2.5`, and the label stops at 11px instead of 12px. Padding
alone still left the word 2px short and the font change alone only 1px.

The Spanish label became **"Tools IA"** — no layout change can rescue a
12-character word that is wider than the cell at any font size the card
allows. This matches the brevity of the other nine locales (fr *Outils IA*,
de *KI-Tools*, ja *AI ツール*), and `es.ts` already carries loanwords such as
"Hackathons", "full-stack" and "freelance".

### `629eb8e` Drop the Autovance and UNESCO cards from Achievements

Eight cards left an awkward partial third row at `lg` and repeated what the
projects grid and hackathons list already say. Removed:

- **Team Lead / Autovance AI** — the standing "3x Team Lead" card already
  covers the team-lead record, and Autovance leads the projects grid.
- **Frontend Developer / UNESCO Youth Hackathon 2026** — VeriVoice remains a
  project card and a hackathon entry.

What stays: National and International Hackathons, Section Leader at Stanford
Code in Place X, QuizOff, 3x Team Lead, CodeSprint LA Ranking, LinkedIn
Community — six cards, an even 2×3 at `lg`.

No locale file needed editing: neither id was ever translated, because
`dictionary.achievements.cards[id]` falls back to the base copy when a locale
omits a key.

### `eac4029` Tighten the gap below the About section description

The section header carries `mb-10 sm:mb-12 md:mb-16`, sized for card-grid
content. About opens with running text, so the 64px read as a hole under the
two-line description. Now **32px**, with the 20px spacing between the three
summary paragraphs untouched.

`Section` gained an optional `headerClassName`. It **replaces** the default
rather than merging with it — `tailwind-merge` would otherwise keep the
default's `md:mb-16` alongside a supplied `mb-8` (different variants), and the
override would silently do nothing above `md`. Only About passes it, so every
other section keeps its original spacing.

---

## 3. Verification

Nothing in this record was confirmed by eye alone. Three layers run on every
round:

### 1. Compile gate

```
npx tsc --noEmit   → 0 errors
npm run lint       → 0 problems
npm run build      → success
```

### 2. Content and locale suites

| Suite | Checks | Result |
|---|---|---|
| Content assertions against served HTML | 132 | **132/132** |
| Rendered-DOM locale coverage | 108 | **108/108** |

### 3. Headless-Chrome measurement (CDP)

Custom probes that read real geometry rather than screenshots:

- **Nav brand** — laid-out text width vs available width at 9 viewports
  (360 → 1920), plus nav-list overflow. Result: **0/9 truncated, 0px overflow**.
- **Stat labels** — per-word probe across **10 locales × 5 widths**. A word
  wider than its column is the only guaranteed way to get a mid-word break,
  so measuring words catches cases a line count misses. Result: **0 broken**,
  tightest single-word fit margin **+2px**.
- **Achievements** — card count, grid columns and leftover copy per locale.
  Result: **6 cards, 3 columns, no leftovers**, in all 10 locales.
- **About gap** — header margin and description-to-body distance. Result:
  **32px**.

Production is polled after every push: the first request usually still serves
the previous build, so verification loops until the new build appears. The
last deployment showed `count=8` / `64px` on attempt 1 and `count=6` / `32px`
on attempt 2.

---

## 4. Verification tooling fixes

Two flaws were found in the checks themselves and corrected. Recorded because
they affect how much the numbers above are worth:

1. **Stale expectations.** After the Achievements cards were reduced, two
   assertions still encoded the old eight-card order (`#3 Stanford`,
   `#6 Team Lead`) and failed. The site was correct; the checks were not. They
   were rewritten for the six-card order, and stronger assertions added that
   Autovance and UNESCO are *absent* from the Achievements section while
   *still present* as a project and as a hackathon entry.
2. **A fixed reload delay silently measured English.** The locale loop waited
   a flat 2.5s after reload; some reloads took longer, so several locales were
   measured while still rendering English — which is why they reported the
   English figure of `2px` instead of their own (ur 38, ar 45, zh 43, ja 12,
   it 9, ko 33). The loop now polls `<html lang>` until it matches the target
   locale and flags the run as untrusted if it never does.

The probes and suites live outside the repository (temp directory), so they
are not part of the build.

---

## 5. Current state

| | |
|---|---|
| Local `main` | `eac4029` |
| `origin/main` | `eac4029` — in sync |
| Working tree | clean |
| Latest push | `1e74b0f..eac4029` (force-push never used; history never rewritten) |
| Live build | serves `eac4029` — confirmed by `629eb8e` and `eac4029` content appearing on the deployed site |
| Gate | `tsc` 0, `lint` 0, `build` 0, 132/132, 108/108 |

---

## 6. Open items

Deliberately not done — carried forward, not forgotten:

1. **`src/constants/site.ts` metadata is stale.** The meta description still
   describes a "full-stack developer … AI applications" and `<title>` still
   reads "Maryam Amjad | Hackathon Team Lead". Left unchanged on request; no
   wording has been agreed.
2. **QuizOff certificate is unlinked.** The CV carries no URL for it, so no
   link was added. Unblocks the moment a URL exists.
3. **Aspire Leaders naming discrepancy** between the CV and the site copy,
   reported earlier and not yet resolved.
4. **`reference-docs/`** is gitignored and never committed; the source CV
   lives there locally only.

---

## 7. Standing constraints

Applies to all future work on this repository:

- No redesigns beyond what is explicitly requested.
- "Full-Stack Developer" must not appear as page copy.
- Whole-site translation: whichever locale is selected, **all** text converts.
  English plus all nine overrides, with no new i18n system introduced.
- Keep branding, the dark/light toggle and the restrained palette intact.
- Every claim on the site must be backed by the CV.
- No dependency upgrades unless asked.
- Run `npx tsc --noEmit`, `npm run lint` and `npm run build` each round, and
  report results honestly — never claim a visual check that was not performed.
