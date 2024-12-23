 // Esperar a que se cargue el audio y luego recortarlo para que empiece desde el segundo 8
 window.onload = function() {
    var musica = document.getElementById('musica');
    musica.currentTime = 8; // Configurar el tiempo de inicio a 8 segundos
    musica.play(); // Comenzar la reproducción después de recortar los primeros 8 segundos
  };