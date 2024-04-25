import { Plugin } from 'vite';

function addConfigSettings(packageName: string): Omit<Plugin, 'name'> {
  return {
    enforce: 'post',
    config(config) {
      if (config.esbuild === undefined) {
        config.esbuild = {};
      }
      if (config.esbuild !== false) {
        config.esbuild.jsxFactory = packageName;
      }
      return config;
    },
  };
}

/**
 *
 * @param newFactory - The new jsx factory, should be a name of a module exporting a function createElement or a createElement function, see https://esbuild.github.io/api/#jsx-factory.
 * @returns The vite plugin that sets the jsx factory to the provided jsx factory
 */
function changeJSXFactory(newFactory: Function | string): Plugin {
  if (typeof newFactory === 'string') {
    return {
      name: `Change JSX factory to ${newFactory}`,
      ...addConfigSettings(newFactory),
    };
  }

  const virtualModuleId = 'virtual:jsx-factory';
  const resolvedVirtualModuleId = '\0' + virtualModuleId;

  return {
    name: 'Change jsx factory',

    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        return `export const createElement = ${newFactory.toString()}`;
      }
    },
    ...addConfigSettings(virtualModuleId),
  };
}

export default changeJSXFactory;
