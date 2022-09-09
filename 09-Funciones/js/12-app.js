const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700}
]


carrito.forEach(producto=>(`${producto.nombre} - Precio: ${producto.precio}`));

const nuevoArreglo = carrito.map(producto=> `${producto.nombre} - Precio: ${producto.precio}`);
console.log(nuevoArreglo);