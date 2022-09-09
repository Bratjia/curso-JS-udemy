const enlace = document.createElement('A');
enlace.textContent= ' Nuevo Enlace';

//añadiendo href
enlace.href= '/ nuevo-Enlace';
//console.log(enlace);

enlace.target= "_blank";
enlace.setAttribute('data-enlace', 'nuevo-enlace');

enlace.classList.add('alguna-clase');

//enlace.onclick= miFuncion;

// function miFuncion(){
//     alert('Diste click')
// }



//seleccionar la navegacion
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(enlace); //appendChild es como agregar un nuevo hijo a la navegacion

navegacion.insertBefore(enlace,navegacion.children[1]); //insertan antes de la posicion 1



//crear un CARD

const parrafo1 = document.createElement('P');
parrafo1.textContent= 'Concierto';
parrafo1.classList.add('categoria','Concierto');

const parrafo2 = document.createElement('P');
parrafo2.textContent= 'Concierto de Rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('P');
parrafo3.textContent= '800 por persona';
parrafo3.classList.add('precio');

//crear div con la clase de info
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

console.log(info);

//crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

imagen.alt = "Texto Alternativo";

// console.log(imagen);

//crear el card
const card = document.createElement('div');
card.classList.add('card');

//asignar la imagen 
card.appendChild(imagen);

//asignar la info 
card.appendChild(info);

console.log(card);

//insertar en HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card);
