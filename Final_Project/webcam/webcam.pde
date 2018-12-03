import  processing.video.*;
Capture webcam;
Particle[] particles;
int stages;

void setup() {
  size(displayWidth, displayHeight);
  webcam = new Capture(this, displayWidth, displayHeight, Capture.list()[0]);
  particles = new Particle[2000];
  for (int i = 0; i< particles.length; i++) {
    particles[i] = new Particle();
  }
  webcam.start();
  stages = 1;
}
void captureEvent(Capture webcam) {
  webcam.read(); 
  loadPixels();
}

void webCam() {
  for (int i = 0; i < particles.length; i++) {
    particles[i].display();
    particles[i].move();
  }
}
void draw() {
  webCam();
}
