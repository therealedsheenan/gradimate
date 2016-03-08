var path = require("path")
var HtmlWebpackPlugin = require('html-webpack-plugin')

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/_src/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = [
    {
        entry: [
            './_src/scripts/main.js'
        ],

        output: {
            path: './dist/scripts/',
            filename: "main.js"
        },

        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "babel-loader",
                    query: {
                        presets: ['react', 'es2015']
                    }
                }
            ]
        },

        plugins: [ HTMLWebpackPluginConfig ]
    }
];
