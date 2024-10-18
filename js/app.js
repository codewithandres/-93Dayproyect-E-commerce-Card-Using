// Object to store references to DOM elements
const EcocmersCard = {
    colors: document.querySelectorAll('.color'),  // Color selection elements
    shoe: document.querySelectorAll('.shoe'),  // Shoe image elements
    gradients: document.querySelectorAll('.gradient'),  // Gradient background elements
    size: document.querySelectorAll('.size'),  // Size selection elements
};

// Initialization function
const init = () => {
    let prevColor = 'blue',
        animate = true;

    // Function to handle color change
    const changeColor = event => {
        if (!animate) return;  // If animation is in progress, do nothing

        const color = event.target.getAttribute('color'),
            shoe = document.querySelector(`.shoe[color="${color}"]`),
            gradient = document.querySelector(`.gradient[color="${color}"]`),
            prevGradient = document.querySelector(
                `.gradient[color="${prevColor}"]`
            );

        document.body.setAttribute('primary', color);

        EcocmersCard.colors.forEach(color => color.classList.remove('active'));

        event.target.classList.add('active');

        EcocmersCard.shoe.forEach(shoe => shoe.classList.remove('show'));

        shoe.classList.add('show');

        EcocmersCard.gradients.forEach(gradient =>
            gradient.classList.remove('behind', 'display')
        );

        prevGradient.classList.add('behind');
        gradient.classList.add('display');

        animate = false;
        prevColor = color;
        setTimeout(() => (animate = true), 800);
    };

    // Function to handle size change
    const changeSize = event => {
        EcocmersCard.size.forEach(size => size.classList.remove('active'));  // Remove 'active' class from all size elements
        event.target.classList.add('active');
    };

    EcocmersCard.colors.forEach(color =>
        color.addEventListener('click', changeColor)
    );

    EcocmersCard.size.forEach(size =>
        size.addEventListener('click', changeSize)
    );

    const heightInfo = document
        .querySelector('.info')
        .getBoundingClientRect().height;

    document.querySelector('.shoe-bacground').style.height = `${heightInfo}px`;
};

window.addEventListener('DOMContentLoaded', init);
