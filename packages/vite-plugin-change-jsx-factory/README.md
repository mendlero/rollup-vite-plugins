# rollup-plugin-swap-module

A simple vite plugin to change the jsx factory of esbuild.

## installation

`npm install vite-plugin-change-jsx-factory -D`

## usage

To use this plugin with an already existing package that exports a `createElement` function you should pass the package name to the plugin like this:

```js
// vite.config.js
import { defineConfig } from 'vite';
import changeJSXFactory from 'vite-plugin-change-jsx-factory';

export default defineConfig({
  // config options
  plugins: [changeJSXFactory('your-package-name')],
});
```

or alternatively, you could create your own `createElement` function and pass it to the plugin:

```js
// vite.config.js
import { defineConfig } from 'vite';
import changeJSXFactory from 'vite-plugin-change-jsx-factory';

// see https://esbuild.github.io/api/#jsx-factory
function createElement(type, config, children){
    ...
}

export default defineConfig({
  // config options
  plugins: [changeJSXFactory(createElement)],
});
```
