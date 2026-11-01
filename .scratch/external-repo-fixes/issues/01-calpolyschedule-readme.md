# CalPolySchedule: write a real README

Status: ready-for-agent
Repo: camdnn/CalPolySchedule

The root `ReadMe.md` is a single heading and `EasyApps/frontend/README.md` is the unedited Vite template. Interviewers following the portfolio's View Source link land here first.

## Acceptance
- Root README states what the app does, links https://www.calpolyscheduler.com/, and shows the architecture: Scrapy spiders → PostgreSQL → Express API (Render) → React frontend (Cloudflare Pages, `functions/api/[[path]].js` proxy).
- Points to the schedule generator (`EasyApps/backend/routes/schedule.js`, `sectionsConflict` / `buildSchedules`) and explains the 100-combination cap and rating-based ranking.
- Local setup steps for database (`database/setup.sql`), backend, frontend, and scrapers.
- Replace the Vite template README in `EasyApps/frontend/`.
- Only factual claims; usage numbers only with their source.
