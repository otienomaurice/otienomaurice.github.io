# BRANCHING.md

Human-readable branch model explaining development, main, feature branches, and release flow.

## Quick Facts

- Lines: 55
- Size: 3,052 bytes
- Talks to: GitHub/release layer
- API endpoints mentioned: 0
- Named functions discovered: 0

## Communication Role

This section explains how the file participates in the app. If it mentions `template-preview.js`, it likely affects the private builder UI. If it mentions `server.mjs`, it likely calls or implements local backend APIs. If it mentions `script.js`, it affects the public website. If it mentions GitHub, Cloudflare, or Workers, it participates in publishing, releases, or public AI.

## Representative Opening Snippet

```
# Branching Workflow

This repository uses a protected release-style workflow.

## Branches

- `main` is the consumer branch. It should contain only finished, tested, release-ready code.
- `development` is the integration branch. It collects completed work from feature branches before release.
- `feature/<short-name>` branches are used for individual app changes, experiments, fixes, or UI improvements.

`main` must only receive changes from `development`. Feature branches, Codex branches, hotfix branches, and experiment branches must merge into `development` first. After `development` has collected and verified the changes, `development` is the only branch that may be merged into `main`.

## Normal Change Flow

1. Start from the latest `development`.
2. Create a focused feature branch:

```powershell
git checkout development
git pull origin development
git checkout -b feature/my-change
```

3. Update the branch register in `README.md` with the new branch name, purpose, source branch, merge target, and status.
4. Make and test the change.
5. Commit and push the feature branch:

```powershell
git add .
git commit -m "Describe the change"
git push -u origin feature/my-change
```

6. Merge or pull-request the feature branch into `development`.
7. Update the branch register status when the branch is merged, closed, or released.
8. Test `development`.
```

## Debugging Questions

- What user action reaches this file?
- What state, file, endpoint, or DOM element does this file read?
- What state, file, endpoint, or DOM element does it write?
- If it fails, what is the smallest command or click that reproduces the failure?