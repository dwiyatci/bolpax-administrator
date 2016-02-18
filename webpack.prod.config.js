/**
 * Created by glenn on 12/02/16.
 */

const path              = require('path');
const webpack           = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  resolve: {
    root      : [
      path.join(__dirname, 'src'),
    ],
    alias     : {
      'bootstrap-css'          : 'bootstrap/dist/css',
      'bootstrap-jquery-plugin': 'bootstrap/dist/js/umd',
    },
    extensions: ['', '.js', '.css', '.json', '.jsx'],
  },
  entry  : {
    vendor: ['./src/vendor.js'],
    app   : ['./src/app.js'],
  },
  output : {
    path      : path.join(__dirname, 'dist'),
    filename  : '[name].js',
    publicPath: '/',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),

    new HtmlWebpackPlugin({
      template: './src/index.tpl.html',
      filename: 'index.html',
    }),

    new ExtractTextPlugin('[name].css'),

    //new webpack.ProvidePlugin({
    //  jQuery: 'jquery',
    //  $     : 'jquery',
    //}),
  ],
  module : {
    loaders: [
      {
        test   : /\.js$/,
        loader : 'babel',
        query  : {
          presets: ['es2015', 'stage-2', 'react'],
        },
        include: [
          path.join(__dirname, 'src'),
        ]
      },
      {
        test  : /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css'),
      },
      {
        test  : /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=10000&minetype=application/font-woff'
      },
      {
        test  : /.(png|jpg)$/,
        loader: 'url?limit=8192'
      },
      {
        test  : /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file',
      },
      {
        test   : /\.json$/,
        loader : 'json',
        include: [
          path.join(__dirname, 'src'),
        ]
      },
    ],
  },
};
