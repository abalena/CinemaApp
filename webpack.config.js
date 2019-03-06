var webpack = require('webpack');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + '/public/build/',
        publicPath: "build/",
        filename: "bundle.js"
    },
    devServer: {
      contentBase: "./public",
      hot: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/, /public/],
                use: {
                  loader: "babel-loader"
                }
            },
            {
              test:/\.css$/,
              use: ['style-loader', 'css-loader']
            }
        ]
    }
}
