const producto = {
    nombre:"Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

//const nombre= producto.nombre;

//Destructuring en objeto
const {nombre} = producto;

console.log(nombre);

//Destructuring con Arreglos
const numeros = [10,20,30,40,50];

//const [primero, segundo, tercero] = numeros;
const [, , tercero] = numeros; //es lo mismo que arriba
const [primero,segundo, ...terceros] = numeros;
console.log(numeros);
console.log(terceros); 


