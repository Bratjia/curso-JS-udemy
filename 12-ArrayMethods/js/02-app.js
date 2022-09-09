const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach((mes,i)=>{
    if(mes ==='Abril'){
        console.log(`Encontrado en el indice ${i}`)
    }
});

//encontrar el indice de abril
const indice= meses.findIndex(mes => mes === 'Abril'); //si no lo encuentra respondera con un -1
console.log (indice);

//encontrar un indice en un arreglo de objetos, respondera con el primero que encuentra
const indice2= carrito.findIndex(producto => producto.precio === 100);
console.log(indice2); 


