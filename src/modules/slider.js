const slider = () => {
    const topSlider = document.querySelector('.top-slider'),
        slide = document.querySelectorAll('.item');

    let indexValue = 0,
        interval;
    const showSlider = () => {
            for (let i = 0; i < slide.length; i++) {
                slide[i].style.display = 'none';
            }

            indexValue++;

            if (indexValue > slide.length) {
                indexValue = 1;
            }
            slide[indexValue - 1].style.display = 'block';

            const title = document.querySelectorAll('.big');
    }

    const startSlider = () => {
        interval = setInterval(showSlider, 2000);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    startSlider();

    topSlider.addEventListener('mouseover', event => {
        let target = event.target;
        if (target.matches('.item')) {
            stopSlide();
        }
    });

    topSlider.addEventListener('mouseout', event => {
        let target = event.target;
        if (target.matches('.item')) {
            startSlider();
        }
    });
}


export default slider;