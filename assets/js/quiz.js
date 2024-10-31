// captura todos os botoes e insere em um Array
const btn = document.querySelectorAll('button');

// captura todas as divs que possuem o trecho 'questao' em comum e coloca em um Array
const question = document.querySelectorAll('div[id^="questao"]');


var pontos = 0;
var contador = 0;
var limiteContador = question.length;


// ADD EVENT LISTNER
// se o botao[0], ocorre as verificações (soma se correto, e troca questão) 
// se o botão[1], retorna uma questão
//      se a questão anterior foi certa, precisa diminuir um ponto ao retornar


function proximaQuestao() {

    const inputCheck = document.getElementsByTagName('input')
  
    for (var i = 0; i < inputCheck.length; i++) {
        if(inputCheck[i].value == 1 && inputCheck[i].checked) {
            console.log(inputCheck[i].value);
            somar();
            alterandoQuestao();
        } else if (inputCheck[i].checked) {
            console.log(inputCheck[i].value);
            alterandoQuestao();
        }
    }
}

function alterandoQuestao(){
    if ( contador != (limiteContador - 1) ) {
        question[contador].style.display = 'none';
        contador = contador + 1;
        question[contador].style.display = 'block';
    } else {
        question[contador].style.display = 'none';
        // exibir a parte de resultado com a soma dos pontos
    }
}

function somar() {
    pontos = pontos + 1;
}


/* var questao01 = document.getElementById('questao01');
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
]; */