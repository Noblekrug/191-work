function setup() {
  createCanvas(600,700);



}

function draw() {

  var posX = 100
  var posY = 100

  var currFramerate = frameRate();
  text(currFramerate, 100, 100);
  ellipse(posX, posY, 30, 30);

}
