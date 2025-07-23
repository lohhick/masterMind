function addRow(colors){
    game = document.getElementById("game");
    newRow = document.createElement("div");
    newRow.className = "row";
    colors.forEach(color => {
        pawn = document.createElement("div")
        pawn.textContent = "__"
        pawn.style.backgroundColor = color
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

code = createCode(["aqua","blueviolet","red","black"])
addRow(code)
