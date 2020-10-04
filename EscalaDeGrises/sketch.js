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
  
  // creates the image for promRGB, same dimensions of
  // img
  promRGB_img = createImage(img.width, img.height);

  // load its pixels
  promRGB_img.loadPixels();
  
  // loop that let us access to all pixels in the img
  for(let x = 0; x < img.width; x++){
    for(let y = 0; y < img.height; y++){
      
      // actual color (in RGB) of the pixel in (x,y)
      let s = img.get(x,y);
      
      // individual values of each color of that pixel
      let rojo = red(s);
      let verde = green(s);
      let azul = blue(s);
      
      // color value to grayscale using promRGB
      let promRGB = (rojo + verde + azul)/3;
      
      // set the pixel color to grayscale using promRGB
      // value
      promRGB_img.set(x,y,color(promRGB));
    }
  }
  
  // updatePixels() to write the changes on promRGB_img
  promRGB_img.updatePixels();
  
  // creates the image for LUMA, same dimensions of
  // img
  LUMA_image = createImage(img.width, img.height);

  // load its pixels
  LUMA_image.loadPixels();
  
  // loop that let us access to all pixels in the img
  for(let x = 0; x < img.width; x++){
    for(let y = 0; y < img.height; y++){
      
      // actual color (in RGB) of the pixel in (x,y)
      let s = img.get(x,y);
      
      // individual values of each color of that pixel
      let rojo = red(s);
      let verde = green(s);
      let azul = blue(s);
      
      // color value to grayscale using LUMA
      let LUMA = 0.299 * rojo + 0.587 * verde + 0.114 * azul;
      
      // set the pixel color to grayscale using LUMA
      // value
      LUMA_image.set(x,y,color(LUMA));
    }
  }
  
  // updatePixels() to write the changes on LUMA_image
  LUMA_image.updatePixels();
  
  // draw promRGB_img image
  image(promRGB_img, 0, 0);
  
  // draw LUMA_image at the right of the promRGB_img
  // image
  image(LUMA_image, img.width, 0);
}