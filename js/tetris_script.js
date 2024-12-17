(function() {
    const gridGameArray = new Array(200).fill('j');

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
    drawGridGame();
}());