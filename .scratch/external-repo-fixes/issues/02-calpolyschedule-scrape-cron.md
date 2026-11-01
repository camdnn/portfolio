# CalPolySchedule: make the daily scrape actually run

Status: ready-for-agent
Repo: camdnn/CalPolySchedule

`scrape.yml` lives in the nested `CalPolySchedule/.github/workflows/`, which GitHub ignores; `gh workflow list` shows only CI. The polyratings spider is not scheduled anywhere.

## Acceptance
- Workflow moved to the root `.github/workflows/` with correct working-directory paths.
- Decide whether the polyratings spider is scheduled too (and how often).
- A manual `workflow_dispatch` run succeeds.
