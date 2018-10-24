var x = [];
var y = [];
var xSpeed = [];
var ySpeed = [];

var astros;

function preload(){
	loadJSON("http://api.open-notify.org/astros.json",astroData);
}

function astroData(data){
	astros = data;
	print(astros);

}
function setup(){

createCanvas = (windowWidth,windowHeight);

for(var i=0; i<astros.number;i++){
	x[i] = random(width);
	y[i] = radnom(height);
	xSpeed = random(-2,2);
	ySpeed = random(-2,2);
	}
}


function draw(){
	backgroun(0);
	fill(255);

	if(astros){
		for(var i=0; i<astros.number;i++){
		ellipse(x[i],y[i],20,20);
		}
	}
}