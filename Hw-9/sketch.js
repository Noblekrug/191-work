var dadots = [];








function setup() {
  createCanvas(1000,600);
  for (var i = 0; i  < 500; i++){
    dadots[i] = new DaDots();

  
  }

}

function draw() {
  background(255);
  for (var i = 0; i < 500; i++) {

         dadots[i].display();

         dadots[i].move();

         dadots[i].collisionCheck(dadots, i);

     }
}
