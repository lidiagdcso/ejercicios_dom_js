// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
let newDiv = document.createElement('div')
document.body.appendChild(newDiv)
// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

// creo los elementos
let newDivTwo = document.createElement('div')
let newParagraph = document.createElement('p')
//incluyo nodo p como hijo de nodo div
newDivTwo.appendChild(newParagraph)
// lo añado al DOM
document.body.appendChild(newDivTwo)

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

let newDivThree = document.createElement('div')

for (i = 0; i < 6; i++) {
  let newP = document.createElement('p')
  newDivThree.appendChild(newP)
}

document.body.appendChild(newDivThree)

// 2.4 Inserta dinamicamente con javascript en un html una p con el	texto 'Soy dinámico!'.

let dinamicP = document.createElement('p')
let textDinamicP = document.createTextNode('Soy dinámico!')
dinamicP.textContent = 'Soy dinámico!'

document.body.appendChild(dinamicP)

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
let h2 = document.querySelector('.fn-insert-here')
let texth2 = document.createTextNode('Wubba Lubba dub dub')
h2.appendChild(texth2)

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']

let ul = document.createElement('ul')

for (const app of apps) {
  let li = document.createElement('li')
  let text = document.createTextNode(app)

  li.appendChild(text)
  document.body.appendChild(li)
}
// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
let deleteNodes = document.querySelectorAll('.fn-remove-me')

for (deleteNode of deleteNodes) {
  deleteNode.remove()
}
// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

let firstDiv = document.querySelector('div')
firstDiv.insertAdjacentHTML('afterend', '<p> Voy en medio </p>')

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 	.fn-insert-here

let insertDivs = document.querySelectorAll('.fn-insert-here')

for (div of insertDivs) {
  div.insertAdjacentHTML('beforeend', '<p>Voy dentro!</p>')
}
