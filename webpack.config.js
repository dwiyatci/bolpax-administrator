/**
 * Created by glenn on 12/02/16.
 */

const path              = require('path');
const webpack           = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool  : 'eval',
  resolve  : {
    root      : [
      path.join(__dirname, 'src'),
    ],
    alias     : {
      'bootstrap-css'          : 'bootstrap/dist/css',
      'bootstrap-jquery-plugin': 'bootstrap/dist/js/umd',
    },
    extensions: ['', '.js', '.css', '.json'],
  },
  entry    : {
    vendor: [
      'lodash',
      'jquery',
      'bootstrap-css/bootstrap',
      'bootstrap-jquery-plugin/modal',
      'font-awesome-webpack',
      'react',
      'react-dom',
      'react-router',
      'history',
      'notifyjs-browser',
    ],
    app   : ['./src/app.js'],
  },
  output   : {
    path      : path.join(__dirname, 'dist'),
    filename  : '[name].js',
    publicPath: '/',
  },
  plugins  : [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),

    new HtmlWebpackPlugin({
      template: './src/index.tpl.html',
      filename: 'index.html',
      favicon : './src/favicon.ico',
    }),

    new ExtractTextPlugin('[name].css'),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
  ],
  module   : {
    loaders: [
      {
        test   : /\.js$/,
        include: [
          path.join(__dirname, 'src'),
        ],
        loader : 'babel',
        query  : {
          presets: ['es2015', 'stage-2', 'react'],
        },
      },
      {
        include: [
          path.join(__dirname, 'node_modules/bootstrap/dist/js/umd'),
        ],
        loader : 'imports?jQuery=jquery',
      },
      {
        test  : /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css'),
      },
      {
        test  : /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=10000&minetype=application/font-woff',
      },
      {
        test  : /.(png|jpg)$/,
        loader: 'url?limit=8192',
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
        ],
      },
    ],
  },
  devServer: {
    contentBase       : '/dist',
    noInfo            : true,
    port              : 3000,
    historyApiFallback: true,
  },
};
