const reproductor = {
   reproducir: function(id){ //metodo de propiedad
    console.log(`Reproduciendo canción...${id}`)
   },
   pausar:function(){
    console.log('pausando...')
   },
   borrar : function(){
    console.log('Borrando cancion...')
    },
    crearPLaylist: function (nombre){
        console.log(`Creandoo la playlist de ${nombre}`;)
    },
    reproduciendoPLaylist: function (nombre){
        console.log(`reproduciendo la playlist  ${nombre}`;)
    },
}

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();

// reproductor.borrar = function(){
//     console.log('Borrando cancion...')
// }
reproductor.borrar();
reproductor.crearPLaylist('Música coreana');
reproductor.reproduciendoPLaylist('Música coreana');