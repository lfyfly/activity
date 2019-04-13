module.exports= function () {
  const projectName = process.argv.length > 2 ? process.argv[process.argv.length - 1] : ''
  if (!projectName) throw '缺少项目名'
  return projectName
}