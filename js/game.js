class Game {
    //Cria um array de 200 posiçoes com valor "0" em cada posição
    gameScreen = new Array(200).fill('0');
    //Lista de tetrominos
    tetrominos = [
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

    currentTetromino = [];
    nextTetromino = [];
    
    generateTetrominoes() {
        const part = Math.floor(Math.random() * this.tetrominos.length);
        const position = Math.floor(Math.random() * 4);

        this.tetrominos[part].list[position].forEach(tetro => {
            this.gameScreen
        });

        return this.tetrominos[part].list[position];
    }
}