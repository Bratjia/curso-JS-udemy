let resultado;
//Math de la consolta
//PI
resultado= Math.PI;
//redondear resultado
resultado= Math.round(2.8); //3
resultado= Math.round(2.3); //2
resultado= Math.round(2.5); //3
//redondear hacia arriba
resultado= Math.ceil(2.1); //3
//redondear hacia abajo
resultado= Math.floor(2.89); //2
//raiz cuadrada
resultado = Math.sqrt(25); //5 

//valor absoluto
resultado = Math.abs(-500); // 500
//potencia
resultado =Math.pow(8,3); // 8 a la potencia de 3 = 512
//minimo
resultado= Math.min(5,3,1,7,0); // 0
//maximo
resultado= Math.max(5,3,1,7,0); // 7
//aleatorio
resultado= Math.random(); //no da numeros enteros
//aleatorio dentro de un random
resultado= Math.floor(Math.random()*30);

console.log(resultado);