/* M E N U   C A B E Ç A L H O */

const menu = document.getElementById('menu-hamb')
const barraLateral = document.getElementById('barraLateral')

var barraAtiva = false

function mostrarBarraLateral() {
    // ao clicar em menu, a barra apareça, ao clicar no menu novamente, a barra desaparece
    if (barraAtiva == false) {
        barraLateral.style.display = 'block'
        barraLateral.style.textAlign = 'rigth'
        console.log('false')
        barraAtiva = true
    } else if (barraAtiva == true) {
        //esconde a barra
        barraLateral.style.display = 'none'

        console.log('true')
        barraAtiva = false
    }
}