$(document).ready(function() {
  $('.bio-text').readmore({
    speed: 300,              // Velocidad de animación (ms)
    collapsedHeight: 200,    // Altura cuando está colapsado (pixels)
    moreLink: '<a href="#">Leer más</a>',
    lessLink: '<a href="#">Cerrar</a>'
  });
});