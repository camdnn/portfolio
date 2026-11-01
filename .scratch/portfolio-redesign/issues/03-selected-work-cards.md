# 03: Selected Work cards with content rules

**What to build:** Below the landing section, Selected Work shows exactly five projects in this order: Factory Edge Gateway, CalPoly Scheduler, Distributed Kafka Taskflow, Constryke, NEAT Dino. Each card states the real problem, Camden's specific role (naming co-developers on team projects), the tech in context, and an honest result, tradeoff or lesson. Each card has a prominent View Source link to the most relevant repository, branch or directory, plus Live demo and My commits links where they exist. NEAT Dino shows "Private repo" with no link, and its lesson renders as a visible "[Needs: …]" placeholder until Camden approves it. The build enforces the content rules.

**Blocked by:** 02

**Status:** ready-for-agent

- [ ] The content file owns all Selected Work Claims, with wording and facts as in the spec's Implementation Decisions. Exact View Source targets and commit SHAs are in the session handoff, or can be re-verified from the repos.
- [ ] CalPoly Scheduler shows "15,000+ users with saved schedules (production database)". Constryke may say "AI-driven". Unsupported claims ("consistent high scores", "actively used by students") are gone.
- [ ] The build fails if Selected Work has fewer than 3 or more than 5 entries, if a View Source is not a GitHub URL, or if it equals the GitHub profile.
- [ ] With `STRICT_CONTENT` set, the build fails while any pending fact remains.
- [ ] The old single client page is replaced by server-rendered components, and `framer-motion` and `react-icons` are uninstalled.
- [ ] Tests assert one View Source per entry (none for a private repo), none pointing at the bare profile, and 3–5 entries.
- [ ] Lint, build and tests pass.
