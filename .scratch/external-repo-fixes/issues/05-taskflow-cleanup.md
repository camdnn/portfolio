# Distributed Kafka Taskflow: fix before featuring

Status: ready-for-agent
Repo: camdnn/distributed-kafka-taskflow

The portfolio features this repo. Interviewers will hit these first.

## Acceptance
- `internal/task/task_test.go:28` uses `got.Attempt`; the field is `Attempts`. `go test ./...` passes.
- Remove the committed binaries (`monitor`, `cmd/monitor/monitor`) and add a `.gitignore`.
- Rewrite the README: what it does, an accurate directory tree, run steps (`make up`, `make topics`, start the producer, worker, retry handler and monitor), and credit Roan Morgan for the producer and dashboard.
- Optional: commit the offset only when publishing succeeds, and document the in-memory idempotency limitation.
