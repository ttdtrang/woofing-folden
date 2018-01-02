const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        thank: './src/thank.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output management'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    resolve: {
        alias: {
            jqueryui: path.resolve(__dirname, 'lib/jquery-ui-1.12.1'),
            assets: path.resolve(__dirname, 'assets'),
            styles: path.resolve(__dirname, 'styles')
        }
    }

}
