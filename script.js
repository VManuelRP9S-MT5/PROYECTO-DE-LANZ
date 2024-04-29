var index = 0;
var images = document.querySelectorAll('.slider img');

setInterval(function() {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
}, 4000); // Cambiar cada 3 segundos
