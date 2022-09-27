//Actualizar datos de localStorage

localStorage.removeItem('nombre');

//actualiza un registro

const mesesArray = JSON.parse(localStorage.getItem('meses')) ;

console.log(mesesArray)
mesesArray.push('Abril');

console.log(mesesArray);
localStorage.setItem('meses', JSON.stringify(mesesArray));

localStorage.clear();
