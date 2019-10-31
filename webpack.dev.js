const merge = require("webpack-merge");
const common = require("./webpack.common");
const webpack = require('webpack');

module.exports = merge(common, {
    entry: "./src/index.js",

    output: {
        filename: '[name].js',
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],
    devServer: {
        contentBase: './public',
        disableHostCheck: true,
        hot: true
    },

    devtool: "source-map",
    mode: 'development'
});