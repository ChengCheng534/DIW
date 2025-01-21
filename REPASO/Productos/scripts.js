    // Definir los precios según el tamaño
    const precios = {
        L: 1.5,  // Precio para tamaño L
        XL: 2, // Precio para tamaño XL
        XXL: 2.5 // Precio para tamaño XXL
    };

    // Obtener los elementos del DOM
    const botonesTamaño = document.querySelectorAll('.tamaño button');
    const inputCantidad = document.querySelector('.cantidad input');
    const precioElemento = document.querySelector('.precio p');

    let tamañoSeleccionado = null; // Guardar el tamaño seleccionado

    // Escuchar el clic en los botones de tamaño
    botonesTamaño.forEach(boton => {
        boton.addEventListener('click', () => {
            // Actualizar el tamaño seleccionado
            tamañoSeleccionado = boton.textContent;

            // Calcular y mostrar el precio
            calcularPrecio();
        });
    });

    // Escuchar cambios en la cantidad
    inputCantidad.addEventListener('input', calcularPrecio);

    function calcularPrecio() {
        // Obtener la cantidad ingresada
        const cantidad = parseInt(inputCantidad.value) || 0;

        // Si no hay un tamaño seleccionado o cantidad, no hacer nada
        if (!tamañoSeleccionado || cantidad <= 0) {
            precioElemento.textContent = "0€";
            return;
        }

        // Calcular el precio total
        const precioUnitario = precios[tamañoSeleccionado];
        const precioTotal = precioUnitario * cantidad;

        // Mostrar el precio calculado
        precioElemento.textContent = `${precioTotal}€`;
    }
