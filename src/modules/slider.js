const slider = () => {
    const topSlider = document.querySelectorAll('.top-slider'),
        slide = document.querySelectorAll('.item'),
        dot = document.querySelector('.dot');

    let indexValue = 0;
    const showSlider = () => {
        setTimeout(showSlider, 2000);
        for (let i = 0; i < slide.length; i++) {
            slide[i].style.display = 'none';
        }
        indexValue++;

        if (indexValue > slide.length) {
            indexValue = 1;
        }
        slide[indexValue - 1].style.display = 'block';

    }
    showSlider();


}


export default slider;