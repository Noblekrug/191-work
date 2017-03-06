var x = 500;

var y = 250;

var d = 50;

var state = false;

var fr = 15;

function setup() {

  createCanvas(1000, 500);
  frameRate(fr);
}



function draw() {

  if (state) {



    background(10,0,0,10);

    push();
    fill(67,250,201);
    frameRate;
    ellipse(random(0, width), random(0, height), 1, 6);
    pop();

    push();
    fill(255,255,255);
    frameRate;
    ellipse(random(0, width), random(0, height), 3, 3);
    pop();

    push;
    fill(255,235,54);
    frameRate;
    ellipse(random(0, width), random(0, height), 5, 2);
    pop;

    push;
    textSize(50);
    text("Good Night",375,400);
    pop;


  } else {


    background(245,116,69);

    textSize(50);
    text("Good Evening",350,100)
  }

  ellipse(x, y, d, d);

  fill(250,32,32);

  strokeWeight(0);
}



function mousePressed() {

  if (dist(mouseX, mouseY, x, y) < d/2) {

    state = !state;

  }

}
