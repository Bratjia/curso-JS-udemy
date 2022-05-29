
//para que no sea modificado, se debe poner en modo estricto


"use strict"; //evalua en modo escrito

const producto ={
    nombre: "Monitor 20 pulgadas",//propiedad o llave de un objeto
    precio: 300,
    disponible:true,
}

Object.freeze( producto );
// si se encuentra el producto congelado no se puede modificar
// producto.disponible=false;
// producto.imagen ="image.jpg";
// console.log(producto);

// delete producto.precio;
// x=20;
// console.log(x); // esto no lo permite

//como saber si un producto esta congelado
console.log(producto);
console.log(Object.isFrozen(producto));