// Importar referencias a elementos DOM

import { ELEMENT_ECOMMERSCARD } from './elementDom.js';

// Función de inicialización
const init = () => {
    const { colors, gradients, shoes, sizes } = ELEMENT_ECOMMERSCARD;

    let prevColor = 'blue',
        animate = true;

    // Función para manejar el cambio de color.
    const changeColor = event => {
        if (!animate) return; // Si la animación está en curso, no haga nada

        const color = event.target.getAttribute('color'),
            shoe = document.querySelector(`.shoe[color="${color}"]`),
            gradient = document.querySelector(`.gradient[color="${color}"]`),
            prevGradient = document.querySelector(
                `.gradient[color="${prevColor}"]`
            );

        document.body.setAttribute('primary', color);

        colors.forEach(color => color.classList.remove('active'));

        event.target.classList.add('active');

        shoes.forEach(shoe => shoe.classList.remove('show'));

        shoe.classList.add('show');

        gradients.forEach(gradient =>
            gradient.classList.remove('behind', 'display')
        );

        prevGradient.classList.add('behind');
        gradient.classList.add('display');

        animate = false;
        prevColor = color;
        setTimeout(() => (animate = true), 800);
    };

    // Función para manejar el cambio de tamaño
    const changeSize = event => {
        sizes.forEach(size => size.classList.remove('active')); // Remove 'active' class from all size elements
        event.target.classList.add('active');
    };

    colors.forEach(color => color.addEventListener('click', changeColor));

    sizes.forEach(size => size.addEventListener('click', changeSize));

    const heightInfo = document
        .querySelector('.info')
        .getBoundingClientRect().height;

    document.querySelector('.shoe-bacground').style.height = `${heightInfo}px`;
};

window.addEventListener('DOMContentLoaded', init);
