// JavaScript File


var add = document.getElementById("add");
var subtract = document.getElementById("subtract");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");
var posNeg = document.getElementById("posNeg");
var decimal = document.getElementById("decimal");
var exponent = document.getElementById("exponent");
var squareRoot = document.getElementById("squareRoot");
var equals = document.getElementById("equals");
var display = document.getElementById("display");
var number = document.getElementsByClassName("number");
var operator = document.getElementsByClassName("operator");
var button = document.querySelectorAll("li.button");



//tells program to use the value of the button
for(var i = 0; i < button.length; i++){
//tells program to listen for a "click".
//When it "hears" the click, it will display the innerHTML of the button the is clicked into the display box.
button[i].addEventListener("click", function (evt){
    
    var clickedBtn = evt.target;
        clickedBtn.innerHTML;
        display.innerHTML = clickedBtn.innerHTML;
    }
);
}


