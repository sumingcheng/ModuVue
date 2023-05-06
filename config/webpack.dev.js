const { merge } = require('webpack-merge')
const common = require('../webpack.common.js')
const webpack = require('webpack')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    static: 'dist',
    hot: true,
    compress: true,
    port: 8848,
    historyApiFallback: true,
    open: true,
    // proxy: {
    //   '/api': {
    //     target: process.env.VUE_APP_BASE_URL, // 直接指向你请求的服务器地址
    //     changeOrigin: true
    //   }
    // },
    client: {
      logging: 'warn', // 消息级别
      overlay: true // 全屏覆盖
    }
  },
  // 输出构建信息
  stats: {
    all: false,
    warnings: true,
    errors: true,
    errorDetails: true,
    colors: true,
    performance: true,
    timings: true
  }
})
