# installer-notes.txt

Installer license/notes text shown during Windows setup.

## Quick Facts

- Lines: 23
- Size: 3,068 bytes
- Talks to: GitHub/release layer
- API endpoints mentioned: 0
- Named functions discovered: 0

## Communication Role

This section explains how the file participates in the app. If it mentions `template-preview.js`, it likely affects the private builder UI. If it mentions `server.mjs`, it likely calls or implements local backend APIs. If it mentions `script.js`, it affects the public website. If it mentions GitHub, Cloudflare, or Workers, it participates in publishing, releases, or public AI.

## Representative Opening Snippet

```
OMB Portfolio Builder installation notes

This installer includes the desktop application, the local portfolio builder, the local preview server, the website template files, and the Electron runtime needed to run the app.

The app does not require the user to install Node.js or pnpm. Those are development/build tools only.

The installer creates a desktop shortcut by default. Untick the shortcut option during setup if you do not want one.

By default, setup installs for the current Windows user at %LOCALAPPDATA%\Programs\OMB Portfolio Builder. The builder workspace and publish mirror live under %LOCALAPPDATA%\OMB Portfolio Builder, so editable builder files and generated portfolio output stay together in AppData. This avoids protected Program Files updates and lets the app update itself without needing an administrator prompt for normal releases.

If OMB Portfolio Builder is already installed through Windows, setup tells the user which version it found, checks the current user's installation before legacy machine-wide records, pins setup to that current installed location, asks for approval during normal interactive installs, and updates that copy. Setup will not create a second installed copy in a different folder. During an in-app Update action, setup runs silently after the user clicks Update and updates the existing installation in place without running the old uninstaller first or requiring the user to manually uninstall first.

Setup also scans fixed drives for other OMB Portfolio Builder executables, portable copies, and local desktop-builder workspaces. It treats %LOCALAPPDATA%\OMB Portfolio Builder\builder and %LOCALAPPDATA%\OMB Portfolio Builder\portfolio as managed app workspaces, not duplicate installs. If it finds another unregistered copy, setup stops and asks the user to remove, uninstall, or rename that copy first. This prevents duplicate builders from leaving one machine with stale editing features.

Publishing to GitHub Pages requires Git for Windows with Git Credential Manager. During setup, the installer can check publishing tools and install Git for Windows if Git or Git Credential Manager is missing. If compatible tools already exist, setup skips them. Existing shared tools are not silently removed.

For GitHub authentication, open Publishing target inside the app, enter the target repository, then click Save target and authenticate. A GitHub/Git Credential Manager sign-in flow may open in the browser. The builder keeps the previous target until GitHub verifies write access to the new target. After authentication succeeds, click Load from target to refresh from that repository.

Successful publishing authorization is cached locally for about one day for the selected repository and branch.

Older and newer installers remain available from the GitHub Releases page.

Fresh installs start blank. No personal projects, resumes, profile photos, custom domains, or portfolio sections are included until the user adds them or authenticates to load a compatible publishing target.
```

## Debugging Questions

- What user action reaches this file?
- What state, file, endpoint, or DOM element does this file read?
- What state, file, endpoint, or DOM element does it write?
- If it fails, what is the smallest command or click that reproduces the failure?