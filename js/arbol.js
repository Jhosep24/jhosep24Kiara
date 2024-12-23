function mostrarDeseo(deseoId) {
  let texto = '';

  // Definir los deseos
  switch (deseoId) {
    case 1:
      texto = 'Que todos tus sueños se hagan realidad, mi amor. 🎄💖';
      break;
    case 2:
      texto = 'Mi mayor deseo estar contigo toda la vida mi amor, Jhosep y Kiara por siempre y para siempre. ✨❤️';
      break;
    case 3:
      texto = 'Deseo que cada paso que demos juntos sea un camino lleno de amor y felicidad. 💫💑💖';
      break;
    case 4:
      texto = 'Mi mayor deseo es que un día podamos abrazar a nuestros pequeños, rodeados del amor que siempre nos ha unido. 👶💖';
      break;
    case 5:
      texto = 'Mi mayor deseo es que un día podamos caminar juntos hacia el altar, prometiéndonos amor eterno y construyendo un hogar lleno de risas, comprensión y felicidad. 💍💖✨';
      break;
    case 6:
      texto = 'Que nuestro amor crezca con cada día que pase, compartiendo risas y sueños. 🌟💕';
      break;
    case 7:
      texto = 'Deseo que cada día compartido esté lleno de risas, amor y abrazos. 💑💫';
      break;
    case 8:
      texto = 'Te deseo un futuro brillante, lleno de amor y grandes momentos juntos. 🌸💕';
      break;
    case 9:
      texto = 'Que nuestras aventuras juntos nos lleven a lugares hermosos y memorables. 🏞️💖';
      break;
    case 10:
      texto = 'Que cada canción que escuchemos juntos sea una melodía de amor eterno. 💓🎶';
      break;
    case 11:
      texto = 'Deseo que la luz de las estrellas ilumine siempre nuestro amor. 🌙✨';
      break;
    case 12:
      texto = 'Que cada promesa que hagamos sea el fundamento de un amor eterno. 🌹💍';
      break;
    case 13:
      texto = 'Que nuestra unión sea siempre un refugio de paz y amor. 🕊️💑';
      break;
    case 14:
      texto = 'Deseo que siempre estemos juntos, amandonos siempre tu y yo mi Kiara. 🌟💏';
      break;
    case 15:
      texto = 'Te deseo una navidad llena de amor, alegría y felicidad, mi amor. 🎄💝';
      break;
    default:
      texto = 'Deseo que nunca falte el amor, la magia y la alegría en nuestra vida juntos. 🌙✨';
  }


  // Mostrar el modal con el contenido correspondiente
  document.getElementById('deseo-texto').textContent = texto;

  // Mostrar el modal y el fondo superpuesto
  document.getElementById('modal').style.display = 'block';
  document.getElementById('modal-overlay').style.display = 'block';
}

function cerrarModal() {
  // Ocultar el modal y el fondo superpuesto
  document.getElementById('modal').style.display = 'none';
  document.getElementById('modal-overlay').style.display = 'none';
}


