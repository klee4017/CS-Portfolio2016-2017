// JavaScript File
//input box
var input = document.getElementById("input");
//dropdown with different styling
var dropdown = document.getElementById("dropdown");
//button that will move the text when inputted
var submitButton = document.getElementById("submitButton");
// area where the text will be displayed
var display = document.getElementById("display");



//adds whatever is placed in the input below the input box
submitButton.addEventListener('click', function(){
    
    
    var task = "<p>" + input.value + "<p>";
    display.innerHTML = display.innerHTML + task;
});

dropdown.addEventListener("click", function(){
     
    
});









//deletes text when it's clicked if it has a strikethrough
display.addEventListener("click", function(evt){
    var text=evt.target;
    
    if (text.style.textDecoration === "line-through"){
        
        text.parentNode.removeChild(text);
    }
//adds strikethrough if there isn't one already    
    else {
        
        text.style.textDecoration = "line-through";
    }
});



