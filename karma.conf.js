let webpackConfig = require('@vue/cli-service/webpack.config.js')
module.exports = function(config) {
    config.set({
        frameworks: [
            'mocha',
            'chai'
        ],
        files: [
            'src/test/**/*.spec.js'   //tests目录下，所有.spce.js结尾的测试文件
        ],
        preprocessors: {
            '**/*.spec.js': [
                'webpack',
                'sourcemap'
            ]
        },
        webpack: webpackConfig,
        reporters: ['spec'],
        browsers: ['PhantomJS'],
        singleRun: true
    })
};
