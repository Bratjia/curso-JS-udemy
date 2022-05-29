const producto =  'Monitor de 20 pulgadas ';

// .repeteat te va  a permitir repetir una cadena de texto...

const texto =  ' en promocion'.repeat(3);

console.log(texto);

console.log(`${producto} ${texto}!!!`);

//split divide un string

const actividad= "Estoy asdasd asd23";
console.log(actividad.split(" ")); //divide en las palabras

const hobbies = "caminar, comer, bailar, blabla blabla";

console.log(hobbies.split(", "));

const tweet = "Aprendiendo JS #moderno";
console.log(tweet.split('#'))