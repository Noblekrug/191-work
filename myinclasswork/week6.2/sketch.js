button = {};


function setup() {

    createCanvas(800,600);
    background(255);


    button.x = width / 2;
    button.y = height / 2;
    button.width = 100;
    button.height = 50;
    button.color = color(20, 40, 60);
    button.text = "My Button!";

}

function draw() {
    background(255);

    if (mouseX >= button.x - button.width/2 && mouseX <= button.x + button.width/2 && mouseY >= button.y - button.height/2 && mouseY <= button.y + button.height/2) {
      background(0);
      }
    fill(button.color);
    rectMode(CENTER);
    rect(button.x,button.y,button.width,button.height);
    fill(255);
    textSize(20);
    text(button.text, button.x-45, button.y);

}
