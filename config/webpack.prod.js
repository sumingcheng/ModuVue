const { merge } = require('webpack-merge')
const common = require('../webpack.common.js')
const webpack = require('webpack')

module.exports = merge(common, {
  mode: 'production',
  devServer: {
    static: 'dist',
    hot: true,
    compress: true,
    port: 8848
  },
  cache: {
    type: 'memory'
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
  },
  module: {
    rules: [
      // 处理图片文件
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext][query]'
        }
      }
    ]
  },
  plugins: [
    //   进度条
    new webpack.ProgressPlugin()
  ]
})
