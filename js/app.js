const EcocmersCard = {
    colors: document.querySelectorAll('.color'),
    shoe: document.querySelectorAll('.shoe'),
    gradients: document.querySelectorAll('.gradient'),
    size: document.querySelectorAll('.size'),
};

const init = () => {
    // defaul color
    const prevColor = 'blue';

    // change color Function
    const changeColor = event => {
        // get color attr from clicked color
        const color = event.target.getAttribute('color'),
            // select coresponding shoe gradient and prevGradient of that color
            shoe = document.querySelector(`.shoe[color="${color}"]`),
            gradient = document.querySelector(`.gradient[color="${color}"]`),
            prevGradient = document.querySelector(
                `.gradient[color="${prevColor}"]`
            );

        // document.body.style.background = `linear-gradient(45deg, ${color}, ${prevColor})`;
        document.body.setAttribute('primary', color);
        // remove active from currenly active color
        EcocmersCard.colors.forEach(color => color.classList.remove('active'));

        event.target.classList.add('active');

        EcocmersCard.shoe.forEach(shoe => shoe.classList.remove('show'));

        shoe.classList.add('show');

        EcocmersCard.gradients.forEach(gradient =>
            gradient.classList.remove('behind', 'display')
        );

        prevGradient.classList.add('behind');
        gradient.classList.add('display');
    };

    // add event listener on all color
    EcocmersCard.colors.forEach(color =>
        color.addEventListener('click', changeColor)
    );
};

window.addEventListener('DOMContentLoaded', init);
