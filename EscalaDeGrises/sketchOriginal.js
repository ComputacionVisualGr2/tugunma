function preload() {
    // load the original image
    img = loadImage("gota.jpg"); 
  }
  function setup() {
    // create canvas
    createCanvas(1420, 400);
    // noLoop() makes draw() run only once, not in a loop
    noLoop();
  }
  function draw() {
    // draw promRGB_img image
    image(img, 0, 0);
  
  }