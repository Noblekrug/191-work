function DaGraphics() {
    this.x = random(0, 1000);
    this.y = random(0, 600);
    this.size = random(5, 25);
    this.r = random(100, 255);
    this.b = random(0, 50);
    this.g = random(0, 50);
    this.speed = random (0.5, 5);

    this.display = function() {
      fill(this.r, this.b, this.g);
      noStroke();
      ellipse(this.x, this.y, this.size);
    };

    this.move = function() {
      this.y = this.y - this.speed;
      if (this.y <= 0 - this.size * 2){
        this.y = height + this.size * 2;
      }
      this.x = this.x - this.speed;
      if (this.x <= 0 - this.size){
        this.x = width + this.size;
      }


    };

}
