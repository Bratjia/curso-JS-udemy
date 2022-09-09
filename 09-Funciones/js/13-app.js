const reproductor = { //codigo 09
    reproducir: id => console.log(`Reproduciendo canción...${id}`),
    pausar:()=> console.log('pausando...'),
    borrar : ()=>console.log('Borrando cancion...'),
    crearPLaylist:nombre=> console.log(`Creandoo la playlist de ${nombre}`),
    reproduciendoPLaylist:nombre=>console.log(`reproduciendo la playlist  ${nombre}`),
 
    set nuevaCancion(cancion){ //agregar valores
        this.cancion=cancion;
        console.log(`Añadiendo ${cancion}`)
    },
    get ObtenerCancion(){ //agregar valores

        console.log(` ${this.cancion}`)
    }

}
reproductor.nuevaCancion= 'Enter sadman';
reproductor.ObtenerCancion();


 reproductor.reproducir(30);
 reproductor.reproducir(20);
 reproductor.pausar();
 
 // reproductor.borrar = function(){
 //     console.log('Borrando cancion...')
 // }
 reproductor.borrar();
 reproductor.crearPLaylist('Música coreana');
 reproductor.reproduciendoPLaylist('Música coreana');