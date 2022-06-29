
var drums = document.querySelectorAll(".drum").length;

for(i=0; i<drums; i++){

// when we use wueryselectorall we have to mention the index position value to apply.
    document.querySelectorAll("button")[i].addEventListener("click", function (){
        
        var htmlbutton = this.innerHTML

        makesound(htmlbutton);
        buttonanmation(htmlbutton);
        
        });

    }
// function () is an anonymous function
// after the event click we can add some function name which was like defined below but here we are 
// adding some anonymous function and defining the function here itself as a parameter.


// function buttonclick(){
//     alert("I got clicked");
//  }

// this function should be passed as an arugument to call the function when the event click happens.
// document.querySelectorAll("button")[i].addEventListener("click", buttonclick);


document.addEventListener("keypress", function(e){
    makesound(e.key);
    buttonanmation(e.key);

});

// function argument 'e' is user defined u can name it as u want.

//key is used to findout which key is pressed in the keyboard


function makesound(htmlbutton){

switch (htmlbutton) {
    case "w":
            var audio1 = new Audio("./sounds/tom-1.mp3");
            audio1.play();

        break;
    case "a":
            var audio2 = new Audio("./sounds/tom-2.mp3");
            audio2.play();
    
        break;

    case "s":
            var audio3 = new Audio("./sounds/tom-3.mp3");
            audio3.play();

        break;

    case "d":
            var audio4 = new Audio("./sounds/tom-4.mp3");
            audio4.play();

        break;

    case "j":
            var audio5 = new Audio("./sounds/snare.mp3");
            audio5.play();

        break;

    case "k":
            var audio6 = new Audio("./sounds/crash.mp3");
            audio6.play();

        break;

    case "l":
            var audio7 = new Audio("./sounds/kick-bass.mp3");
            audio7.play();

        break;

    default: console.log(htmlbutton)
        break;
}
}


function buttonanmation(currentkey){

    var activebutton=document.querySelector("."+currentkey);

    activebutton.classList.add("pressed");

    setTimeout(function(){
        activebutton.classList.remove("pressed");
    }, 100);



}

