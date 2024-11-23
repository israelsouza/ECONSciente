const caminhoVERDURA = "./assets/img/verdura/";
const blocos = document.querySelectorAll("div.col");

const verdura = [
    caminhoVERDURA + "acelga_isolated.jpg",
    caminhoVERDURA + 'agriao_isolated.png',
    caminhoVERDURA + 'alface_isolated.png',
    caminhoVERDURA + 'brocolis_isolated.jpg',
    caminhoVERDURA + 'cebolinha_isolated.png',
    caminhoVERDURA + 'coentro_isolated.png',
    caminhoVERDURA + 'couve_isolated.png',
    caminhoVERDURA + 'couveflor_isolated.png',
    caminhoVERDURA + 'espinafre_isolated.png',
    caminhoVERDURA + 'manjericao_isolated.png',
    caminhoVERDURA + 'mostarda-isolated.png',
    caminhoVERDURA + 'oregano-isolated.png',
    caminhoVERDURA + 'repolho_isolated.png',
    caminhoVERDURA + 'rucula_isolated.jpg',
    caminhoVERDURA + 'salsao_isolated.png',
    caminhoVERDURA + 'salsinha_isolated.png',
];

for (let i = 0; i < verdura.length; i++) {
    blocos[i].style.backgroundImage = `url( ${verdura[i]} )`;
    blocos[i].style.backgroundPosition = 'center';
    blocos[i].style.backgroundSize = 'contain';
    blocos[i].style.backgroundRepeat = 'no-repeat';
}