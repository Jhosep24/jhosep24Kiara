document.addEventListener('DOMContentLoaded', function() {
    let hojas = "";
    const altura = 10; // Altura del árbol

    // Construir la parte superior del árbol
    for (let i = 0; i < altura; i++) {
        hojas += '<div>';
        const espacios = altura - i - 1;
        const asteriscos = 2 * i + 1;

        hojas += Array(espacios).fill("<span> </span>").join('');
        hojas += Array(asteriscos).fill("<span class='rojo'>*</span>").join('');
        hojas += Array(espacios).fill("<span> </span>").join('');

        hojas += '</div>';
    }
    // Construir la base del árbol
    for (let i = 0; i < 3; i++) {
        hojas += '<div>';
        const espaciosBase = altura - 2;
        hojas += Array(espaciosBase).fill("<span> </span>").join('');
        hojas += '<span class="rojo">*</span>'.repeat(3);
        hojas += Array(espaciosBase).fill("<span> </span>").join('');
        hojas += '</div>';
    }

    document.getElementById("arbol").innerHTML = hojas;

    let animacion = document.querySelectorAll(".rojo");
    animacion.forEach(luz => {
        luz.style.color = "#FFD700"; // Por ejemplo, un tono dorado
    });

    function animar() {
        for (let i = 0; i < animacion.length; i++) {
            let tiempo = i / 20 + 1;
            animacion[i].style.animation = "colores " + tiempo + "s infinite";
        }
    }

    animar(); 
});


document.addEventListener('DOMContentLoaded', () => {
    const musicaBtn = document.getElementById('musica-btn');
    const musica = document.getElementById('musica');

    // Ajustar la música para que siempre comience desde el segundo 5
    musica.addEventListener('play', () => {
        if (musica.currentTime < 1) {
            musica.currentTime = 1; // Saltar los primeros 5 segundos
        }
    });

    // Evento para manejar el botón
    musicaBtn.addEventListener('click', () => {
        if (musica.paused) {
            musica.play();
            musicaBtn.textContent = '⏸️ Pausar Navidad';
        } else {
            musica.pause();
            musicaBtn.textContent = '🎵 Reproducir Navidad';
        }
    });
});

