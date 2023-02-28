const button = document.getElementById('boton_tema')

const content = document.querySelector('body');

button.addEventListener('click', function(){

    content.classList.toggle('color_aqua');

});