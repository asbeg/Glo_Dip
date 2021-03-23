import closeModal from "./closeModal";

const serviceModal = () => {
    const serviceBtn = document.querySelector('.button-services'),
        modalCallback = document.querySelector('#callback'),
        modalOverlay = document.querySelector('.modal-overlay');

    serviceBtn.addEventListener('click', () => {
        modalOverlay.style.display = 'block';
        modalCallback.style.display = 'block';
    });
    closeModal();
}


export default serviceModal;