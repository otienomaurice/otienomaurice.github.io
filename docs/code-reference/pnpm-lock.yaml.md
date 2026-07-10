# pnpm-lock.yaml

Pinned dependency lockfile so installs and GitHub Actions use the same dependency versions.

## Quick Facts

- Lines: 2,233
- Size: 69,301 bytes
- Talks to: Mostly local to its own feature area.
- API endpoints mentioned: 0
- Named functions discovered: 0

## Communication Role

This section explains how the file participates in the app. If it mentions `template-preview.js`, it likely affects the private builder UI. If it mentions `server.mjs`, it likely calls or implements local backend APIs. If it mentions `script.js`, it affects the public website. If it mentions GitHub, Cloudflare, or Workers, it participates in publishing, releases, or public AI.

## Representative Opening Snippet

```
lockfileVersion: '9.0'

settings:
  autoInstallPeers: true
  excludeLinksFromLockfile: false

importers:

  .:
    devDependencies:
      electron:
        specifier: ^39.2.7
        version: 39.8.10
      electron-builder:
        specifier: ^26.0.12
        version: 26.15.3(electron-builder-squirrel-windows@26.15.3)

packages:

  '@electron/asar@3.4.1':
    resolution: {integrity: sha512-i4/rNPRS84t0vSRa2HorerGRXWyF4vThfHesw0dmcWHp+cspK743UanA0suA5Q5y8kzY2y6YKrvbIUn69BCAiA==}
    engines: {node: '>=10.12.0'}
    hasBin: true

  '@electron/fuses@1.8.0':
    resolution: {integrity: sha512-zx0EIq78WlY/lBb1uXlziZmDZI4ubcCXIMJ4uGjXzZW0nS19TjSPeXPAjzzTmKQlJUZm0SbmZhPKP7tuQ1SsEw==}
    hasBin: true

  '@electron/get@2.0.3':
    resolution: {integrity: sha512-Qkzpg2s9GnVV2I2BjRksUi43U5e6+zaQMcjoJy0C+C5oxaKl+fmckGDQFtRpZpZV0NQekuZZ+tGz7EA9TVnQtQ==}
    engines: {node: '>=12'}

  '@electron/get@3.1.0':
    resolution: {integrity: sha512-F+nKc0xW+kVbBRhFzaMgPy3KwmuNTYX1fx6+FxxoSnNgwYX6LD7AKBTWkU0MQ6IBoe7dz069CNkR673sPAgkCQ==}
    engines: {node: '>=14'}

```

## Debugging Questions

- What user action reaches this file?
- What state, file, endpoint, or DOM element does this file read?
- What state, file, endpoint, or DOM element does it write?
- If it fails, what is the smallest command or click that reproduces the failure?