const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  mode:'development',//默认production,打包后会压缩；dev环境不会压缩
  entry:{
    main:'./src/index.js',
    sub:'./src/index.js',
  },
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
  plugins:[
    new HtmlWebpackPlugin({
      template:'src/index.html'
    }),
    new CleanWebpackPlugin()
  ],
  output:{
    publicPath:'http://cdn.com.cn/', //生成的 js 加地址
    filename:'[name].js', //打包后文件名为 entry 设置名称
    path:path.resolve(__dirname,'dist') //打包后文件放入 dist 文件夹
  }
}