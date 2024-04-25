import { Plugin, AddonHooks, PluginHooks } from 'rollup';

type PluginOptions = AddonHooks | keyof PluginHooks;

export default function optionsWrapper<T extends PluginOptions>(
  optionName: T,
  optionValue: Plugin[T],
): Plugin {
  const plugin: Plugin = {
    name: `${optionName} plugin`,
  };
  plugin[optionName] = optionValue;

  return plugin;
}
