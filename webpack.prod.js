const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const prodClient = merge(common[0], {
  mode: "production",
});

const server = common[1];

module.exports = [prodClient, server];
