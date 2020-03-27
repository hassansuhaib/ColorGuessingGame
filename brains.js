var color = ["rgb(255, 0, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)", "rgb(0, 0, 255)", "rgb(0, 255, 255)", "rgb(255, 0, 255)"];
var boxes = document.querySelectorAll(".color");
var selectedMode = 6;
var randomSelection = randomChoiceGenerator(selectedMode);
var choice = color[randomSelection];


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

for(let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = color[i];
}

function randomChoiceGenerator(selectedMode) {
    return Math.floor(Math.random() * selectedMode);
}

function win() {
    for(let i = 0; i < boxes.length; i++){
        boxes[i].style.display = "block";
        boxes[i].style.backgroundColor = choice;
    }
}


