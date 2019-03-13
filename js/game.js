var requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame ||
function (callback) {
    setTimeout (callback, 1000 / 30);
};

var canvas = document.getElementById("canvas-id");
canvas.width = 1000;
canvas.height = 600;
var context = canvas.getContext("2d");

//==========================//
var Activated = false;

var Transparancy = 0;
var Transcparacy_Time = 120;

var SpacePressed = false;
var MyX = 100, MyY = 50;
var GravityPower = 0;

var arr=[];
var ObjectsSpeed = 1;
var ObjectCount = 200;

class Rectangle {
  constructor(PosX ,PosY) {
    this.x = PosX;
    this.y = PosY;
  }
 
  get area() {
    return this.calcArea();
  }

  update(ObjectsSpeed){
      this.x -= ObjectsSpeed;
  }
    
  calcArea() {
    return this.x * this.y;
  }
}

for(var i=0;i<ObjectCount;i++){

    let x = i*100;
    let y = Math.floor(Math.random() * canvas.height);
    
    var square = new Rectangle(x, y);

    arr[i] = square;
    
}
    
    
console.log(arr[1].area); // 100


window.addEventListener("keydown", function (args) {

    if(args.keyCode == 32) {
        if(! Activated){
            Activated = true;
        }else{
            if(GravityPower > 0 && ! SpacePressed){
                GravityPower = 0;
            }
            SpacePressed = true;
        }
    }
    
    
}, false);

window.addEventListener("keyup", function (args) {

    if(args.keyCode == 32){
        if(SpacePressed && GravityPower > 0){
            GravityPower = 0;
        }
        SpacePressed = false;
    }
    
}, false);

window.addEventListener("mousemove", function (args) {

}, false);

function update() {
    
    if(Activated){
        if(Transparancy<Transcparacy_Time){
            Transparancy = Transparancy + Transparancy*0.02 + 0.2;
        }else{
            GravityPower+=0.1;
            if(SpacePressed){
                MyY-=GravityPower;  
                
            }else{
                MyY+=GravityPower;
            }
            
            for(var i=0;i<ObjectCount;i++){
                arr[i].update(ObjectsSpeed);
            }
            
            
        }
    }
    
    setTimeout(update, 10);
}
function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.globalAlpha = 1;

    if(Activated){
        
        if(Transparancy < Transcparacy_Time){
            for(var i=0;i<Transparancy;i++){
                context.fillStyle = "rgba(255, 255, 255, 0.01)";
                context.fillRect(0,0,canvas.width,canvas.height);
            }
        }else{
            context.fillStyle = "rgb(255, 255, 255)";
            context.fillRect(0,0,canvas.width,canvas.height);
            
            context.fillStyle = "rgb(255, 0, 0)";
            context.fillRect(MyX,MyY,10,10);
            
            for(var i=0;i<ObjectCount;i++){
                context.fillStyle = "rgb(46, 74, 88)";
                context.fillRect(arr[i].x,arr[i].y,10,100);
            }
            
        }
            
        
        
        
        
    }else{
        //context.fillStyle = "#00FFF0";
        //context.fillRect(0,0,1000,700);

        context.fillStyle = "#ffffff";
        context.font = "20px Times New Roman";
        context.fillText("Hello world There will be credits here!", 10, 20);
    }

    

    requestAnimationFrame(draw);
}
update();
draw();