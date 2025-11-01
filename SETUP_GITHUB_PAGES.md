# 🚀 Complete GitHub Pages Setup Guide

## 🎯 Quick Fix for 404 Error

If your website at **https://abhishek0s1ingh.github.io/** shows a 404 error, follow these steps:

---

## ✅ Step-by-Step Configuration

### Step 1: Access Repository Settings
1. Go to your repository: **https://github.com/ABHISHEK0S1INGH/Bio**
2. Click the **"Settings"** tab (near the top right of the page)

### Step 2: Navigate to Pages Settings
1. In the left sidebar, scroll down to the **"Code and automation"** section
2. Click on **"Pages"**

### Step 3: Configure GitHub Actions Deployment ⚡ **MOST IMPORTANT**
1. Under **"Build and deployment"** section:
   - Look for **"Source"** dropdown
   - **Change from** `Deploy from a branch` **TO** `GitHub Actions`
   - This setting is saved automatically

2. You should see a message saying:
   ```
   Your site is ready to be published at https://abhishek0s1ingh.github.io/
   ```

### Step 4: Trigger Deployment
After changing the settings, you need to trigger a deployment:

**Option A: Push a new commit (Recommended)**
- Make a small change to your repository (e.g., add a comment in README.md or update a timestamp)
- Example: Add a line like `<!-- Updated: 2025-11-01 -->` to README.md
- Commit and push to the `main` branch
- GitHub Actions will automatically deploy

**Option B: Manual workflow trigger**
1. Go to the **"Actions"** tab in your repository
2. Click on **"Deploy Astro site to GitHub Pages"** in the left sidebar
3. Click the **"Run workflow"** button (dropdown)
4. Select `main` branch
5. Click the green **"Run workflow"** button

### Step 5: Wait for Deployment
1. Go to the **"Actions"** tab
2. Wait for the workflow to complete (green checkmark ✓)
3. Usually takes 1-2 minutes

### Step 6: Access Your Website
1. Visit: **https://abhishek0s1ingh.github.io/**
2. If you still see a 404:
   - **Clear your browser cache**: Press `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
   - **Try incognito/private browsing mode**
   - **Wait 5-10 minutes** for DNS/CDN propagation

---

## 🔍 Troubleshooting

### ❌ Still seeing 404?

#### Check 1: Verify GitHub Actions is enabled
- Go to Settings → Pages
- Confirm "Source" is set to **"GitHub Actions"** (NOT "Deploy from a branch")

#### Check 2: Verify workflow succeeded
- Go to the **Actions** tab
- Look for the latest **"Deploy Astro site to GitHub Pages"** workflow
- It should have a green checkmark ✓
- If it has a red X, click on it to see the error

#### Check 3: Verify GitHub Pages is enabled
- Go to Settings → Pages
- You should see: `Your site is live at https://abhishek0s1ingh.github.io/`
- If not, something is wrong with the configuration

#### Check 4: Clear everything and try again
1. Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
2. Open in incognito/private mode
3. Try a different browser
4. Wait 10 minutes and try again (DNS propagation)

### ❌ Deployment fails in Actions?

If the GitHub Actions workflow fails:
1. Click on the failed workflow run
2. Click on the failed job (usually "build" or "deploy")
3. Read the error message
4. Common issues:
   - **"npm ci"** fails: Try `npm ci --cache-clean` or `npm install --force` first
   - **"Build"** fails: Check for syntax errors in your code
   - **"Deploy"** fails: Verify GitHub Pages permissions (should be automatic)

---

## 📋 What's Already Configured

✅ **Astro configuration** (`astro.config.mjs`)
- Site URL: `https://abhishek0s1ingh.github.io`
- Base path: `/` (root domain)
- Proper integrations configured

✅ **GitHub Actions workflow** (`.github/workflows/deploy-github-pages.yml`)
- Automated deployment on push to `main` branch
- Proper permissions configured
- Uses official Astro deployment action

✅ **Jekyll bypass** (`public/.nojekyll`)
- Tells GitHub Pages not to process with Jekyll
- Critical for Astro sites

✅ **Path configurations**
- All component paths use `import.meta.env.BASE_URL` correctly
- Assets load from correct locations

✅ **Custom 404 page** (`src/pages/404.astro`)
- Displays a friendly error page if a route is not found

---

## 🎨 Local Development

To test locally:
```bash
# Install dependencies
npm install

# Start development server
npm run dev
# Visit: http://localhost:4321

# Build for production
npm run build

# Preview production build
npm run preview
# Visit: http://localhost:4321
```

---

## 📝 Important Notes

1. **The code is correct** - All files are properly configured
2. **The workflow works** - GitHub Actions deploys successfully
3. **The missing step** - GitHub Pages source MUST be set to "GitHub Actions"
4. **This is manual** - You must configure it in repository settings (can't be done via code)

---

## 🆘 Still Need Help?

If you've followed all steps and still see 404:

1. **Screenshot your Pages settings**: Settings → Pages
2. **Share the workflow run**: Copy URL from Actions tab
3. **Check browser console**: Press F12, look for errors in Console tab
4. **Verify URL**: Make sure you're visiting `https://abhishek0s1ingh.github.io/` (with trailing slash)

---

## ✨ Success Checklist

Once working, you should see:
- ✅ Website loads at https://abhishek0s1ingh.github.io/
- ✅ CSS styles are applied
- ✅ Images load correctly
- ✅ Navigation works
- ✅ All pages accessible

---

## 🔄 Future Deployments

Once configured, deployments are automatic:
1. Make changes to your code
2. Commit and push to `main` branch
3. GitHub Actions automatically builds and deploys
4. Wait 1-2 minutes for deployment
5. Website updates automatically!

No manual steps required after initial setup! 🎉
