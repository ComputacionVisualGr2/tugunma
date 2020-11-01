let angle = 0;
let s1, s2, s3;

function setup(){
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(0, 15, 30);
  s1 = createSlider(0,200,0);
  s2 = createSlider(0,200,0);
  s3 = createSlider(0,10,0);
  s1.position(10,10);
  s2.position(10,30);
  s3.position(10,50);
}

function draw(){
  background(255);
  
  let x = width;
  let diag = s1.value(); //size of dot
  let num = s2.value(); //number of dots per line
  
  translate(width/2, height/2);
  for(let a = 0; a < 360; a += 22.5){
    rotate(radians(a));
    push();
    for(let i = 0; i < num; i++){
      fill(color(0,0,0));  
      scale(0.95);
      rotate(radians(angle));
      ellipse(x, 0, diag, diag);
    }  
    pop();
    push();
    for(let i = 0; i < num; i++){
      fill(color(0,0,0));
      scale(0.95);
      rotate(-radians(angle));
      ellipse(x, 0, diag, diag);
    }  
    pop();
  }
  angle += s3.value()/100;
}