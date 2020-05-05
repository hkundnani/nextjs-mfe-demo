const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  webpack: (config, options) => {
    config.plugins.push(new ModuleFederationPlugin({
      name: "app_02",
      library: { type: "var", name: "app_02" },
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        MyComponent2: "./pages/index.js"
      },
      shared: ["react", "react-dom"]
    }))
    return config
  },
  assetPrefix: "http://localhost:3001/",
  distDir: "dist"
}
