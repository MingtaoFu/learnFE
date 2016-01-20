/**
 *
 * Created by mingtao on 1/20/16.
 */

module.exports = {
    entry: "./js/entry.js",
    output: {
        path: './dist/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.(es6|jsx)$/,
                //exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.(jpg|png)$/,
                loader: "url?limit=8192"
            },
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.scss$/,
                loader: "style!css!sass"
            }
        ]
    }
};
