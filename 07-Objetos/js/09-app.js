
//para que no sea modificado, se debe poner en modo estricto


"use strict"; //evalua en modo escrito

const producto ={
    nombre: "Monitor 20 pulgadas",//propiedad o llave de un objeto
    precio: 300,
    disponible:true,
}
// permite modificar las llaves existentes de un objeto, no se puede agregar algo nuevo, 
//ni eliminarlas xq esta sellado
Object.seal( producto ); 
producto.disponible=false;
 //producto.imagen ="image.jpg";


// delete producto.precio;

console.log(producto);

//para verificar que un objeto este sellado
console.log(Object.isSealed(producto));