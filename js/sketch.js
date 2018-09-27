function setup() {
  // put setup code here
 
  createCanvas(windowWidth,windowHeight);
  background(120);
}

function draw() {
	
	stroke(0,255,0);
	strokeWeight(30);
  ellipse(400,500,mouseX,mouseY);
  if(mouseIsPressed){
  	fill(0,0,255);
  }else{
  	fill(255,0,0);
  }

}

function windowResize(){
	resizeCanvas(windowWidth,windowHeight);
	background(120);
}