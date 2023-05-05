const cacheGroupOptions = (moduleName, modulePath, priority) => ({
  test: new RegExp(`[\\\\/]node_modules[\\\\/](${moduleName})[\\\\/]`),
  reuseExistingChunk: true,
  filename: '[name].[contenthash:8].js',
  enforce: true,
  priority,
  chunks: 'all'
})

module.exports = {
  cacheGroupOptions
}
