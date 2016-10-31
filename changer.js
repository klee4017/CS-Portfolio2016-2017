// JavaScript File

//creates variables that are linked to ids in the html
var bgColor = document.getElementById("bgColor")
var changeButton = document.getElementById("changeButton")



//Event listener for the button so it actually works
changeButton.addEventListener("click", function(){
    
    document.body.style.backgroundColor = bgColor.value;
})