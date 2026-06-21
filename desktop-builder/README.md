# OMB Portfolio Builder Desktop

OMB Portfolio Builder is the Windows desktop version of Maurice Otieno's local portfolio builder. It preserves the same builder UI, project creation flow, draft saving, preview parsing, and `Apply to site` publishing behavior that existed in the local browser builder.

## What The App Does

- Opens the existing portfolio builder in a native Windows application window.
- Uses the OMB blue snake icon for the application, taskbar, installer, and shortcut.
- Saves drafts through the same local builder API used by the browser version.
- Applies the portfolio to the website by writing `projects.json`, committing the site files, and pushing to GitHub.
- Keeps the recruiter-facing website separate from the builder interface.

## Workspace Behavior

The app needs a writable workspace because project uploads, draft JSON, generated docs, and Git commits must live on disk.

1. Development mode opens the repository root beside this folder.
2. If the packaged app is launched from inside the existing `OMB` repository, it uses that Git-backed workspace.
3. If the app is installed elsewhere, it creates or reuses:

```text
Documents\OMB Portfolio Builder Workspace
```

4. On first run, the installed app tries to clone:

```text
https://github.com/otienomaurice/otienomaurice.github.io.git
```

If Git is unavailable or the clone cannot complete, the app still seeds a local workspace from packaged files. Draft saving will work, but `Apply to site` cannot push until the workspace is Git-backed and GitHub credentials are available.

## Git Publishing Requirements

For `Apply to site` to push successfully:

- Git for Windows must be installed.
- The workspace must be a clone of the GitHub Pages repository.
- The Windows user must be authenticated for GitHub push access, usually through Git Credential Manager.
- The remote repository must allow pushes to the active branch, normally `main`.

The builder checks write access with Git before live website files are applied. If GitHub does not allow the signed-in identity to push, the app stops the publish and keeps the work local.

Maurice Otieno's website repository is:

```text
https://github.com/otienomaurice/otienomaurice.github.io.git
```

That website can only be changed by a GitHub identity with write access to that repository.

## Publishing To A Different Website

The app is public and can also be used for another compatible GitHub Pages/static website.

1. Open **Publishing target** in the app header.
2. Enter the target GitHub repository URL, for example:

```text
https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
```

3. Optionally enter a custom domain such as `example.com`; the builder writes it to `CNAME`.
4. Sign in to GitHub with an account that has write access to that target repository.
5. Optionally enter a GitHub username plus password/token. The app passes it to Git on that Windows machine and does not commit it to the repository.
6. Click **Save draft** before **Apply to site**.

If the repository is missing, incompatible, or the GitHub identity cannot push, publishing is rejected and the portfolio remains local-only.

The app does not store Maurice's password or embed private credentials. GitHub usually rejects normal account passwords for Git pushes, so use a GitHub personal access token, Git Credential Manager, or an approved organization SSO credential in the password/token field. Use GitHub MFA and short-lived personal access tokens when stronger identity checks are required.

## Offline Editing

The builder runs from a local server inside the desktop app. Project creation, section editing, file attachment, previews, and **Save draft** work offline because they write to the local workspace.

When the computer is online again, click **Apply to site**. The app checks the selected publishing target, verifies GitHub push access, writes the live site catalog, commits the changed site files, and pushes.

The builder shows a result window after publishing with the Git output and success/failure state.

## Development Commands

Run from this folder:

```powershell
pnpm install
pnpm run dev
pnpm run pack
pnpm run installer
pnpm run dist
```

- `pnpm run dev` starts the app against the current repository.
- `pnpm run pack` builds the portable Windows executable.
- `pnpm run installer` builds the NSIS installer.
- `pnpm run dist` builds both the portable executable and installer.

## Windows Installer

The installer is configured as a per-machine NSIS installer. Its default location is under:

```text
C:\Program Files\OMB Portfolio Builder
```

The installer is not one-click. The user can choose a different installation folder during setup. Desktop and Start Menu shortcuts are created by default.

## GitHub Release Build

The repository includes `.github/workflows/build-windows-builder.yml`.

Use the workflow manually from GitHub Actions to create downloadable build artifacts, or push a tag like:

```powershell
git tag builder-v0.2.0
git push origin builder-v0.2.0
```

Tags beginning with `builder-v` create a GitHub Release containing the installer and portable executable.

The latest public download page is:

```text
https://github.com/otienomaurice/otienomaurice.github.io/releases/latest
```
