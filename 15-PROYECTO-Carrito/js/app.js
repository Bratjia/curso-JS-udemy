//Variables

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito =[];

cargarEventListener();
function cargarEventListener(){
    //cuando agregas un curso presionando "Agregar al Carrito"
    listaCursos.addEventListener('click', agregarCurso);

    //Eliminar cursos del carrito
    carrito.addEventListener('click',eliminarCurso);

    //vaciar carrito
    vaciarCarritoBtn.addEventListener('click',()=>{
        articulosCarrito =[]; //resetear arreglo
        limpiarHTML();
    })
}

//Funciones
function agregarCurso(e){
    e.preventDefault();

    if (e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement
        leerDatosCurso(cursoSeleccionado);
    }
}

function eliminarCurso(e){
    
    if(e.target.classList.contains('borrar-curso')){
       // console.log(e.target.getAttribute('data-id'));
       const cursoId = e.target.getAttribute('data-id');

       //Eliminar del arreglo de articulosCarrito por el data-id
       articulosCarrito= articulosCarrito.filter(curso => curso.id!== cursoId)
       carritoHTML(); //iterar sobre el carrito y mostrar su HTML
    }
}

//Lee el contenido del HTML al que le dimos click y extrae la informacion del curso
function leerDatosCurso(curso){
   // console.log(curso)

    //crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad:1
    }

    //revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some (curso =>curso.id=== infoCurso.id);
    if(existe){
        //actualizamos la cantidad
        const cursos = articulosCarrito.map(curso=>{
            if (curso.id=== infoCurso.id){
                curso.cantidad ++;
                return curso;
            }else{
                return curso;
            }
        });
        articulosCarrito= [...cursos];
    } else{
        //agregamos el curso al carrito
         //agregar elementos al arreglo de carrito
    articulosCarrito= [...articulosCarrito, infoCurso];
    }


    console.log(articulosCarrito)
    carritoHTML();
}

//muestra el carrito de compras en el HTML
function carritoHTML(){
    //limpiar HTML
   limpiarHTML();


    //recorre el carrito    
    articulosCarrito.forEach(curso=>{  
        const {imagen,titulo,precio,cantidad, id} =curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" width ="100">
            </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td> 
                <a href = "#" class= "borrar-curso" data-id="${id}"> X </a>
            </td>
        `;
        //agregar el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });
}

//Eliminar los cursos del tbody
function limpiarHTML(){

    //forma lenta
    // contenedorCarrito.innerHTML = '';

    //rapida}

    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}

