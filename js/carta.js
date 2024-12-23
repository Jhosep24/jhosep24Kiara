// Selecciona los botones y el contenido de la carta
const verCartaBtn = document.querySelector('.ver-carta-btn');
const carta = document.querySelector('.carta');
const ocultarCartaBtn = document.querySelector('.ocultar-carta-btn');

// Añadir un evento para mostrar la carta
verCartaBtn.addEventListener('click', () => {
  carta.style.display = 'block'; // Muestra la carta
  verCartaBtn.style.display = 'none'; // Oculta el botón de ver la carta
  ocultarCartaBtn.style.display = 'inline-block'; // Muestra el botón de ocultar carta
});

// Añadir un evento para ocultar la carta
ocultarCartaBtn.addEventListener('click', () => {
  carta.style.display = 'none'; // Oculta la carta
  verCartaBtn.style.display = 'inline-block'; // Muestra el botón de leer carta
  ocultarCartaBtn.style.display = 'none'; // Oculta el botón de ocultar carta
});


// JavaScript para controlar la música
document.getElementById("playPauseBtn").addEventListener("click", function() {
    var audio = document.getElementById("audio");
    var btn = document.getElementById("playPauseBtn");
  
    if (audio.paused) {
      audio.play();
      btn.textContent = "⏸️ Pausar Música"; // Cambiar texto cuando está reproduciendo
    } else {
      audio.pause();
      btn.textContent = "🎶 Reproducir Música"; // Cambiar texto cuando está pausado
    }
  });
  