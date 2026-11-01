# 04: Case Study page — Factory Edge Gateway

**What to build:** A technical interviewer clicks Factory Edge Gateway and lands on a short Case Study page at `/work/<slug>`. The page answers what it does, why it matters, what Camden built, and how to inspect it. It shows one real code excerpt (the consumer committing Kafka offsets only after the SQLite write, which makes replays harmless) with a plain-language explanation. The excerpt links to its exact lines at a pinned commit. An Evidence list covers the README, ADR 0001, the replay test, the client edge-case test, the Pi deployment config and the commit history. Known limitations are stated plainly: not yet on real Pi hardware, no CI, a single broker, no Kafka integration test. A clear link returns to Selected Work.

**Blocked by:** 03

**Status:** ready-for-agent

- [ ] Case Study pages are statically generated, for Flagship Projects only. Other slugs return 404.
- [ ] The build fails if a Flagship Project lacks any required Case Study section.
- [ ] The excerpt is verbatim from the pinned commit, and its link opens the exact line range.
- [ ] Pi wording is "designed and containerized for a Raspberry Pi 4; hardware deployment in progress". AI-assisted commits are not mentioned.
- [ ] The Factory Edge Gateway card links to its Case Study.
- [ ] Tests assert that each Case Study page has the required sections, a line-anchored excerpt link and an Evidence list.
- [ ] Lint, build and tests pass.
