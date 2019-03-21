
var canvas;

function setup() {
  	canvas = createCanvas(innerWidth , 20);
 	canvas.position(0,0);
}

var x1 = 0;
var x2;

console.log("hello?");


function windowResized() {
    canvas = createCanvas(innerWidth , 20);
 	canvas.position(0,0);
}

function draw() {
  background(0);
	
	fill(200);
	text("BITCOIN 4000$", x1, 14);
	text("ETHEREUM 150$", x2, 14);
	
	x1 += 1.74;
	if(x1 > width){
		x1 = 0;
	}
	
	x2 = x1 - width / 2;
	
}
