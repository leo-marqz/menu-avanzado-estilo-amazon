const btnDepartamentos = document.getElementById('btn-departamentos');
const grid = document.getElementById('grid');

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


