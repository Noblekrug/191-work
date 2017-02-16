function setup() {
  createCanvas(700,700)
  background(0,0,250)



  push();
  fill(245,205,95)
  ellipse(250,490,50,50)
  pop();

  push();
  fill(245,205,95)
  ellipse(450,490,50,50)
  pop();

  push();
  translate(-35, -20)
  fill(65,45,1)
  rect(250,300,50,200)
  pop();

  push();
  translate(-15,-20)
  fill(65,45,1)
  rect(450,300,50,200)
  pop();

  push();
  fill(65,41,1)
  translate(213,205)
  rect(50,50,175,250,20)
  pop();

  push();
  translate(0, 55)
  fill(245,205,95)
  triangle(350,25,300,200,400,200)
  pop();

  push();
  translate(213,430)
  fill(41,142,196)
  rect(50,50,175,250)
  pop();

  push();
  stroke(0,0,250)
  strokeWeight(9)
  line(350,530,350,700)
  pop();

  push();
  translate(300,100)
  ellipse(50,50,200,200)
  pop();

  push();
  translate(0,55)
  fill(25,186,13)
  triangle(350, 400, 300, 200, 400, 200)
  pop();


  push();
  fill(245,205,95)
  translate(300,100);
  arc(50,50,200,200,119,280, CHORD);
  pop();

  push();
  translate(230,60)
  stroke(25,186,13)
  strokeWeight(4)
  line(30,50,210,50)
  pop();

  push();
  translate(230,60)
  stroke(25,186,13)
  strokeWeight(12)
  line(42,30,197,30)
  pop();

  push();
  translate(250,80)
  ellipse(50,50,30,30)
  pop();

  push();
  translate(350,80)
  ellipse(50,50,30,30)
  pop();

  push();
  translate(250,80)
  fill(15,108,186)
  ellipse(50,50,15,15)
  pop();

  push();
  translate(350,80)
  fill(15,108,186)
  ellipse(50,50,15,15)
  pop();

  push();
  translate(400,180)
  rotate(PI)
  arc(50,50,120,120,280,119,CHORD)
  pop();

  push();
  line(350,152,350,189)
  pop();

  push();
  line(370,152,370,186)
  pop();

  push();
  line(330,152,330,186)
  pop();

  push();
  line(310,152,310,175)
  pop();

  push();
  line(390,152,390,173)
  pop();









}


function draw() {

}
