// for of iter sobre objetos
// const pendientes = ['Tarea','Comer', 'Proyecto', 'Estudiar JS'];

// for (let pendiente of pendientes){ //le asigna cada uno de los elementos del arreglo de pendientes

//     console.log(pendiente)
// }


const automovil = {
    modelo: 'Camaro',
    year: 1969,
    motor:'6.0'
}

for (let propiedad of automovil){ //le asigna cada uno de los elementos del arreglo de pendientes

     console.log(propiedad)
}

for (let [llave, valor] of Object.entries(automovil)){ 
    console.log(llave);
    console.log(valor);
}

