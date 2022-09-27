//variables
const formulario = document.querySelector('#formulario');
const listaTweets= document.querySelector('#lista-tweets');
let tweets= [];


//Even listeners
evenListeners();

function evenListeners(){
    formulario.addEventListener('submit', agregarTweet);

    //cuando el documento esta listo
    document.addEventListener('DOMContentLoaded',()=>{
        tweets=JSON.parse(localStorage.getItem('tweets'))|| [];
        crearHTML();
    });
}


//Funciones

function agregarTweet(e){
    e.preventDefault();

    //textarea donde el usuario escribe
    const tweet =document.querySelector('#tweet').value;

    //validacion
    if(tweet === ''){
        mostrarError('vacio');

       return; //evita que se ejecuten mas lineas de codigo
    }
   
    const tweetObj = {
        id: Date.now(),
        tweet //tweet:tweet => se puede dejar solo uno, cuando los dos son iguales
    }
    //añadir a un arreglo de tweets
    tweets = [...tweets, tweetObj];
    // una vez agregado  vamos a Crear html

    crearHTML();

    //reiniciar el formulario
    formulario.reset();
  
}

//mostrar msj error
function mostrarError(error){
    const mensajeError = document.createElement('p');
    mensajeError.textContent= error;
    mensajeError.classList.add('error');

    //insertarlo en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    //eliminar la alerta despues de 3seg
    setTimeout(()=>{
        mensajeError.remove();
    },3000);
}

function crearHTML(){
    limpiarHTML();
    if(tweets.length> 0){
        tweets.forEach( tweet=> {
            //Agregar un boton de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText='X';
            //añadir la funcion eliminar
            btnEliminar.onclick = () =>{
                borrarTweet(tweet.id);
            }
            //crear el html
            const li =document.createElement('li');

            //añadir texto
            li.innerText= tweet.tweet;

            //asignar el boton eliminar
            li.appendChild(btnEliminar)
;
            //insertarlo en el html
            listaTweets.appendChild(li);
        });
    }
    sincronizarStorage();
}
//agregar los tweets actuales al localStorage 
function sincronizarStorage (){
    localStorage.setItem('tweets', JSON.stringify(tweets));
}
//Eliminar un tweet
function borrarTweet(id){
    tweets = tweets.filter(tweet =>tweet.id !== id);

crearHTML();

 
}
//limpiar el html
function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
    
}