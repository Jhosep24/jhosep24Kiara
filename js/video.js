// Función para alternar entre mostrar el video y pausar
function toggleVideo() {
    const videoContainer = document.getElementById("videoContainer");
    const videoFrame = document.getElementById("videoFrame");
    const videoBtn = document.getElementById("videoBtn");
  
    // Si el video no está visible, lo mostramos y cambiamos el texto del botón a "Pausar Video"
    if (videoContainer.style.display === "none" || videoContainer.style.display === "") {
      videoContainer.style.display = "block";  // Mostrar el video
      videoFrame.src = "https://www.youtube.com/embed/-ROsbNgfwuQ?autoplay=1";  // Iniciar el video
      videoBtn.textContent = "Pausar Video";  // Cambiar el texto del botón
    } else {
      // Si el video ya está visible, lo pausamos y cambiamos el texto del botón a "Ver Video"
      videoContainer.style.display = "none";  // Ocultar el video
      videoFrame.src = "";  // Detener el video (al quitar la URL)
      videoBtn.textContent = "Ver Video";  // Cambiar el texto del botón
    }
  }
  