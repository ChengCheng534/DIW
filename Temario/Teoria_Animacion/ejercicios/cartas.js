/*
// Seleccionar todas las cartas
const cartas = document.querySelectorAll('.ficha');

// Agregar un evento de clic a cada carta
cartas.forEach(carta => {
    carta.addEventListener('click', () => {
        // Alternar la clase "girada" para activar el efecto
        carta.classList.toggle('girada');
    });
});
*/

// Función que gira la carta
function girarCarta(carta) {
    // Alternar la clase 'girada' para mostrar la carta
    carta.classList.toggle('girada');
    setTimeout.comparar, 2000, carta;
}

// Variable global para almacenar la carta seleccionada
var auxCartas = null;

function comparar(carta2) {
    // Si no hay carta seleccionada (auxCartas es null), guardamos la carta seleccionada
    if (auxCartas == null) {
        auxCartas == carta2;
    } else {
        // Si ya hay una carta seleccionada, comparamos
        if (auxCartas.id === carta2.id) {
            
        } else {
            // Si las cartas no coinciden, las "desgiramos"
            auxCartas.classList.remove('girada');
            carta2.classList.remove('girada');
        }
        // Siempre después de la comparación, restablecemos auxCartas a null
        auxCartas = null;
    }
}
