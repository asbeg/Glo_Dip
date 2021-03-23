const closeModal = () => {
    const modalCallback = document.querySelector('#callback'),
        modalOverlay = document.querySelector('.modal-overlay');

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

export default closeModal;