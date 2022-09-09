const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//todos los elementos deben cumplir la condicion. AND
const resultado = carrito.every( producto => producto.precio < 500);

console.log(resultado);


//algun elemento debe cumplir la condicion, al menos uno. OR
const resultado2 = carrito.some( producto => producto.precio < 500);
