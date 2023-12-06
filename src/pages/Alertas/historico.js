const INPUT_BUSCA = document.getElementById('input-busca');
const TABELA_ALERTAS = document.getElementById('tabela-alertas');

INPUT_BUSCA.addEventListener('keyup', () => {
    let expressao = INPUT_BUSCA.value.toLowerCase();
    

    if (expressao.length === 1) {
        return;
    }

    let linhas = TABELA_ALERTAS.getElementsByTagName('tr');

    for (let posicao in linhas) {
        if (true === isNaN(posicao)) {
            continue;
        }

        let conteudoDaLinha = linhas[posicao].innerHTML.toLowerCase();

        if (true === conteudoDaLinha.includes(expressao)) {
            linhas[posicao].style.display = '';
        } else {
            linhas[posicao].style.display = 'none';
        }
    }
});
