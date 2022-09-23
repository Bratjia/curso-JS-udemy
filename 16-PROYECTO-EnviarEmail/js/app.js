//variables
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');
const formulario = document.querySelector('#enviar-mail');
//variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

const er= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       


eventListeners();
function eventListeners() {
    //cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarAPP);

    //campos del formulario 
    email.addEventListener('blur',validarFormulario); //blur validara cuando me salga del campo email 
    asunto.addEventListener('blur',validarFormulario);
    mensaje.addEventListener('blur',validarFormulario);

    //resetear formulario 
    btnReset =addEventListener('click', resetearFormulario);

    //enviar email
    formulario.addEventListener('submit',enviarEmail);
}

//funciones
function iniciarAPP(){
    console.log('Iniciando...' )
    btnEnviar.disable =true;
   btnEnviar.classList.add('cursor-not-allowed', 'opacity-50'); //classList.add= agregar esta clase 
}
//validar formulario
function validarFormulario(e){

    if(e.target.value.length>0){
        //elimina los errores...
        const error= document.querySelector('p.error');
        if(error){
            error.remove();
        }
        

        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');

    }else{
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');
        //console.log('No ha ingresado datos')
        mostrarError('Todos los campos son obligatorios');
    }

    if(e.target.type ==='email'){
         //const resultado = e.target.value.indexOf('@');

        if(er.test(e.target.value) ) {
            const error= document.querySelector('p.error');
            if(error){
                error.remove();
            }    
    
            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border', 'border-green-500');
           
            console.log('email válido');
        } else {
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500');
            mostrarError('Email no válido');
            console.log('email no válido')
        }
    }

    if(er.test(email.value)  && asunto.value !== ''&& mensaje.value !== ''){
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50')
        btnEnviar.disable =false;

    }




}

function mostrarError(mensaje){
    const mensajeError= document.createElement('p');
    mensajeError.textContent= mensaje ;
    mensajeError.classList.add('border', 'border-red-500','background-red-100', 'text-red-500','p-3','mt-5','text-center','error');
    const errores =document.querySelectorAll('.error');
    if (errores.length===0){
        formulario.appendChild(mensajeError);
    }
  
}

function enviarEmail(e){
    e.preventDefault();
    //mostrar spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display ='flex';

    //despues de 3 segundos ocultar el spinner y mostrar mensaje
    setTimeout(()=>{
        spinner.style.display ='none';
        //console.log('Esta funcion se ejecuta despues de 3 segundos')

        //mensaje que dice que se envio correctamente 
        const parrafo = document.createElement('p');
        parrafo.textContent= 'El mensaje se envió correctamente';
        parrafo.classList.add('text-center','my-10','p-5','bg-green-500', 'text-white', 'font-bold', 'uppercase');
        formulario.insertBefore(parrafo,spinner); //aparecera antes del spinner

        setTimeout(()=>{
            parrafo.remove();
            resetearFormulario();
        },5000);

    },3000); //cada segundo es 1000
} 

//funcion que resetea el formulario

function resetearFormulario(){
    formulario.reset();
    iniciarAPP();

}