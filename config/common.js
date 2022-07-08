const plugins = require('./plugins');
const output = require('./output');
const entry = require('./entry');
const rules = require('./rules');

/*-------------------*/

module.exports = {

    entry: entry.common,

    output: output.prod,

    module: {rules: rules.common,},

    plugins: plugins.common,

    optimization: {runtimeChunk: 'single',},

    resolve: {extensions: ['.ts', '.tsx', '.js'],},

    stats: 'minimal',

};
