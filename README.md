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

> 什么是 loader？  
> webpack 无法识别非 js 结尾的模块，通过 loader 转化识别；

> [file-loader](https://v4.webpack.js.org/loaders/file-loader/) 和 [url-loader](https://v4.webpack.js.org/loaders/url-loader/) 异同点？  
> url-loader 打包图片时，会把图片转换成 base64 格式，且把 base64 放到打包后的 js 文件中；适合小图片；

> [vue-loader](https://vue-loader.vuejs.org/zh/)
