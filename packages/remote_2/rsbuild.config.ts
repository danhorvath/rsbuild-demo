import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  server: {
    base: '/foo',
    port: 3002,
  },
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'remote2',
      filename: 'remoteEntry.js',
      exposes: {
        './Remote2Button': './src/Remote2Button',
      },
      shared: {
        react: {
          singleton: true,
        },
        'react-dom': {
          singleton: true,
        },
      },
      dts: false,
    }),
  ],
});
