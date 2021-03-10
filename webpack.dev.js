const path = require("path");
const config = require("./webpack.config");
const { merge } = require("webpack-merge");
const HtmlWebPackPugPlugin = require("html-webpack-pug-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

let merged = merge(config, {
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
        publicPath: "/",
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        publicPath: "/",
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "src/index.pug",
            filename: "index.html",
        }),
        new HtmlWebPackPlugin({
            template: "src/about.pug",
            filename: "about/index.html",
        }),
        new HtmlWebPackPlugin({
            template: "src/media.pug",
            filename: "media/index.html",
        }),
        new HtmlWebPackPlugin({
            template: "src/merch.pug",
            filename: "merch/index.html",
        }),
        new HtmlWebPackPlugin({
            template: "src/contact.pug",
            filename: "contact/index.html",
        }),
        new HtmlWebPackPugPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: [/node_modules/],
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
});

module.exports = merged;
