// JavaScript File

var hardwareButton = document.getElementById("hardwareButton");
var calcButton = document.getElementById("calcButton");
var displayText = document.getElementById("displayText");
var displayInfo = document.getElementById("displayInfo");

hardwareButton.addEventListener("click", function(){
    
    displayText.innerHTML = " <h3> When you first look at my hardware page, you can see a picture of a piece of hardware with the name of that piece about it. But when you hover your mouse over the image, it flips over to reveal text that has information about that piece of hardware. I did this by using CSS to style my page in order to achieve the flip animation. </h3>";
    displayInfo.innerHTML = "<pre>" + "<code>" +".flip-container {" + "<br>" + "perspective: 1000px;}" + "<br>" + "<br>" + ".flip-container:hover .flipper, .flip-container.hover .flipper {" + "<br>" + "transform: rotateY(180deg);}" + "<br>" + "<br>" + ".flip-container, .front, .back {" +"<br>" +  "width: 485px;" + "<br>" + "height: 450px;}" + "<br>" + "<br>" + ".flipper {" + "<br>" + "transition: 1s;" + "<br>" + "transform-style: preserve-3d;" + "<br>" + "position: relative;" + "<br>" + "left:0;}" + "<br>" + "<br>" + ".front, .back {" + "<br>" + "backface-visibility: hidden;" + "<br>" + "position:absolute;" + "<br>" + "top:0;" + "<br>" + "left:0;}" + "<br>" + "<br>" + ".front {" + "<br>" + "z-index: 2;" + "<br>" + "transform: rotateY(0deg);}" + "<br>" + "<br>" + ".back {" + "<br>" + "transform: rotateY(180deg);}" + "<br>" + "<br>" + ".front, .back{" + "<br>" + "border: solid black 3px;" +"<br>" + "padding-top:10px;}" + " </code>" + "</pre>" + "<br>" + "<p>-First off, the 'perspective' determines how wide the flipper is. If I had a smaller perspective, the flipper would appear smaller when it flips.<br><br>-Next, flip-container: hover' tells the computer to watch for the mouse to hover over the image. 'transform: rotateY(180deg)' Tells the computer to flip the image tp reveal the text by rotating 180degrees in the Y direction.<br><br>-'flip container' is the box that is being rotates that holds the image(s) and the text. I the 'width' and 'height' sets the size of the box, 485px wide and 480px high.<br><br>-Next, the flip speed determines how fast the image is flipped. If I have a longer flip speed, the image would flip slower and a shorter flip speed would flip the image faster. I have is set so the image flips in one second.<br><br>-The 'backface-visibility:hidden' tells the computer to hide the text so that it isn't seen behind the image until it is flipped. If it wasn't there, you would see a mirrored version of the text behing the image. When it is flipped, the image would be seen behind the text. <br><br>-The next set of code under z-index' is the part of the same code from earlier but for Firefox 31 as some code may not work for all systems. <br><br>-The next set of code is for the text side of the image. This part of the code tells the text to flip back to the image if the mouse doesn't hover on the image.<br><br>-The last set of code is to make the box that is around the text and the images. It is solid black and 3px thick. The padding on the top gives space between the top of the text or image and the border.</p>"
;});



calcButton.addEventListener("click", function(){
    displayText.innerHTML = " Calculator infomation under construction.";
    displayInfo.innerHTML = "";
});