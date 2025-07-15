// 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']

let ul = document.createElement('ul')

for (country of countries) {
  let li = document.createElement('li')
  li.textContent = country
  ul.appendChild(li)
}

document.body.appendChild(ul)
// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

let removeItems = document.querySelector('.fn-remove-me')
removeItems.remove()

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos  en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']

let newList = document.createElement('ul')

for (const car of cars) {
  let newLi = document.createElement('li')
  let textnewLi = document.createTextNode(car)
  newLi.appendChild(textnewLi)
  newList.appendChild(newLi)
}

let printHere = document.querySelector('[data-function="printHere"]')
printHere.appendChild(newList)

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countriesTwo = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]

for (const country of countriesTwo) {
  let divC = document.createElement('div')
  divC.classList.add('picture')

  let h4 = document.createElement('h4')
  let texth4 = document.createTextNode(country.title)
  h4.appendChild(texth4)

  let img = document.createElement('img')
  img.src = country.imgUrl

  divC.appendChild(h4)
  divC.appendChild(img)
  document.body.appendChild(divC)
}

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.

let button = document.createElement('button')
let textButton = document.createTextNode('Úsame para eliminar')
button.appendChild(textButton)
document.body.appendChild(button)

button.onclick = function () {
  let divs = document.querySelectorAll('div')
  let lastDiv = divs[divs.length - 1]
  lastDiv.remove()
}

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.

let divPictures = document.querySelectorAll('.picture')
console.log(divPictures)

for (const divpicture of divPictures) {
  divpicture.insertAdjacentHTML(
    'beforeend',
    '<button class=individualButton> Eliminar </button> '
  )
}

let individualsButtons = document.querySelectorAll('.individualButton')

for (const button of individualsButtons) {
  button.onclick = function () {
    let container = button.parentNode
    container.remove()
  }
}
