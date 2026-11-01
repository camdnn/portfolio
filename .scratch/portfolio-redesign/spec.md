# Spec: Portfolio redesign — evidence-first, code-centered

Status: ready-for-agent

Vocabulary follows `GLOSSARY.md` (Selected Work, Flagship Project, Case Study, View Source, Evidence, Claim).

## Problem Statement

Camden is applying for SWE and backend roles for summer 2028. A hiring manager gives the current portfolio 15–30 seconds, and in that window it shows decoration (grain overlay, drifting orbs, outlined name, scroll fade-ups) and a generic self-description rather than evidence. A technical interviewer who digs deeper hits dead ends:

- View Source links that go to `#`, `null`, or private repositories.
- A skills grid with no context.
- Claims the repositories don't support ("consistent high scores", unqualified usage claims).
- No way to see what Camden personally built on team projects.

Camden's strongest backend work, Factory Edge Gateway and Distributed Kafka Taskflow, isn't on the site at all.

The site also has engineering problems:

- About 39 MB of video loads eagerly on the home page, and the images aren't optimized.
- The theme doesn't follow the system setting or persist between visits.
- Hover styling is driven by JavaScript, so it ignores keyboard focus.
- Motion ignores `prefers-reduced-motion`.
- The whole site is one 868-line client component.

## Solution

A calm, minimal, server-rendered site built for two depths of review:

1. **The 15–30 second scan.** A landing section shows Camden's name and approved factual positioning, with immediate links to Resume, GitHub, LinkedIn and Email. Directly below it, Selected Work shows 3–5 projects. Each card states the problem, Camden's role, the tech in context, an honest result or lesson, and a prominent View Source link.
2. **The several-minute review.** Each Flagship Project gets a short Case Study page. It answers what the project does, why it matters, what Camden personally built and how to inspect it quickly. It includes one real code excerpt with a plain-language explanation and a list of Evidence (README, tests, ADRs, CI, deployment).

Everything else (LLEAP, The Codebase, the Online Ordering Platform, the Algebra Learning Platform) goes in a one-line-each Other work list, followed by a concise Contact section.

Visual direction:

- The existing warm neutrals plus a single deep-blue accent, used only for links, focus rings and View Source.
- Clean type and generous spacing.
- Motion only on hover and focus, disabled under reduced motion.

## User Stories

1. As a hiring manager, I want to see Camden's name, school and graduation date, and the roles they're seeking within the first screen, so that I can decide in seconds whether they fit my opening.
2. As a hiring manager, I want Resume, GitHub, LinkedIn and Email links visible without scrolling, so that I can act on my decision immediately.
3. As a hiring manager, I want to open the resume as a PDF at a clean URL, so that I can forward it to my team.
4. As a hiring manager, I want the email shown as visible text and a `mailto:` link, so that I can copy it or click it.
5. As a hiring manager, I want to see the strongest 3–5 projects immediately below the landing section, so that I don't scroll past filler.
6. As a hiring manager, I want each project card to state the real problem in one sentence, so that I understand why it exists.
7. As a hiring manager, I want each card to state Camden's specific role and contribution, so that I can tell solo work from team work.
8. As a hiring manager, I want the technologies shown in the context of each project, so that I can map them to my stack without reading a skill list.
9. As a hiring manager, I want each card to state an honest result, tradeoff or lesson, so that I can judge Camden's self-awareness and impact.
10. As a hiring manager, I want any usage metric to say what it counts and where the number comes from, so that I can trust it.
11. As a technical interviewer, I want a prominent View Source link on every project that goes to the most relevant repository, branch or directory, so that I can inspect the code in one click.
12. As a technical interviewer, I want View Source never to point at Camden's GitHub profile or a private repository, so that I don't hit a dead end.
13. As a technical interviewer, I want a live demo link where one exists, so that I can try the product.
14. As a technical interviewer, I want a Case Study for each Flagship Project, so that I can understand the design in a few minutes.
15. As a technical interviewer, I want each Case Study to answer "what does this do, why does it matter, what did Camden build, how do I inspect it", so that I can prepare interview questions.
16. As a technical interviewer, I want a short, real code excerpt on each Case Study with a plain-language explanation of the decision it shows, so that I can assess engineering judgment quickly.
17. As a technical interviewer, I want every excerpt to link to its exact file and line range in the repository, so that I can verify it's real and see its context.
18. As a technical interviewer, I want an Evidence list on each Case Study (README, tests, ADRs, CI, deployment config, commit history), so that I know where to look.
19. As a technical interviewer, I want honest limitations stated (for example, hardware deployment still in progress, or generation capped at 100 combinations), so that the Claims hold up under questioning.
20. As a technical interviewer reviewing a team project, I want the Case Study to separate what Camden built from what teammates built, and to name the co-developers, so that credit is clear.
21. As a technical interviewer reviewing Constryke, I want View Source to point to Camden's branch, because their work isn't attributed on `main`, so that I see their actual commits.
22. As a technical interviewer for a backend role, I want the distributed-systems projects (Factory Edge Gateway, Distributed Kafka Taskflow) shown prominently, so that I see backend depth first.
23. As a visitor, I want Other work listed as one line per entry, so that I see Camden's breadth without clutter.
24. As a visitor, I want demo videos to load only when I choose to play them, so that the page loads quickly on mobile data.
25. As a visitor, I want demo videos to have a poster image and visible controls and never autoplay, so that I stay in control.
26. As a visitor, I want images served at an appropriate size and format, so that the page is fast.
27. As a visitor, I want the site to follow my system light/dark setting by default, so that it's comfortable to read.
28. As a visitor, I want a theme toggle that remembers my choice without a flash of the wrong theme, so that the site respects my preference.
29. As a visitor who prefers reduced motion, I want all non-essential motion turned off, so that the site is comfortable to use.
30. As a keyboard user, I want every link and control reachable with Tab and given a visible focus ring, so that I can navigate without a mouse.
31. As a keyboard user, I want a skip-to-content link, so that I can bypass the navigation.
32. As a screen reader user, I want semantic landmarks, a logical heading order and accessible names on icon-only links, so that the structure makes sense.
33. As a screen reader user, I want external links and links that open a PDF to say so, so that I'm not surprised.
34. As a low-vision visitor, I want text and accent colors to meet WCAG AA contrast or better in both themes, so that I can read everything.
35. As a mobile visitor, I want the layout to work from 320px wide up with no horizontal scrolling, so that I can review on my phone.
36. As someone sharing the link, I want a descriptive page title, a meta description and an Open Graph preview, so that the link looks credible in Slack or LinkedIn.
37. As a visitor following a Case Study link, I want a clear way back to Selected Work, so that I can keep browsing.
38. As Camden, I want all project content kept in one typed data module, so that I can update Claims, links and excerpts without touching layout code.
39. As Camden, I want missing facts to render as clearly labeled placeholders, so that nothing invented ever ships silently.
40. As Camden, I want the build to fail if a project has no View Source, links to my GitHub profile, or a Flagship Project lacks Case Study content, so that the site's rules are enforced.

