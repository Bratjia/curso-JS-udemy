//localStorage obtener datos de localStorage
const nombre = localStorage.getItem('nombre');

console.log(nombre);

const productoJSON = localStorage.getItem('producto');
console.log(JSON.parse(productoJSON) );