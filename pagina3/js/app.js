const hamburguesa = document.querySelector('.menu-hamburguesa');
const navegacion = document.querySelector('.navegacion');
const enlaces = document.querySelectorAll('.navegacion a');

document.addEventListener('DOMContentLoaded',()=>{
    mostrarMenu();
    cerrarMenu();
});

function mostrarMenu() {
    hamburguesa.addEventListener("click", ()=>{
        //console.log('clickeando');
        navegacion.classList.toggle('ocultar');
        /* if (navegacion.classList.contains('ocultar')) {
            navegacion.classList.remove('ocultar');
        } else {
            navegacion.classList.add('ocultar');
        } */



    });
}

function cerrarMenu() {
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', (e)=>{
            if(e.target.tagName === 'A'){
                navegacion.classList.add('ocultar');
            }
        });
    });
}