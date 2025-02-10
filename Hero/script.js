const coches = document.querySelector('.coches');
const puntos = document.querySelectorAll('.punto');
const totalCoches = document.querySelectorAll('.coche').length;
let index = 0;
let intervalo;

// Función para actualizar el carrusel y los puntos
function updateCarrusel() {
    coches.style.transform = `translateX(-${index * 100}vw)`;
    document.querySelector('.punto.active').classList.remove('active');
    puntos[index].classList.add('active');
}

// Click en los puntos indicadores
puntos.forEach((punto, i) => {
    punto.addEventListener('click', () => {
        index = i;
        updateCarrusel();
        resetIntervalo();
    });
});

function autoSlide() {
    index = (index + 1) % totalCoches;
    updateCarrusel();
}

function resetIntervalo() {
    clearInterval(intervalo);
    intervalo = setInterval(autoSlide, 5000);
}

// Iniciar el carrusel automático
intervalo = setInterval(autoSlide, 4000);
