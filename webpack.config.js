/*
 * @Author: your name
 * @Date: 2021-01-18 18:47:20
 * @LastEditTime: 2021-01-18 18:54:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /workspace/TJ/webpack.config.js
 */
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ["@babel/env"]
        }
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx'] }
}