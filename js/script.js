(function() {
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

    renderTitleColors();
}());