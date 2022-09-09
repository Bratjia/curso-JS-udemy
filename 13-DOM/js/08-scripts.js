//traversing the padre a hijo
const navegacion = document.querySelector('.navegacion');

console.log(navegacion);

console.log(navegacion.childNodes)// los espacios en blanco son considerados elementos
console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);
console.log(navegacion.children);

const card = document.querySelector('.card');
card.children[01].children[1].textContent='ASDASDASD'
// console.log(card.children[01].children[1].textContent);
card.children[0].src= 'img/hacer1.jpg';
console.log(card.children[0])

//traversing the  hijo a padre

console.log(card.parentNode);

console.log(card.parentElement.parentElement.parentElement);


console.log(card);
console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling);

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard.previousElementSibling);