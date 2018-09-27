var canvas;

//screen text
var greeting;
var forestTitle;
var bridgeTitle;
var viewTitle;
var pathTitle;
var topTitle;

//stuff
var firstOption;
var secondOption;
var userName;

//button
var exploreButton;
var goButton;
var continueButton;
var topButton;
var snowButton;
//inputs
var nameInput;

//animation variables
var comet;
var shootingStar;
//boolean
var snowingAnim;
var makeSnow;
var snow;



var arraySize = 1000;
var circleSize = 6;
var x;
var y; 
var xSpeed;
var ySpeed;
//Scene
var wakeUpInForest;
var crossingBridge;
var View;
var Path;
var nightLights;

//image
var Bridge;
var Eyes;
var Forest;
var MountainView;
var MountainPath;
var MountianTop;


function preload() {

Bridge = loadImage(".//image/bridge.jpg");
Eyes = loadImage(".//image/eyes.jpg");
Forest = loadImage(".//image/forest.jpg");
MountainView = loadImage(".//image/mountainView.jpg");
MountainPath = loadImage(".//image/mountainPath.jpg");
MountainTop = loadImage(".//image/Mountaintop.jpg");
}

function setup(){

canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0,0);
canvas.style("z-index", "-1");
asking();
}





function draw(){
if(snow == true){
snowingAnim();
}else if(comet == true){
shootingStar();
}



}

function windowResized(){
canvas = createCanvas(windowWidth, windowHeight);

}