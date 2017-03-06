var x = 500;

var y = 250;

var d = 50;

var state = false;



function setup() {

  createCanvas(1000, 500);

}



function draw() {

  if (state) {



    background(10,0,0,10);



    fill(255,255,255);

    ellipse(random(0, width), random(0, height), 3, 3);



    fill(255,235,54);

    ellipse(random(0, width), random(0, height), 5, 2);

    push;
    textSize(50);
    text("Night Time",385,400);
    pop;


  } else {


    background(245,116,69);

    textSize(50);
    text("Day Time",400,100)
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
