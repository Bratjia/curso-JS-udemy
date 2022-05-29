const producto ={
    nombre: "Monitor 20 pulgadas",//propiedad o llave de un objeto
    precio: 300,
    disponible:true,
}


producto.disponible=false;
delete producto.precio;

console.log(producto);