bin/build_icon.sh

# 增加版本号

echo "是否增加版本号: "
options=("Yes" "No" "Quit")
select opt in "${options[@]}"

do
    case $opt in
        "Yes")
            npm version patch
            build
            ;;
        "No")
            echo "不增加版本号"
            build
            ;;
        "Quit")
            echo "以退出"
            break
            ;;
        *) # 用户输入无效选项时的处理
            echo "Invalid option, please try again"
            ;;
    esac
done

build(){
  # 项目打包
  webpack --config config/webpack.build.js

  # 移动
  mv dist/resource/stats.json Analyzer/
  mv dist/resource/report.html Analyzer/

  # zip
  npm run zip
}

