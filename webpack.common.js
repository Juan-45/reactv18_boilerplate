const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const moduleObj = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
      },
    },
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
    },
  ],
};

const rootProperties = { watch: true };

const client = {
  entry: { client: "./src/client/index.js" },
  target: "web",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/public"),
  },
  module: moduleObj,
  plugins: [
    new HtmlWebPackPlugin({ template: "src/client/index.html" }),
    new webpack.ProvidePlugin({
      React: "react",
      ReactDOM: "react-dom",
    }),
  ],
  ...rootProperties,
  resolve: {
    alias: {
      components: path.resolve(__dirname, "./src/client/components/"),
      hooks: path.resolve(__dirname, "./src/client/hooks/"),
      pages: path.resolve(__dirname, "./src/client/pages/"),
      utilities: path.resolve(__dirname, "./src/client/utilities/"),
    },
  },
};

const server = {
  mode: "development",
  entry: { server: "./src/server/index.js" },
  target: "node",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: moduleObj,
  externals: [nodeExternals()],
  ...rootProperties,
};

module.exports = [client, server];
