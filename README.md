# Engineering Project Portfolio

This is a static portfolio website for hardware and software projects. It is designed for recruiters and resume links: projects can include GitHub repositories, documents, diagrams, source code, build notes, and test reports.

## Edit Your Details

1. Open `index.html`.
2. Replace `YOUR-GITHUB-USERNAME` and `YOUR-LINKEDIN`.
3. Replace `assets/resume.pdf` whenever you want to update the resume shown on the site.
4. Replace the sample project entries in `projects.json` with your real projects.

## Add Documents And Diagrams

Create a `docs` folder and place PDFs, images, CAD exports, diagrams, or reports inside it. Then link them from `projects.json`, for example:

```json
{
  "label": "Architecture diagram",
  "url": "docs/my-project-architecture.pdf"
}
```

## View Locally

Because the site loads `projects.json`, use a local server for the best preview:

```powershell
C:\Users\otien\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe server.mjs
```

Then open `http://127.0.0.1:8080` on this computer.

To preview from your phone, make sure the phone and computer are on the same Wi-Fi network, then open:

```text
http://YOUR-COMPUTER-IP:8080
```

On Windows, run `ipconfig` and use the IPv4 address for your Wi-Fi adapter.

## Publish

Good simple options:

- GitHub Pages: push this folder to a public repository and enable Pages.
- Netlify: drag this folder into Netlify Drop.
- Vercel: import the repository and deploy as a static site.

The site has no build step and no external runtime dependency.

## Public GitHub Pages Setup

1. Create a public GitHub repository named `maurice-otieno-portfolio` or `YOUR-GITHUB-USERNAME.github.io`.
2. Upload these files to the repository root: `index.html`, `styles.css`, `script.js`, `projects.json`, `.nojekyll`, and the `assets` folder.
3. In the repository, go to `Settings` > `Pages`.
4. Under `Build and deployment`, choose `Deploy from a branch`.
5. Select the `main` branch and `/ (root)`, then save.
6. Wait a few minutes for GitHub to publish the public URL.

## Windows Portfolio Builder App

The portfolio builder is also packaged as a Windows desktop application in `desktop-builder`.

Download the app from the GitHub Releases page:

[OMB Portfolio Builder Windows downloads](https://github.com/otienomaurice/omb-portfolio-builder/releases/latest)

Current release assets include:

- `OMB-Portfolio-Builder-Setup-0.2.1-x64.exe` for a normal Windows installer.
- `OMB-Portfolio-Builder-Portable-0.2.1-x64.exe` for a portable app that runs without installation.

- The app keeps the same builder behavior as the previous local browser workflow.
- Save draft continues to write local draft data.
- Apply to site first verifies GitHub write access, then writes the website catalog, commits changed site files, and pushes to GitHub when the workspace is Git-backed.
- The installer defaults to `C:\Program Files\OMB Portfolio Builder` and lets the user choose a different folder.
- A portable executable is also produced for Windows machines where installation is not desired.

### Install On Another Windows Machine

1. Open the release link above.
2. Download `OMB-Portfolio-Builder-Setup-0.2.1-x64.exe`.
3. Run the installer. The default path is under `C:\Program Files`, but the installer lets you choose another folder.
4. Open **OMB Portfolio Builder** from the Desktop or Start Menu.
5. Install Git for Windows if the machine does not already have Git.
6. Sign in to GitHub through Git Credential Manager using an account that has write access to the website repository.
7. Use **Publishing target** if this machine should publish to a different GitHub Pages repository or custom domain.
8. Optionally enter a GitHub username plus password/token in **Publishing target**. The builder hands this to Git on that Windows machine; it is not committed to the repository.
9. Use **Save draft** first, then **Apply to site** when ready.

### Publishing Security

The builder app is public, but publishing Maurice Otieno's live website is not public.

- The app does not store an owner password and does not embed private credentials.
- `Apply to site` performs a GitHub push permission check before live website files are applied.
- Maurice Otieno's live website can be changed only by a GitHub identity that has write access to `otienomaurice/otienomaurice.github.io`.
- Another user may use the same builder for a different website by opening **Publishing target**, entering their own GitHub Pages/static-site repository URL, optionally entering a custom domain, and authenticating to GitHub with write access to that repository.
- If the signed-in GitHub identity cannot push to the selected target repository, the live website is not changed and the builder stays local-only.
- For custom domains, the builder can write the repository `CNAME` file after the target website repository is associated.
- Use GitHub MFA, Git Credential Manager, and short-lived personal access tokens when stronger approval controls are needed.
- GitHub usually rejects normal account passwords for Git pushes. Use a GitHub personal access token, Git Credential Manager, or an approved organization SSO credential in the password/token field.
- The app works offline for local editing and **Save draft**. When the computer is back online, use **Apply to site** to run the GitHub authorization check and push the saved work.

Build locally:

```powershell
cd desktop-builder
pnpm install
pnpm run dist
```

The GitHub Actions workflow `.github/workflows/build-windows-builder.yml` builds downloadable Windows artifacts. Pushing a tag such as `builder-v0.2.0` creates a GitHub Release with both the installer and portable executable.
