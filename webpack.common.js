const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const config = require('./config/config')
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, './src/main.js'),
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@views': path.resolve(__dirname, './src/views'),
      '@com': path.resolve(__dirname, './com'),
      '@service': path.resolve(__dirname, './service')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, // 如果文件大小小于 limit 参数，就将资源转换成 base64 编码的 DataURL
      {
        test: /\.(png|jpg|gif|jpeg|bmp|svg|ico)$/i,
        type: 'asset',
        generator: {
          filename: 'images/[name][ext][query]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 5120
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext][query]'
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html')
    }),
    new webpack.DefinePlugin({
      __CONFIG__: JSON.stringify(config),
      __VUE_OPTIONS_API__: 'true',
      __VUE_PROD_DEVTOOLS__: 'false'
    })
  ]
}
