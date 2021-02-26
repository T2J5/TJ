# 安装项目需要的插件
### 安装redux和react-redux以及它们的类型文件做为依赖。
$ npm install -S redux react-redux @types/react-redux
这里我们不需要安装@types/redux，因为Redux已经自带了声明文件（.d.ts文件）。

### 定义应用的状态 State
一般会将常用的结构类型存放到 /types 目录下。所以我们在 src 目录下新建 types 目录。 

### 添加 actions
在 src 下创建 constants 目录，在 index.tsx 文件中添加需要响应的消息类型
这里的const/type模式允许我们以容易访问和重构的方式使用TypeScript的字符串字面量类型。 
接下来，我们创建一些 actions 以及创建这些 actions 的函数，src/actions/index.tsx。

### 添加 reducer
我们的reducer将放在src/reducers/index.tsx文件里。 它的功能是保证增加操作会让 times 加1，减少操作则要将 times 减1。

### 创建容器组件
然后我们再创建一个 container 目录，用来存放需要与数据交互的组件，新建 CounterCon.tsx 文件.

### 创建 store
让我们回到src/index.tsx。 要把所有的东西合到一起，我们需要创建一个带初始状态的store，并用我们所有的reducers来设置它。 并且使用 react-redux 的 Provider 将 props 和 容器连接起来

