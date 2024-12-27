const form = document.getElementById('form-Exercicio');
const linhaSucesso = document.querySelector('.sucesso')
const linhaErro = document.querySelector('.erro')
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const numeroA = document.getElementById('numeroA');
    const numeroB = document.getElementById('numeroB');
    const Total = numeroA + numeroB;
    const mensagemSucesso = `O maior numero é ${numeroB.value}`;

    formEValido = numeroA.value < numeroB.value
    if (formEValido){
        linhaSucesso.innerHTML = mensagemSucesso;
        linhaSucesso.style.display = 'block';
        linhaErro.style.display = 'none';
        numeroA.classList.remove ('erroInput')
        numeroA.value = '';
        numeroB.value = '';
    }
    else{
        linhaErro.innerHTML = "O nesta caixa tem que ser o menor numero da conta";
        linhaErro.style.display = 'block';
        numeroA.classList.add ('erroInput')
        linhaSucesso.style.display = 'none';
        numeroA.value = '';
        numeroB.value = '';
    }
});
console.log