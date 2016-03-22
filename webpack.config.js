/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var webpack = require("webpack");
var path = require("path");
 
module.exports = {
    devtool: "source-map",
    context: path.join(__dirname, "src", "js"),
    entry: [
        path.join(".", "app.react.js")
    ],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    },
    resolve: {
        root: [
            path.join(__dirname, "src", "js"),
            path.join(__dirname, "src", "css"),
             path.join(__dirname, "src", "js","reactrouter"),
             path.join(__dirname, "src", "js","payment"),
             path.join(__dirname, "src", "js","payment","action"),
             path.join(__dirname, "src", "js","payment","constants"),
             path.join(__dirname, "src", "js","payment","dispatcher"),
             path.join(__dirname, "src", "js","payment","store"),
            path.join(__dirname, "src", "img")
        ],
        extensions: [
            "", ".js", ".react.js"
        ]
    },
    module: {
        loaders: [
            { test: /\.react\.js$/, loader: 'jsx' },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.jpg$/,  loader: "file" },
            { test: /\.js$/, loader: 'jsx' }
        ]
    },
    plugins: [
        new webpack.OldWatchingPlugin(),
         new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
    ]
}