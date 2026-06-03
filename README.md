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
