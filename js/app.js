const EcocmersCard = {
    colors: document.querySelectorAll('.color'),
    shoe: document.querySelectorAll('.shoe'),
    gradients: document.querySelectorAll('.gradient'),
    size: document.querySelectorAll('.size'),
};

const init = () => {
    let prevColor = 'blue',
        animate = true;

    const changeColor = event => {
        if (!animate) return;

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

    const changeSize = event => {
        EcocmersCard.size.forEach(size => size.classList.remove('active'));
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
