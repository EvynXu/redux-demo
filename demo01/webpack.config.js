var webpack = require('webpack');
var path = require('path');
var buildPath = path.resolve(__dirname, 'build');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');

var TransferWebpackPlugin = require('transfer-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var config = {
    entry: {
        index: ['webpack/hot/dev-server',
            'webpack/hot/only-dev-server',
            path.join(__dirname, 'app/index.jsx')]
    },
    resolve: {
        extensions: ["", ".js", ".jsx"],
        modulesDirectories: ["node_modules"]
    },
    devtool: 'source-map',
    output: {
        path: buildPath,
        filename: '[name].js'
    },
    devServer: {
        contentBase: __dirname + '/www',
        devtool: 'eval',
        hot: true,
        inline: true,
        port: 3000
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new TransferWebpackPlugin([
            {from: 'www'}
        ], __dirname),
        new OpenBrowserPlugin({url: 'http://localhost:3000/main.html'})
    ],
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loaders: ['react-hot','babel'],
                exclude: [nodeModulesPath]
            },
        ]
    }
};

module.exports = config;
