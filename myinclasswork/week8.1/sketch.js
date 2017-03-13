var bg_color;

var dude;


function setup() {
    createCanvas(800,600);
    bg_color = (34,131,157);
    background(bg_color);

    var size_w = random(20,80);
    var size_h = random(20,80);

  dude = {
      loc_x: random(width),
      loc_y: random(height),
      body_color: color(147,56,143),
      size_w: random(40),
      size_h: random(60),
      eye_x: size_w * 0.165,
      eye_y: size_h * 0.33 * -1,
      eye_size: size_w * 0.25,
}

function draw() {
    console.log(this.eye_x,this.eye_y,this.eye_size);
    push();

    translate(loc_x,loc_y);
    fill(body_color);

    ellipse(0,0,size_w,size_h);

    // eyes
    ellipse(-this.eye_x,this.eye_y,this.eye_size,this.eye_size);
    ellipse(this.eye_x,this.eye_y,this.eye_size,this.eye_size);


    pop();
  }


}
