let path = require('path');
let webpack = require('webpack');
// 插件都是一个类，所以我们命名的时候尽量用大写开头
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "bundle.[hash:4].js",
        path: path.resolve("dist")
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                use: 'bable-loader',
                include: /src/,          // 只转化src目录下的js
                exclude: /node_modules/,  // 排除掉node_modules，优化打包速度
                
            }
        ]
    },
    devServer: {
        host: "localhost",
        port: 4399,
        open: true,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin('dist'),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            hash: true // 会在打包好的bundle.js后面加上hash串
        })
    ]
};