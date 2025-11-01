# CSS Not Loading - Troubleshooting Guide

## Problem
CSS styles are not appearing on the deployed GitHub Pages site, but work correctly in local development.

## Solution Steps

### 1. Clear Browser Cache (For Visitors)
The most common issue is browser caching. Users need to:
- **Hard Refresh**: Press `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
- **Clear Cache**: Go to browser settings and clear cached images and files
- **Incognito Mode**: Test the site in an incognito/private window to bypass cache

### 2. Verify GitHub Pages Settings
Ensure GitHub Pages is configured correctly:

1. Go to: `https://github.com/ABHISHEK0S1INGH/myproject/settings/pages`
2. Under "Build and deployment":
   - **Source** should be set to: `GitHub Actions` (NOT "Deploy from a branch")
3. The site URL should show: `https://abhishek0s1ingh.github.io/`

### 3. Trigger a Fresh Deployment
Force GitHub to rebuild and deploy:

1. Go to: `https://github.com/ABHISHEK0S1INGH/myproject/actions`
2. Click on "Deploy Astro site to GitHub Pages" workflow
3. Click "Run workflow" dropdown → "Run workflow" button
4. Wait for the workflow to complete (green checkmark)

### 4. Clear GitHub Pages Cache
GitHub Pages uses a CDN that may cache old files:

1. After a successful deployment, wait 5-10 minutes for CDN propagation
2. Test in incognito mode to avoid browser cache
3. Check the Network tab in browser DevTools to verify CSS is loading:
   - Press F12 to open DevTools
   - Go to Network tab
   - Reload the page
   - Look for `_astro/_page_.*.css` - should show status 200
   - If status is 404, the deployment may not be complete

### 5. Verify Build Succeeded
Check that the build generated CSS correctly:

1. Go to the latest workflow run in Actions tab
2. Check the "Build with Astro" step - should show no errors
3. The build should create `dist/_astro/_page_.*.css` file

### 6. Check for MIME Type Issues
If CSS files are downloading instead of loading:

1. Open DevTools (F12) → Network tab
2. Find the CSS file request
3. Check "Content-Type" header - should be `text/css`
4. If it's `application/octet-stream` or wrong type, GitHub Pages may need reconfiguration

## Technical Details

### What's Already Fixed
✅ `.nojekyll` file prevents Jekyll from processing the site
✅ Tailwind CSS and DaisyUI are properly configured
✅ CSS file is generated correctly (97KB, includes all styles)
✅ HTML correctly references CSS with proper paths
✅ Astro config is set up for GitHub Pages deployment

### How CSS is Loaded
1. Astro builds the site and generates minified CSS in `dist/_astro/`
2. The CSS filename includes a hash (e.g., `_page_.BFnAfuz1.css`) for cache busting
3. HTML references this CSS file with absolute path: `/_astro/_page_.BFnAfuz1.css`
4. GitHub Pages serves these static files from the `dist` directory

### Still Having Issues?

If CSS is still not loading after trying all the above:

1. **Check the actual deployed site**: Open DevTools (F12), go to Network tab, and verify:
   - The CSS file request shows status 200 (not 404)
   - The Content-Type is `text/css`
   - The file size matches the build (should be ~97KB)

2. **Compare local vs deployed**: 
   ```bash
   # Build locally
   npm run build
   npm run preview
   # Visit http://localhost:4321 and compare with deployed site
   ```

3. **Check Astro version compatibility**: Ensure you're using compatible versions:
   - Astro: ^4.0.2
   - @astrojs/tailwind: ^5.0.3
   - Tailwind CSS: ^3.3.5

4. **Rebuild from scratch**:
   ```bash
   rm -rf node_modules dist
   npm install
   npm run build
   ```

## Prevention
To avoid CSS loading issues in the future:
- Always test with `npm run build && npm run preview` before deploying
- Clear browser cache when testing new deployments
- Use incognito mode for testing to avoid cache issues
- Monitor the Actions workflow for any build errors
