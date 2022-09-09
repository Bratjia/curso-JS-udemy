//query selector, retorna max un elemento
//.card es una clase
const card = document.querySelector('.card');
console.log(card);

//podemos tener selectores especificos como CSS
// hay dos clases
const info = document.querySelector('.premium .info');


//seleccionar el segundo card e hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');

//seleccionar el formulario
const formulario = document.querySelector('.contenido-hero #formulario');
console.log(formulario);    


//seleccionar elementos HTML
const navegacion = document.querySelector('nav');
console.log(navegacion);
