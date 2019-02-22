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

window.addEventListener("keydown", function (args) {

    if(args.keyCode == 32 && ! Activated) {
        Activated = true;
    }


}, false);

window.addEventListener("keyup", function (args) {

}, false);

window.addEventListener("mousemove", function (args) {

}, false);

function update() {
    
    if(Activated && Transparancy<Transcparacy_Time){
        Transparancy = Transparancy + Transparancy*0.02 + 0.2;
    }
    
    // https://thumbs.gfycat.com/SeveralBelatedEarthworm-size_restricted.gif
    
    setTimeout(update, 10);
}
function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.globalAlpha = 1;

    if(Activated){
        
        if(Transparancy < Transcparacy_Time){
            for(var i=0;i<Transparancy;i++){
                context.fillStyle = "rgba(255, 255, 255, 0.01)";
                context.fillRect(0,0,1000,700);
            }
        }else{
            context.fillStyle = "rgb(255, 255, 255)";
            context.fillRect(0,0,1000,700);
        }
            
    }else{
        //context.fillStyle = "#00FFF0";
        //context.fillRect(0,0,1000,700);

        context.fillStyle = "#000";
        context.font = "20px Arial";
        context.fillText("Hello world There will be credits here!", 10, 20);
    }

    

    requestAnimationFrame(draw);
}
update();
draw();