let N;
let FN;
let A = 0.0;
var devoile = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(35);
  N=64;
  FN=0;
  A=1;
  noStroke();
  colorMode(HSB, 360, 255, 255);
}

function draw() {
  background(0, 0, 0);
  push();
  translate(width/2, height/2);
  if (devoile) {
    devoilement();
  }
  for (let i=0; i<N; i++) {
    rotate(TWO_PI/N);
    fill(255); //360*i/N,255,255
    ellipse(200*(1.1+A*cos(0.075*FN+PI*6*i/N)), 0, 20, 20);
  }
  pop();
  FN++;
}

function devoilement() {
  stroke(120);
  for (let i=0; i<N; i++) {
    rotate(TWO_PI/N);  
    line(400, 0, 5, 0);
  }
}

function mousePressed() {
  devoile=!devoile;
}

function keyPressed() {
  devoile=!devoile;
}