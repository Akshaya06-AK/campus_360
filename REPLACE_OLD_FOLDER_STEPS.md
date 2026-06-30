# Fix White Screen - Replace Old Folder Correctly

Your screenshot shows the old folder structure. This fixed zip uses the same structure:

```text
akshaya-campus360
├── src
│   ├── components
│   │   ├── layout
│   │   └── ui
│   ├── context
│   ├── data
│   ├── pages
│   ├── routes
│   ├── styles
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Important

Do not mix old files and new files.

Best method:

1. Close `npm run dev` using `Ctrl + C`.
2. Extract this zip.
3. Open the extracted `akshaya-campus360-fixed-structure` folder in VS Code.
4. Run:

```bash
npm install
npm run dev
```

If you want to replace your old existing folder:

1. Delete these old files/folders from your old project:
   - `src`
   - `index.html`
   - `package.json`
   - `vite.config.js`
2. Copy these fixed files/folders from this zip into the old project.
3. Run:

```bash
npm install
npm run dev
```

## Why white screen happened

White screen usually happens when:

- `App.jsx` is not properly imported into `main.jsx`
- `main.jsx` is missing the React root render
- Old and new folder structures are mixed
- GitHub Pages asset path is wrong

This fixed version includes:

```js
base: "./"
```

inside `vite.config.js`, so GitHub Pages deployment will work better.
