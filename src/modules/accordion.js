const accordion = () => {
    const accordionContent = document.getElementById('accordion').getElementsByClassName('element-content'),
        accordions = document.querySelectorAll('.accordion');

    for (let i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener('click', () => {
            accordions[i].classList.toggle('active');
            for (let j = 0; j < accordions.length; j++) {
                if (j !== i) {
                    accordionContent[j].style.display = 'none';
                    accordions[j].classList.remove('active');
                }

                if (accordions[i].classList.contains('active')) {
                    accordionContent[i].style.display = 'block';
                } else {
                    accordions[i].classList.remove('active');
                    accordionContent[i].style.display = 'none';

                }
            }
        });
    }
}

export default accordion;