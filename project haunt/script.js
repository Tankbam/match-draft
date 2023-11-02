const gridContainer = document.querySelector(".grid-container");
const resetButton = document.getElementById("reset-button");

let matched = 0;
let isFlipping = false;

function resetGame() {
    gridContainer.innerHTML = "";
    openedCells = [];
    matchedPairs = 0;
    createGrid();
}
