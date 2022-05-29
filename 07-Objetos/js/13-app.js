const producto ={
    nombre: "Monitor 20 pulgadas",//propiedad o llave de un objeto
    precio: 300,
    disponible:true
 
}

//Object.keys sirve para saber si el objeto tiene o no informacion
//retorna la parte izquierda
console.log(Object.keys( producto ) );
//retorna la parte derecha, osea los valores
console.log(Object.values(producto));
//retorna todo
console.log(Object.entries(producto));