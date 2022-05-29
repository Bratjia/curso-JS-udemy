const producto ={
    nombre: "Monitor 20 pulgadas",//propiedad o llave de un objeto
    precio: 300,
    disponible:true
 
}
//agregar nuevas propiedades a un objeto
producto.imagen= 'imagen.jpg' 
//eliminar propiedades a un objeto
delete producto.disponible;
console.log(producto);