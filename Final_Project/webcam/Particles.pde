class Particle {
  float x;
  float y;
  
  float vx;
  float vy;

  Particle() {
    x = width/2;
    y = height/2;
    float a = random(TWO_PI);
    float speed = random(1,2);
    vx = cos(a)*speed;
    vy = sin(a)*speed;
  }

  void display() {
    noStroke();
    
    color c = webcam.get(int(x),int(y));
    if(key == 'c'){
    fill(c*2,25);
    }
    else if(key == 'z'){
    fill(c*4,25);
    }
    else if(key == 'x'){
    fill(c*6,25);
    }
    else if(key == 'v'){
    fill(c*3,25);
    }
    else if(key == 'b'){
    fill(c*5,25);
    }
    else if(key == 'n'){
    fill(c/2,25);
    }
    else if(key == 'm'){
    fill(c/4,25);
    }
    else if(key == 'a'){
    fill(c/6,25);
    }
    else if(key == 's'){
    fill(c/3,25);
    }
    else if(key == 'd'){
    fill(c/5,25);
    }
    else if(key == ' '){
    fill(c,25);
    }
    ellipse(x, y, 12, 12);
    
  }

  void move() {
    x = x + vx;//random(-5, 5);
    y = y + vy;//random(-5, 5);
    if (y < 0) {
      y = height;
    } 

    if (y > height) {
      y = 0;
    }
    if (x < 0) {
      x = width;
    } 

    if (x > width) {
      x = 0;
    }
  }
}
