var location1=10;
var location2=10;

var starArr = [[5,0][7,11][0,4][10,4][3,10]];


function setup() {
createCanvas(windowWidth,windowHeight);
background(18,82,109);
frameRate(12);

}

function draw() {
var returnlocation = randomstick(location1,location2);
console.log(returnlocation);
background(18,82,109,15);
location1 = returnlocation[0];
location2 = returnlocation[1];
}

function randomstick(x1,y1) {
//var x1=random(0,width);
var x2=random(0,width);
//var y1=random(0,height);
var y2=random(0,height);


strokeWeight(12);
stroke(random(255),random(255),random(255));

line(x1,y1,x2,y2);

return [x2,y2];
}
