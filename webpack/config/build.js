const commonCfg = require('./common')
const webpack = require('webpack');
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const merge = require('webpack-merge')
const getProjectName =require('../utils/getProjectName') 
const projectName = getProjectName()
module.exports = merge(commonCfg, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, `../../dist/${projectName}`),
    filename: 'index.js',
    publicPath:'//your/cnd/path'
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            'css-loader?sourceMap', // 将 CSS 转化成 CommonJS 模块
            'postcss-loader?sourceMap',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                // data: '@import "src/global.scss";'
              }
            }
          ],
        })
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, `../../src/${projectName}/static`),
        to: path.resolve(__dirname, `../../dist/${projectName}/static`),
        ignore: ['.*']
      }
    ]),
    new ExtractTextPlugin("styles.css"),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      parallel: true
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: {
        autoprefixer: { disable: true },
        cssProcessor: require('cssnano'),
        cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
        canPrint: true
      }
    }),
  ],
})
