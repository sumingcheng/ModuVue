# ModuVue

## 目录结构

```
├── public/                  # 静态资源，如favicon.ico等
│   
├── src/                     # 代码文件夹
│   ├── assets/              # 存储应用程序的静态资源文件
│   ├── components/          # 全局可用的组件，小型组件可以放在views下的页面组件中
│   ├── directives/          # 自定义指令
│   ├── mixins/              # 组件的复用逻辑
│   ├── plugins/             # 插件
│   ├── router/              # 路由及路由配置
│   ├── store/               # Vuex 状态管理相关
│   ├── utils/               # 工具类函数及方法库
│   ├── views/               # 页面文件夹
│   └── ...
│
├── tests/                   # 测试文件夹
│   
├── .editorconfig            # 编辑器配置
├── .eslintrc.js             # ESLint 配置
├── .gitignore               # Git忽略文件配置
├── babel.config.js          # babel 配置文件
├── package.json             # Node.js 模块的依赖关系的配置文件
└── README.md                # 项目说明文件 
```
