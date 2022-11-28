const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const devClient = merge(common[0], {
  mode: "development",
});

const server = common[1];

module.exports = [devClient, server];
