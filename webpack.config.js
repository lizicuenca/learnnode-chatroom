var path = require('path');
var webpack = require('webpack');

module.exports = {
    target: 'web',
    devtool: 'source-map',
    entry: {
        app: [
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
            './src/index.js'
        ]
    },
    output: {
        path: __dirname + '/static',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        preloaders: [{
            test: /\.js$/,
            loader: 'eslint',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['', '.js', '.json']
    }

}
