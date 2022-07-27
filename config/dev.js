const {merge} = require('webpack-merge');

/*-------------------*/

const plugins = require('./plugins');
const common = require('./common');
const entry = require('./entry');
const paths = require('./paths');
const rules = require('./rules');

/*-------------------*/

module.exports = merge(common, {

    mode: 'development',

    module: {rules: rules.dev,},

    devtool: 'source-map',

    devServer: {
        static: {directory: paths.devServerDir},
        historyApiFallback: true,
        open: true,
        compress: true,
        hot: true,
        port: 3000,
        client: {overlay: {errors: true, warnings: false,}},
    },

    plugins: plugins.dev,

    entry: {environment: entry.environment}

});
