// função para assim q página carregar, executar script
document.addEventListener('DOMContentLoaded', () => {

    // dados API

    // captura a img para cada box
    const caminhoFRUTA = "./assets/img/fruta/";
    const blocos = document.querySelectorAll('div.col');

    // nome do arquivo das frutas
    const nomeDasFrutas = [
        "abacaxi_isolated.jpg",
        "ameixa_isolated.png",
        "banana_isolated.png",
        "cereja_isolated.png",
        "damasco_isolated.png",
        "kiwi_isolated.png",
        "laranja_isolated.png",
        "limão_isolated.png",
        "red-apple-isolated.jpg",
        "mamao_isolated.png",
        "manga_isolated.png",
        "melancia_isolated.png",
        "morango_isolated.png",
        "pera_isolated.png",
        "pessego_isolated.png",
        "uva_isolated.png"
    ];

    // caminho da imagem
    const frutas = nomeDasFrutas.map((itenList) => {
        return `${caminhoFRUTA}${itenList}`;
    });

    // atribui a imagem e estilização
    for (let i = 0; i < frutas.length; i++) {
        blocos[i].style.backgroundImage = `url( ${frutas[i]} )`;
        blocos[i].style.backgroundPosition = 'center';
        blocos[i].style.backgroundSize = 'contain';
        blocos[i].style.backgroundRepeat = 'no-repeat';
    }

    // database de pesquisa das frutas
    const frutasDB = [
        {
            id: 'abacaxi',
            manuseio: 'É preciso manipular com cuidado para não machucar a casca, pois isso pode acelerar a deterioração. Lave a fruta antes de cortar.',
            armazenamento: 'Em temperatura ambiente, o abacaxi não cortado se conserva bem por cerca de 2 a 4 dias. Quando cortado, mantenha em um recipiente fechado na geladeira, onde pode durar até 5 dias.',
            condicoes: 'A temperatura ideal para armazenar o abacaxi cortado é entre 5°C e 8°C. Em temperatura ambiente, o abacaxi amadurece mais rapidamente.',
            aproveitamento: 'Abacaxi que ficou muito maduro pode ser usado em sucos, geleias e até mesmo em sobremesas.',
            descarte: 'Partes deterioradas, com cheiro fermentado ou textura mole, devem ser descartadas no lixo orgânico.'
        },

        {
            id: 'ameixa',
            manuseio: 'A ameixa é uma fruta muito sensível ao manuseio, principalmente devido à sua pele fina. Durante a colheita, deve-se tomar cuidado para evitar amassamentos e danos físicos, que podem acelerar o processo de deterioração. A remoção de frutos danificados e a separação de diferentes estágios de maturação são essenciais para garantir a qualidade do produto final.',
            armazenamento: 'A ameixa deve ser armazenada em ambiente refrigerado, idealmente a temperaturas de 0 a 2°C. Isso retarda o amadurecimento e reduz a perda de qualidade. A fruta deve ser armazenada em câmaras frias com controle de umidade para evitar o ressecamento. Para prolongar a vida útil, algumas técnicas como a utilização de reguladores de crescimento, como o aminoetoxivinilglicina (AVG), são usadas para retardar o amadurecimento.',
            condicoes: 'As ameixas devem ser armazenadas em temperaturas baixas para evitar o avanço rápido da maturação. A umidade relativa do ambiente deve ser alta (cerca de 90%) para evitar o ressecamento da fruta. A exposição prolongada a temperaturas acima de 10°C pode acelerar o processo de deterioração. É importante também que os frutos sejam ventilados para evitar o acúmulo de etileno, que pode apressar o amadurecimento.',
            aproveitamento: 'Se a ameixa apresentar sinais de amadurecimento excessivo, pode ser utilizada para compotas, geleias, ou sucos. Caso o fruto tenha apenas amolecido, pode ser aproveitado de outras formas, como em receitas que exigem frutas maduras, como bolos e sobremesas. O uso imediato da fruta, evitando o desperdício, é a melhor alternativa.',
            descarte: 'Frutas que estão muito danificadas ou com sinais de podridão devem ser descartadas adequadamente. Evite jogar as frutas no lixo comum; elas devem ser enviadas para compostagem, caso seja viável, para evitar a contaminação e desperdício. Caso as ameixas tenham sido contaminadas com fungos ou bactérias, o descarte deve ser feito conforme as normas locais de manejo de resíduos orgânicos.'
        },
        {
            id: 'banana',
            manuseio: 'Após a colheita, é essencial manusear as bananas com cuidado para evitar danos mecânicos que podem prejudicar sua qualidade. Por serem frutas climatéricas, elas continuam amadurecendo após colhidas, então evitar batidas e amassamentos é essencial para prolongar sua vida útil. Devem ser higienizadas antes do armazenamento, preferencialmente sem o uso de produtos que possam danificar sua casca.',
            armazenamento: 'As bananas devem ser armazenadas em locais frescos e ventilados, com temperatura acima de 13°C para evitar danos causados pelo frio, como escurecimento da casca e perda de sabor. O ideal é deixá-las fora da geladeira até que atinjam o ponto de amadurecimento desejado. Para retardar o processo de amadurecimento, evite armazená-las perto de outras frutas que liberam etileno.',
            condicoes: 'A temperatura ambiente é adequada, mas manter as bananas longe da luz direta e em ambiente seco pode ajudar a prolongar sua vida útil. Em regiões mais quentes, é possível usar técnicas de climatização para amadurecimento uniforme, usando gás etileno, quando disponível.',
            aproveitamento: 'Quando a banana começa a amadurecer demais, ela ainda pode ser aproveitada em receitas como bolos, pães e vitaminas. Também é possível utilizá-la para fazer doces, como geleias e purês, além de sucos concentrados.',
            descarte: 'Caso as bananas estejam em estado de decomposição, o ideal é descartá-las em locais de compostagem, uma vez que são biodegradáveis e podem contribuir para a produção de adubo natural. Evite descartar junto ao lixo comum para reduzir o impacto ambiental.'
        },
        {
            id: 'cereja',
            manuseio: 'A cereja é uma fruta delicada e deve ser manuseada com cuidado para evitar amassados e rupturas. Para maior durabilidade, as cerejas devem ser colhidas preferencialmente com o pedúnculo, pois isso ajuda a preservar a polpa e a aparência do fruto. Colhê-las em horários mais frescos, como no início da manhã, também é ideal para evitar o calor excessivo, que pode acelerar a deterioração da fruta durante o transporte e armazenamento.',
            armazenamento: 'As cerejas devem ser armazenadas em temperaturas frias para manter a frescura. Em ambientes domésticos, podem ser conservadas na geladeira, em sacos plásticos selados para reduzir a exposição ao ar, o que minimiza a desidratação. Recomenda-se não lavá-las até o momento do consumo, pois a umidade pode causar apodrecimento. Em câmaras refrigeradas comerciais, a temperatura ideal para cerejas doces é de aproximadamente -1 °C, com umidade relativa de 90-95% para evitar o ressecamento. As cerejas ácidas podem ser armazenadas a 0 °C.',
            condicoes: 'Manter a umidade elevada e evitar a exposição ao ar são essenciais para conservar as cerejas. Elas começam a se deteriorar logo após a colheita, portanto o transporte rápido e o armazenamento em temperaturas baixas são fundamentais para prolongar sua qualidade e frescor.',
            aproveitamento: 'Cerejas que estão começando a amolecer ou a mostrar sinais de envelhecimento, mas que ainda estão seguras para consumo, podem ser usadas em receitas como geleias, compotas ou sucos. Isso permite um aproveitamento maior da fruta sem desperdício.',
            descarte: 'Cerejas que apresentam mofo, descoloração intensa ou texturas visivelmente comprometidas devem ser descartadas de forma adequada, preferencialmente em compostagem, onde podem contribuir para a geração de adubo orgânico sem poluir o ambiente.'
        },
        {
            id: 'damasco',
            manuseio: 'O damasco é uma fruta delicada, com uma pele fina e fácil de danificar. Ao manusear, deve-se evitar pressões ou impactos fortes para não causar amassados ou quebras na casca, que aceleram a deterioração. Além disso, é recomendado que o damasco seja colhido com cuidado, separando os frutos maduros dos que ainda não atingiram o ponto de consumo.',
            armazenamento: 'Para armazenar o damasco, a melhor prática é mantê-lo em temperatura ambiente até que amadureça, evitando locais quentes e úmidos. Após o amadurecimento, o damasco deve ser colocado na geladeira, onde pode ser preservado por até 3-4 dias. Caso precise armazenar o damasco por mais tempo, ele pode ser congelado, principalmente se já estiver amadurecido, mas o sabor e a textura podem ser alterados.',
            condicoes: 'O damasco deve ser mantido em condições de baixa umidade e em um local fresco e ventilado para evitar o acúmulo de umidade, o que pode promover o apodrecimento. É importante também evitar que o damasco entre em contato com outras frutas que emitem etileno, pois isso pode acelerar o amadurecimento e diminuir a durabilidade da fruta.',
            aproveitamento: 'Caso o damasco não esteja mais no ponto ideal para consumo, ele pode ser reaproveitado de diversas formas. Se a fruta ainda estiver relativamente boa, pode ser transformada em compotas, geleias, ou purês. Frutas mais maduras, mas não estragadas, também podem ser usadas em smoothies ou como base para doces e bolos. No caso de partes da fruta apresentarem sinais de deterioração, essas partes podem ser descartadas, aproveitando apenas o que ainda está bom.',
            descarte: 'O descarte do damasco deve ser feito com responsabilidade. Frutas danificadas ou podres devem ser colocadas no lixo orgânico para compostagem, se possível, ou em lixeiras adequadas para resíduos orgânicos. Evitar o descarte de frutas no lixo comum é importante para reduzir o impacto ambiental e facilitar a decomposição natural.'
        },
        {
            id: 'kiwi',
            manuseio: 'O kiwi é uma fruta sensível a danos físicos. Durante o manuseio, é importante evitar pressão excessiva, pois isso pode causar amassamentos e ferimentos na casca. A fruta deve ser manipulada com cuidado, preferencialmente usando luvas para reduzir a possibilidade de contaminação e deterioração precoce. Na colheita, é recomendável fazer a triagem para separar os frutos danificados dos saudáveis, garantindo uma melhor qualidade para o consumo final.',
            armazenamento: 'O kiwi deve ser armazenado em ambientes refrigerados para prolongar sua vida útil. A temperatura ideal de armazenamento é entre 0ºC e 1ºC, com umidade relativa do ar em torno de 90 a 95%. Essa condição ajuda a reduzir a taxa respiratória da fruta e o acúmulo de etileno, o que retarda o amadurecimento e o surgimento de deteriorações. Em locais sem refrigeração, o kiwi deve ser mantido em um ambiente fresco e ventilado, longe da luz solar direta para preservar suas características.',
            condicoes: 'É aconselhável controlar a exposição ao etileno, um hormônio que acelera o amadurecimento. Em ambientes refrigerados, a presença de etileno deve ser minimizada, especialmente quando o kiwi é armazenado por períodos longos. Além disso, o uso de substâncias que retardam a ação do etileno, como o 1-MCP (1-metilciclopropeno), pode ser benéfico em ambientes controlados para prolongar a durabilidade do kiwi em estoque.',
            aproveitamento: 'Caso o kiwi apresente partes moles ou machucadas, ele pode ser aproveitado em smoothies, geleias ou saladas de frutas, aproveitando a polpa sem perder os nutrientes. Frutas maduras ou ligeiramente danificadas podem também ser usadas em compotas ou purês, evitando o desperdício.',
            descarte: 'Frutas que estejam visivelmente deterioradas ou com sinais de mofo devem ser descartadas. O descarte adequado consiste em depositar as frutas em recipientes de lixo orgânico, caso o serviço de coleta de resíduos orgânicos esteja disponível. Esse processo contribui para a compostagem e ajuda a reduzir o impacto ambiental de resíduos alimentares.'
        },
        {
            id: 'laranja',
            manuseio: 'Laranjas devem ser colhidas no estágio de maturação adequado e sem danos visíveis. O ideal é manuseá-las com cuidado para evitar machucados que aceleram o apodrecimento. Evite colhê-las logo pela manhã ou molhadas para que não se danifiquem rapidamente durante o transporte.',
            armazenamento: 'As laranjas devem ser armazenadas em local fresco e arejado, fora da geladeira, para manter seus nutrientes e prolongar sua vida útil. Se armazenadas na geladeira, o tempo de conservação é menor devido à alta umidade. Evite sacos plásticos, pois eles retêm umidade; prefira caixas de papelão ou bandejas ventiladas.',
            condicoes: 'Para maior durabilidade, mantenha as laranjas longe da luz direta do sol e evite empilhá-las. Em regiões quentes, é recomendado mantê-las em um local com boa ventilação para evitar o surgimento de mofo.',
            aproveitamento: 'Caso as laranjas estejam maduras demais, use-as para fazer sucos, caldas ou até congelá-las em pedaços para consumo posterior. As cascas podem ser reaproveitadas em receitas, como óleos aromatizados, repelentes de insetos naturais ou esponjas de limpeza.',
            descarte: 'Se não estiverem em boas condições, as laranjas podem ser descartadas na compostagem, pois são biodegradáveis e contribuem para a produção de adubo orgânico de qualidade. Evite jogá-las em locais inadequados para evitar proliferação de pragas.'
        },
        {
            id: 'limao',
            manuseio: 'Os limões devem ser armazenados em local fresco e seco, longe da luz direta, pois isso ajuda a prolongar sua durabilidade. O limão é uma fruta que não amadurece depois de colhida, então deve ser consumido enquanto fresco. Para garantir uma boa conservação, o ideal é que os limões sejam mantidos em temperatura ambiente por até uma semana. Se necessário, pode ser armazenado na geladeira para prolongar a vida útil por até um mês.',
            armazenamento: '',
            condicoes: 'Para garantir que o limão permaneça em boas condições, o ambiente onde ele é guardado deve ser ventilado e não excessivamente úmido, o que poderia acelerar sua deterioração. Em condições ideais, o limão deve ser colocado em uma gaveta própria para frutas, caso seja armazenado na geladeira.',
            aproveitamento: 'Caso o limão comece a deteriorar, mas ainda não esteja totalmente impróprio, pode-se reaproveitar a casca para fazer produtos como limpadores caseiros ou até mesmo para temperos. Se a polpa ainda estiver boa, pode ser usada em sucos, marinadas ou conservas. Limões mais maduros também podem ser transformados em geleias ou sorvetes, evitando o desperdício.',
            descarte: 'Limões que já estiverem com sinais claros de mofo ou decomposição devem ser descartados corretamente. Por ser um resíduo orgânico, ele pode ser destinado à compostagem, uma maneira eficiente de reaproveitar esse resíduo e evitar o desperdício. Caso o descarte em compostagem não seja uma opção, deve-se enviar para aterros destinados a resíduos orgânicos.'
        },
        {
            id: 'maça',
            manuseio: 'As maçãs devem ser manuseadas com cuidado, para evitar quedas e batidas, pois são suscetíveis a danos mecânicos que aceleram sua deterioração. A lavagem com sanitizantes como o hipoclorito de sódio também é uma prática comum em linhas de processamento para reduzir a carga de microrganismos na superfície da fruta.',
            armazenamento: 'Para prolongar a vida útil, o armazenamento ideal da maçã ocorre em câmaras refrigeradas com temperaturas entre 0,5°C e 1,5°C e alta umidade. Esse ambiente pode ser sob atmosfera controlada, onde o oxigênio é reduzido para cerca de 0,5% a 1,5%, o que permite que a fruta dure de 3 a 11 meses, dependendo da variedade e da maturação.',
            condicoes: 'A maçã precisa ser mantida em ambiente com alta umidade relativa para evitar a murcha. Em geladeiras domésticas, pode ser armazenada em sacos plásticos para manter a umidade e prolongar sua frescura. Sob refrigeração simples, a maçã dura até 90 dias, mas fatores como temperatura e umidade variam conforme a cultivar.',
            aproveitamento: 'Maçãs que estão começando a amolecer ou perder a crocância ainda podem ser aproveitadas em preparações como sucos, purês, compotas, geleias ou até mesmo em sobremesas assadas.',
            descarte: 'Caso a maçã esteja em estágio avançado de deterioração (ex: com podridão causada por fungos), recomenda-se o descarte no lixo orgânico, para que o resíduo possa ser compostado ou encaminhado a aterros onde possa se decompor naturalmente.'
        },
        {
            id: 'mamao',
            manuseio: 'O mamão é sensível e deve ser manuseado com cuidado para evitar danos. Sua casca pode ser facilmente arranhada, o que pode acelerar o processo de deterioração. Por isso, é importante evitar batidas e pressões durante o transporte e armazenamento.',
            armazenamento: 'O mamão deve ser armazenado em temperaturas entre 10°C e 12°C para retardar o amadurecimento sem causar lesões pelo frio. A umidade relativa ideal é alta (entre 90-95%) para evitar que a fruta resseque. Frutos de mamão papaia podem ser armazenados em atmosferas controladas, com baixo nível de oxigênio e controle de dióxido de carbono para melhorar sua vida útil.',
            condicoes: 'Evite temperaturas abaixo de 10°C, pois isso pode causar danos irreversíveis à fruta. Além disso, deve-se controlar a presença de fungos e microrganismos durante o armazenamento, uma vez que mamões são suscetíveis à podridão se armazenados em condições inadequadas.',
            aproveitamento: 'Se o mamão estiver parcialmente maduro, pode ser utilizado em sucos, smoothies ou em receitas que exigem frutas mais macias. Caso haja sinais de amadurecimento excessivo, a polpa pode ser aproveitada para fazer purês, compotas ou até ser congelada para uso posterior.',
            descarte: 'Caso o mamão esteja totalmente estragado, com sinais de podridão ou infecção fúngica, ele deve ser descartado de maneira adequada, evitando a contaminação do meio ambiente ou de outros alimentos. O descarte deve ser feito em lixeiras específicas para alimentos, que podem ser compostados ou enviados para unidades de reciclagem orgânica.'
        },
        {
            id: 'manga',
            manuseio: 'Lave a manga antes do consumo e manipule-a com cuidado para evitar que machuque e apresente manchas.',
            armazenamento: 'Mangas podem ser armazenadas em temperatura ambiente até amadurecer. Após isso, podem ser refrigeradas para prolongar sua vida útil.',
            condicoes: 'A temperatura recomendada para mangas maduras é entre 10°C e 13°C, onde duram até uma semana na geladeira.',
            aproveitamento: 'Mangas muito maduras podem ser usadas em purês, smoothies ou até mesmo em compotas.',
            descarte: 'Manga com cheiro forte de fermentação ou com partes pretas deve ser descartada no lixo orgânico.'
        },
        { 
            id: 'melancia',
            manuseio: 'Evite batidas, que podem danificar a polpa. No corte, mantenha uma higienização rigorosa da faca e superfícies para evitar contaminações.',
            armazenamento: 'Melancias inteiras podem ser armazenadas em local fresco e arejado. Após o corte, o ideal é armazenar sob refrigeração em recipientes fechados, preferencialmente a 7°C.',
            condicoes: 'Em temperaturas baixas, a melancia cortada se mantém fresca por até 4 dias. A fruta inteira pode durar algumas semanas em locais frescos.',
            aproveitamento: 'Melancias que perderam um pouco da crocância podem ser aproveitadas em sucos e smoothies.',
            descarte: 'Caso apresente sinais de deterioração (mau cheiro ou textura pegajosa), descarte em lixo orgânico.'
        },
        {
            id: 'morango',
            manuseio: 'Morangos são extremamente sensíveis ao manuseio; é ideal colher com cuidado e evitar batidas para minimizar danos e contaminação. Sempre lavar e secar levemente antes de armazenar.',
            armazenamento: 'A temperatura recomendada para armazenamento é de 0°C com umidade relativa entre 90% e 95%, o que ajuda a prolongar sua vida útil e reduzir a incidência de doenças. Armazenamento em CO₂ controlado (até 40%) também pode retardar a deterioração.',
            condicoes: 'Em ambientes refrigerados e com alta umidade, os morangos duram até uma semana. Em temperatura ambiente, porém, começam a deteriorar em poucos dias.',
            aproveitamento: 'Morangos excessivamente maduros ou amassados podem ser usados para fazer compotas, smoothies ou geleias.',
            descarte: 'Morangos com mofo ou deterioração grave devem ser descartados em lixo orgânico, pois contaminam outros alimentos rapidamente.'
        },
        {
            id: 'pera',
            manuseio: 'Para garantir maior durabilidade, evite deixar as peras em locais com alta umidade ou expostas diretamente à luz, pois isso pode acelerar significativamente a deterioração.',
            armazenamento: 'Armazene as peras em temperatura ambiente até que estejam maduras. Depois disso, coloque-as na geladeira para prolongar sua vida útil e mantê-las frescas por mais tempo.',
            condicoes: 'Durante o armazenamento, deve-se evitar que as peras fiquem em contato com outras frutas que emitem etileno, como maçãs, pois isso pode acelerar o amadurecimento.',
            aproveitamento: 'Se a pera ainda estiver parcialmente boa, pode ser usada para fazer purês, compotas ou sucos. Se a fruta estiver madura demais, pode ser congelada para uso posterior em receitas.',
            descarte: 'Caso a pera esteja totalmente deteriorada, deve ser descartada. Como é um resíduo orgânico, pode ser enviada para compostagem.'
        },
        {
            id: 'pessego',
            manuseio: 'Os pêssegos são frutas sensíveis e, portanto, exigem manuseio delicado para evitar danos mecânicos e proliferação de podridões. A colheita seletiva e transporte cuidadoso são essenciais para manter a integridade da fruta até o consumidor.',
            armazenamento: 'Devem ser armazenados em câmaras refrigeradas entre 0°C e 1°C e com umidade relativa de 90-95%, o que permite manter a qualidade da fruta por até cinco semanas. A refrigeração rápida logo após a colheita também ajuda a reduzir a taxa de amadurecimento e aumenta sua vida útil.',
            condicoes: 'Além da refrigeração, o uso de métodos adicionais, como a irradiação com UV-C, pode retardar o amadurecimento e preservar características como firmeza e teor de sólidos solúveis, prolongando a durabilidade da fruta.',
            aproveitamento: 'Caso estejam maduras ou com partes danificadas, os pêssegos podem ser utilizados em compotas, geleias ou sucos, aproveitando ao máximo a polpa e minimizando desperdícios.',
            descarte: 'Pêssegos que não estiverem adequados para consumo devem ser descartados em lixo orgânico ou compostagem, já que a fruta em decomposição pode contribuir com matéria orgânica para o solo, especialmente quando compostada adequadamente.'
        },
        {
            id: 'uva',
            manuseio: 'As uvas devem ser colhidas cuidadosamente, evitando contato manual excessivo com as bagas, para manter a pruína, uma cera natural que protege os frutos. Danos mecânicos ao manusear favorecem o crescimento de microrganismos e aceleram a deterioração.',
            armazenamento: 'Armazene as uvas em câmaras frias, a uma temperatura de 0°C e umidade relativa de 90-95%, o que pode conservar a qualidade por até 60 dias. O uso de dióxido de enxofre (SO₂) é comum para evitar podridões, mas o excesso pode descolorir as bagas.',
            condicoes: 'Controle rigoroso da temperatura e umidade durante o armazenamento é essencial para evitar a condensação e o crescimento de fungos como Botrytis cinerea, que causa a podridão cinzenta.',
            aproveitamento: 'Se as uvas não estão frescas, elas podem ser aproveitadas para fazer geleias, sucos ou vinhos.',
            descarte: 'Descarte as uvas não aproveitáveis em locais adequados para resíduos orgânicos, ou para compostagem se possível.'
        }
    ]

    // definição da estrutura dentro do modal-body
    const modalBodies = document.querySelectorAll('.modal-body');
    const modalContent = `
                                <div class="conteudo-pesquisa-content">
                                    <h4 class="sub-titulo">Manuseio</h4>
                                    <p></p>
                                </div>
                                <div class="conteudo-pesquisa-content">
                                    <h4 class="sub-titulo">Armazenamento</h4>
                                    <p></p>
                                </div>
                                <div class="conteudo-pesquisa-content">
                                    <h4 class="sub-titulo">Condições</h4>
                                    <p></p>
                                </div>
                                <div class="conteudo-pesquisa-content">
                                    <h4 class="sub-titulo">Aproveito</h4>
                                    <p></p>
                                </div>
                                <div class="conteudo-pesquisa-content">
                                    <h4 class="sub-titulo">Descarte</h4>
                                    <p></p>
                                </div>
                            `;
    modalBodies.forEach((modalBody) => {
        modalBody.innerHTML = modalContent;
    });

    // função para exibir informações das frutas dentro do modal

    modalBodies.forEach((modalBody, index) => {
        const fruta = frutasDB[index];
        const paragraphs = modalBody.querySelectorAll('p');
        paragraphs[0].textContent = fruta.manuseio;
        paragraphs[1].textContent = fruta.armazenamento;
        paragraphs[2].textContent = fruta.condicoes;
        paragraphs[3].textContent = fruta.aproveitamento;
        paragraphs[4].textContent = fruta.descarte;
    });

});