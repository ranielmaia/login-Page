const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login_button');

const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active');
    /* ^ Para gerar o movimento após clicar ^ */
}

const handleFocusOut = ({ target }) => {
    if (target.value === '') {
        const span = target.previousElementSibling;
        span.classList.remove('span-active');
        /* ^ Para remover após clicar em outra parte da página ^ */
    }
}


/* ===== Ação de liberar botão de login ====== */
const handleChange = () => {
    const [usarname, passward] = inputs;

    if (usarname.value && passward.value.length >= 8) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '');
    }
}

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
inputs.forEach((input) => input.addEventListener('input', handleChange));