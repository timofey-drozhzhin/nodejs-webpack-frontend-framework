// Define Environment
// - Default to production
process.env.NODE_ENV = process.env.NODE_ENV === "development" ? process.env.NODE_ENV : "production";
var is_dev = process.env.NODE_ENV === "development";
var is_prod = process.env.NODE_ENV === "production";

var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ImageminPlugin = require('imagemin-webpack-plugin').default;
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    // filename: "[name].[contenthash].css",
    filename: "app.css",
});

const autoprefixer = require('autoprefixer');

module.exports = {
    context: __dirname,
    devtool: is_dev ? "inline-source-map" : false,
    entry: "./src/app.js",
    output: {
        path: __dirname + "/dist",
        filename: "app.min.js"
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                loader: 'style-loader',
            }, {
                loader: 'css-loader',
            }]
        }, {
            test: /\.scss$/,
            use: extractSass.extract({
                fallback: "style-loader",
                use: 'css-loader?importLoaders=1&sourceMap=true!postcss-loader?sourceMap=true!resolve-url-loader?debug=true&keepQuery=true&sourceMap=true!sass-loader?sourceMap=true'
            })
        }, {
            test: /\.(png|jpe?g)$/i,
            // resourceQuery: /[?&](size)(=|&|\[|$)/,
            use: [{
                loader: 'responsive-loader',
                options: {
                    name: 'images/[hash]-[width].[ext]',
                    adapter: require('responsive-loader/sharp'),
                    // background: '#FFFFFF'
                }
            }]
        }, {
            test: /\.(gif|svg)$/i,
            use: ['file-loader?name=images/[hash].[ext]']
        }, {
            test: /\.(woff|woff2|eot|ttf)$/,
            use: ['file-loader?fonts/[hash].[ext]']
        }]
    },

    plugins: [
        extractSass,
        require('autoprefixer'),
        new ImageminPlugin({
            test: /\.(png|gif|svg)$/i,
            disable: is_dev,
            jpgtran: {

            },
            pngquant: {
                quality: '95-100'
            }
        }),
        // @see https://webpack.github.io/docs/list-of-plugins.html
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({sourcemap: is_dev})
    ]
};