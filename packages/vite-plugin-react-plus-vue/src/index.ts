import { Plugin } from 'vite';
import reactPlugin, {
  Options as reactPluginOptions,
} from '@vitejs/plugin-react';

export interface Options {
  reactPluginSettings?: Omit<reactPluginOptions, 'jsxImportSource'>;
}

export default function reactPlusVue(
  options: Options,
): Plugin | [ReturnType<typeof reactPlugin>, Plugin] {
  const reactVuePlugin: Plugin = {
    name: 'React plus vue',
  };

  return [reactPlugin(options.reactPluginSettings), reactVuePlugin];
}
