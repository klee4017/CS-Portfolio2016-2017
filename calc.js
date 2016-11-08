// JavaScript File

var equals = document.getElementById("equals");
var display = document.getElementById("display");
var number = document.getElementsByClassName("number");
var operator = document.getElementsByClassName("operator");
var button = document.querySelectorAll("li.button");
var clear = document.getElementById("clear");



//tells program to use the value of the button
for(var i = 0; i < button.length; i++){
//tells program to listen for a "click".
//When it "hears" the click, it will display the innerHTML of the button the is clicked into the display box.
button[i].addEventListener("click", function (evt){
    
    var clickedBtn = evt.target;
        clickedBtn.innerHTML;
        display.innerHTML = display.innerHTML + clickedBtn.innerHTML;
    }
);}


clear.addEventListener("click", function(){
    
    display.innerHTML = " ";
});


equals.addEventListener("click", function(){
    // alert(eval(display.innerHTML))
    
    var ans;
    ans = eval(display.innerHTML);
    // alert(ans);
    display.innerHTML = ans;
});

