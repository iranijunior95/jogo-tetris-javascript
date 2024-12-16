(function() {
    const gridGame = new Array(200).fill('"');
    const tetrominos = [
        //I
        [
            [4, 5, 6, 7],
            [4, 14, 24, 34],
            [4, 5, 6, 7],
            [4, 14, 24, 34]
        ],
        //O
        [
            [4, 5, 14, 15],
            [4, 5, 14, 15],
            [4, 5, 14, 15],
            [4, 5, 14, 15]
        ],
        //T
        [
            [4, 5, 6, 15],
            [5, 15, 16, 25],
            [5, 14, 15, 25],
            [5, 14, 15, 16]
        ] 
    ];

    let statusPropagacao = true;
    let currentTetromino = [];

    function gerarTetromino() {
        let peca = Math.floor(Math.random() * tetrominos.length);
        let posicao = Math.floor(Math.random() * 4);

        currentTetromino = tetrominos[peca][posicao];
    }

    function renderizaTetromino() {
        currentTetromino.forEach(tetro => {
                gridGame[tetro] = '[ ]';

                //verifica o "rasto" do tetromino propagado e limpa
                if(currentTetromino.indexOf(tetro - 10) == -1) {
                    gridGame[tetro -10] = '"';
                }
        });
    }

    function propagarTetromino() {
        if(statusPropagacao) {
            currentTetromino.forEach((tetro, index) => {
                currentTetromino[index] = tetro + 10;
            });
        }
    }

    function desenhaGrid() {
        const $tela = document.querySelector('.game');
        let cell = ``;

        gridGame.forEach((grid) => {
            cell += `<span>${grid}</span>`;
        });

        $tela.innerHTML = cell;
    }

    gerarTetromino();
    desenhaGrid();

    setInterval(() => {
        //Verifica colisão com o fundo da tela
        if(currentTetromino.some((c) => { return c > gridGame.length})) {
            statusPropagacao = false;
            gerarTetromino();
            statusPropagacao = true;
        }

        //Verifica colisão com outras pecas
        if(gridGame.some((g) => { return currentTetromino[g] == '"' })) {
            alert('colisão')
        }
        
        renderizaTetromino();
        propagarTetromino();
        desenhaGrid();
    }, 1000);
}());