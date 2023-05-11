bin/build_icon.sh

# 增加版本号
npm version patch
#npm version minor
#npm version major

# 项目打包
webpack --config config/webpack.build.js

# 移动
mv dist/resource/stats.json Analyzer/
mv dist/resource/report.html Analyzer/

# zip
npm run zip
