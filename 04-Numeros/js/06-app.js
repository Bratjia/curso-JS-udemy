const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

// console.log( typeof numero1); //string
console.log(Number.parseInt(numero1) ); //lo convierte a entero
console.log(Number.parseFloat(numero2)); //lo convierte en flotante


//revisar si es un numero es entero o no
console.log(Number.isInteger(numero4));//TRUE
console.log(Number.isInteger(numero3));//FALSE