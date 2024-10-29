import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { dependencies }  from './package.json';

export default defineConfig({
  server: {
    base: '/foo',
    port: 3001
  },
  moduleFederation: {
    options: {
     name: 'remote',
     filename: 'remoteEntry.js',
     exposes: {
       './Button': './src/Button',
     },
     shared: {
       ...dependencies,
       react: {
         singleton: true,
         requiredVersion: dependencies['react'],
       },
       'react-dom': {
         singleton: true,
         requiredVersion: dependencies['react-dom'],
       },
     },
    }
  },
  plugins: [pluginReact()]
});