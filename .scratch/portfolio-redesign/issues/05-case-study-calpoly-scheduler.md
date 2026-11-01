# 05: Case Study — CalPoly Scheduler

**What to build:** CalPoly Scheduler gets a Case Study. It covers the scrape → PostgreSQL → Express → React flow and the live site link, and shows the backtracking excerpt (`sectionsConflict` and `buildSchedules`). The explanation covers grouping by course component, seeding locked sections, early pruning, the 100-result cap, and ranking by average professor rating with the top 15 returned. It states the tradeoff that the cap can miss the best schedule. Evidence covers the live site, the CI workflow, the database schema, the scrapers and the commit history. Limitations: no automated tests, last-name professor matching, and the daily scrape not currently scheduled. An optimized screenshot is included.

**Blocked by:** 04

**Status:** ready-for-agent

- [ ] The excerpt is verbatim from the pinned commit, with a line-anchored link.
- [ ] The metric reads exactly "15,000+ users with saved schedules" with its source.
- [ ] The screenshot is served through `next/image` with explicit dimensions and alt text.
- [ ] The card links to the Case Study, and the existing Case Study tests cover it.
- [ ] Lint, build and tests pass.
