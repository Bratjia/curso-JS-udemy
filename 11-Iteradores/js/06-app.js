//forEach

const pendientes = ['Tarea','Comer', 'Proyecto', 'Estudiar JS'];

pendientes.forEach((pendiente)=>{
    console.log(pendiente);
})

const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700}
]
const nuevoArreglo= carrito.forEach(producto=>producto.nombre);

const nuevoArreglo2= carrito.forEach(producto=>producto.nombre);

console.log(nuevoArreglo); //estará vacio
console.log(nuevoArreglo2); // se ira llenando el arreglo