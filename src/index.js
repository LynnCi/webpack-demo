//es module 引入方式
// import Header from './header.js'
// import Content from './content.js'
// import Sidebar from './sidebar.js'

//CommonJS 方式
// var Header = require('./header.js')
// var Sidebar = require('./sidebar.js')
// var Content = require('./content.js')
// var bg = require('./bg.jpg')


import bg from './bg.jpg'
import style from './index.scss'
import createImg from './createImg.js'

createImg()

var img = new Image()
img.src = bg
img.classList.add(style.bg)

var root = document.getElementById('root')
root.append(img)


// new Header()
// new Content()
// new Sidebar()





