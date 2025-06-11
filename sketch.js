let grid = document.getElementById(`grid`);

let sizeOfGrid = 16;
let size = sizeOfGrid*sizeOfGrid;

let squareSize = 100/sizeOfGrid;

for(let i = 0; i<size;i++){
    let div = document.createElement('div');
    grid.appendChild(div);
    div.setAttribute("style", `width:${squareSize}%; height:${squareSize}%h;`);
    div.setAttribute("id", `div${[i]}`);

    div.addEventListener("mousemove", () => {
        div.style.backgroundColor = "lightblue";
    });

    
}

