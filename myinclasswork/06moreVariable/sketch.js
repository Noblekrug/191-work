

function setup() {
      createCanvas(800,800);
      background(200);

      translate(400,400)
      myFirstVar = 70;
      ellipse(0,0,myFirstVar,myFirstVar);



}

function draw() {
      myFirstVar = myFirstVar * 0.5;
      ellipse(0,0,myFirstVar,myFirstVar)

}
