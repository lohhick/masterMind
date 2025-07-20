function addRow(colors){
    game = document.getElementById("game");
    newRow = document.createElement("div");
    newRow.className = "row";
    for (let i in colors){
        console.log(i)
        pawn = document.createElement("div")
        pawn.textContent = "__"
        pawn.style.backgroundColor = colors[i]
        newRow.appendChild(pawn)
    }
    game.appendChild(newRow);
}
addRow(["aqua","blueviolet","red","black"])
addRow(["red","black","blueviolet","aqua"])
addRow(["black","red","aqua","blueviolet"])
