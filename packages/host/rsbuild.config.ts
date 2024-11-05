import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    pluginReact({
      splitChunks: {
        react: false,
        router: false,
      },
    }),
    pluginModuleFederation({
      name: 'host',
      remotes: {
        remote: 'remote@http://localhost:3001/foo/remoteEntry.js',
      },
      shared: {
        react: {
          singleton: true,
        },
        "react/": {
          singleton: true,
        },
        'react-dom': {
          singleton: true,
        },
      },
      dts: false,
      shareStrategy: 'version-first',
    }),
  ],
});
