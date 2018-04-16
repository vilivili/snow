var img;
let bubbles = [];

function preload(){
  img = loadImage('imgs/snow man.jpg');
}

function setup() {
createCanvas(windowWidth,windowHeight);

}

function mouseClicked(){
let r = random(10,30);
let b = new Bubble(mouseX,mouseY, r);
bubbles.push(b);

}



function draw() {
  imageMode(CENTER);
  image(img, windowWidth/2, windowHeight/2, windowHeight, windowHeight);


  for(let i = 0; i< bubbles.length; i++){
bubbles[i].move();
bubbles[i].show();

  }
}

class Bubble{
constructor(x,y,r){
this.x = x;
this.y = y;
this.r = r;

}

move(){

  this.y = this.y+1;

}

show(){
noStroke();
fill(255);
ellipse(this.x, this.y, this.r, this.r);
}
}

function windowResized() {
  createCanvas(windowWidth,windowHeight);
}
