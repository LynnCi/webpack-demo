const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode:'development',//默认production,打包后会压缩；dev环境不会压缩
  devtool:'cheap-module-eval-source-map',
  entry:{
    main:'./src/index.js',
  },
  devServer:{
    contentBase:'./dist',
    open:true,//自动打开浏览器
    port:8080,
    hot:true, 
    hotOnly:true //功能没有生效，浏览器不自动刷新
  },
  module:{
    rules:[{
      test: /\.m?js$/,
      exclude: /node_modules/,//babel-loader 不对该文件生效
      use: {
        loader: "babel-loader",
        /* 使用.babelrc
        options: {
          // presets: [['@babel/preset-env',{ //业务代码
          //   targets:{
          //     chrome:'67'
          //   },
          //   useBuiltIns:'usage'
          // }]] //包含 es6 转 es5 的转义规则。
          "plugins": [
            [
              "@babel/plugin-transform-runtime",{ //组件库
                "absoluteRuntime": false,
                "corejs": 2,
                "helpers": true,
                "regenerator": true,
                "version": "7.0.0-beta.0"
              }
            ]
          ]
        }
        */
      }
    },{
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
    },{
      test:/\.css$/,
      use:[
        'style-loader',
        'css-loader',
        'postcss-loader'
      ]
    }]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'src/index.html'
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()

  ],
  optimization:{ //dev 环境使用tree shaking 加此属性
    usedExports:true
  },
  output:{
    publicPath:'./',
    filename:'[name].js', //打包后文件名为 entry 设置名称
    path:path.resolve(__dirname,'dist'), //打包后文件放入 dist 文件夹
  }
}