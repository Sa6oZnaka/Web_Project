
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
	
	textSize(16);
	if(Btc_change > 0){
		fill(0, 205, 0);
	}else{
		fill(205, 0, 0);
	}
	text("Bitcoin: " + Btc_price + "$ (" + Btc_change + "%)", x1, 15);
	
	if(Eth_change > 0){
		fill(0, 255, 0);
	}else{
		fill(255, 0, 0);
	}
	text("Ethereum: " + Eth_price + "$ (" + Eth_change + "%)", x2, 15);

	x1 += speed;
	x2 += speed;

	if(x1 > width) x1 = 0;
	
	if(x2 > width) x2 = 0;
	
}
