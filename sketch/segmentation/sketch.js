var img;
var hist = new Array(256);
for(var k = 0; k < hist.length; k++){
  hist[k] = 0;
}
var colorSelected = 0;
var localExtremes = [];
var derivateHist = [];

function preload(){
  img = loadImage("data/sun set.png");
}

function setup(){
  createCanvas(1293, 1300); //1200, 650
  
  image(img, 0, 0);
  
  let p = height / 14;
  
  //botones
  fill(128, 128, 128);
  rect(1200, 0, 93, 93);
  fill(128, 0, 0);
  rect(1200, p, 93, 93);
  fill(0, 128, 0);
  rect(1200, 2 * p, 93, 93);
  fill(0, 0, 128);
  rect(1200, 3 * p, 93, 93);
  fill(128, 0, 128);
  rect(1200, 4 * p, 93, 93);
  fill(128, 128, 0);
  rect(1200, 5 * p, 93, 93);
  fill(0, 128, 128);
  rect(1200, 6 * p, 93, 93);
  
  // Calculate the histogram
  for (var i = 0; i < img.width; i++) {
    for (var j = 0; j < img.height; j++) {
      var bright = Math.floor(map(brightness(get(i, j)), 0, 100, 0, 255));
      hist[bright]++;
    }
  }
  
  // Find the largest value in the histogram
  let histMax = max(hist);
  
  derivateHist = discretDerivateVector(hist);
  
  for(var i = 0; i < derivateHist.length; i ++) {
    if(derivateHist[i] <= 2 && derivateHist[i] >= -2 && i != 0 && i != 255){
      localExtremes.push(i);
      console.log("f(" + i + ")=" + hist[i] + ", f'(" + i + ")=" + derivateHist[i]);
    }
  }
  image(img, 0, 650);
  // Draw half of the histogram (skip every second value)
  for (var i = 0; i < img.width; i += 1) {
    // Map i (from 0..img.width) to a location in the histogram (0..255)
    let which = Math.floor(map(i, 0, img.width, 0, 255));
    let y = Math.floor(map(hist[which], 0, histMax, height, img.height * 3 / 2));
    if(localExtremes.includes(which)){
      stroke(255, 0, 0);
    }else{
      stroke(255, 255, 255);
    }
    line(i, height, i, y);
  }
}

function draw(){
  //secton the image
  for (var i = 0; i < img.width; i++) {
    for (var j = 0; j < img.height; j++) {
      let bright = Math.floor(map(brightness(img.get(i, j)), 0, 100, 0, 255));
      set(i, j, brigthnessPick(localExtremes, colorSelected, bright));
    }
  }
  updatePixels();
  noLoop();
}

function mouseClicked(){
  if(mouseX > 1200){
    let squares = [];
    for(var i = 0; i< 7; i++){
      squares.push(Math.ceil(i * height / 14));
    }
    colorSelected = pickInterval(squares, mouseY, 0, height) - 1;
    console.log("picked color:", colorSelected);
    redraw();
  }
}

//funciones matematicas

function discretDerivateVector(curve){
  let derivateVector = new Array(curve.length);
  
  for(var i = 0; i < curve.length; i++){
    if(i == 0){
      derivateVector[i] = discreteDerivate(curve[i], 0, curve[i + 1], -1);
    }else if(i == curve.length-1){
      derivateVector[i] = discreteDerivate(curve[i], curve[i - 1], 0, 1);
    }else{
      derivateVector[i] = discreteDerivate(curve[i], curve[i - 1], curve[i + 1], 0);
    }
  }
  
  return derivateVector;
}

function discreteDerivate(x, xhl, xhr, type){
  let h = 1.0;
  
  if(type == -1){
    return (xhr - x) / h;
  }else if(type == 1){
    return (x - xhl) / h;
  }else if(type == 0){
    return (xhr - xhl) / (2 * h);
  }
  
  return 0;
}

function brigthnessPick(intervals, colorAspect, currentBright){
  let i = pickInterval(intervals, currentBright, 0, 255);
  
  if(colorAspect == 0){ //grey
    return color(255 * (i + 1) / (intervals.length + 1), 255 * (i + 1) / (intervals.length + 1), 255 * (i + 1) / (intervals.length + 1));
  }else if(colorAspect == 1){ //red
    return color(255 * (i + 1) / (intervals.length + 1), 0, 0);
  }else if(colorAspect == 2){ //green
    return color(0, 255 * (i + 1) / (intervals.length + 1), 0);
  }else if(colorAspect == 3){ //blue
    return color(0, 0, 255 * (i + 1) / (intervals.length + 1));
  }else if(colorAspect == 4){ //purple
    return color(255 * (i + 1) / (intervals.length + 1), 0, 255 * (i + 1) / (intervals.length + 1));
  }else if(colorAspect == 5){ //yellow
    return color(255 * (i + 1) / (intervals.length + 1), 255 * (i + 1) / (intervals.length + 1), 0);
  }else if(colorAspect == 6){ //indigo
    return color(0, 255 * (i + 1) / (intervals.length + 1), 255 * (i + 1) / (intervals.length + 1));
  }
  return color(255, 255, 255);
}

function pickInterval(intervals, value, min, max){
  var i = 0;
  for(; i <= intervals.length; i++){
    if(i == 0){
      if(isBetween(min, intervals[i], value)){
        return i;
      }
     }else if(i == intervals.length){
       if(isBetween(intervals[i - 1], max, value)){
         return i;
       }
     }else{
       if(isBetween(intervals[i - 1], intervals[i], value)){
         return i;
       }
     }
  }
  return i;
}

function isBetween(min, max, value){
  if(min == 0 && value <= max){
    return true;
  }
  if(value > min && value <= max){
    return true;
  }
  
  return false;
}
