var APP = __dirname + '/client';
var webpack = require("webpack");

module.exports = {
    // context: APP,
    entry: ["webpack/hot/dev-server", __dirname + '/client/js/entry.js'],
    output: {
        path: __dirname+"/client/dist",
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
      },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' },
            {
               test: /\.js$/,
               // loader: 'ng-annotate!babel',
               loader: 'ng-annotate!babel!jshint',
               exclude: /vendor|node_modules/
            },
            {
                 test: /\.(woff|woff2|ttf|eot|svg)(\?]?.*)?$/,
                 loader : 'file-loader?name=fonts/[name].[ext]?[hash]'
            },
            { test: /\.css$/, loader: "style!css", exclude: /node_modules/ },
            { test: /\.less$/, loader: "style!css!less", exclude: /node_modules/ },
            { test: /\.html$/, loader: "raw", exclude: /node_modules/ }
        ]
    },
    // Add minification
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin()
  // ]
};