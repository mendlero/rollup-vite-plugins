import { Plugin } from 'vite';
import reactPlugin, {
  Options as reactPluginOptions,
} from '@vitejs/plugin-react';

export interface Options {
  exludeReactPlugin?: boolean;
  reactPluginSettings: reactPluginOptions;
}

export default function reactPlusVue(
  options: Options,
): Plugin | [ReturnType<typeof reactPlugin>, Plugin] {
  const reactVuePlugin: Plugin = {
    name: 'React plus vue',
  };

  if (options.exludeReactPlugin) {
    return reactVuePlugin;
  }

  return [reactPlugin(options.reactPluginSettings), reactVuePlugin];
}
