/* M E N U   C A B E Ç A L H O */

const menu = document.getElementById('menu-hamb')
const barraLateral = document.getElementById('barraLateral')

var barraAtiva = false

function mostrarBarraLateral() {
    // ao clicar em menu, a barra apareça, ao clicar no menu novamente, a barra desaparece
    if (barraAtiva == false) {
        barraLateral.style.display = 'block'
        barraLateral.style.textAlign = 'rigth'

        barraAtiva = true
    } else if (barraAtiva == true) {
        //esconde a barra
        barraLateral.style.display = 'none'


        barraAtiva = false
    }
}



/* M A I N - I N T R O */

const introMissao = document.getElementById('intro-missao')
const introVisao = document.getElementById('intro-visao')


function mudarFundoPrincipal (valor) {
    if (valor == 1) {
        introMissao.style.display = 'block'

        introVisao.style.display = 'none'
    } else if (valor == 2) {
        introMissao.style.display = 'none'

        introVisao.style.display = 'block'
    }
}






/* C A R R O S S E L */

var posicao = 1;

/* vai capturar todas div que tem a estrutura 'item-carrossel-' e montar uma lista com esses elementos, podendo dps tratar de forma individual */
var lista = document.querySelectorAll('div[id^="item-carrossel-"]');

function darDisplayNone(X, Y) {
    for (let i = X; i <= Y; i++) {
        lista[i].style.display = 'none'
    }
}


function darDisplayBlock(X, Y) {
    for (let i = X; i <= Y; i++) {
        lista[i].style.display = 'block'
    }
}

function proximaExibicao() {

    if (posicao == 1) {
        darDisplayNone(0, 2)
        darDisplayBlock(3, 5)

        posicao = posicao + 1
    } else if (posicao == 2) {
        darDisplayNone(3, 5)
        darDisplayBlock(6, 8)

        posicao = posicao + 1
    } else if (posicao == 3) {
        darDisplayNone(6, 8)
        darDisplayBlock(9, 11)

        posicao = posicao + 1
    } else if (posicao == 4) {
        darDisplayNone(9, 11)
        darDisplayBlock(12, 14)

        posicao = posicao + 1
    } else if (posicao == 5) {
        darDisplayNone(12, 14)
        darDisplayBlock(15, 17)

        posicao = posicao + 1
    } else if (posicao == 6) {
        darDisplayNone(15, 17)
        darDisplayBlock(18, 20)

        posicao = posicao + 1
    } else if (posicao == 7) {
        darDisplayNone(18, 20)
        darDisplayBlock(21, 23)

        posicao = posicao + 1
    } else if (posicao == 8) {
        darDisplayNone(21, 23)
        darDisplayBlock(24, 26)

        posicao = 0
    } else if (posicao == 0) {
        darDisplayNone(24, 26)
        darDisplayBlock(0, 2)

        posicao = posicao + 1
    }
}


function anteriorExibicao() {
    if (posicao == 1) {
        darDisplayNone(0, 2)
        darDisplayBlock(24, 26)

        posicao = posicao - 1
    } else if (posicao == 2) {
        darDisplayNone(3, 5)
        darDisplayBlock(0, 2)

        posicao = posicao - 1
    } else if (posicao == 3) {
        darDisplayNone(6, 8)
        darDisplayBlock(3, 5)

        posicao = posicao - 1
    } else if (posicao == 4) {
        darDisplayNone(9, 11)
        darDisplayBlock(6, 8)

        posicao = posicao - 1
    } else if (posicao == 5) {
        darDisplayNone(12, 14)
        darDisplayBlock(9, 11)

        posicao = posicao - 1
    } else if (posicao == 6) {
        darDisplayNone(15, 17)
        darDisplayBlock(12, 14)

        posicao = posicao - 1
    } else if (posicao == 7) {
        darDisplayNone(18, 20)
        darDisplayBlock(15, 17)

        posicao = posicao - 1
    } else if (posicao == 8) {
        darDisplayNone(21, 23)
        darDisplayBlock(18, 20)

        posicao = posicao - 1
    } else if (posicao == 0) {
        darDisplayNone(24, 26)
        darDisplayBlock(21, 23)

        posicao = 8
    }
}