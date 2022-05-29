const producto =  '                       Monitor de 20 pulgadas           ';

//eliminar espacio al final o al principio de la cadena


console.log(producto.length);

 //eliminar espacio al inicio
console.log(producto.trimStart());

 //eliminar espacio al final
console.log(producto.trimEnd());

//elimina en ambas direcciones
console.log(producto.trimStart().trimEnd() );

console.log(producto.trim());