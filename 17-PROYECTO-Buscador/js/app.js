//Variables
const marca = document.querySelector('#marca'); 
const year = document.querySelector('#year'); 
const minimo = document.querySelector('#minimo'); 
const maximo = document.querySelector('#maximo'); 
const puertas = document.querySelector('#puertas'); 
const transmision = document.querySelector('#transmision'); 
const color = document.querySelector('#color'); 

const max = new Date().getFullYear();
const min= max -10;

//contenedor de resultados
const resultados = document.querySelector('#resultado');

//generar un objeto con la busqueda
const datosBusqueda = {
    marca:'',
    year:'',
    minimo:'',
    maximo:'',
    puertas:'',
    transmision:'',
    color:'',
};

//eventos
document.addEventListener('DOMContentLoaded', ()=>{
    mostrarAutos(autos); //muestra los automoviles al cargar

    //llena las opciones de años
    llenarSelect();
})

//Event listener para los select de búsqueda
marca.addEventListener('change', e=>{
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});
year.addEventListener('change', e=>{
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAuto();
});
minimo.addEventListener('change', e=>{
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();
});
maximo.addEventListener('change', e=>{
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
});
puertas.addEventListener('change', e=>{
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto();
});
transmision.addEventListener('change', e=>{
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});
color.addEventListener('change', e=>{
    datosBusqueda.color = e.target.value;
    filtrarAuto();
    // console.log(datosBusqueda);
});


//Funciones
function mostrarAutos(autos){
    limpiarHTML();
    autos.forEach(auto => {
        const autoHTML= document.createElement('p');
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        autoHTML.textContent = //(property) marca:string
         `
        ${marca}  ${modelo} - ${year} -${puertas} Puertas - Transimisión: ${transmision} -Precio: ${precio} - Color: ${color}      
         `;
        
        //insertar en el html
        resultados.appendChild(autoHTML)
    });
}
//limpiar html
function limpiarHTML(){
    while (resultados.firstChild){
        resultados.removeChild(resultados.firstChild);
    }
}
//genera los años del select
function llenarSelect(){

    for(let i =max; i>= min; i--){

        const opcion= document.createElement('option');
        opcion.value= i;
        opcion.textContent=i;
        year.appendChild(opcion);
    }

}

//funcion que filtra en base a la busqueda
function filtrarAuto(){
    const resultado= autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor)
    console.log(resultado);
    if(resultado.length){
        mostrarAutos(resultado);
    }else{
        noResultado()
    }
    
}

function noResultado(){

    limpiarHTML();
    const noResultado=document.createElement('div');
    noResultado.classList.add('alerta','error');
    noResultado.textContent='No hay resultados, intenta con otros términos de búsqueda';
    resultados.appendChild(noResultado);
}
function filtrarMarca(auto){
    //const {marca} = datosBusqueda;
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca;
    }
    return auto;
}
function filtrarYear(auto){
    if(datosBusqueda.year){
        return auto.year === datosBusqueda.year ;
    }
    return auto;
}

function filtrarMinimo(auto){
  if(datosBusqueda.minimo){
        return auto.precio >= datosBusqueda.minimo ;
    }
    return auto;
}
function filtrarMaximo(auto){
    if(datosBusqueda.maximo){
        return auto.precio <= datosBusqueda.maximo ;
    }
    return auto;
}
function filtrarPuertas(auto){
    if(datosBusqueda.puertas){
        return auto.puertas === datosBusqueda.puertas ;
    }
    return auto;
}
function filtrarTransmision(auto){
    if(datosBusqueda.transmision){
        return auto.transmision === datosBusqueda.transmision ;
    }
    return auto;
}

function filtrarColor(auto){
    const {color}= datosBusqueda;
    if(color){
        return auto.color === color ;
    }
    return auto;
}