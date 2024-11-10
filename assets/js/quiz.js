/* COMETÁRIOS IMPORTANTES */

// todos inputs DO BLOCO para validações
// os 4 campos do bloco atual estão vazios
// o campo clicado é o correto (SOMAR)



/* TODAS VARIAVEIS  E  CAPTURAS */


// captura todas divs que possuem o trecho em comum e coloca em um Array
const question = document.querySelectorAll('div[id^="blocoQuestao"]');
const alternativa = document.getElementsByTagName('input')
const telaDeResultado = document.getElementById('resultado')

var pontos = 0;
var contador = 0;                       // bloco de questão atual.
var limiteContador = question.length;


/* TODAS AS FUNÇOES */
function proximaQuestao() {
    // primeiro validar se os imputs do bloco estão todos vazios
    // se estiverem, dar ERRO, senão segue o fluxo

    validarAlternativaEmBranco();
    console.log('eu entro aqui?')

    for (var i = 0; i < alternativa.length; i++) {
        if(alternativa[i].value == 1 && alternativa[i].checked) {
            console.log(alternativa[i].value);
            somar();
            alterandoQuestao();
        }
    }

}

var valorCasaInicial = 0; // 4  8   12  16
var valorcasFinal = 3;  // 7    11  15  19

function validarAlternativaEmBranco(){
    // ter o bloco atual e alternativas desse bloco

    if (contador == 0) {
        for (let i = valorCasaInicial; i < valorcasFinal; i++) {
        }

        alt01 = alternativa[valorCasaInicial]
        alt02 = alternativa[valorCasaInicial+1]
        alt03 = alternativa[valorCasaInicial+2]
        alt04 = alternativa[valorCasaInicial+3]

        if (alt01.checked == false && alt02.checked == false && alt03.checked == false && alt04.checked == false ) {
            alert('selecione alguma alternativa')
            return break;
        } else{
            valorCasaInicial = valorCasaInicial + 4;
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