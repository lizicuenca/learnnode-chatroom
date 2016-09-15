var webpackConfig = require('./webpack.config.js');

const karmaConfig = {
    files: [
        './node_modules/phantomjs-polyfill/bind-polyfill.js',
        { pattern: './test/tests.webpack.js', watched: false },
    ],
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    preprocessors: {
      './test/tests.webpack.js': ['webpack'],
    },
    reporters: ['dots','progress'],
    singleRun: true,
    webpack: {
        resolve: {
            extensions: ['', '.js', '.json']
        },
        plugins: webpackConfig.plugins,
        module: {
            loaders: webpackConfig.module.loaders
        },
        externals: {
            'text-encoding': 'window'
        }
    },
    webpackMiddleware: {
        noInfo: true
    }
}

module.exports = function(cfg) {
    cfg.set(karmaConfig)
}
