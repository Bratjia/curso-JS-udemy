window.addEventListener('scroll', ()=>{
    // console.log('Scrolling...');
    // const scrollPX = window.scrollY;
    // console.log(scrollPX);

    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();
    console.log(ubicacion);

    if(ubicacion.top <100){
        console.log('El elemento esta visible');
    }else{
        console.log('Aún no, da mas scroll');
    }
})