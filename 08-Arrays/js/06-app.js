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

//imperativa, se va modificando la variable original, sobre ella misma trabaja, 
//sobre ella misma modifica los datos , push /unshift

//declarativa, no modifica directamente la variable original
let resultado;

resultado= [...carrito,producto]; //...  =copia

resultado= [...resultado,producto2] ; //producto al final
resultado= [producto3,...resultado] ; //producto al principio
console.table(resultado);