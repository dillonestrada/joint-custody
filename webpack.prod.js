const path = require("path");
const config = require("./webpack.config");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebPackPugPlugin = require("html-webpack-pug-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

let merged = merge(config, {
    mode: "production",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name]-[contenthash].bundle.js",
        publicPath: "/",
    },
    optimization: {
        minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
        }),
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: "src/index.pug",
            filename: "index.html",
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true,
            },
        }),
        new HtmlWebPackPlugin({
            template: "src/about.pug",
            filename: "about/index.html",
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true,
            },
        }),
        new HtmlWebPackPlugin({
            template: "src/media.pug",
            filename: "media/index.html",
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true,
            },
        }),
        new HtmlWebPackPlugin({
            template: "src/merch.pug",
            filename: "merch/index.html",
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true,
            },
        }),
        new HtmlWebPackPlugin({
            template: "src/contact.pug",
            filename: "contact/index.html",
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true,
            },
        }),
        new HtmlWebPackPugPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: [/node_modules/],
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ],
    },
});
module.exports = merged;
