# 06: Case Study — Constryke, with click-to-play video

**What to build:** Constryke gets a Case Study that separates clearly what Camden built from what the team built. Camden built the deterministic fraud checks, the risk scoring tuned on FBI IC3 data, PDF wire parsing, the behavioral-context layer and the 39 scenario tests. Teammates Sawyer Valin and Seth built most of the Next.js frontend and the Chrome extension. The excerpt is the ABA checksum and lookalike-domain checks. View Source goes to Camden's branch, alongside a My commits link. Limitations state that the branches were copied into main rather than merged, there is no evaluation set, and the domain list is fixed. The demo shows a poster image, and the video loads only when the visitor clicks play: no autoplay, visible controls. The demo video is re-encoded to under 4 MB.

**Blocked by:** 04

**Status:** ready-for-agent

- [ ] A reusable click-to-play video component: poster through `next/image`, an accessible play button labeled with the duration, and the video element mounted only after the click.
- [ ] The Constryke video is re-encoded (about 720p, H.264, faststart, no audio) to under 4 MB.
- [ ] The excerpt is verbatim from the pinned branch commit, with a line-anchored link.
- [ ] Tests assert there is no `<video>` element and no autoplay in prerendered HTML.
- [ ] Lint, build and tests pass.
