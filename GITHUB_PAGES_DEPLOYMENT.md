# 🚀 Deploying Next.js to GitHub Pages (Static Export Mode)

## ✅ Standard Deployment Steps

1. Set output mode: In `next.config.js`, add `output: 'export'` to enable static export mode.
2. Update base path: Add `basePath: '/your-repo-name'` and `assetPrefix: '/your-repo-name/'` in `next.config.js`.
3. Export site: Run `next build && next export` — this outputs to `out/` folder.
4. Install gh-pages: Run `npm install --save-dev gh-pages`.
5. Add scripts to `package.json`:  
```json
"predeploy": "next build && next export",  
"deploy": "gh-pages -d out"
```
6. Deploy: Run `npm run deploy` — it will push the static site to `gh-pages` branch.
7. GitHub Settings: Go to your repo → Settings → Pages → Set source to `gh-pages` branch and `/ (root)`.
8. Access site: Visit `https://your-username.github.io/your-repo-name`.

---

## 🛠️ Fix Broken Layout/Design on GitHub Pages

### ✅ 1. Correct `next.config.js` setup:
```js
const repoName = 'your-repo-name';

const nextConfig = {
  output: 'export',
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
};

module.exports = nextConfig;
```

### ✅ 2. Use `next/link` and `next/image` instead of raw HTML tags:

```tsx
import Link from 'next/link';
<Link href="/about">About</Link>

import Image from 'next/image';
<Image src="/logo.png" alt="logo" width={100} height={100} />
```

### ✅ 3. Fix hardcoded static paths in CSS/HTML:

```css
/* ❌ Wrong */
background-image: url('/images/bg.png');

/* ✅ Correct */
background-image: url('/your-repo-name/images/bg.png');
```

### ✅ 4. Optional: Add `<base>` tag for relative paths (in `pages/_document.tsx` or `app/layout.tsx`)

```html
<base href="/your-repo-name/" />
```

### ✅ 5. Clear browser cache:

* Use hard refresh (`Cmd+Shift+R` or `Ctrl+Shift+R`)
* Or open the site in incognito/private mode

### ✅ 6. Check `out/` directory after export:

* Paths like `/your-repo-name/index.html`
* All `_next` assets prefixed with `/your-repo-name/`
* Images and styles pointing to correct paths

---

## 💡 Optional: Conditional `basePath` for local + GitHub Pages compatibility

```js
const isExport = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isExport ? '/your-repo-name' : '',
  assetPrefix: isExport ? '/your-repo-name/' : '',
};

module.exports = nextConfig;
```

This ensures your app works the same locally and when deployed on GitHub Pages.

## 🔧 Project-Specific Notes for LifeFlowAi

In this project, we implemented the following fixes:

1. Used conditional base path configuration for our repository name:
```js
basePath: process.env.NODE_ENV === 'production' ? '/d24-i9-LifeFlowAi' : '',
assetPrefix: process.env.NODE_ENV === 'production' ? '/d24-i9-LifeFlowAi' : '',
```

2. Created a helper function in `src/app/constants.js` to handle image paths:
```js
export function getImagePath(path) {
  return `${basePath}${path}`;
}
```

3. Added a `.nojekyll` file to prevent GitHub Pages from using Jekyll processing

4. Updated package.json scripts for deployment:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d out",
"clean": "rimraf .next out"
```

5. Created a custom document structure via `_document.js` for better HTML control

The site is deployed and accessible at: https://hunterho07.github.io/d24-i9-LifeFlowAi/
