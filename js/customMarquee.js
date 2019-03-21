
var canvas;

let x1,
	x2;
const speed = 2;

function setup() {
  	canvas = createCanvas(window.innerWidth, 20);
 	canvas.position(0,0);

 	console.log(width);

 	x1 = 0;
 	x2 = innerWidth / 2;
}

function windowResized() {
    canvas = createCanvas(innerWidth , 20);
 	canvas.position(0,0);

 	x1 = 0;
 	x2 = innerWidth / 2;
}

function draw() {

  	background(0);
	
	fill(200);
  	textSize(16);
	text("Bitcoin: " + Btc_price + "$", x1, 15);
	fill(200);
	text("Ethereum: " + Eth_price + "$", x2, 15);
	
	x1 += speed;
	x2 += speed;

	if(x1 > width) x1 = 0;
	
	if(x2 > width) x2 = 0;
	
}
