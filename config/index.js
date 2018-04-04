let moduleName='modules'
let  viewName ='view'
let path = require('path')
let glob = require('glob')
let chalk = require('chalk')
let appNameArr = []
glob.sync('./src/modules/*').forEach(function (entry) {
  if (entry === 'index.html') {
    return;
  }
  appNameArr.push(entry.split('/').pop())
});

if(!process.argv[2]){
  console.log(chalk.red('请输入模块名称'))
  process.exit(0)
} else if (appNameArr.indexOf(process.argv[2]) < 0) {
  console.log(chalk.red('请输入正确的模块名'))
  process.exit(0)
}
console.log(chalk.green('构建'+process.argv[2]+'模块...'))
let appName = process.argv[2]
  module.exports = {

    //网站模块名，例如 http://192.168.0.216:8089/module/app/initlayer.html 中的
    //【views】，默认为views，修改这里的配置的同时，也要同时重命名/src/views的这个文件夹名称
    moduleName:moduleName,
    viewName:viewName,
    appName:appName,
    build: {
      env: require('./prod.env'),
      index: path.resolve(__dirname, '../dist/index.html'),
      assetsRoot: path.resolve(__dirname, '../dist'),
      assetsSubDirectory: `${appName}/assets`,
      assetsPublicPath: '/frontend/' + (process.env.npm_config_dist ? process.env.npm_config_dist + '/' : ''),
      productionSourceMap: false,
      // Gzip off by default as many popular static hosts such as
      // Surge or Netlify already gzip all static assets for you.
      // Before setting to `true`, make sure to:
      // npm install --save-dev compression-webpack-plugin
      productionGzip: true,
      productionGzipExtensions: ['js', 'css'],
      // Run the build command with an extra argument to
      // View the bundle analyzer report after build finishes:
      // `npm run build --report`
      // Set to `true` or `false` to always turn it on or off
      bundleAnalyzerReport: process.env.npm_config_report
    },
    dev: {
      env: require('./dev.env'),
      port: process.env.npm_config_port ? process.env.npm_config_port : 8080,
      autoOpenBrowser: false,
      assetsSubDirectory: `${appName}/assets`,
      assetsPublicPath: '/',
      proxyTable: {},
      // CSS Sourcemaps off by default because relative paths are "buggy"
      // with this option, according to the CSS-Loader README
      // (https://github.com/webpack/css-loader#sourcemaps)
      // In our experience, they generally work as expected,
      // just be aware of this issue when enabling this option.
      cssSourceMap: false
    }
  }
