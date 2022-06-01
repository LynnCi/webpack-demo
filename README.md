# Webpack

#### Webpack is a module bundler.

#### Webpack 是一个模块打包工具。

## 安装

#### 推荐在项目内安装，避免各项目间版本号冲突。步骤如下：

1. cd webpack-demo //进入项目目录
2. npm init -y //默认配置 package.json
3. npm install webpack@4.16.5 webpack-cli@3.3.11 -D //安装具体版本号(-D 相当于 --save-dev)  
   npm install webpack webpack-cli -D //安装默认版本
4. npx webpack -v //查看版本号

## Loader

因为 Webpack 无法识别非 js 结尾的模块，通过 loader 转化识别。

> loader 执行顺序：从下往上，从右到左。

> [file-loader](https://v4.webpack.js.org/loaders/file-loader/) 和 [url-loader](https://v4.webpack.js.org/loaders/url-loader/) 异同点？  
> url-loader 打包图片时，会把图片转换成 base64 格式，且把 base64 放到打包后的 js 文件中；适合小图片；

> [vue-loader](https://vue-loader.vuejs.org/zh/)

> [scss-loader](https://v4.webpack.js.org/loaders/sass-loader/)  
> [css-loader]() 分析各个 css 文件间关系，合并成一个 css；  
> [style-loader]() 拿到 css 合并文件后，把它挂载到 head 中；  
> css 打包的模块化？ css 只在当前内容生效。

## Plugin

#### 帮助 webpack 打包。

> [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/#root)
> 会在打包结束后，自动生成一个 html 文件，并把打包生成的 js 自动引入到这个 html 文件中。

> [clean-webpack-plugin]() 帮助 先删除已经打包文件，再重新生成新的打包文件。

## SourceMap

它是一个映射关系，源代码和产出代码的对应关系。

#### devtool 配置

- [cheap-module-eval-source-map](https://webpack.js.org/configuration/devtool/) dev 环境
- [cheap-module-source-map](https://webpack.js.org/configuration/devtool/) prod 环境。一般线上不使用映射关系
- inline-source-map 精确到行、列，耗费性能
- cheap-inline-source-map 精确到行，业务代码
- cheap-module-inline-source-map 业务代码 + 第三方模块
- eval 打包速度最快、性能最好，不适合复杂代码场景

## WebpackDevSever

#### 提升开发效率

#### 打包生成的目录放到电脑内存中，不在项目目录中。

## "middleware":"node server.js"

#### 运行 middleware，自己写一个服务器

## Hot Module Replacement

- 代码更新，自动刷新页面

## 打包命令

- npx webpack 生成 dist 打包文件
- npm run start 打包生成的命令在内存中

# Babel

- babel-loader
  作为 webpack 和 babel 的桥梁，需要借助其他插件把 es6 转义成 es5。

- @babel/polyfill 补丁库
  缺点:污染全局环境，因为全局注入变量、方法等。所以不能用他打包组件库、类库。

- @babel/plugin-transform-runtime
  用闭包、或间接方式引入组件内容。不会污染全局。

## [Tree Shaking](https://webpack.js.org/guides/tree-shaking/)

移除 js 中上下文未使用的代码块。  
只支持 ES Module 方式引入。