## Implementation Decisions

**Stack**
- Keep Next.js (App Router), React, Tailwind v4 and Geist.
- Remove `framer-motion` and `react-icons`. Keep `lucide-react` for the few icons still needed. GitHub and LinkedIn marks come from the existing `social-icons` component or inline SVG.
- The site is static and server-rendered. The only client component is the theme toggle.

**Content model**
- One typed content module owns the profile, Selected Work, the Case Studies and Other work. Components never hard-code Claims.
- A project has:
  - slug, title, problem, role, tech
  - result (a result, tradeoff or lesson)
  - optional live URL and View Source URL
  - optional "My commits" URL
  - optional co-developers
  - optional media (poster image plus an optional video)
  - an optional Case Study
- A Case Study has:
  - what-it-does, why-it-matters and what-Camden-built sections
  - one excerpt: the code, language, source URL with line anchors and an explanation
  - a list of Evidence links
  - a list of known limitations
- A placeholder value type renders as a visibly labeled "[Needs: …]" element. It's used wherever a fact is still pending.
- Content invariants are checked at build time:
  - 3–5 Selected Work entries
  - every View Source is a repository, branch or file URL, never the bare profile
  - every Flagship Project has a complete Case Study

**Routes**
- `/`: landing, then Selected Work, Other work and Contact.
- `/work/[slug]`: statically generated for Flagship Projects only.

**Landing copy** (approved)
- Name.
- "Computer Science, Cal Poly San Luis Obispo · Graduating June 2028".
- "Seeking SWE and backend internships for summer 2028".
- No bio paragraph.

**Selected Work** (approved order)
1. **Factory Edge Gateway**: Flagship. Solo.
   - Excerpt: commit-after-transaction with `INSERT OR IGNORE`, plus the replay test.
   - Pi deployment described as "designed and containerized for a Raspberry Pi 4; hardware deployment in progress" until Camden confirms otherwise.
   - No mention of AI-assisted commits (Q27).
2. **CalPoly Scheduler**: Flagship. Solo. Named "CalPoly Scheduler" to match the live domain.
   - Excerpt: the backtracking conflict-free generator.
   - Metric: "15,000+ users with saved schedules" (source: production database).
3. **Distributed Kafka Taskflow**: card only, no Case Study yet.
   - Co-developed with Roan Morgan. Camden's part is the queue, worker, retry and dead-letter core.
4. **Constryke**: Flagship.
   - Team credit stated; "AI-driven" approved.
   - View Source points to Camden's `pdf-text-parsing` branch, plus a My commits link.
   - Excerpt: the ABA checksum and lookalike-domain checks.
5. **NEAT Dino**: card only.
   - Labeled as a fork; Camden wrote the NEAT loop, game and sprites.
   - View Source renders as "Private repo" with no link while the repository is private (Q24).
   - The result is a lesson unless Camden supplies a real number (Q21).

