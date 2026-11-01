# Factory Edge Gateway: polish before featuring

Status: ready-for-agent
Repo: camdnn/factory-edge-gateway

## Acceptance
- Set a repo description.
- Add a CI workflow running `go vet ./...` and `go test ./...` on push and PR, plus a README badge.
- Move `learn/` out of the repo root, or explain it in the README.
- Delete the committed test-output dump `internal/sim/cnc_test.txt`.
- When it runs on a real Pi, tick the roadmap item and tell the portfolio to update its wording.
