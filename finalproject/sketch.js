var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 7;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 6;
var dy = -6;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 10;
var brickColumnCount = 6;
var brickWidth = 32;
var brickHeight = 10;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var score = 0;
var lives = 5;
var bricks = [];
for(c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}
// you can play the game with either the mouse or the arrow keys. Arrow keys move the paddle at a fixed speed, but the paddle follow the mouse at any speed.
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);
//paddle moves when the keys are held down, rather than keep moving if they are pressed.
function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}
//if the keys are not pressed, the paddle doesnt move.
function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}
//paddle follow the mouse
function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth/2;
    }
}
//detect collisions and track points
function collisionDetection() {
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            if(b.status == 1) {
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++;
                    // if the score is equal to 60 you win
                    if(score == brickRowCount*brickColumnCount) {
                        alert("You win! PLAY IT AGAIN!!!");
                        document.location.reload();
                    }
                }
            }
        }
    }
}
// here's your simple ball
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#ffb300";
    ctx.fill();
    ctx.closePath();
}
//here's your simple paddle
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#ffb300";
    ctx.fill();
    ctx.closePath();
}
//heres your simple bricks
function drawBricks() {
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
            if(bricks[c][r].status == 1) {
                var brickX = (r*(brickWidth+brickPadding))+brickOffsetLeft;
                var brickY = (c*(brickHeight+brickPadding))+brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "#ffb300";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}
//here are the functions for the score and lives counters, I cant get them to load the font type I asked for here, so for some reason they are defaulted to Ariel.
function drawScore() {
    ctx.font = "16px Aurora Cn Bt";
    ctx.fillStyle = "#ffb300";
    ctx.fillText("Score: "+score, 8, 20);
}
function drawLives() {
    ctx.font = "16px Aurora Cn Bt";
    ctx.fillStyle = "#ffb300";
    ctx.fillText("Lives: "+lives, canvas.width-65, 20);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    drawScore();
    drawLives();
    collisionDetection();
    //gotta go fast
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy < ballRadius) {
        dy = -dy;
    }
    else if(y + dy > canvas.height-ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }
        else {
            lives--;
            if(!lives) {
              // if the ball passes the paddle and you have no lives, game over promt shows up.
                alert("THATS GAME, SUCKA");
                document.location.reload();
            }
            else {
                x = canvas.width/2;
                y = canvas.height-30;
                dx = 6;
                dy = -6;
                paddleX = (canvas.width-paddleWidth)/2;
                // paddle returns to center of canvas if ball passes with lives.
            }
        }
    }
// paddle speed
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 15;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 15;
    }

    x += dx;
    y += dy;
    requestAnimationFrame(draw);
}

draw();
