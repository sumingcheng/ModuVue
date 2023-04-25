bin/build_icon.sh
# 项目打包
webpack --config config/webpack.build.js

# 移动
mv dist/resource/stats.json Analyzer/
mv dist/resource/report.html Analyzer/

# zip
npm run zip

# 移动
