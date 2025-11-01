# GitHub Pages Deployment Guide

This project is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

## Setup Instructions

To enable GitHub Pages for your repository, follow these steps:

1. **Go to your repository on GitHub**: Navigate to https://github.com/ABHISHEK0S1INGH/myproject

2. **Access Settings**: Click on the "Settings" tab in your repository

3. **Navigate to Pages**: In the left sidebar, click on "Pages" under the "Code and automation" section

4. **Configure Source**: 
   - Under "Build and deployment"
   - Set **Source** to: `GitHub Actions`

5. **Save**: The configuration will be saved automatically

6. **Trigger Deployment**: 
   - Push to the `main` branch, OR
   - Go to the "Actions" tab and manually trigger the "Deploy Astro site to GitHub Pages" workflow

## Accessing Your Site

Once deployed, your site will be available at:
```
https://abhishek0s1ingh.github.io/
```

## How It Works

- The GitHub Actions workflow (`.github/workflows/deploy-github-pages.yml`) automatically:
  1. Installs dependencies
  2. Builds your Astro site
  3. Deploys the built site to GitHub Pages

- The deployment is triggered automatically on every push to the `main` branch
- You can also manually trigger deployments from the Actions tab

## Configuration Files Modified

1. **astro.config.mjs**: Updated with the correct GitHub Pages URL
   - `site`: Set to your GitHub Pages domain (https://abhishek0s1ingh.github.io)
   - `base`: Set to '/' for root domain deployment

2. **.github/workflows/deploy-github-pages.yml**: New workflow file for Astro deployment
   - Replaces the previous Jekyll workflow
   - Uses Node.js and npm to build the Astro project
   - Uploads the `dist` folder to GitHub Pages

3. **public/.nojekyll**: Empty file that disables Jekyll processing
   - Critical for Astro sites on GitHub Pages
   - Prevents GitHub from treating the site as a Jekyll project
   - Automatically copied to `dist/` during build

## Troubleshooting

### If you see a 404 error when visiting the site:

1. **Check GitHub Pages is enabled**:
   - Go to Settings → Pages
   - Ensure "Source" is set to "GitHub Actions" (NOT "Deploy from a branch")

2. **Verify the deployment succeeded**:
   - Go to the Actions tab
   - Check that the "Deploy Astro site to GitHub Pages" workflow completed successfully
   - Look for the deployment URL in the workflow output

3. **Check for the .nojekyll file**:
   - The `public/.nojekyll` file should exist in the repository
   - After build, it should appear in the `dist/` folder
   - This file prevents GitHub from processing the site as Jekyll

4. **Wait for DNS propagation**:
   - After first enabling GitHub Pages, it may take a few minutes for the site to become available
   - The site URL will be: https://abhishek0s1ingh.github.io/

### If deployment fails:
1. Check the Actions tab for error messages
2. Ensure the workflow has the necessary permissions (should be automatic)
3. Try manually triggering the workflow from the Actions tab

## Local Development

To test the site locally with the production configuration:
```bash
npm install
npm run build
npm run preview
```

The preview will show you how the site will look when deployed.
