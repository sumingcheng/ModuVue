const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
    ],
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
    //   build 仪表板插件
    new DashboardPlugin({
      // 可选参数
      theme: 'dark',
      dashboard: {
        customStats: [
          {
            label: 'Time',
            value: 'time',
          },
        ],
      },
    }),
    //
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: path.join(__dirname, '../Analyzer', 'report.html'),
      openAnalyzer: false,
    }),
  ],
})
