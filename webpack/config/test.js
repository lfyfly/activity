const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const merge = require('webpack-merge')
const config = require('./build')

const getProjectName =require('../utils/getProjectName') 
const projectName = getProjectName()

module.exports= merge(config,{
  // mode: 'test',
  output: {
    path: path.resolve(__dirname, `../../dist_test/${projectName}`),
    filename: 'index.js',
    publicPath:'./'
  },
  plugins:[
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, `../../src/${projectName}/static`),
        to: path.resolve(__dirname, `../../dist_test/${projectName}/static`),
        ignore: ['.*']
      }
    ]),
  ]
})