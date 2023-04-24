bin/_icon.sh
# 项目打包
webpack --config config/webpack.build.js

# 移动
mv dist/stats.json Analyzer/
mv dist/report.html Analyzer/

# zip
npm run zip
