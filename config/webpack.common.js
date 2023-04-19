// const { VueLoaderPlugin } = require('vue-loader')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const path = require('path')
//
// module.exports = {
//   mode: 'development',
//   entry: './src/main.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js'
//   },
//   devServer: {
//     static: 'dist',
//     hot: true,
//     compress: true,
//     port: 8080,
//   },
//   resolve: {
//     extensions: ['.js', '.vue'],
//     alias: {
//       '@': path.resolve(__dirname, 'src')
//     }
//   },
//   module: {
//     rules: [
//       {
//         test: /\.vue$/,
//         use: 'vue-loader'
//       },
//       {
//         test: /\.js$/,
//         use: 'babel-loader',
//         exclude: /node_modules/
//       },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader']
//       },
//       {
//         test: /\.(png|jpe?g|gif)$/i,
//         use: [
//           {
//             loader: 'file-loader',
//             options: {
//               name: '[name].[ext]',
//               outputPath: 'images/'
//             }
//           }
//         ]
//       }
//     ]
//   },
//   plugins: [
//     new VueLoaderPlugin(),
//     new HtmlWebpackPlugin({
//       template: 'public/index.html'
//     })
//   ],
// }
