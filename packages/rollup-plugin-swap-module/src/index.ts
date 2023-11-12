import { Plugin } from 'vite';

export default function swapModule(module1: string, module2: string): Plugin {
  return {
    name: `Swap ${module1} with ${module2}`,
    resolveId(source, importer, options) {
      if (source == module1) {
        return module2;
      }

      return null;
    },
  };
}
