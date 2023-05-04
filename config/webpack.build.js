const { merge } = require('webpack-merge')
const common = require('../webpack.common.js')
const TerserPlugin = require('terser-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')

module.exports = merge(common, {
  // devtool: 'source-map',
  mode: 'production',
  output: {
    // publicPath: '/',
    path: path.resolve(__dirname, '../dist/resource'),
    filename: '[name]_[fullhash:8].js'
    // assetModuleFilename: 'css/[name][ext]'
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      generateStatsFile: true
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: path.resolve(__dirname, '../dist')
    })
  ],
  optimization: {
    minimize: true,
    // 代码压缩混淆
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false // 注释设置为false，即取消生成该注释
          }
        },
        extractComments: false
      })
    ],
    // 代码分割
    splitChunks: {
      name: 'vendors', // chunk名称,
      chunks: 'async', // 拆分标准，选择需要优化的 chunks,all,async和initial分别表示全部、按需加载和初始入口。
      minSize: 30000, // 拆分前的chunk大小需大于30KB
      maxSize: Infinity, // 拆分后的chunk大小不做限制
      minChunks: 3, // 被多少模块共享，将会被打包到新的chunk中
      maxAsyncRequests: 30, // 按需加载时的最大并发请求数
      maxInitialRequests: 30, // 入口点的最大并行请求数
      enforceSizeThreshold: 100000, // 强制给拆分后的chunk设置最小size
      automaticNameDelimiter: '_', // 命名分隔符
      cacheGroups: {
        vendors: {
          // cache group名称, 同时匹配符合test和priority的rule，只会使用其中一个
          test: /[\/]node_modules[\/]/, // 匹配需要拆分的模块路径，只有满足匹配规则的模块才被打包到当前的chunk中
          priority: -10, // 优先级，决定打包到哪个chunk中，值越大优先级越高
          filename: '[name].bundle.js', // 满足cache group的module会被打包到该文件中
          name: 'vendors'
        },
        defaultVendors: {
          test: /[\/]node_modules[\/]/,
          priority: -20,
          filename: '[name].bundle.js'
        },
        default: {
          priority: -30,
          reuseExistingChunk: true,
          filename: '[name].bundle.js',
          name: 'chunk-common'
        }
      }
    }
  }
})
