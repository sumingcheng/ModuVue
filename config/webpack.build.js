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
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]_[fullhash:8].js'
  },
  plugins: [
    //  analyzer
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      generateStatsFile: true
    }),
    // 每次构建前删除 dist 目录
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: path.resolve(__dirname, '../dist')
    })
  ],
  optimization: {
    minimize: true,
    // 代码压缩混淆
    minimizer: [new TerserPlugin()],
    // 代码分割
    splitChunks: {
      name: 'vendors',
      chunks: 'all',
      // 50 kb
      minSize: 50000,
      maxSize: Infinity,
      minChunks: 3,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 100000,
      automaticNameDelimiter: '_',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          filename: '[name].bundle.js',
          name: 'vendors'
        },
        vue: {
          test: /[\\/]node_modules[\\/]@vue[\\/]/,
          priority: -5,
          filename: '[name].bundle.js',
          name: 'vue'
        },
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
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
      }
    ]
  }
})
