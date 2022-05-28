import bg from './bg.jpg'

function createImg(){
  var img = new Image()
  img.src = bg
  img.classList.add('bg')

  var root = document.getElementById('root')
  root.append(img)
}
export default createImg;