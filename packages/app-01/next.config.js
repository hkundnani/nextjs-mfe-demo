const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// const withPlugins = require('next-compose-plugins');

module.exports = {
  webpack: (config, options) => {
    config.plugins.push(new ModuleFederationPlugin({
      name: "app_01",
      library: { type: "var", name: "app_01" },
      filename: "remoteEntry.js",
      remotes: {
        app_02: "app_02"
      },
      exposes: {},
      shared: ["react", "react-dom"]
    }))
    return config
  },
  assetPrefix: "http://localhost:3000/",
  distDir: "dist"
}
