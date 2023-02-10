# create-qgp

## Templates for a great HRM experience with Astro (and others)

With NPM:

```bash
npm create qgp@latest
```

With Yarn:

```bash
yarn create qgp
```

With PNPM:

```bash
pnpm create qgp
```

With Bun:

```bash
bunx create-qgp
```

With Deno:

```bash
deno run -A npm:create-qgp
```

Then follow the prompts!

You can also directly specify the project name and the template you want to use via additional command line options. For example, to scaffold a QGP project, run:

```bash
# npm
npm create qgp@latest qgp-demo -- --template qgp-demo

# yarn
yarn create qgp qgp-demo --template qgp-demo

# pnpm
pnpm create qgp qgp-demo --template qgp-demo

# Bun
bunx create-qgp --template qgp-demo

# Deno
deno run -A npm:create-qgp --template qgp-demo
```

Currently supported template presets include:

| Template              | Try online                                                                                                |
| --------------------- | --------------------------------------------------------------------------------------------------------- |
| `qgp-clean`           | [StackBlitz](https://stackblitz.com/fork/github/JLarky/create-qgp/tree/main/template-qgp-clean)           |
| `qgp-demo`            | [StackBlitz](https://stackblitz.com/fork/github/JLarky/create-qgp/tree/main/template-qgp-demo)            |
| `astro-vite-cra-ts`   | [StackBlitz](https://stackblitz.com/fork/github/JLarky/create-qgp/tree/main/template-astro-vite-cra-ts)   |
| `astro-vite-react-ts` | [StackBlitz](https://stackblitz.com/fork/github/JLarky/create-qgp/tree/main/template-astro-vite-react-ts) |

You can use `.` for the project name to scaffold in the current directory.

## Attribution

This project is a fork of [create-vite-extra](https://github.com/bluwy/create-vite-extra). Credit goes to all of its contributors.
