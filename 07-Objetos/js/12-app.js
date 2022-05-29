//object constructor
//object literal
const producto ={
    nombre: "Monitor 20 pulgadas",//propiedad o llave de un objeto
    precio1: 300,
    disponible:true
 
}

//object constructor

function Producto(nombre111, precio) {
    this.nombre=nombre111;
    this.precio1=precio;
    this.disponible=true; 
}

const producto2= new Producto('Monitor de 24 pulgadas', 500);
console.log(producto);