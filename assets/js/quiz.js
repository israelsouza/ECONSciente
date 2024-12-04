const blocosDeQuestoes = document.querySelectorAll('[id^="blocoQuestao"]');
const inputs = document.querySelectorAll('input');
const valor = Array.from(inputs).map(input => input.value);
var pontosUsuario = 0;
var questaoAtual = 0;
var valorSelecionado = null;

function proximaQuestao() {

    if (validarQuestaoVazia()) {
        verificarValorAlternativaSelecionada()
        somarPontos()
        exibirProximaQuestao()
    }

}

function validarQuestaoVazia() {
    const blocoAtual = blocosDeQuestoes[questaoAtual];
    const alternativas = Array.from(inputs).slice(questaoAtual * 4, questaoAtual * 4 + 4);
    const algumaSelecionada = alternativas.some(input => input.checked);
    if (!algumaSelecionada) {
        alert(`Por favor, selecione uma alternativa para a questão ${questaoAtual + 1}`);
        return false;
    }
    return true;
}

function verificarValorAlternativaSelecionada() {
    const alternativas = Array.from(inputs).slice(questaoAtual * 4, questaoAtual * 4 + 4);
    let posicaoSelecionada = null;

    alternativas.forEach((input, index) => {
        if (input.checked) {
            valorSelecionado = input.value;
            posicaoSelecionada = index + 1;
        }
    });

}

function somarPontos() {
    valorSelecionado == 1 ? pontosUsuario++ : pontosUsuario = pontosUsuario + 0;
}

function exibirMensaguemComPontuacao(nameUser) {


    if (pontosUsuario < 5) {
        return mensagem = 'Não desanime, ' + nameUser + '. Continue praticando e você melhorará! <p><iframe src="https://giphy.com/embed/3og0IxUJxtCFRJfXcQ" width="480" height="269" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></p>';
    } else if (pontosUsuario < 7) {
        return mensagem = 'Bom trabalho, ' + nameUser + '! Você teve um bom desempenho. <p><iframe src="https://giphy.com/embed/tIeCLkB8geYtW" width="480" height="379" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></p>';
    } else if (pontosUsuario < 11) {
        return mensagem = 'Parabéns, ' + nameUser + '! Você teve um desempenho excelente! <p><iframe src="https://giphy.com/embed/11ISwbgCxEzMyY" width="480" height="360" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></p>';
    } else {
        return mensagem = 'Erro ao processar a sua pontuação, tente novamente, por favor.';
    }
}

function exibirProximaQuestao() {
    const blocoAtual = blocosDeQuestoes[questaoAtual];
    blocoAtual.style.display = 'none';

    questaoAtual++;

    if (questaoAtual < blocosDeQuestoes.length) {
        const proximoBloco = blocosDeQuestoes[questaoAtual];
        proximoBloco.style.display = 'block';
    } else {

        exibirTelaDeResultado()

    }
}

function exibirTelaDeResultado() {
    var nome = prompt('Digite o seu nome.')
    var mensagem = ''
    console.log(nome)

    mensagemASerApresentada = exibirMensaguemComPontuacao(nome)

    document.getElementById('tituloInicial').style.display = 'none'
    telaDeResultado = document.getElementById('resultado')
    telaDeResultado.style.display = 'block';

    telaDeResultado.innerHTML = `
            <div>
                <h1>
                    Meus parabéns, ${nome}. Você chegou até o final!!!
                </h1>
            </div>
            <div class="outer-div">
                <div class="inner-div">
                    <p>Meus parabéns ${nome}, você chegou até o final!!</p>
                    <p>Sua pontuação foi ${pontosUsuario}/10</p>
                    <p>${mensagemASerApresentada}</p>
                </div>      
            </div>
            <div>
                <span>Quer tentar novamente? <a href="" target="">Sim</a>
            </div>
    `;

}