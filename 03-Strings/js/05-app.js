const producto =  'Monitor de 20 pulgadas';

//.replcace para remplazar 
console.log(producto);
console.log(producto.replace('pulgadas','"'));
console.log(producto.replace('Monitor','Monitor curvo'));

// .slice para cortar
console.log(producto.slice(0,10));
console.log(producto.slice(8));// desde el espacio 8
console.log(producto.slice(2,1)); //empty string.. no puede ser mayor al que le sigue 2>1 no hará nada

// Alternative a .slice -> substring, hacen lo mismo

console.log(producto.substring(0,10)); //inicia cortar, termina cortar
console.log(producto.substring(2,1)); //substring lo modifica y cambia el orden, es mas inteligente (1,2)

//cortar la primera letra
const usuario="Pame";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));
