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
var Transcparacy_Time = 300;

var SpacePressed = false;
var MyX = 100, 
    MyY = 50;
    MySize = 30;

var GravityPower = 0;
var deleted = 0;

var arr=[];
var InitalObjectsSpeed = 1;
var ObjectsSpeed = InitalObjectsSpeed;
var ObjectCount = 0;

var Score = 0,
    MaxScore = Score;

var background = new Image();
background.src = "./img/game_1.jpg";

var background_1 = 0,
    background_2 = canvas.width;

class Rectangle {
    constructor(PosX ,PosY, SizeX, SizeY) {
        this.x = PosX;
        this.y = PosY;
        this.SizeY = SizeY;
        this.SizeX = SizeX;
    }

    update(ObjectsSpeed){
        this.x -= ObjectsSpeed;
    }

    Colision(){
        if(MyX + MySize > this.x && MyY + MySize > this.y && MyX < this.x + this.SizeX && MyY < this.y + this.SizeY){
            return true;
        }
        return false;
    }

    get_x () {
        return this.x;
    }
    get_size_x () {
        return this.SizeX;
    }

};

function generate(n){
    for(var i = 0;i < n;i ++){
        let x;
        let y = Math.floor(Math.random() * (canvas.height - 100) );

        if(arr.length > 1){
            x = arr[arr.length-1].get_x() + 100;
        }else{
            x = canvas.width + 10;
        }
        
        var square = new Rectangle(x, y, 10, 100);

        arr[arr.length] = square;
        ObjectCount++;
    }
   
}

generate(10);

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

function update() {

    if(Activated){

        if(Transparancy<Transcparacy_Time){
            Transparancy = Transparancy + Transparancy*0.03 + 0.5;
        }else{

            // background
            background_1 -= ObjectsSpeed; 
            background_2 -= ObjectsSpeed;
            if(background_1 <= -canvas.width) background_1 = canvas.width;
            if(background_2 <= -canvas.width) background_2 = canvas.width;
            // fix the gaps
            if(background_1 < background_2){
                background_2 = background_1 + canvas.width;
            }else{
                background_1 = background_2 + canvas.width;
            }

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
                    if(MyY + MySize > canvas.height) MyY = canvas.height - MySize; 
                }
            }
            
            for(var i=0;i<ObjectCount - deleted;i++){
                arr[i].update(ObjectsSpeed);
                if( arr[i].Colision() ){
                    arr.splice(i , 1);
                    deleted ++;
                    generate(1);
                    Score = 0;
                    ObjectsSpeed = InitalObjectsSpeed;
                }

                if(arr[i].get_x() < -arr[i].get_size_x() ){
                    //console.log(ObjectCount - deleted);
                    arr.splice(i , 1);
                    deleted ++;
                    generate(1);
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

            context.drawImage(background, background_2, 0, canvas.width, canvas.height);
            context.drawImage(background, background_1, 0, canvas.width, canvas.height);

            context.fillStyle = "rgba(0, 0, 0, 0.5)";
            context.fillRect(0, 0, canvas.width, canvas.height);

            context.fillStyle = "#009900";
            context.fillRect(MyX,MyY,MySize,MySize);
            
            for(var i=0;i<ObjectCount - deleted;i++){
                context.fillStyle = "#990000";
                context.fillRect(arr[i].x,arr[i].y,arr[i].SizeX,arr[i].SizeY);
            }

            context.fillStyle = "#fff";
            context.font = "20px Times New Roman";
            context.fillText("Score: " + Math.floor(Score) + "  Max Score: " + Math.floor(MaxScore), 10, 20);
        }
        
    }else{

        context.fillStyle = "#ffffff";
        context.font = "20px Times New Roman";
        context.fillText("Website for Etehreum!", 10, 20);

        context.fillStyle = "#ffffff";
        context.font = "20px Times New Roman";
        context.fillText("Used technologies:", 30, 50);

        context.fillStyle = "#ffffff";
        context.font = "20px Times New Roman";
        context.fillText("- HTML -- Website", 60, 80);

        context.fillStyle = "#ffffff";
        context.font = "20px Times New Roman";
        context.fillText("- CSS -- Design", 60, 100);

        context.fillStyle = "#ffffff";
        context.font = "20px Times New Roman";
        context.fillText("- P5 JS -- Marquee", 60, 120);

        context.fillStyle = "#00ff00";
        context.font = "20px Times New Roman";
        context.fillText("- JavaScript -- This Press SPACE to see", 60, 140);
    }

    requestAnimationFrame(draw);
}
update();
draw();