
const path = require('path');
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const getProjectName =require('../utils/getProjectName') 
const projectName = getProjectName()
console.log({ projectName }, '=======')
module.exports = {
  entry: path.resolve(__dirname, `../../src/${projectName}/index.js`),
  resolve: {  //导入的时候不用写拓展名
    extensions: ['.js', '.vue', '.json'],
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname,'src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8 * 1024,
              name: `./img/[name]-[hash:7].[ext]`,
            }
          }
        ]
      },
      {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'url-loader',
          options: {
            name: `./font/[name].[hash:7].[ext]`,
            limit: 8192
          }
        }
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: `src/${projectName}/index.html`,
    })
  ]
};

