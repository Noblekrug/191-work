var dagraphics = [];




function setup() {
createCanvas(500,500);
for (var i = 0; i = < 500; i++){
  dagraphics[i] = new DaGraphics();
}
}

function draw() {
background(255);
for (var i = 0; i = < 500; i++){
  dagraphics[i].move();
  dagraphics[i].display();
}
}
