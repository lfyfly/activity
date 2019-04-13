const webpack = require('webpack')
const config = require('./config/test')

webpack(config, (err, stats) => {
  if (err || stats.hasErrors()) {
    // 在这里处理错误
    console.log(err)
  }
  // 处理完成
});