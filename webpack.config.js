const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  mode: "development",
  watch: true,


  entry: {
    app: './src/index.js'
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
       test: /\.css$/,
       use: [
         { loader: "style-loader" },
         { loader: "css-loader" }
       ]
     },
     {
       test: /\.scss$/,
       use: [
         { loader: "style-loader" },
         { loader: "css-loader" },
         { loader: "sass-loader" }
       ]
     }
   ],
 },

 plugins: [

   new webpack.ProvidePlugin({
     $: 'jquery',
     jQuery: 'jquery'
   }),

   new HtmlWebpackPlugin({
     template: './src/index.html'
   }),

 ]

};
