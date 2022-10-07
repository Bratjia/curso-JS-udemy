const cliente = {
    nombre:'Pam',
    saldo: 500
}
console.log(cliente);
function Cliente(nombre,saldo){
    this.nombre= nombre;
    this.saldo= saldo;
} 

const pam= new Cliente('pam', 500);

console.log(pam);