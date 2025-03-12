document.addEventListener("DOMContentLoaded", () => {
    const casa = document.querySelector(".casa");
    const humo = document.querySelector(".humo");
    const puerta = document.querySelector(".puerta");
    const piruleta = document.querySelector(".piruleta");
    const santa = document.querySelector(".santa");
    const regalo = document.querySelector(".regalo");
    const peana = document.querySelector(".bottom");
    const copos = document.querySelector(".copos");

    // Animación del humo
    casa.addEventListener("mouseover", () => {
        humo.classList.add("activo");
    });
    casa.addEventListener("mouseout", () => {
        humo.classList.remove("activo");
    });

    // Animación de la puerta y piruleta
    puerta.addEventListener("mouseover", () => {
        puerta.classList.add("abrir");
        setTimeout(() => {
            piruleta.classList.add("subir");
        }, 1000);
    });
    puerta.addEventListener("mouseout", () => {
        setTimeout(() => {
            piruleta.classList.remove("subir");
            setTimeout(() => {
                puerta.classList.remove("abrir");
            }, 1000);
        }, 1000);
    });

    // Animación de Santa y el regalo
    santa.addEventListener("mouseover", () => {
        santa.classList.add("mover");
        setTimeout(() => {
            regalo.classList.add("aparecer");
        }, 500);
    });

    // Animación de la nieve
    peana.addEventListener("click", () => {
        copos.classList.add("nevar");
        setTimeout(() => {
            copos.classList.add("desaparecer");
            setTimeout(() => {
                copos.classList.remove("nevar", "desaparecer");
            }, 2000);
        }, 4000);
    });
});