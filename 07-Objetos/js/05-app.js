const producto ={
    nombre: "Monitor 20 pulgadas",//propiedad o llave de un objeto
    precio: 300,
    disponible:true,
    informacion:{
        medidas:{
            peso: '1kg',
            medida:'1m'
        },
        fabricacion :{
            pais:'china'
        }    
    }
 
}

console.log(producto)

 console.log(producto.informacion.fabricacion.pais);
// console.log(producto.informacion.medida);