var color = [];
var boxes = document.querySelectorAll(".color");
var newGame = document.querySelector("#btn-1");
var colorGuess = document.querySelector("#colorGuess");
var selectedMode = 6;
var randomSelection;
var choice;

newGame.addEventListener("click", reset);

stage();

//Play responsive interface
for(let i = 0; i < boxes.length; i++){
    boxes[i].addEventListener("click", function(){
        var toCompare = this.style.backgroundColor;
        if(toCompare === choice){
            win();
        }
        else {
            this.style.display = "none";
        }
    })
}

//Select a random color out of the 'color array'
function randomChoiceGenerator(selectedMode) {
    return Math.floor(Math.random() * selectedMode);
}

//Diplay all the blocks when the player wins
function win() {
    newGame.textContent = "Play Again?"
    for(let i = 0; i < boxes.length; i++){
        boxes[i].style.display = "block";
        boxes[i].style.backgroundColor = choice;
    }
}

//Generate strings of random colors
function randomColorGenerator() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

//Set the random colors in the color array
function stage() {
    for(let i = 0; i < selectedMode; i++){
        color.push(randomColorGenerator());
    }   
    randomSelection = randomChoiceGenerator(selectedMode);
    choice = color[randomSelection];
    colorGuess.textContent = choice;
    setColor();
}

//Set Color of the boxes
function setColor() {
    for(let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = color[i];
    } 
}

//Reset the game
function reset() {
    newGame.textContent = "New Colors"
    color = [];
    stage();
    for(let i = 0; i < selectedMode; i++){
        boxes[i].style.display = "block";
    }
}