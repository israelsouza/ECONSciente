const blocos = document.querySelectorAll('div.col');
const caminhoLEGUME = "./assets/img/legume/";

const legume = [
    'abobora_isolated.png',
    'aspargo_isolated.png',
    'batata_isolated.png',
    'batatadoce-isolated.jpg',  //
    
    'berinjela_isolated.png',//
    'beterraba_isolated.png',//
    'cebola_isolated.png',//
    'cenoura_isolated.jpg',//

    'chuchu-isolated.png',//     
    'ervilha_isolated.png',//
    'gengibre-isolated.png',//
    'mandioca-isolated.jpeg',//
    
    'milho-isolated.png', //                        
    'nabo_isolated.png',//
    'pepino_isolated.png',//
    'rabanete_isolated.png',//
];

const legumeComCaminho = legume.map((item) => { 
    return `${caminhoLEGUME}${item}`;
 });

for (let i = 0; i < legume.length; i++) {
    blocos[i].style.backgroundImage = `url( ${legumeComCaminho[i]} )`;
    blocos[i].style.backgroundPosition = 'center';
    blocos[i].style.backgroundSize = 'contain';
    blocos[i].style.backgroundRepeat = 'no-repeat';
}