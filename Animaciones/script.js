// Selecciona el árbol de Navidad
const arbol = document.querySelector('.arbol');

// Variables para el movimiento
let direccion = 1;
let posicion = 0;

// Función para mover el árbol hacia adelante y atrás
function moverArbol() {
    // Cambia la posición del árbol
    posicion += direccion * 2;

    // Si llega al límite, invierte la dirección
    if (posicion > 50 || posicion < -50) {
        direccion *= -1;
    }

    // Aplica la transformación
    arbol.style.transform = `translateX(${posicion}px)`;
}

// Función para iniciar el parpadeo
function iniciarParpadeo() {
    arbol.style.animation = 'parpadeo 1s infinite';
}

// Llama a las funciones periódicamente
setInterval(moverArbol, 50);
iniciarParpadeo();
