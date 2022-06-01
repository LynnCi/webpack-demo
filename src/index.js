// import "@babel/polyfill"; //业务代码

const arr = [
  new Promise(() => {}),
  new Promise(() => {}),
]

arr.map(item => {
  console.log(item)
})