const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700}
]


carrito.forEach(function(producto){ //carrito es el plural de todo el arreglo
//producto es cada uno de los objetos
console.log(`${producto.nombre} - Precio: ${producto.precio}`);

})

//es similar a forEach, pero crea un arreglo nuevo
const nuevoArreglo = carrito.map(function(producto){ 
    return `${producto.nombre} - Precio: ${producto.precio}`;
    
})
console.log(nuevoArreglo);

