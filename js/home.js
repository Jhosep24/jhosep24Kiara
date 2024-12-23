// Agrega un efecto navideño dinámico (copos de nieve)
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
  
    for (let i = 0; i < 50; i++) {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      snowflake.style.left = Math.random() * 100 + "vw";
      snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
      snowflake.style.opacity = Math.random();
      snowflake.style.fontSize = Math.random() * 10 + 10 + "px";
      snowflake.textContent = "❄";
      body.appendChild(snowflake);
    }
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    const regalos = document.querySelectorAll('.regalo');
    
    regalos.forEach((regalo, index) => {
      // Asignar una posición aleatoria en el eje X
      let posX = Math.random() * window.innerWidth;
      regalo.style.left = `${posX}px`;
  
      // Asignar un retraso aleatorio para cada regalo
      let delay = Math.random() * 2; // Genera un retraso entre 0 y 2 segundos
      regalo.style.animationDelay = `${delay}s`;
  
      // Asignar un "index" de forma dinámica para retrasar la animación y hacer que no todo se mueva al mismo ritmo
      regalo.style.setProperty('--i', index);
    });
  });
  

  // Función para desplazar la página al inicio

  document.addEventListener('DOMContentLoaded', () => {
    const musica = document.getElementById('musica');
    
    // Esperar a que la música inicie y luego quitar el mute
    musica.play().then(() => {
        musica.muted = false; // Desactivar el silencio una vez que haya comenzado a reproducirse
    }).catch((error) => {
        console.warn("El navegador bloqueó la reproducción automática:", error);
    });
});
