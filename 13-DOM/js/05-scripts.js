//.clase
//#id

//querySelector, retorna solo el primero que encuentre
//querySelectorAll

const card =document.querySelectorAll('.card');
console.log(card);

const formularios =document.querySelectorAll('#formulario');
console.log(formularios);

//si uno elemento no existe

const noExiste = document.querySelectorAll('no-existe');
console.log(noExiste) //retornara vacio