function addRow(colors){
    game = document.getElementById("game");
    newRow = document.createElement("div");
    newRow.className = "row";
    colors.forEach(color => {
        pawn = createPawn(color)
        newRow.appendChild(pawn)

    });
    game.appendChild(newRow);
}

function createCode(colors){
    list = []
    for (let i in colors){
        color = Math.floor(Math.random()*4)
        list.push(colors[color])
    }
    return list
}
function createPawn(color){
    pawn = document.createElement("button")
    pawn.className = "pawn"
    pawn.style.backgroundColor = color

    return pawn
}


code = createCode(["aqua","blueviolet","red","black"])
addRow(code)

