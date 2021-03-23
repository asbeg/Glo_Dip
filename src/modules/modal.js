const modal = () => {
    const menuBtn = document.querySelectorAll('.callback-btn'),
        modalCallback = document.querySelector('#callback'),
        modalOverlay = document.querySelector('.modal-overlay');

    menuBtn.forEach(el => {
        el.addEventListener('click', () => {
            modalOverlay.style.display = 'block';
            modalCallback.style.display = 'block';
        });
    });

    const closeModal = () => {
        modalOverlay.addEventListener('click', () => {
            modalCallback.style.display = 'none';
            modalOverlay.style.display = 'none';
        });

        modalCallback.addEventListener('click', (event) => {
            let target = event.target;
            if (target.parentNode.classList.contains('modal-close')) {
                modalCallback.style.display = 'none';
                modalOverlay.style.display = 'none';
            }
        });
    };
    closeModal();
}

export default modal;



