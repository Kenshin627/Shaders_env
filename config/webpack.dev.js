const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path');

module.exports = merge(common,{
    mode:'development',
    devtool:'source-map',
    devServer: {
        // contentBase: path.join(__dirname, 'dist'),
        port: 9090,
        liveReload: true,
    },
})