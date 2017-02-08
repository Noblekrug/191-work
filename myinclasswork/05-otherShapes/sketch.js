function setup() {
    createCanvas(500, 500);
    background(255, 100, 200);

    translate(250,250);
    push();
    fill(0,255,0);
    ellipse(0, 0, 300, 120);
    pop();

    push();
    ellipse(-30,-30,20,20)
    ellipse(30,-30,20,20)


    push();
    line(-75, 10, 75, 10);
    pop();

    push();
    fill(0,255,0);
    triangle(0,-30,0,10,30,20);
    pop();



}

function draw() {

}
