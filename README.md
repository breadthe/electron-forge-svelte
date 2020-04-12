# Electron Forge + Svelte + TailwindCSS + PurgeCSS + SCSS  Starter

Get up and running with 💪 Svelte & ⚡ Electron, with TailwindCSS, PurgeCSS, and SCSS support.

## Usage

```
git clone https://github.com/breadthe/electron-forge-svelte.git my-app
cd my-app

yarn install
yarn start
```

![svelte electron tailwind purgecss scss](https://user-images.githubusercontent.com/17433578/78511843-546c3000-7765-11ea-9a58-f8a2dd503e87.png)

## Troubleshooting

Sometimes when starting a fresh build, or after adding a new package with yarn/npm, if `yarn start` refuses to start the Electron app, stop it and run `yarn electron-forge start`. This should "reset" the build process. Afterwards you should be able to start it with `yarn start`.

## Notes

- src/index.js - Main electron process. 
- src/svelte.js - Svelte app entrypoint. 

Setup [Electron with Svelte](https://fireship.io/snippets/svelte-electron-setup) from scratch. 
Build cool projects with [Electron](https://fireship.io/tags/electron). 
