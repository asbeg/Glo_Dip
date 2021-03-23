import closeModal from "./closeModal";

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
    closeModal();
}

export default modal;



