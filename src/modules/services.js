const services = () => {
    let ul = document.querySelector('.list1');
    let list = ul.querySelectorAll('a[href^="#"]');

    list.forEach(el => {
        el.addEventListener('click', (e) => {
            let hash = el.getAttribute("href");
            let elem = document.getElementById(hash.replace("#", ""));
            elem.scrollIntoView({left: 0, block: 'start', behavior: 'smooth'});
            e.preventDefault();
        });
    });
}

export default services;
