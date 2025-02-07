let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.coche');
    const totalSlides = slides.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    const carrusel = document.querySelector('.carrusel');
    carrusel.style.transform = `translateX(-${currentIndex * 100}%)`;
}
