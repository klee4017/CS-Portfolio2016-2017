// JavaScript File

var input = document.getElementById("input");
var dropdown = document.getElementById("dropdown");
var submitButton = document.getElementById("submitButton");
var display = document.getElementById("display");




submitButton.addEventListener('click', function(){
    
    
    var task = "<p>" + input.value + "<p>";
    display.innerHTML = display.innerHTML + task;
    
   
});


display.addEventListener("click", function(evt){
    
    var text = evt.target;
    text.parentNode.removeChild(text);
});






//  style=" + "text-decoration='" + style + "'

 // if (dropdown.value == "underline"){
//     task.style.textDecoration = "underline";
// }