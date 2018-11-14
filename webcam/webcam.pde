import  processing.video.*;
Capture webcam;
color trackingColor;
float threshold =150;
float matchX = 0;
float matchY = 0;
float triggerX = 200;
float triggerY = 200;

void setup() {
  size(640, 360);
  webcam = new Capture(this, 640, 360, Capture.list()[0]);
  webcam.start();

  printArray(Capture.list());
  trackingColor = color(#FEFF00);
}
void captureEvent(Capture webcam) {
  webcam.read(); 
  loadPixels();
}
int counter;
void mousePressed() {
  if (mouseX < width/2 && mouseY <height/2) {
    tint(30, 110, 0);
  }
  if (mouseX > width/2 && mouseY <height/2) {
    tint(0, 200, 150);
  }
  if (mouseX > width/2 && mouseY > height/2) {
    tint(153, 0, 204);
  }
  if (mouseX < width/2 && mouseY > height/2) {
    tint(204, 153, 0);
  }
}

  void draw() {
    //scale(-1, 1);
    //image(webcam, webcam.width, 0);
    image(webcam, 0, 0);


    for (int x =0; x < webcam.width; x++) {
      for (int y = 0; y < webcam.height; y++) {     

        int loc = x + y * webcam.width;
        color currentColor = webcam.pixels[loc];
        float r1 = red(currentColor);
        float g1 = green(currentColor);
        float b1 = blue(currentColor);

        float r2 = red(trackingColor);
        float g2 = green(trackingColor);
        float b2 = blue(trackingColor);

        float colorDiff = dist(r1, g1, b1, r2, g2, b2);

        if (colorDiff < threshold) {
          matchX = x;
          matchY = y;
          counter++;
        }
      }
    }
    if (counter > 0) {
      fill(trackingColor);
      ellipse(matchX, matchY, 40, 40);
    }

    filter(THRESHOLD, matchX/640);
    textSize(20);

    if (matchY < height/2) {
      filter(INVERT);
      textSize(20);
    }
    if(key == 'c'){
      saveFrame();
    }
    if(mousePressed == false){
     noTint(); 
    }
  }
