const sendForm = () => {

    const postData = body => fetch('./server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    const clearInput = idForm => {
        const form = document.getElementById(idForm);
        [...form.elements]
            .filter(item =>
                item.tagName.toLowerCase() !== 'button' &&
                item.type !== 'button')
            .forEach(item =>
                item.value = '');
    };

    const isValid = event => {
        const target = event.target;

        if (target.name === 'fio') {
            target.value = target.value.replace(/[^а-яё ]/gi, '');
        }

        if (target.name === 'tel') {
            target.value = target.value.replace(/[^+\d]/g, '');
        }
    };

    const sendAllForms = (idForm) => {
        const form = document.getElementById(idForm);

        const statusMessage = document.createElement('div');

        const showStatus = status => {
            const statusList = {
                load: {
                    message: ' Загрузка...',
                },
                error: {
                    message: ' Что-то пошло не так...',
                },
                success: {
                    message: ' Спасибо! Мы скоро с вами свяжемся!',
                }
            };
            statusMessage.textContent = statusList[status].message;

            if (status === 'success' || status === 'error') {
                setTimeout(function () {
                    statusMessage.textContent = '';
                }, 1000);
                setTimeout(function () {
                    document.querySelector('#callback').style.display = 'none';
                    document.querySelector('.modal-overlay').style.display = 'none';
                }, 2000);
            }
        };

        statusMessage.style.cssText = 'font-size: 2rem; color: #000';

        form.addEventListener('submit', event => {

            event.preventDefault();

            showStatus('load');
            form.appendChild(statusMessage);
            postData(Object.fromEntries(new FormData(form)))
                .then(response => {
                    if (response.status !== 200) throw new Error(`Status network ${request.status}`);
                    showStatus('success');
                    clearInput(idForm);
                })
                .catch(error => {
                    showStatus('error');
                    console.error(error);
                });
        });

        form.addEventListener('input', isValid);
    };
    sendAllForms("callback1");
}
export default sendForm;