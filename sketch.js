var hr,min,sec;

function setup() {
  createCanvas(800,400);
  hr= hour();
  min= minute();
  sec= second();
}

function draw() {
  background(255,255,255); 
  
  angleMode(DEGREES);
  hrAngle = map(hr,0,60,0,360);
  minAngle = map(min,0,60,0,360);
  secAngle = map(sec,0,60,0,360);

  push();
  rotate(secAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(400,200,100,0);
  pop();

  push();
  rotate(minAngle);
  stroke("purple");
  strokeWeight(9);
  line(400,200,120,0);
  pop();

  push();
  rotate(hrAngle);
  stroke("green");
  strokeWeight(9);
  line(400,200,80,0);
  pop();

  drawSprites();
}