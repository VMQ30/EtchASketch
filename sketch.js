let rangeValue = document.getElementById('range');
let rangeText = document.getElementById('grid-current-size');
let userInput = 16;

etchASketch(userInput);

rangeValue.addEventListener("input",() => {
    userInput = parseInt(rangeValue.value);
    rangeText.textContent = (`${userInput} X ${userInput}`);
    etchASketch(userInput);
})
function etchASketch(userInput){
    let grid = document.getElementById('grid');
    grid.innerHTML="";

    let sizeOfGrid = userInput * userInput;
    let divSize = 100/userInput;

    for(let i = 0; i<sizeOfGrid; i++){
        let div = document.createElement("div");
        grid.appendChild(div);

        div.setAttribute("style", `height: ${divSize}%; width: ${divSize}%;`);

        let red = Math.floor(Math.random()*256);
        let green = Math.floor(Math.random()*256);
        let blue = Math.floor(Math.random()*256);

        div.addEventListener("mousemove", () => {
            div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        });
    }
}


