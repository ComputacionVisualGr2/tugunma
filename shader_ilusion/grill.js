var herrman = false; //scintillating

function setup() {
  let black = color(0, 0, 0);

  createCanvas(640, 640);
  background(black);
}

function draw() {
  let grey =color(128, 128, 128);
  let white = color(255, 255, 255);
  let black = color(0, 0, 0);
  
  strokeWeight(10);
  if(herrman){
    stroke(white);
  }else{
    stroke(grey);
  }
  //se dibujan las filas de la grilla
  for(var i = 0; i < 16; i++){
    line(20 + (i * 40), 0, 20 + (i * 40), width);
  }
  //se dibujan las columnas de la grilla
  for(var i = 0; i < 16; i++){
    line(0, 20 + (i * 40), height, 20 + (i * 40));
  }
  
  noStroke();
  if(!herrman){
    //se dibujan círculos blancos
    fill(white);
    for(var i = 0; i < 16; i++){
      for(var j = 0; j < 16; j++){
        ellipse(20 + (i * 40), 20 + (j * 40), 10, 10);
      }
    }
  }
}

function mousePressed() {
  herrman = !herrman;
}