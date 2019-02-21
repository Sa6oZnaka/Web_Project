var requestAnimationFrame = window.requestAnimationFrame ||
		window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function (callback) { setTimeout (callback, 1000 / 30); };

var canvas = document.getElementById("canvas-id");
canvas.width = 1000;
canvas.height = 600;
var context = canvas.getContext("2d");

var mouseX,mouseY;  

window.addEventListener("keydown", function (args) {	

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

    context.fillStyle = "#FFF";
    context.fillRect(0,0,canvas.width,canvas.height);

    requestAnimationFrame(draw);	
}
update();	
draw();	