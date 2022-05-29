const producto ={
    nombre: "Monitor 20 pulgadas",//propiedad o llave de un objeto
    precio: 300,
    disponible:true,
}

const medidas= {
    peso: '1kg',
    medida:'1m'
}

console.log(producto);
console.log(medidas)

//unir ambos objetos

const resultado= Object.assign(producto, medidas);

//Spread Operator o Rest Operator

const resultado2= {...producto, ...medidas} //... significa copia 

console.log(resultado);
console.log(resultado2);