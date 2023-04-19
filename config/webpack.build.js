const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const TerserPlugin = require('terser-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
    ],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]_[fullhash:6].js',
  },
  module: {
    rules: [
      // 处理图片文件
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024 // 8kb
          }
        },
        generator: {
          filename: 'images/[name]_[hash:6][ext][query]'
        }
      },
    ],
  },
  plugins: [
    //  Analyzer
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: path.join(__dirname, '../Analyzer', 'report.html'),
      openAnalyzer: false,
    }),
    // 每次构建前删除 dist 目录
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, '../dist')],
    }),
  ],
})
