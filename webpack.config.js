const path = require('path')

module.exports = {
  mode:'development',//默认 production,打包后会压缩
  entry:'./src/index.js',
  module:{
    rules:[{
      test:/\.(jpg|png|jpeg|gif)$/,
      use:{
        loader:'url-loader',
        options:{
          name:'[name]_[hash].[ext]',//打包后的图片名
          outputPath:'images/',
          limit:2048, //图片小于2kb,打包成base64；否则打包成图片文件；
        }
      }
    }]
  },
  output:{
    filename:'bundle.js', //打包后文件名为 bundle.js
    path:path.resolve(__dirname,'dist') //打包后文件放入 dist 文件夹
  }
}