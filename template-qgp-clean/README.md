# QGP — Astro superpowered by Vite HMR

```
Open a terminal in your folder of choice
Type npx create-qgp@latest -t qgp-clean qgp-clean to download the template. (You can replace the second qgp-clean with any folder name you want.)
Type cd qgp-clean (or your project name) to enter the new folder.
Type npm i -g @antfu/ni to install a helpful tool.
Type ni to set up the project.
Type nr dev to start the Astro dev server on port 3000. (Here's a link: http://localhost:3000 )
Type nr dev2 to start the Vite dev server on port 5173. (Here's a link: http://localhost:5173 )
```

Use the Astro dev server to work on the whole site, and the Vite dev server to work on your SPA.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/JLarky/qgp.app)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/s/github/JLarky/qgp.app)

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                     | Action                                             |
| :-------------------------- | :------------------------------------------------- |
| `npm i -g @antfu/ni`        | Adds `ni` binary to help you with the installation |
| `ni`                        | Installs dependencies                              |
| `npm run dev` or `nr dev`   | Starts local dev server at `localhost:3000`        |
| `npm run dev2` or `nr dev2` | Starts local dev server at `localhost:5173`        |
| `npm run build`             | Build your production site to `./dist/`            |
| `npm run preview`           | Preview your build locally, before deploying       |
| `npm run astro ...`         | Run CLI commands like `astro add`, `astro check`   |
| `npm run astro --help`      | Get help using the Astro CLI                       |

## 👀 Want to learn more?

Check out [the website](https://qgp.deno.dev/).

## Credit

- Astro: [https://astro.build/](https://astro.build/)
- Vite: [https://vitejs.dev/](https://vitejs.dev/)
- Ryan Florence 👍 [tweet](https://twitter.com/JLarky/status/1618286589356171266)
