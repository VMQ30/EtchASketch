let rangeInput = document.getElementById("range");
let rangeValue = document.getElementById("grid-current-size");
let userInput = 16;
rangeInput.addEventListener("input", () => {
    userInput = rangeInput.value;
    rangeValue.textContent = `${userInput} X ${userInput}`;
})

sketch(userInput);

function sketch(userInput){
    let grid = document.getElementById(`grid`);

    let sizeOfGrid = userInput;
    let size = sizeOfGrid*sizeOfGrid;

    let squareSize = 100/sizeOfGrid;

    for(let i = 0; i<size;i++){
        let div = document.createElement('div');
        grid.appendChild(div);
        div.setAttribute("style", `width:${squareSize}%; height:${squareSize}%h;`);
        div.setAttribute("id", `div${[i]}`);

        let red = Math.floor(Math.random()*256);
        let green = Math.floor(Math.random()*256);
        let blue = Math.floor(Math.random()*256);
        div.addEventListener("mousemove", () => {
            div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        });
    }
}
