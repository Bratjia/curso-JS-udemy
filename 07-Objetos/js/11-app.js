const nombre="asdasd";
const precio  = 20;
const producto ={
    nombre: "Monitor 20 pulgadas",//propiedad o llave de un objeto
    precio: 300,
    disponible:true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    }
}
producto.mostrarInfo();
//this se refiere a los valores que existen en el mismo objeto
