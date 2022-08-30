const numero1= 20;
const numero2= "20";
const numero3= 30;

//revisar si 2 numeros son iguales
console.log(numero1= numero3); //  unigual es para asignar valores
//no es un comparador estricto, se fija en el valor
console.log(numero1== numero3); //false
console.log(numero1== numero2); //true
//comparador estricto, se fija en el valor y el tipo de dato

console.log(numero1=== numero2); //false

console.log(numero1=== parseInt(numero2)); //true
console.log(typeof numero1); //number

//diferente
const password1= "Admnin";
const password2= "admnin";

console.log(password1 != password2); //true
console.log(numero1 != numero2); //false
console.log(numero1 !== parseint(numero2)); //true, con parseint : false
