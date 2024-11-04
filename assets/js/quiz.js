/* COMETÁRIOS IMPORTANTES */

// todos inputs DO BLOCO para validações
// os 4 campos do bloco atual estão vazios
// o campo clicado é o correto (SOMAR)



/* TODAS VARIAVEIS  E  CAPTURAS */


// captura todas divs que possuem o trecho em comum e coloca em um Array
const question = document.querySelectorAll('div[id^="blocoQuestao"]');
const telaDeResultado = document.getElementById('resultado')
const inputCheck = document.getElementsByTagName('input')

var pontos = 0;
var contador = 0;
var limiteContador = question.length;


/* TODAS AS FUNÇOES */
function proximaQuestao() {

  
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
        telaDeResultado.style.display = 'block'
    }
}

function somar() {
    pontos = pontos + 1;
}