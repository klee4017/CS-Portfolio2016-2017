// JavaScript File

var one = document.getElementById("one")
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var zero = document.getElementById("zero");
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




for(var i = 0; i < button.length; i++){

button[i].addEventListener("click", function (evt){
    
    var clickedBtn = evt.target;
        clickedBtn.innerHTML;
        display.innerHTML = clickedBtn.innerHTML;
    }
);
}


