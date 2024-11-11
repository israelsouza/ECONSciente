// função para assim q página carregar, já carregar o array com as informações da API


// captura a img para cada box
const caminhoFRUTA = "./assets/img/fruta/";
const blocos = document.querySelectorAll('div.col');

const frutas = [
    caminhoFRUTA + "abacaxi_isolated.jpg",
    caminhoFRUTA + "ameixa_isolated.png",
    caminhoFRUTA + "banana_isolated.png",
    caminhoFRUTA + "cereja_isolated.png",
    caminhoFRUTA + "damasco_isolated.png",
    caminhoFRUTA + "kiwi_isolated.png",
    caminhoFRUTA + "laranja_isolated.png",
    caminhoFRUTA + "limão_isolated.png",
    caminhoFRUTA + "red-apple-isolated.jpg",
    caminhoFRUTA + "mamao_isolated.png",
    caminhoFRUTA + "manga_isolated.png",
    caminhoFRUTA + "melancia_isolated.png",
    caminhoFRUTA + "morango_isolated.png",
    caminhoFRUTA + "pera_isolated.png",
    caminhoFRUTA + "pessego_isolated.png",
    caminhoFRUTA + "uva_isolated.png"
];

// atribui a imagem e estilização
for (let i = 0; i < frutas.length; i++) {
    blocos[i].style.backgroundImage = `url( ${frutas[i]} )`;
    blocos[i].style.backgroundPosition = 'center';
    blocos[i].style.backgroundSize = 'contain';
    blocos[i].style.backgroundRepeat = 'no-repeat';
}