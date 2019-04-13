const commonCfg = require('./common')
const webpack = require('webpack');
const merge = require('webpack-merge')
module.exports = merge(commonCfg, {
  mode:'development',
  devtool:  '#source-map',
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,

        use: [
          'style-loader',
          'css-loader?sourceMap', // 将 CSS 转化成 CommonJS 模块
          'postcss-loader?sourceMap',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            }
          }
        ],
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 启用 热更新
  ]
})
