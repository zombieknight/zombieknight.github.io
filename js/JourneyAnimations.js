function snowingAnim(){

	background(MountainView);
	for (var i = 0; i < arraySize; i++) {
    y[i] = y[i]+ySpeed[i];

    ellipse(x[i], y[i], circleSize, circleSize);
     if (y[i] >= height) {
      y[i] = circleSize/2 ;
      x[i] = random(circleSize/2, width-circleSize/2);
    }

    if (y[i] <= -3) {
      y[i] = height-circleSize/2;
      x[i] = random(circleSize/2, width-circleSize/2);
    }
    if (x[i] == mouseX && y[i] == mouseY) {

      circleSize += random(0, 10);
    }
	
}
}

function shootingStarAnim(){
	background(MountainTop);
    ypos = ypos+ypeed;
    xpos = xpos+xpeed;

    ellipse(xpos, ypos, circleSize, circleSize);
    if(xpos == windowWidth){
    	xpos = 0;
    	ypos = random(0,windowHeight);
    }
    if(ypos == windowHeight){
    	ypos = 0;
    }
}

