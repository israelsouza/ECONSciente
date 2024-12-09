const btnSubimit = document.querySelector('button[type="submit"]');

btnSubimit.addEventListener("click", erviarDados, false);

function erviarDados(e) {
    e.preventDefault();

    validarNomeEEmail();
    validarMensagem();
    armazenarDados();
}

function validarNomeEEmail() {
    const nome = document.querySelector('#nomeCompleto').value;
    const email = document.querySelector('#InputEmail').value;
    const regex = /\d/;
    if (regex.test(nome)) {
        alert('Nome não pode conter números');
        return false;
    }

    if (nome.length < 3 || nome.length > 50 || email.length < 10 || email.length > 50) {
        alert('Nome ou email inválido');
        return false;
    }
}

function validarMensagem() {
    const mensagem = document.querySelector('#floatingTextarea2').value;
    if (mensagem.length < 10 || mensagem.length > 200) {
        alert('Mensagem deve conter entre 10 e 200 caracteres');
        return false;
    }
}

function armazenarDados() {

    const nome = document.querySelector('#nomeCompleto').value;
    const email = document.querySelector('#InputEmail').value;
    const faixaEtaria = document.querySelector('input[name="inlineRadioOptions"]:checked').value;
    const notaSatisfacao = document.querySelector('#notaSatisfacao').value;
    const notaRecomendacao = document.querySelector('#notaRecomendacao').value;
    const feedback = document.querySelector('#floatingTextarea2').value;

    const dados = {
        nome,
        email,
        faixaEtaria,
        notaSatisfacao,
        notaRecomendacao,
        feedback
    }

    alert('Feedback enviado com sucesso!');
    document.querySelector('form').reset();
}