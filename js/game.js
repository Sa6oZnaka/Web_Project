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
var MyX = 100, 
    MyY = 50;
    MySize = 30;

var GravityPower = 0;
var deleted = 0;

var arr=[];
var InitalObjectsSpeed = 1;
var ObjectsSpeed = InitalObjectsSpeed;
var ObjectCount = 500;

var Score = 0,
    MaxScore = Score;

class Rectangle {
    constructor(PosX ,PosY, SizeX, SizeY) {
        this.x = PosX;
        this.y = PosY;
        this.SizeY = SizeY;
        this.SizeX = SizeX;
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

    Colision(){
        if(MyX + MySize > this.x && MyY + MySize > this.y && MyX < this.x + this.SizeX && MyY < this.y + this.SizeY){
            return true;
        }
        return false;
    }

}

for(var i=0;i < ObjectCount - deleted;i++){

    let x = i*100;
    let y = Math.floor(Math.random() * canvas.height);
    
    var square = new Rectangle(x, y, 10, 100);

    arr[i] = square;
    
}

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
            Score+=ObjectsSpeed / 40;
            GravityPower+=ObjectsSpeed / 10;
            ObjectsSpeed+=0.001;

            if(MaxScore < Score){
                MaxScore = Score;
            }

            if(SpacePressed){
                if(MyY > 0){
                    MyY-=GravityPower;
                    if(MyY < 0) MyY = 0; 
                }  
            }else{
                if(MyY < canvas.height - MySize){
                    MyY+=GravityPower;
                    if(MyY + MySize > canvas.width) MyY = canvas.width - MySize; 
                }
            }
            
            for(var i=0;i<ObjectCount - deleted;i++){
                arr[i].update(ObjectsSpeed);
                if( arr[i].Colision() ){
                    arr.splice(i , 1);
                    deleted ++;
                    Score = 0;
                    ObjectsSpeed = InitalObjectsSpeed;
                    console.log("detetced!!!");
                }
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
            context.fillRect(MyX,MyY,MySize,MySize);
            
            for(var i=0;i<ObjectCount - deleted;i++){
                context.fillStyle = "rgb(46, 74, 88)";
                context.fillRect(arr[i].x,arr[i].y,arr[i].SizeX,arr[i].SizeY);
            }

            context.fillStyle = "#ffff00";
            context.font = "20px Times New Roman";
            context.fillText("Score: " + Math.floor(Score) + "  Max Score: " + Math.floor(MaxScore), 10, 20);
            
        }
        
    }else{

        context.fillStyle = "#ffffff";
        context.font = "20px Times New Roman";
        context.fillText("Hello world There will be credits here!", 10, 20);
    }

    

    requestAnimationFrame(draw);
}
update();
draw();