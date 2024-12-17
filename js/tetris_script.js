(function() {
    const gridGameArray = new Array(200).fill('0');
    const tetrominos = [
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

    let currentTetromino = [];
    let nextTetromino = [];
    let propagationStatus = true;

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

    function generateNewTetromino() {
        let unit = Math.floor(Math.random() * tetrominos.length);
        let position = Math.floor(Math.random() * 4);

        //Valida se ambas as listas estiverem vazios cada um recebe um novo valor pois é a primeira chamada da função
        if(nextTetromino.length === 0 && currentTetromino.length === 0) {
            currentTetromino = {
                value: tetrominos[unit].value,
                positionList: tetrominos[unit].list[position]
            }

            nextTetromino = {
                value: tetrominos[Math.floor(Math.random() * tetrominos.length)].value,
                positionList: tetrominos[Math.floor(Math.random() * tetrominos.length)].list[Math.floor(Math.random() * 4)]
            }
        }

        //Valida se apenas o current é vazio e o next esta preenchido pois significa que é uma nova chamada da função
        if(nextTetromino.length > 0 && currentTetromino.length === 0) {
            currentTetromino = nextTetromino;

            nextTetromino = {
                value: tetrominos[unit].value,
                positionList: tetrominos[unit].list[position]
            }
        }
    }

    function renderTetromino() {
        currentTetromino.positionList.forEach(pos => {
            gridGameArray[pos] = currentTetromino.value;

            //Validação para limpar a posição anterior do tetromino quando for propagado
            if(currentTetromino.positionList.indexOf(pos - 10) === -1) {
                gridGameArray[pos - 10] = '0';
            }
        });
    }

    function propagateTetromino() {
        if(propagationStatus) {
            currentTetromino.positionList.forEach((tetro, index) => {
                currentTetromino.positionList[index] = tetro + 10;
            });
        }
    }

    function drawGridGame() {
        const $telaGame = document.querySelector('.conteudo_tela_jogo');
        let pixel = ``;

        gridGameArray.forEach(grid => {
            switch (grid) {
                case '0':
                    pixel += `<span class="empty_cell"></span>`;
                    break;

                case 't':
                    pixel += `<span class="t_cell"></span>`;
                    break;

                case 's':
                    pixel += `<span class="s_cell"></span>`;
                    break;

                case 'z':
                    pixel += `<span class="z_cell"></span>`;
                    break;

                case 'o':
                    pixel += `<span class="o_cell"></span>`;
                    break;

                case 'i':
                    pixel += `<span class="i_cell"></span>`;
                    break;

                case 'l':
                    pixel += `<span class="l_cell"></span>`;
                    break;

                case 'j':
                    pixel += `<span class="j_cell"></span>`;
                    break;
            }
        });
        
        $telaGame.innerHTML = pixel;
    }

    renderTitleColors();
    generateNewTetromino();
    renderTetromino();
    drawGridGame();

    setInterval(() => {
        propagateTetromino();
        renderTetromino();
        drawGridGame();
    }, 1000);
}());