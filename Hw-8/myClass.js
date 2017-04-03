function DaGraphics() {
    this.x = randon(0, 500);
    this.y = random(0, 500);
    this.size = random(2, 25);
    this.r = random(100, 255);
    this.b = random(0, 100);
    this.g = random(100, 255);
    this.speed = random (0.5, 5);

    this.display = function() {
      fill(this.r, this.b, this.g);
      quad(this.x, this.y, this.x, this.y, this.x, this.y, this.x, this.y);
    };

    this.move = function() {
      this.x = this.x - this.speed;
      if (this.x <= 0 - this.size * 0.2){
        this.x = width + this.size * 0.2;
      }
    };

}
