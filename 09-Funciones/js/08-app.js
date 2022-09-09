
function sumar(a,b){ 
return a+b
}


const resultado= sumar(2,3);
console.log(resultado);


let total= 0;
function agregarCarrito(precio){
    return total += precio;
}

function calcularImpuesto(total){
 return total * 1.19;
}
const totalPagar = calcularImpuesto(total);
total = agregarCarrito(300);

console.log(totalPagar);
console.log(total);

