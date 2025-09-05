---
title: Deploying to GitHub Pages
order: 1
---

# Deploying to GitHub Pages

This project is preconfigured for easy deployment to [GitHub Pages](https://pages.github.com/), allowing you to publish your VitePress site directly from your repository.

## Automated Deployment with GitHub Actions

A GitHub Actions workflow is already included at `.github/workflows/deploy.yml`. This workflow automates the process of building and deploying your site to GitHub Pages whenever you trigger it manually from the Actions tab.

### Key Features of the Workflow

- **Automatic Build**: Installs dependencies and builds your VitePress site.
- **Artifact Upload**: Uploads the generated static files for deployment.
- **One-Click Deploy**: Deploys the site to GitHub Pages with a single workflow run.
- **Safe and Concurrent**: Ensures only one deployment runs at a time for consistency.

## How to Deploy

1. **Push your changes** to the `main` branch (or trigger the workflow manually from the Actions tab).
2. **GitHub Actions** will run the workflow defined in `.github/workflows/deploy.yml`.
3. **Your site will be published** to GitHub Pages automatically.

## Customizing the Workflow

- The workflow uses Node.js 22 and the latest VitePress version.
- You can switch to `bun`, `pnpm`, or `yarn` by editing the install and build steps in the workflow file.
- The build output is taken from `.vitepress/dist` by default.

## Where to Find the Workflow

- The workflow file is located at:
  ```
  .github/workflows/deploy.yml
  ```
- You can view and edit it directly in your repository.


> **Note:**
> By default, the workflow is set up for manual deployment only. If you want your site to deploy automatically on every push to the `main` branch, you need to uncomment lines 6-7 in `.github/workflows/deploy.yml`:
>
> ```yaml
>   push:
>     branches: [main]
> ```
>
> This will enable the workflow to run automatically whenever you push changes to `main`.

## Learn More

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [VitePress Documentation](https://vitepress.dev/)

---

With this setup, deploying your VitePress site is fast, reliable, and fully automated!
