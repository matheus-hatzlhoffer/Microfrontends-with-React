const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "shell",
      remotes: {
        // remote_name@url/filename that is configured in the remote webpack config
        products: "products@http://localhost:8081/remoteEntry.js",
        cart: "cart@http://localhost:8082/remoteEntry.js",
      },
    }),
  ],
};