**Other work**
- In this order: LLEAP, The Codebase, Online Ordering Platform (with its demo video), Algebra Learning Platform (with its demo video; Ollama + Wolfram Alpha).
- Wording comes from the resume. One line each, no source links.

**Removed**
- The skills grid and the Skills nav item.
- The grain overlay, orbs, outlined name and scroll animations.
- The "Private Repository" popup.
- The phone number is never shown.

**Theme**
- Colors are CSS custom properties on `:root`, with a dark-mode override.
- The system preference is the default. A pre-paint inline script applies the stored choice, so there's no flash. The toggle persists to `localStorage`, wrapped in try/catch.
- Accent: `#1E3A8A` light / `#93A8F4` dark.

**Motion**
- CSS transitions on hover and focus only.
- Everything is disabled under `prefers-reduced-motion: reduce`.
- No smooth scroll under reduced motion.

**Media**
- Videos are re-encoded with ffmpeg (H.264, about 720p, target under 4 MB each).
- Each video is rendered as a poster image plus a play button. Clicking mounts a `<video controls>` element. There's no autoplay, and `preload` is set to none.
- Images go through `next/image` with explicit dimensions.
- Oversized PNGs are re-exported.

**Resume**
- Served at `/camden-mann-resume.pdf`.
- The current file is kept until Camden supplies a corrected PDF (ticket 04).

**Metadata**
- Title, description, Open Graph and Twitter card, canonical URL [Needs: production domain], and a favicon.

**README**
- The portfolio README is replaced with run instructions and a pointer to the content module.

## Testing Decisions

- **One seam: the production build output.**
  - `next build` prerenders every route to static HTML.
  - A test suite using Node's built-in test runner (no new dependency) reads the prerendered HTML for `/` and each `/work/[slug]`, and asserts on external behavior only.
- **Assertions:**
  - The landing section has links to the Resume PDF, GitHub, LinkedIn and `mailto:`.
  - Every Selected Work entry has exactly one View Source link, and none points at the bare profile URL. Entries marked private have no link.
  - There are 3–5 Selected Work entries, and each Flagship Project has a Case Study page.
  - Each Case Study page has its required sections, one excerpt linking to a line-anchored source URL, and an Evidence list.
  - No `<video autoplay>` exists, and no video element is present before user interaction.
  - Every page has exactly one `<h1>`, `<main>` and `<nav>` landmarks, a skip link, and an accessible name on every icon-only link.
  - No placeholder ("[Needs:") ships when the `STRICT_CONTENT` environment variable is set. This lets Camden gate the final deploy.
- A good test checks what a reviewer or assistive technology would observe in the HTML, not component internals.
- **Gates:**
  - `npm run lint` and `npm run build` must pass.
  - Manual checks: keyboard pass, reduced-motion pass, a 320px viewport check, and Lighthouse (aim for 95+ Accessibility and Performance on mobile).
- **Prior art:** none in this repo; it has no tests. Factory Edge Gateway's replay test is the model for testing one property end to end.

## Out of Scope

- Changes to other repositories. These are tracked as tickets in `.scratch/external-repo-fixes/`: CalPolySchedule README, scrape cron, Constryke attribution, and the resume domain fix. Also tickets 05 (Taskflow cleanup), 06 (Factory Edge polish) and 07 (resume graduation date).
- Editing the resume PDF.
- A blog, CMS, analytics, contact form, testimonials or an about page.
- Case Studies for Distributed Kafka Taskflow and NEAT Dino. Revisit once their repositories are fixed or public.
- Any new headline, slogan, bio or metric not approved by Camden.

## Further Notes

**Resolved decisions (Camden accepted all recommendations, 2026-11-01).**
- Q17: Graduating June 2028; seeking SWE and backend internships for summer 2028. The resume's "June 2027" is wrong (ticket 07).
- Q18: "15,000+ users with saved schedules", counted from the CalPoly Scheduler production database. Named "CalPoly Scheduler".
- Q19: Accent `#1E3A8A` light / `#93A8F4` dark.
- Q20: Constryke View Source points to Camden's branch, plus a My commits link.
- Q21: The NEAT Dino result is a lesson-based draft. Camden must approve it before strict mode passes.
- Q22: Other work list as specified.
- Q23: Selected Work order as specified.
- Q24: NEAT Dino shows "Private repo" with no link until the repository is public.
- Q25 and Q26: tickets 05 and 06 filed. Pi wording stays "hardware deployment in progress".
- Q27: AI-assisted commits are not mentioned on the site.

**Content rules.** All Claims must trace to a repository, Camden's resume or Camden's direct answer. These words are banned unless Camden approves them: passionate, innovative, cutting-edge, world-class, "crafting digital experiences", and generic "I build…" statements.

**Rollback.** The redesign ships as one branch. The current site stays on `main` until the new one is approved.
