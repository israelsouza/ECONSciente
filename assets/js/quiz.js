var questao01 = document.getElementById('questao01');
var questao02 = document.getElementById('questao02');
var questao03 = document.getElementById('questao03');
var questao04 = document.getElementById('questao04');
var questao05 = document.getElementById('questao05');
var questao06 = document.getElementById('questao06');
var questao07 = document.getElementById('questao07');
var questao08 = document.getElementById('questao08');
var questao09 = document.getElementById('questao09');
var questao10 = document.getElementById('questao10');

todasQuestoes = [
    questao01, questao02, questao03, questao04, questao05, questao06, questao07, questao08, questao09, questao10
];

var pontos = 0;
var contador = 0;
var limiteContador = todasQuestoes.length;

function selecionado(val) {
    soma(val);    
    alterandoQuestao()
}

function alterandoQuestao(){
    if ( contador != (limiteContador - 1) ) {
        todasQuestoes[contador].style.display = 'none';
        contador = contador + 1;
        todasQuestoes[contador].style.display = 'block';
    } else {
        todasQuestoes[contador].style.display = 'none';
        // exibir a parte de resultado com a soma dos pontos
    }
}

function soma(val) {
    if (val == 1) {
        pontos = pontos + 1;
        console.log('Você acertou essa questão, receba um ponto.')
        console.log('Pontos atuais: ' + pontos);
    } else {
        console.log('você não acertou, que pena. quem sabe a próxima você consiga');
    }
}