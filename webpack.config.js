const path = require('path')

module.exports = {
  mode:'development',//默认production,打包后会压缩；dev环境不会压缩
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
    },{
      test:/\.(eot|ttf|woff|woff2)$/,
      use:{
        loader:'file-loader'
      }
    },{
      test:/\.scss$/,
      use:[
        'style-loader',
        {
          loader:'css-loader',
          options:{
            importLoaders:2,
            // modules:true, //开启css 模块化打包
          }
        },
        'sass-loader',
        'postcss-loader'
      ]
    }]
  },
  output:{
    filename:'bundle.js', //打包后文件名为 bundle.js
    path:path.resolve(__dirname,'dist') //打包后文件放入 dist 文件夹
  }
}