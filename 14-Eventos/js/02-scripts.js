const nav = document.querySelector('.navegacion');

//registrar un evento

nav.addEventListener('click', () =>{
    console.log ('click en nav');
})

nav.addEventListener('mouseenter', () =>{
    console.log ('entrando en la navegacion');
    nav.stylle.backgroundColor = 'white';
})

nav.addEventListener('mouseout', () =>{
    console.log ('saliendo de la navegacion');
    nav.stylle.backgroundColor = 'transparent';
})

nav.addEventListener('dblclick', () =>{
    console.log ('doble click de la navegacion');
    nav.stylle.backgroundColor = 'transparent';
})


//mousedown -similar a click
//click
//dblclick= doble click
//mouseup- cuando sueltas el mouse