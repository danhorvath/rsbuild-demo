import { AppConfig } from "@templafy/rsbuild/config";

const config: AppConfig = () => {
  return {
    publicUrl: '/',
    devServer: {
      port: 3000,
    },
    moduleFederation: {
      name: 'templafy_app',
      shared: {
        react: { singleton: true, requiredVersion: '^18.0.0' },
        'react-dom': { singleton: true, requiredVersion: '^18.0.0' },
      },
    }
  }
}

export default config;