const busqueda = document.querySelector('.busqueda');

//registrar un evento

busqueda.addEventListener('keydown', () =>{
    console.log ('escribiendo');
})


busqueda.addEventListener('input', (comotudesees) =>{
    if(comotudesees.target.values ===''){
        console.log('fallo')
    }
    console.log (comotudesees.target.values);
})