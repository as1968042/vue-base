var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var projectRoot = path.resolve(__dirname, '../')
const vuxLoader = require('vux-loader')

var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')


var glob = require('glob');
var entries = utils.getMultiEntry(`./src/${config.moduleName}/${config.appName}/${config.viewName}/*/*.js`); // 获得入口js文件

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

let webpackConfig = {
  entry: entries,
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      '/src': path.resolve(__dirname, '../src'),
      '/static': path.resolve(__dirname, '../static'),
      'jquery': 'jquery'
    }
  },
  module: {
    rules: [
      {
        test: require.resolve('jquery'),
        use: [{
          loader: 'expose-loader',
          options: 'jQuery'
        },
          {
            loader: 'expose-loader',
            options: '$'
          }]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {test: /iview.src.*?js$/, loader: 'babel-loader?cacheDirectory=true'},
      {test: /element-ui.src.*?js$/, loader: 'babel-loader?cacheDirectory=true'},
      {test: /vue-echarts-v3.src.*?js$/, loader: 'babel-loader?cacheDirectory=true'},
      {test: /element-tree-grid.src.*?js$/, loader: 'babel-loader?cacheDirectory=true'},
      {
        test: /\.js$/,
        loader: 'babel-loader?cacheDirectory=true',
        include: [resolve('src'), resolve('test')],
        exclude: /node_modules/
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: [resolve('src/modules/aiyi_admin/icons')],
        options: {
          symbolId: 'icon-[name]'
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg|mp3)(\?.*)?$/,
        loader: 'url-loader',
        exclude: [resolve('src/modules/aiyi_admin/icons')],
        options: {
          limit: 1,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test : /\.(template.html)(\?.*)?$/,
        loader : 'url-loader',
        options : {
          limit : 1,
          name : utils.assetsPath ( 'template/[name].[hash:7].[ext]' )
        }
      },
    ]
  },
  plugins: [
    /*
      // 提取公共模块
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors', // 公共模块的名称
        chunks: chunks,  // chunks是需要提取的模块
        minChunks: 2 || chunks.length //公共模块被使用的最小次数。比如配置为3，也就是同一个模块只有被3个以外的页面同时引用时才会被提取出来作为common chunks。

      }),*/
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
}
if (process.argv[2] === 'educational') {
  module.exports = vuxLoader.merge(webpackConfig, {
    plugins: ['vux-ui', 'progress-bar', 'duplicate-style',
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        jquery: 'jquery'
      }),
      {
        name: 'less-theme',
        path: 'src/modules/educational/assets/default.less'
      }
    ]
  })
} else {
  module.exports = vuxLoader.merge(webpackConfig, {
    plugins: ['vux-ui', 'progress-bar', 'duplicate-style',
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        jquery: 'jquery'
      })
    ]
  })
}
