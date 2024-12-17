let ganadorMostrado = false; // Variable para asegurar que solo un ganador sea mostrado

function empezarCarrera() {
    // Reiniciar el estado de ganador
    ganadorMostrado = false;

    // Seleccionamos los elementos de los caracoles
    const caracol1 = document.getElementById('caracol1');
    const caracol2 = document.getElementById('caracol2');
    const caracol3 = document.getElementById('caracol3');

    // Generar tiempos aleatorios entre 3 y 7 segundos
    const tiempo1 = Math.random() * 4 + 3; // Entre 3 y 7 segundos
    const tiempo2 = Math.random() * 4 + 3;
    const tiempo3 = Math.random() * 4 + 3;

    // Aplicar los tiempos aleatorios como animación a cada caracol
    caracol1.style.animation = `carreras ${tiempo1}s linear forwards`;
    caracol2.style.animation = `carreras ${tiempo2}s linear forwards`;
    caracol3.style.animation = `carreras ${tiempo3}s linear forwards`;

    // Detectamos cuál caracol termina primero
    caracol1.addEventListener('animationend', () => verificarGanador('pista1', tiempo1));
    caracol2.addEventListener('animationend', () => verificarGanador('pista2', tiempo2));
    caracol3.addEventListener('animationend', () => verificarGanador('pista3', tiempo3));
}

function verificarGanador(pistaId, tiempo) {
    // Si ya se mostró un ganador, no hacemos nada
    if (ganadorMostrado) return;

    // Mostrar el ganador en la pista correspondiente
    const pistaGanadora = document.getElementById(pistaId);
    pistaGanadora.classList.add('ganador');

    // Marcamos que ya se mostró el ganador
    ganadorMostrado = true;
}
