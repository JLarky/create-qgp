# create-qgp

## Templates for a great HRM experience with Astro (and others)

With NPM:

```bash
$ npm create qgp@latest
```

With Yarn:

```bash
$ yarn create qgp
```

With PNPM:

```bash
$ pnpm create qgp
```

With Deno:

```bash
$ deno run -A npm:create-qgp
```

Then follow the prompts!

You can also directly specify the project name and the template you want to use via additional command line options. For example, to scaffold a QGP project, run:

```bash
# npm
npm create qgp@latest my-vue-app -- --template qgp-demo

# yarn
yarn create qgp my-vue-app --template qgp-demo

# pnpm
pnpm create qgp my-vue-app --template qgp-demo

# Deno
deno run -A npm:create-qgp --template qgp-demo
```

Currently supported template presets include:

| Template            | Try online                                                                                                   |
| ------------------- | ------------------------------------------------------------------------------------------------------------ |
| `qgp-demo`       | [StackBlitz](https://stackblitz.com/fork/github/JLarky/create-qgp/tree/master/template-qgp-demo)    |
| `astro-vite-cra-ts`    | [StackBlitz](https://stackblitz.com/fork/github/JLarky/create-qgp/tree/master/template-astro-vite-cra-ts) |

You can use `.` for the project name to scaffold in the current directory.

## Attribution

This project is a fork of [create-vite-extra](https://github.com/bluwy/create-vite-extra). Credit goes to all of its contributors.
