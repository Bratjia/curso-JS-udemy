iniciarAPP();
function iniciarAPP(){ 
    console.log('Iniciando app...');
    SegundaFuncion();
}

function SegundaFuncion(){ 
    console.log('Desde la segunda funcion');
    usuarioAutenticado('asd');
}

function usuarioAutenticado(usuario){ 
    console.log('Autenticando');
    console.log(`Usuario autenticado: ${usuario}`);
}