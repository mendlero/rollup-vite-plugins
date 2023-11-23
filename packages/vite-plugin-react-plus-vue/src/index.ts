import reactPlugin, {
  Options as reactPluginOptions,
} from '@vitejs/plugin-react';

export type Options = Omit<
  reactPluginOptions,
  'jsxImportSource' | 'jsxRuntime'
>;

export default function reactPlusVue(
  options: Options,
): ReturnType<typeof reactPlugin> {
  return reactPlugin({
    ...options,
    jsxImportSource: 'vite-plugin-react-plus-vue/jsxImportSource',
    jsxRuntime: 'automatic',
  });
}
