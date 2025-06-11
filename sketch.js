let rangeValue = document.getElementById('range');
let rangeText = document.getElementById('grid-current-size');
let userInput = 16;

let colorPicker = document.getElementById("color");

let clearButton = document.getElementById('clear');
let colorButton = document.getElementById(`color-mode`);
let rainbowButton = document.getElementById(`rainbow-mode`);

let grid = document.getElementById('grid');

let mode = 'rainbow';

sketch(userInput);

clearButton.addEventListener("click",() =>{
    grid.innerHTML = "";
    sketch(userInput);
})

colorButton.addEventListener(('click'), () =>{
    mode = 'color';
    grid.innerHTML = "";
    sketch(userInput);
})

rainbowButton.addEventListener(('click'), () =>{
    mode = 'rainbow';
    grid.innerHTML = "";
    sketch(userInput);
})

rangeValue.addEventListener("input",() => {
    userInput = parseInt(rangeValue.value);
    rangeText.textContent = (`${userInput} X ${userInput}`);
    sketch(userInput);
})

colorPicker.addEventListener("input", () =>{
    sketch(userInput);
})

function sketch(userInput){
    
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
            if(mode == 'rainbow'){
            div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            }

            if(mode == 'color'){
                div.style.backgroundColor = colorPicker.value;
            }
        });
    }
    
}




