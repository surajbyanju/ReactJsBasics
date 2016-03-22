/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');
var compiler = webpack(config);
 
var bundleStart = null;
compiler.plugin('compile', function() {
    console.log('Bundling...');
    bundleStart = Date.now();
});
compiler.plugin('done', function() {
    console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms!');
});
 
var bundler = new WebpackDevServer(compiler, {
    publicPath: '/',
    hot: false,
    quiet: false,
    noInfo: true,
    stats: {
      colors: true
    }
});
 
bundler.app.listen(8085);