var canvas;

//screen text
var greeting;
var forestTitle;
var bridgeTitle;
var viewTitle;
var pathTitle;
var deathByWolfTitle;
var deathBySharkTitle;
var deathByGoatTitle;

//stuff
var firstOption;
var secondOption;
var userName;

//Different Deaths
var deathByWolf;
var deathByShark;
var deathByGoat;

//the almighty
var restart;
var restartButton;
var onceAgain;
var onceAgainLink;
//buttons
var exploreButton;
var goDeeperButton;
var crossBridgeButton;
var goSwimButton;
var continueButton;
var hearANoiseButton;
var topButton;
var snowButton;
var cometButton;

//inputs
var nameInput;

//animation variables
var comet;
var shootingStar;

//boolean
var snow;
var makeSnow;

var ifDeathByWolf;
var ifDeathByShark;
var ifDeathByGoat;

//animation
var snowingAnim;
var shootingStarAnim;

//snow variable
var arraySize = 1000;
var circleSize = 5;
var x = [arraySize];
var y = [arraySize]; 
var ySpeed = [arraySize];

//shooting star variables
var xpos =0;
var ypos = 0;
var xpeed = 8;
var ypeed = 1;

//Scene
var wakeUpInForest;
var crossingBridge;
var View;
var Path;
var nightLights;

//image
var Bridge;
var Forest;
var MountainView;
var MountainPath;
var MountianTop;
//murders
var wolf;
var shark;
var goat;

function preload() {

Bridge = loadImage(".//image/bridge.jpg");
Forest = loadImage(".//image/forest.jpg");
MountainView = loadImage(".//image/mountainView.jpg");
MountainPath = loadImage(".//image/mountainPath.jpg");
MountainTop = loadImage(".//image/mountainTop.jpg");
wolf = loadImage(".//image/wolf.jpg");
shark = loadImage(".//image/shark.jpg");
goat = loadImage(".//image/goat.jpg");
}

function setup(){

canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0,0);
canvas.style("z-index", "-1");
for ( var i = 0; i < arraySize; i++) {

    ySpeed[i] = random(1, 5);
    x[i] = random(26, width-26);
    y[i] = random(26, height-26);
}

asking();
}
function draw(){
if(snow == true){
snowingAnim();
}else if(comet == true){
shootingStarAnim();
}



}

function windowResized(){
canvas = createCanvas(windowWidth, windowHeight);

}