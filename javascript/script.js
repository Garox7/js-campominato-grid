const gridElement = document.querySelector('.field__grid');
let difficultySelector = document.getElementById('select-difficulty');
const playButton = document.querySelector('.header__playgame'); 
console.log(difficultySelector);

playButton.addEventListener('click', function(){

    let difficultyLevel = difficultySelector.value;
    console.log(difficultyLevel);

    gridElement.replaceChildren();
    
    if (difficultyLevel == '1') {
        numberCell = 100;
        console.log(numberCell);
        
    } else if (difficultyLevel == '2') {
        numberCell = 81;
        console.log(numberCell);
    
    } else if (difficultyLevel == '3') {
        numberCell = 49;
        console.log(numberCell);
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
    }
})

