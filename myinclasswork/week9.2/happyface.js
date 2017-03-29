function Happyface(init_x, init_y, size,color){
    this.x = init_x;
    this.y = init_y;
    this.size = size;
    this.angle= 0;
    this.color= color;
    this.eye= {
      x: this.size * 0.25,
      y: this.size * -0.33,
      size: this.eye.size * random(0.05,0.3)
    };
    this.mouth = {
      width: this.x,
      height: this.y,

    }
}
Happyface.prototype.display = function () {
    push();
    translate(this.x, this.y);
    rotate(this.angle);

    fill(color);

    ellipse(-this.eye.x,this.eye.y,this.eye.size,this.eye.size);
    ellipse(this.eye.x,this.eye.y,this.eye.size,this.eye.size);
}
