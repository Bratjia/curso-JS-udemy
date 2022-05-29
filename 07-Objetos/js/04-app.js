const producto ={
    nombre: "Monitor 20 pulgadas",//propiedad o llave de un objeto
    precio: 300,
    disponible:true
 
}
const nombre = producto.nombre; //le asigno el valor del nombre a la variable
 console.log(nombre);

//destructuring--> sacar de una estructura
const {nombre, precio,disponible}  = producto;
 const{precio} = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);