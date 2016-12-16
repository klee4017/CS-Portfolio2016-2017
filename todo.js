// JavaScript File
//input box
var input = document.getElementById("input");
//dropdown with different styling
var dropdown = document.getElementById("dropdown");
//button that will move the text when inputted
var submitButton = document.getElementById("submitButton");
// area where the text will be displayed
var display = document.getElementById("display");
//todolist variable in case color doesn't show up
var task = "<p>" + input.value + "<p>";



//adds whatever is placed in the input below the input box
submitButton.addEventListener('click', function(){
    var colorBlack = "<div style='color: black'>" + input.value + "<div>";
    if (dropdown.value === "black"){
        display.innerHTML = display.innerHTML + colorBlack;
    }
   var colorRed = "<div style='color: red'>" + input.value + "<div>";
    if (dropdown.value === "red"){
        display.innerHTML = display.innerHTML + colorRed;
    }
    var colorYellow = "<div style='color: yellow'>" + input.value + "<div>";
    if (dropdown.value === "yellow"){
        display.innerHTML = display.innerHTML + colorYellow;
    }
    var colorGreen = "<div style='color: green'>" + input.value + "<div>";
    if (dropdown.value === "green"){
        display.innerHTML = display.innerHTML + colorGreen;
    }
    var colorBlue = "<div style='color: blue'>" + input.value + "<div>";
    if (dropdown.value === "blue"){
        display.innerHTML = display.innerHTML + colorBlue;
    }
    var colorPurple = "<div style='color: purple'>" + input.value + "<div>";
    if (dropdown.value === "purple"){
        display.innerHTML = display.innerHTML + colorPurple;
    }
    var colorOrange = "<div style='color: orange'>" + input.value + "<div>";
    if (dropdown.value === "orange"){
        display.innerHTML = display.innerHTML + colorOrange;
    }
    var colorGrey = "<div style='color: grey'>" + input.value + "<div>";
    if (dropdown.value === "grey"){
        display.innerHTML = display.innerHTML + colorGrey;
    }
    
    
    
//     display.innerHTML = display.innerHTML + task;

    
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



