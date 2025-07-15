// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click

let button = document.createElement('button')
button.id = 'btnToClick'
button.textContent = 'Haz click aqui'
document.body.appendChild(button)

button.onclick = function (event) {
  console.log(event)
}

button.addEventListener('click', function (event) {
  console.log(event)
})
// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
let inputFocus = document.querySelector('.focus')
inputFocus.addEventListener('focus', function (ev) {
  console.log(inputFocus.value)
})
// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
let inputValue = document.querySelector('.value')
inputValue.addEventListener('input', function (ev) {
  console.log(inputValue.value)
})

// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums.

const albums = [
  'De Mysteriis Dom Sathanas',
  'Reign of Blood',
  'Ride the Lightning',
  'Painkiller',
  'Iron Fist'
]

let ul = document.createElement('ul')

for (const album of albums) {
  let li = document.createElement('li')
  let textLi = document.createTextNode(album)
  li.appendChild(textLi)
  ul.appendChild(li)
}

document.body.appendChild(ul)
