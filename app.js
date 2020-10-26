const imagen1 = document.getElementById('imagen1');
const imagen2 = document.getElementById('imagen2');
const imagen3 = document.getElementById('imagen3');
const imagen4 = document.getElementById('imagen4');


function fondo(nombre) {
    nombre.addEventListener('mouseover', function() {
        nombre.style.background = '#58D3F7';
    })

    nombre.addEventListener('mouseout', function() {
        nombre.style.background = '#424242'
    })
}

fondo(imagen2);
fondo(imagen1);
fondo(imagen3);
fondo(imagen4);