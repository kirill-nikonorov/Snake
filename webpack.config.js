const webpack = require('webpack');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: '[name].js',
    },

    devServer: {
        contentBase: './public',
        disableHostCheck: true,
        hot: true
    },
    devtool: "source-map",
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],
    module: {
        rules: [{
            exclude: /(node_modules)/,
            test: /\.jsx?$/,
            loaders: "babel-loader",
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    }
};