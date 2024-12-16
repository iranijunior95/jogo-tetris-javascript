(function() {
    const $conteudo_tela_jogo = document.querySelector('.conteudo_tela_jogo');

    //Cria um array de 200 posiçoes com valor "0" em cada posição
    const gameScreen = new Array(200).fill('0');
    //Lista de tetrominos
    let tetrominos = [
            {
                value: 't',
                list: [
                    [4, 13, 14, 15],
                    [3, 4, 5, 14],
                    [4, 14, 15, 24],
                    [4, 13, 14, 24]
                ] 
            },
    
            {
                value: 's',
                list: [
                    [4, 5, 13, 14],
                    [4, 14, 15, 25],
                    [4, 5, 13, 14],
                    [4, 14, 15, 25]
                ] 
            },
    
            {
                value: 'z',
                list: [
                    [4, 5, 15, 16],
                    [5, 14, 15, 24],
                    [4, 5, 15, 16],
                    [5, 14, 15, 24]
                ] 
            },
    
            {
                value: 'o',
                list: [
                    [4, 5, 14, 15],
                    [4, 5, 14, 15],
                    [4, 5, 14, 15],
                    [4, 5, 14, 15]
                ] 
            },
    
            {
                value: 'i',
                list: [
                    [4, 14, 24, 34],
                    [3, 4, 5, 6],
                    [4, 14, 24, 34],
                    [3, 4, 5, 6]
                ] 
            },
    
            {
                value: 'l',
                list: [
                    [4, 5, 15, 25],
                    [5, 13, 14, 15],
                    [4, 14, 24, 25],
                    [3, 4, 5, 13]
                ] 
            },
    
            {
                value: 'j',
                list: [
                    [4, 5, 14, 24],
                    [3, 4, 5, 15],
                    [4, 14, 23, 24],
                    [3, 13, 14, 15]
                ] 
            }
    ];

    let currentTetromino = {};
    let nextTetromino = {};
    
    //Função para renderizar o titulo colorido
    function renderTitleColors() {
        const $title = document.querySelector('#titulo');
        const listColorsTitle = ['#0CA759', '#41A211', '#097AA9', '#A28911', '#B20036', '#5909A9', '#A21171'];
        const arrayTitle = $title.textContent.split('');

        let indexColor = 0;
        let newTitle = ``;

        arrayTitle.forEach(letter => {
            if(indexColor == listColorsTitle.length) {
                indexColor = 0;
            }

            newTitle += `<span style="color: ${listColorsTitle[indexColor]}">${letter}</span>`;
            
            indexColor++;
        }); 

        $title.innerHTML = newTitle;
    }

    function generateTetrominoes() {
        let part = Math.floor(Math.random() * tetrominos.length);
        let position = Math.floor(Math.random() * 4);

        if(Object.keys(nextTetromino).length === 0) {
            currentTetromino = {
                value: tetrominos[part].value,
                list: tetrominos[part].list[position]
            };

            part = Math.floor(Math.random() * tetrominos.length);
            position = Math.floor(Math.random() * 4);

            nextTetromino = {
                value: tetrominos[part].value,
                list: tetrominos[part].list[position]
            };
        }

        if(Object.keys(currentTetromino).length === 0 && Object.keys(nextTetromino).length !== 0) { 
            currentTetromino = nextTetromino;

            part = Math.floor(Math.random() * tetrominos.length);
            position = Math.floor(Math.random() * 4);

            nextTetromino = {
                value: tetrominos[part].value,
                list: tetrominos[part].list[position]
            };
        }
    }

    function renderCurrentTetrominoOnScreen() {
        currentTetromino.list.forEach(tetro => {
            gameScreen[tetro] = currentTetromino.value;
        });
        
        drawScreen();
    }

    function propagateCurrentTetromino() {
        if(currentTetromino.list.some((elemento) => elemento > 190)) {
            currentTetromino = {}
            generateTetrominoes();            
        }
        
        currentTetromino.list.forEach((element, index) => currentTetromino.list[index] = element + 10);
    }

    function deleteCurrentTetrominoOnScreen () {
        currentTetromino.list.forEach(tetro => {
            gameScreen[tetro] = '0';
        });
    }

    function drawScreen() {
        let cell = ``;

        gameScreen.forEach(element => {
            if(element === '0') {
                cell += `<span class="empty_cell"></span>`;
            }

            if(element === 't') {
                cell += `<span class="t_cell"></span>`;
            }

            if(element === 's') {
                cell += `<span class="s_cell"></span>`;
            }

            if(element === 'z') {
                cell += `<span class="z_cell"></span>`;
            }

            if(element === 'o') {
                cell += `<span class="o_cell"></span>`;
            }

            if(element === 'i') {
                cell += `<span class="i_cell"></span>`;
            }

            if(element === 'l') {
                cell += `<span class="l_cell"></span>`;
            }

            if(element === 'j') {
                cell += `<span class="j_cell"></span>`;
            }
            
        });

        $conteudo_tela_jogo.innerHTML = cell;
    }

    renderTitleColors();
    generateTetrominoes();
    renderCurrentTetrominoOnScreen();
    
    setInterval(() => {
        propagateCurrentTetromino();
        renderCurrentTetrominoOnScreen(); 
    }, 100);

    
}());