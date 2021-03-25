const upScroll = () => {
    const upBtn = document.querySelector('.up');
    upBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', function() {
        upBtn.hidden = (pageYOffset < document.documentElement.clientHeight);
    });
}


export default upScroll;
