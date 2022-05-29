const numero1= 20;
const numero2= "20";
const numero3= 30;

//revisar si 2 numeros son iguales
//no es un ccomparador estricto
console.log(numero1== numero3); //false
console.log(numero1== numero2); //true
//comparador estricto

console.log(numero1=== numero2); //false

console.log(numero1=== parseInt(numero2)); //true
console.log(typeof numero1); //number

//diferente
const password1= "Admnin1";
const password2= "Admnin";

console.log(password1 != password2); //true
console.log(numero1 != numero2); //false
console.log(numero1 !== parseint(numero2)); //true, con parseint : false
