const merge = require("webpack-merge");
const common = require("./webpack.common");
const webpack = require('webpack');

const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
    entry: {
        client: [ './src/index.js']
    },
    output: {
        filename: 'main.js',
    },

    devServer: {
        contentBase: './public',
        disableHostCheck: true
    },

    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    plugins: [

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
    ]
});