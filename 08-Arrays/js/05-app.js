// const meses = ['enero', 'febrero', 'marzo'];


//arreglar del arreglo sin saber el largo 
// meses.push('abril');
// console.table(meses);

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
//push agrega al final de un arreglo
carrito.push(producto);
carrito.push(producto2);

// agrega el producto al principio del arreglo
carrito.unshift(producto3);

console.table(carrito);