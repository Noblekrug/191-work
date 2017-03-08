function setup() {
    createCanvas(windowWidth, windowHeight);
    background(230, 240,200);

}

function draw() {

    for(var i = 0; i < width/6; i++) {

    }

    drawPerson();

    if(true);
}


function drawPerson(){
    var pos_x = x;
    var pos_y = y;
    var person_width = 80;
    var person_height = 200;


    push();

    translate(pos_x, pos_y);

    rectMode(CENTER);
    fill(0,10,244);
    rect(0, 0, person_width * 0.5, person_height);

    ellipse(-person_width * 0.3, -person_height * 0.1, person_width*0.1, person_width*0.1);
    ellipse(person_width * 0.3, person_height * 0.1, person_width*0.1, person_width*0.1);

    pop();
}
