let difficultyLevel = document.getElementById('select-difficulty').value;
const playButton = document.querySelector('.header__playgame');
const gridElement = document.querySelector('.field__grid');

playButton.addEventListener('click', function(){
    gridElement.replaceChildren();
    console.log('mi hai cliccato');
    
    if (difficultyLevel == '1') {
        numberCell = 100;
        
    } else if (difficultyLevel == '2') {
        numberCell = 81;
    
    } else if (difficultyLevel == '3') {
        numberCell = 49;
    }
    
    for (let i = 1; i <= numberCell; i++) {
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');

        if (difficultyLevel == '1') {
            cellElement.style.width = "calc(100% / 10)"
            cellElement.style.height = "calc(100% / 10)"
            
        } else if (difficultyLevel == '2') {
            cellElement.style.width = "calc(100% / 9)"
            cellElement.style.height = "calc(100% / 9)"
        
        } else if (difficultyLevel == '3') {
            cellElement.style.width = "calc(100% / 7)"
            cellElement.style.height = "calc(100% / 7)"
        }
    
        gridElement.append(cellElement);
        cellElement.append([i]);


        cellElement.addEventListener ('click', function() {
            this.classList.toggle('active');
        })
    }
})

