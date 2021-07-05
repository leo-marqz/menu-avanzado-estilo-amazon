const btnDepartamentos = document.getElementById('btn-departamentos');
const grid = document.getElementById('grid');
const contenedorEnlacesNav = document.querySelector('#menu .contenedor-enlaces-nav');
const btnCerrarMenu = document.getElementById('btn-menu-cerrar');

//                         (window.innerWidth <= 800){ return true; }else{ return false; }
const esDispositivoMovil = ()=> window.innerWidth <= 800 ? true : false;
//                         ()=> window.innerWidth <= 800;


btnDepartamentos.addEventListener('mouseover', ()=>{
    if(!esDispositivoMovil()){
        grid.classList.add("activo");
    }
});

grid.addEventListener('mouseleave', ()=>{
    if(!esDispositivoMovil()){
        grid.classList.remove("activo");
    }
});


// ==================================
// ==================================
// ==================================


document.querySelectorAll('#menu .categorias a').forEach((elemento)=>{
    elemento.addEventListener('mouseenter',(e)=>{
        // con este codigo obtenemos el valor agregado a nuestros atributos personales ( data-categoria ).
        // console.log(e.target.dataset.categoria); 
        document.querySelectorAll('#menu .subcategoria').forEach((categoria)=>{
            // console.log(categoria.dataset.categoria);
            categoria.classList.remove('activo');
            if(categoria.dataset.categoria === e.target.dataset.categoria){
                categoria.classList.add('activo');
            }
        });
    });
});



// ========================================
// EventListeners para dispositivos moviles
// ========================================

document.querySelector('#btn-menu-barras').addEventListener('click',(e)=>{
    e.preventDefault();
    if(contenedorEnlacesNav.classList.contains('activo')){
        contenedorEnlacesNav.classList.remove('activo');
        document.querySelector('body').style.overflow = 'visible';
    }else{
        contenedorEnlacesNav.classList.add('activo');
        document.querySelector('body').style.overflow = 'hidden';
    }
});



//Click para boton todos los departamentos en dispositivos moviles

btnDepartamentos.addEventListener('click', (e)=>{
    e.preventDefault();
    grid.classList.add('activo');
    btnCerrarMenu.classList.add('activo');
});


// boton de regresar en el menu categorias en dispositivo movil

document.querySelector('#grid .categorias .btn-regresar').addEventListener('click', (e)=>{
    e.preventDefault();
    grid.classList.remove('activo');
    btnCerrarMenu.classList.remove('activo');
});
