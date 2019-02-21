var requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) { setTimeout (callback, 1000 / 30); };

var canvas = document.getElementById("canvas-id");
canvas.width = 1000;
canvas.height = 600;
var context = canvas.getContext("2d");

window.addEventListener("keydown", function (args) {  

    if(args.keyCode==32){
        console.log("Space pressed");
    }


}, false);

window.addEventListener("keyup", function (args) {  

}, false);

window.addEventListener("mousemove", function (args) {
 
}, false);

function update() { 

    setTimeout(update, 10); 
}
function draw() {   
    context.clearRect(0, 0, canvas.width, canvas.height); 
    context.globalAlpha = 1;  
    
    context.fillStyle = "#000FF0";
    context.fillRect(0,0,1000,700);
        
    context.fillStyle = "#0FF0FF";
    context.font = "20px Arial";
    context.fillText("Hello!" , 10, 20);
    
    requestAnimationFrame(draw);
}
update();   
draw(); 