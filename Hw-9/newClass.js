function DaDots(init_x, init_y, size) {
  this.loc = {

       x: init_x,

       y: init_y

   };

   this.delta = {

       x: 1,

       y: 1

   };

   this.size = random(5, 25);

   this.r = random(100, 255);
   this.b = random(0, 50);
   this.g = random(0, 50);

   this.edge = this.size * 0.5;

   this.delta = {

       x: map(this.size, 40, 150, 10, 0.5) * map(round(random(1, 2)), 1, 2, -1, 1),

       y: 0,
     };

  }



  DaDots.prototype.display = function() {

    push();

    fill(this.r, this.b, this.g);
    noStroke();
    ellipse(this.x, this.y, this.size);

    pop();

};


DaDots.prototype.move = function() {





    this.loc.x += this.delta.x;

    this.loc.y += this.delta.y;






    if (this.loc.x >= width -75) {

        this.loc.x = width-75 - this.delta.x;

        this.delta.x *= -1;

    } else if (this.loc.x <= 0) {

        this.loc.x = 1 + this.delta.x;

        this.delta.x *= -1;

    }



    if (this.loc.y >= height) {

        this.loc.y = height / this.delta.y;

        this.delta.x *= 1;

    } else if (this.loc.y <= 0) {

        this.loc.y = 1 + this.delta.y;

        this.delta.y *= -1;

    }


    if (this.loc.y + this.edge >= height) {

        this.loc.y = height - this.edge;

        this.delta.y *= -1;

    }

};

DaDots.prototype.collisionCheck = function(dadotsArr, myIdx) {

    var maxDist, distance, otherDots;





    for (var i = 0; i < dadotsArr.length; i++) {



        var collision = false;



        otherDaDots = dadotsArr[i];



        if (i !== myIdx) {

            distance = dist(this.loc.x, this.loc.y, otherDaDots.loc.x, otherDaDots.loc.y);

            maxDist = this.edge + otherDaDots.edge;



            if (distance <= maxDist) {

                collision = true;

            }



            if (collision) {

                this.loc.x *= -10;

                this.delta.y *= -1;

            }



        }



    }

};
