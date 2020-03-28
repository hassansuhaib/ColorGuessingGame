var winMessages = ["Yay! You Won!", "Nice Job!", "Awesome!", "Let's GO!", "!Noob", "Hasta La Vista!"];
var color = [];
var boxes = document.querySelectorAll(".color");
var newGame = document.querySelector("#btn-1");
var colorGuess = document.querySelector("#colorGuess");
var message = document.querySelector("#result");
var modeButtons = document.querySelectorAll(".mode");
var selectedMode = 6;
var randomSelection;
var choice;

newGame.addEventListener("click", reset);
modeButtons[0].addEventListener("click", setEasyMode);
modeButtons[1].addEventListener("click", setHardMode);

stage();

//Play responsive interface
for(let i = 0; i < boxes.length; i++){
    boxes[i].addEventListener("click", function(){
        var toCompare = this.style.backgroundColor;
        if(toCompare === choice){
            win();
        }
        else {
            this.style.backgroundColor = "#242424";
            message.textContent = "Try Again!";
        }
    })
}

//Select a random color out of the 'color array'
function randomChoiceGenerator(selectedMode) {
    return Math.floor(Math.random() * selectedMode);
}

//Diplay all the blocks when the player wins
function win() {
    newGame.textContent = "Play Again?";
    message.textContent = winMessages[randomSelection];
    colorGuess.style.color = color[randomSelection];
    for(let i = 0; i < selectedMode; i++){
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
    colorGuess.style.color = "white";
    message.textContent = " ";
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
    newGame.textContent = "New Colors";
    message.textContent = " ";
    color = [];
    stage();
    for(let i = 0; i < selectedMode; i++){
        boxes[i].style.display = "block";
    }
}

//Set the game mode to easy
function setEasyMode(){
    modeButtons[1].classList.remove("hardSelected");
    modeButtons[0].classList.add("easySelected");
    selectedMode = 3;
    for(let i = 0; i < boxes.length; i++){
        boxes[i].style.display = "none";
    }
    reset();
}

//Set the game mode to hard
function setHardMode(){
    modeButtons[0].classList.remove("easySelected");
    modeButtons[1].classList.add("hardSelected");
    selectedMode = 6;
    reset();
}