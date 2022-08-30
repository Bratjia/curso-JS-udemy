const producto =  'Monitor de 20 pulgadas ';

// .repeteat te va  a permitir repetir una cadena de texto...

const texto =  ' en promocion'.repeat(3);
const textos =  ' en promocion'.repeat(2.4); //repeat lo redondea, osea repite 2 veces
console.log(texto);

console.log(`${producto} ${texto}!!!`);


//split divide un string

const actividad= "Estoy asdasd asd23";
console.log(actividad.split(" ")); //divide en las palabras

const hobbies = "caminar, comer, bailar, blabla blabla";

console.log(hobbies.split(", "));

const tweet = "Aprendiendo JS #moderno";
console.log(tweet.split('#'))