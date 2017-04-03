var dagraphics = [];




function setup() {
createCanvas(1000,600);
for (var i = 0; i  < 500; i++){
  dagraphics[i] = new DaGraphics();
}
}

function draw() {
background(255);
for (var i = 0; i < 500; i++){
  dagraphics[i].move();
  dagraphics[i].display();
}
}
