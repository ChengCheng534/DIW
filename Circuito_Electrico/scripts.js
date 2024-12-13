// const corriente = document.querySelector('.corriente_ser');
// const bombilla1 = document.querySelector('.bombilla_ser1');
// const bombilla2 = document.querySelector('.bombilla_ser2');

//     function checkCollision() {
//         const corrienteRect = corriente.getBoundingClientRect();
//         const bombilla1Rect = bombilla1.getBoundingClientRect();
//         const bombilla2Rect = bombilla2.getBoundingClientRect();

//         // Check collision with bombilla1
//         if (
//             corrienteRect.left < bombilla1Rect.right &&
//             corrienteRect.right > bombilla1Rect.left &&
//             corrienteRect.top < bombilla1Rect.bottom &&
//             corrienteRect.bottom > bombilla1Rect.top
//         ) {
//             bombilla1.style.opacity = 1;
//         } else {
//             bombilla1.style.opacity = 0;
//         }

//         // Check collision with bombilla2
//         if (
//             corrienteRect.left < bombilla2Rect.right &&
//             corrienteRect.right > bombilla2Rect.left &&
//             corrienteRect.top < bombilla2Rect.bottom &&
//             corrienteRect.bottom > bombilla2Rect.top
//         ) {
//             bombilla2.style.opacity = 1;
//         } else {
//             bombilla2.style.opacity = 0;
//         }
//     }

//     // Check for collision on every animation frame
//     function animate() {
//         checkCollision();
//         requestAnimationFrame(animate);
//     }

// animate();