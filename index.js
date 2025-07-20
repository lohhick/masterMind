function addRow(){
    game = document.getElementById("game");
    newRow = document.createElement("div");
    newRow.className = "pions";
    game.appendChild(newRow);
}
addRow()