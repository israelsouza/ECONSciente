const blocos = document.querySelectorAll('div.col');
const caminhoLEGUME = "./assets/img/legume/";

const legume = [
    caminhoLEGUME + 'abobora_isolated.png',
    caminhoLEGUME + 'aspargo_isolated.png',
    caminhoLEGUME + 'batata_isolated.png',
    caminhoLEGUME + 'berinjela_isolated.png',

    caminhoLEGUME + 'beterraba_isolated.png',
    caminhoLEGUME + 'cebola_isolated.png',
    caminhoLEGUME + 'cenoura_isolated.jpg',
    caminhoLEGUME + '',                         // chuchu

    caminhoLEGUME + 'ervilha_isolated.png',
    caminhoLEGUME + '',                         // gengibre
    caminhoLEGUME + '',                         // milho
    caminhoLEGUME + 'nabo_isolated.png',

    caminhoLEGUME + 'pepino_isolated.png',
    caminhoLEGUME + '',
    caminhoLEGUME + 'rabanete_isolated.png',
    caminhoLEGUME + '',
];


for (let i = 0; i < legume.length; i++) {
    blocos[i].style.backgroundImage = `url( ${legume[i]} )`;
    blocos[i].style.backgroundPosition = 'center';
    blocos[i].style.backgroundSize = 'contain';
    blocos[i].style.backgroundRepeat = 'no-repeat';
}