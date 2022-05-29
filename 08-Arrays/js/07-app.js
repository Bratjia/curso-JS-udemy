
const carrito= [];

//definir producto

const producto= {
    nomre: "Monitor 20 pulgadas",
    precio: 10000
}
const producto2= {
    nomre: "celular",
    precio: 1200
}

const producto3= {
    nomre: "teclado",
    precio: 1200
}

const producto4= {
    nomre: "lentes",
    precio: 1200
}
//push agrega al final de un arreglo
carrito.push(producto);
carrito.push(producto2);
carrito.push(producto4);
// agrega el producto al principio del arreglo
carrito.unshift(producto3);
console.table(carrito);

//eliminar ultimo elemento de un arreglo
carrito.pop();

console.table(carrito);

carrito.pop();

//eliminar inicio de el arreglo

carrito.shift();


//eliminar al medio del arreglo

carrito.splice(1,1);

console.table(carrito);