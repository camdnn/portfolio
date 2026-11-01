# 02: Landing section and Contact from the content file

**What to build:** Within the first screen, a hiring manager sees Camden's name, "Computer Science, Cal Poly San Luis Obispo · Graduating June 2028", "Seeking SWE and backend internships for summer 2028", and links to Resume, GitHub, LinkedIn and Email. There is no bio paragraph. A concise Contact section shows the email as visible text with a `mailto:` link. Profile facts come from a new typed content file, never hard-coded in components. The Skills section, Skills nav item and "Private Repository" popup are removed. Sharing the link shows a proper title, description and Open Graph preview.

**Blocked by:** 01

**Status:** ready-for-agent

- [ ] The content file owns the profile: name, education line, seeking line, email, GitHub, LinkedIn and resume URL. No phone number appears anywhere.
- [ ] The resume is served at `/camden-mann-resume.pdf`, and links to it say it opens a PDF.
- [ ] Landing copy matches the approved wording exactly, with no banned words (see the spec).
- [ ] Icon-only links have accessible names, and external links are announced as such.
- [ ] The Skills section, Skills nav item and private-repo popup are removed.
- [ ] Title, description, Open Graph and Twitter metadata are set. The canonical URL waits on the production domain (open item).
- [ ] Tests assert that the landing links to the resume PDF, GitHub, LinkedIn and `mailto:`.
- [ ] Lint, build and tests pass.
