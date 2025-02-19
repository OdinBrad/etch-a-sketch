const container = document.querySelector(".container")


const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]



function getCharacter(index) {
    return hexCharacters[index]
}

function generateNewColor() {
    let hexColorRep = "#"

    for (let index = 0; index < 6; index++){
        const randomPosition = Math.floor ( Math.random() * hexCharacters.length ) 
        hexColorRep += getCharacter( randomPosition )
    }

    return hexColorRep
}

function makeGrid(gridLength) {
    for (i = 0; i < gridLength; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for (j = 0; j < gridLength; j++) {
            const div = document.createElement("div");
            div.classList.add("square")
            //div.textContent = "Hello World!"
            row.appendChild(div);
            div.addEventListener("mouseover", () => {
                //div.textContent = "Goodbye!!";
                const randomHexColorCode = generateNewColor();
                
                div.style.backgroundColor = randomHexColorCode;
                
            })
            
        }
    }
}

function emptyGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
const button = document.querySelector(".button");
button.textContent = "New Grid";
button.addEventListener("click", () => {
    emptyGrid();
    const gridSize = prompt("Enter the size of the grid.")
    makeGrid(gridSize);

})

//
