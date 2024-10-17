import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  moduleFederation: {
    options: {
      name: 'app',
    },
  }
});
