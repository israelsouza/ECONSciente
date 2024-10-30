// pegar botoes
// ao clicar no segundo, trocar img
// ao clicar no 3o trocar fundo pro video

// funcao que
// desativar botao atual, add classe ao selecionado
// desativar imagem anterior, ativar imagem selecionada

var botoes = document.querySelectorAll('button[id^="intro-btn-"]');
console.log(botoes)

function mudarFundoPrincipal (indice) {
    let atual = botoes[indice]
    atual.id = 'botao-intro-'
}
















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