var noOfDrums = document.querySelectorAll(".drum").length; // returns length of array

// Mouse click to play
for(var i = 0; i < noOfDrums; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
        var buttonInnerHTML = this.innerHTML;

        playSound(buttonInnerHTML);
        animateButton(buttonInnerHTML);
    });        
}

// Key stroke to play
document.addEventListener("keydown", function(event) {
    playSound(event.key);
    animateButton(event.key);
});

function animateButton(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}

function playSound (correspondingCharacter){
    switch(correspondingCharacter){
        case "a": 
            var tom1 = new Audio("sounds/snare.mp3");
            tom1.play();
        break;

        case "s": 
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;

        case "d": 
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;

        case "f": 
            var snare = new Audio("sounds/tom-1.mp3");
            snare.play();
        break;

        case "j": 
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        case "k": 
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;

        case "l": 
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;

        default: console.log(buttonInnerHTML);
    }
}