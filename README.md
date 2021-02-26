# TJ
blabla

https://blog.csdn.net/sinat_17775997/article/details/108600555

# eslint Prettier

1. install eslint
  
      yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react --dev

2. 在根目录下创建一个eslintrc.js 文件并添加以下内容：

        module.exports =  {
          parser:  '@typescript-eslint/parser',  // 指定ESLint解析器
          extends:  [
            'plugin:react/recommended',  // 使用来自 @eslint-plugin-react 的推荐规则
            'plugin:@typescript-eslint/recommended',  // 使用来自@typescript-eslint/eslint-plugin的推荐规则
          ],
          parserOptions:  {
          ecmaVersion:  2018,  // 允许解析最新的 ECMAScript 特性
          sourceType:  'module',  // 允许使用 import
          ecmaFeatures:  {
            jsx:  true,  // 允许对JSX进行解析
          },
          },
          rules:  {
            // 自定义规则
            // e.g. "@typescript-eslint/explicit-function-return-type": "off",
          },
          settings:  {
            react:  {
              version:  'detect',  // 告诉 eslint-plugin-react 自动检测 React 的版本
            },
          },
        };
  

3. 添加 Prettier 依赖
  
        yarn add prettier eslint-config-prettier eslint-plugin-prettier --dev

    在根目录下创建一个 .prettierrc.js 文件并添加以下内容

            module.exports =  {
              semi:  true,
              trailingComma:  'all',
              singleQuote:  true,
              printWidth:  120,
              tabWidth:  4,
            };

## 第三方库

无论是用于诸如 Apollo 之类的 GraphQL 客户端还是用于诸如 React Testing Library 之类的测试，我们经常会在 React 和 TypeScript 项目中使用第三方库。发生这种情况时，你要做的第一件事就是查看这个库是否有一个带有 TypeScript 类型定义 @types 包。你可以通过运行：

				#yarn
				yarn add @types/<package-name>
				#npm

				npm install @types/<package-name>
eg:			
	
				#yarn
				yarn add @types/jest
				
				#npm
				npm install @types/jest



