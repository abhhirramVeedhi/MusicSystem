
// function hadClicked(){
//     var audio = new Audio("sounds/tom-1.mp3");
//     audio.play(); 
//     // if(keypress==w){
//     //     var audio = new Audio("sounds/tom-1.mp3");
//     //     audio.play();
//     // }
// }
// document.querySelector(".w").addEventListener("click", hadClicked);
// // document.addEventListener("keypress",hadClicked);


// function hadClicked1(){
//     var audio = new Audio("sounds/tom-2.mp3");
//     audio.play();
//     // if(keypress==a){
//     //     var audio = new Audio("sounds/tom-2.mp3");
//     //     audio.play();
//     // }
// }
// document.querySelector(".a").addEventListener("click", hadClicked1);
// // document.addEventListener("keypress",hadClicked1);

// function hadClicked3(){
//     var audio = new Audio("sounds/tom-3.mp3");
//     audio.play();
//     // if(keypress==s){
//     //     var audio = new Audio("sounds/tom-3.mp3");
//     //     audio.play();
//     // }
// }
// document.querySelector(".s").addEventListener("click", hadClicked3);
// // document.addEventListener("keypress",hadClicked3);



// function hadClicked4(){
//     var audio = new Audio("sounds/tom-4.mp3");
//     audio.play();
//     // if(keypress==d){
//     //     var audio = new Audio("sounds/tom-4.mp3");
//     //     audio.play();
//     // }
// }

// document.querySelector(".d").addEventListener("click", hadClicked4);
// // document.addEventListener("keypress",hadClicked4);


// function hadClicked5(){
//     var audio = new Audio("sounds/snare.mp3");
//     audio.play();
//     // if(keypress==j){
//     //     var audio = new Audio("sounds/snare.mp3");
//     //     audio.play();
//     // }
// }
// document.querySelector(".j").addEventListener("click", hadClicked5);
// // document.addEventListener("keypress",hadClicked5);



// function hadClicked6(){
//     var audio = new Audio("sounds/crash.mp3");
//     audio.play();
//     // if(keypress==k){
//     //     var audio = new Audio("sounds/crash.mp3");
//     //     audio.play();
//     // }
// }
// document.querySelector(".k").addEventListener("click", hadClicked6);
// // document.addEventListener("keypress",hadClicked6);


// function hadClicked7(){
//     var audio = new Audio("sounds/kick-bass.mp3");
//     audio.play();
//     // if(keypress==l){
//     //     var audio = new Audio("sounds/kick-bass.mp3");
//     //     audio.play();
//     // }
// }
// document.querySelector(".l").addEventListener("click", hadClicked7);
// // document.addEventListener("keypress",hadClicked7);


// document.addEventListener("keypress",function(){


// }

// );




//ANGELA'S CODE//

//Detects button press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

//Detect Key board press

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}