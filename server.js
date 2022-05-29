const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const config = require('./webpack.config.js')
const complier = webpack(config) //webpack 集合 配置文件config。返回编译器complier

const app = express()
app.use(webpackDevMiddleware(complier,{
  publicPath:config.output.publicPath
}))

app.listen(3000,() => {
  console.log('server is running')
})
