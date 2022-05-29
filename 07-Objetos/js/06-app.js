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
            pais:'china',
            wash:'asdasd'
        }    
    }
 
}

//destructuring

const{ nombre, informacion, informacion:{fabricacion, fabricacion:{pais,wash}},informacion:{medidas, medidas:{peso}}} =producto;
console.log(nombre);
console.log(informacion);
console.log(fabricacion);
console.log(peso);