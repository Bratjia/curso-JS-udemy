function saludar(nombre,apellido){ //a y b son parametros
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar('Juan','De');// 2 y3 son argumentos
 
//si no se envia alguno de los argumentos
function saludar(nombre='Desconocido',apellido= ' '){ 
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar('Juan');