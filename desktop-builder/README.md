# OMB Portfolio Builder Desktop

This folder contains the Windows desktop wrapper for the local portfolio builder.

The desktop app keeps the existing website and local browser builder intact. In development it opens the builder from the repository workspace. In packaged Windows builds, it seeds a writable workspace under the app data folder and runs the same local builder server inside the Electron application.

## Commands

```powershell
pnpm install
pnpm run dev
pnpm run pack
pnpm run dist
```

- `dev` opens the desktop app against the current repository files.
- `pack` creates a portable Windows executable.
- `dist` creates a Windows installer with desktop/start-menu shortcuts.
