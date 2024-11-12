// Obtener referencias a los elementos del DOM
const video = document.getElementById('myVideo');
const playPauseBtn = document.getElementById('myBtn');
const soundBtn = document.getElementById('soundBtn');
const soundImg = document.getElementById('soundImg');

// Verifica que los elementos existan antes de agregar eventos
if (video && playPauseBtn && soundBtn && soundImg) {

    // Función para alternar entre reproducir y pausar el video
    function togglePlayPause() {
        if (video.paused) {
            video.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            video.pause();
            playPauseBtn.textContent = 'Play';
        }
    }

    // Función para alternar el estado de mute/unmute del video
    function toggleSound() {
        video.muted = !video.muted;
        if (video.muted) {
            soundImg.src = 'muto.png'; // Icono de sonido silenciado
            soundImg.alt = 'Muted'; 
        } else {
            soundImg.src = 'sound.png'; // Icono de sonido activado
            soundImg.alt = 'Sound On';
        }
    }

    // Asignar los eventos a los botones
    playPauseBtn.addEventListener('click', togglePlayPause);
    soundBtn.addEventListener('click', toggleSound);
} else {
    console.error("Error: No se pudieron encontrar algunos elementos del DOM.");
}
