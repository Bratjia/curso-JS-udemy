const formulario = document.querySelector('#formulario');


// formulario.addEventListener('submit', (e) =>{ //presionar el input o el button que tiene el submit
    // e.preventDefault(); //evitar que el formulario realice el evento por defecto, evitar que el formulario haga lo q tenga que hacer
    
    // console.log ('escribiendo');
    // console.log(e.target.action)
// })

formulario.addEventListener('submit', validarFormulario);
function validarFormulario(e){
    e.preventDefault(); 
    console.log ('escribiendo');
    console.log(e.target.action)
}