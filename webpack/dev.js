
const path = require('path')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server/lib/server')
const config = require('./config/dev')
const getProjectName =require('./utils/getProjectName') 
const projectName = getProjectName()
const compiler = webpack(config);

const server = new WebpackDevServer(compiler, {
  hot:true,
  contentBase: path.resolve(__dirname, `../src/${projectName}`),
});

server.listen(8080, '127.0.0.1', () => {
  console.log('Starting server on http://localhost:8080');
});
