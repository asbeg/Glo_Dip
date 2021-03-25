import closeModal from "./closeModal";

const carousel = () => {
    const modalCallback = document.querySelector('#callback'),
        modalOverlay = document.querySelector('.modal-overlay'),
        btn = document.querySelectorAll('.absolute'),
        btnLeft = document.querySelector('.arrow-left'),
        btnRight = document.querySelector('.arrow-right'),
        wrap = document.querySelector('.services-carousel'),
        main = document.querySelector('.services-elements'),
        slides = document.querySelector('.services-carousel').children;

    let position = 0,
        slidesToShow = 3,
        width = Math.floor(100 / slidesToShow);

    btn.forEach(el => {
        el.addEventListener('click', () => {
            modalOverlay.style.display = 'block';
            modalCallback.style.display = 'block';
        });
    });
    closeModal();

    const addClass = () => {
        main.classList.add('slider');
        wrap.classList.add('slider__wrap');

        for (const i of slides) {
            i.classList.add('slider__item');
        }
    }
    addClass();

    const addStyle = () => {
        const style = document.createElement('style');
        style.id = 'sliderCarousel-slider';
        style.textContent = `
        .slider {
        overflow: hidden !important;
        }
        .slider__wrap {
        display: flex !important;
        transition: transform 0.5s !important;
        will-change: transform !important;
        }        
        .slider__item {
        flex: 0 0 ${width}% !important;
        margin: auto: 0 !important;
        }
        `
        document.head.appendChild(style);
    }
    addStyle();

    const prevSlider = () => {
        if (position > 0) {
            --position;
            wrap.style.transform = `translateX(-${position * width}%)`;
        }
    }

    const nextSlider = () => {
        if (position < slides.length - slidesToShow) {
            ++position;
            wrap.style.transform = `translateX(-${position * width}%)`;
        }
    }

    btnRight.addEventListener('click', nextSlider);
    btnLeft.addEventListener('click', prevSlider);
}

export default carousel;
