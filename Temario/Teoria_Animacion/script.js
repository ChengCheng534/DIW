// Obtener referencias a los elementos
const box = document.querySelector('.caja-trans');
const image = document.querySelector('.img-trans');

const btnTranslate = document.querySelector('#btn-translate');
const btnRotate2D = document.querySelector('#btn-rotate2d');
const btnRotate3D = document.querySelector('#btn-rotate3d');
const btnScale = document.querySelector('#btn-scale');

// Función para aplicar traslación
function applyTranslate() {
    box.style.transform = 'translate(200px, 50px)';
    image.style.transform = 'translate(200px, 50px)';
    applyTransition();
}

// Función para aplicar rotación 2D
function applyRotate2D() {
    box.style.transform = 'rotate(45deg)';
    image.style.transform = 'rotate(45deg)';
    applyTransition();
}

// Función para aplicar rotación 3D
function applyRotate3D() {
    box.style.transform = 'rotateY(60deg) rotateX(30deg)';
    image.style.transform = 'rotateY(60deg) rotateX(30deg)';
    applyTransition();
}

// Función para aplicar escalado
function applyScale() {
    box.style.transform = 'scale(1.5)';
    image.style.transform = 'scale(1.5)';
    applyTransition();
}

// Función para aplicar transición uniforme
function applyTransition() {
    box.style.transition = 'transform 0.5s ease';
    image.style.transition = 'transform 0.5s ease';
}

// Asignar eventos a los botones
btnTranslate.addEventListener('click', applyTranslate);
btnRotate2D.addEventListener('click', applyRotate2D);
btnRotate3D.addEventListener('click', applyRotate3D);
btnScale.addEventListener('click', applyScale);
