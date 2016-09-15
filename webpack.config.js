
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
    },
    node: {fs:'empty' }

}

/*
var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry: './src/main.js',
  target: 'node',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'backend.js'
  },
  externals: nodeModules,
  plugins: [
    new webpack.IgnorePlugin(/\.(css|less)$/),
    new webpack.BannerPlugin('require("source-map-support").install();',
    { raw: true, entryOnly: false })
  ],
  devtool: 'sourcemap'
}

//http://jlongster.com/Backend-Apps-with-Webpack--Part-I

*/