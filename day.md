使用 TypeScript 编写 React 需要注意的规范

必须遵守的要求：

所有用到 jsx 语法的文件都需要以 tsx 后缀命名

使用组件声明时的 Component<P, S> 泛型参数声明，来代替 PropTypes进行类型校验

额外的代码规范：

全局变量或者自定义的 window 对象属性，统一在项目根下的 global.d.ts 中进行声明定义

对于项目中常用到的接口数据对象，最好在 types/ 目录下定义好其结构化类型声明


## Analyzing the Bundle Size

    npm install --save source-map-explorer

    yarn add source-map-explorer


    package.json: "analyze": "source-map-explorer 'build/static/js/*.js'",

## 配置alias

tsconfig.json

    "compilerOptions"{
      // 这里配置别名与路径
      "paths": {
        "@/*": ["src/*"],
        "@store/*": ["src/store/*"],
        "@components/*": ["src/components/*"]
      },
    }

eslint配置

需要安装 eslint-plugin-import与eslint-import-resolver-typescript插件，配置eslint使用tsconfig.js的path

    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        typescript: {
          project: path.join(__dirname, './tsconfig.json'),// 插件读取tsconfig配置的路径
          alwaysTryTypes: true, // always try to resolve types under
        },
      }
    }
