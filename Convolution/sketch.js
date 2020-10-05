let img;
let matrixsize = 3;
let val = 0;

const sharping = [ [ -1, -1, -1 ],
                   [ -1,  9, -1 ],
                   [ -1, -1, -1 ] ]; 

const second_sharping = [[0, -1, 0],
                         [-1, 5, -1],
                         [0, -1, 0]];

const edge_detection = [[-1, -1, -1],
                        [-1, 8, -1],
                        [-1, -1, -1]];

const second_edge_detection = [[-0.5, -1, -0.5],
                               [-1, 7, -1],
                               [-0.5, -1, -0.5] ];

let g = 1/16;
const guassian_blur = [[g, 2*g, g],
                 [2*g, 4*g, 2*g],
                 [g, 2*g, g]];

let b = 1/9;
const box_blur = [[b, b, b],
                  [b, b, b],
                  [b, b, b]];

const sobel = [[-1, 0, 1], 
               [-2, 0, 2], 
               [-1, 0, 1]];

const second_sobel = [[-1.5, -3, -1.5],
                      [0, 0, 0],
                      [1.5, 3, 1.5]];

function preload() {
  img = loadImage("Convolution/cow.jpg");
  noLoop();
}

function setup() {
  createCanvas(735, 386);
  img.loadPixels();
  pixelDensity(1);
}

function draw() {
  loadPixels();
  for (let x = 0; x < img.width; x++) {
    for (let y = 0; y < img.height; y++ ) {
      let c;
      if(val == 0){
        c = convolution(x, y, sharping, matrixsize, img);
      }else if(val == 1){
        c = convolution(x, y, second_sharping, matrixsize, img);
      }else if(val == 2){
        c = convolution(x, y, edge_detection, matrixsize, img);
      }else if(val == 3){
        c = convolution(x, y, second_edge_detection, matrixsize, img);
      }else if(val == 4){
        c = convolution(x, y, guassian_blur, matrixsize, img);
      }else if(val == 5){
        c = convolution(x, y, box_blur, matrixsize, img);
      }else if(val == 6){
        c = convolution(x, y, sobel, matrixsize, img);
      }else{
        c = convolution(x, y, second_sobel, matrixsize, img);
      }
      
      let loc = (x + y*img.width) * 4;
      pixels[loc] = red(c);
      pixels[loc + 1] = green(c);
      pixels[loc + 2] = blue(c);
      pixels[loc + 3] = alpha(c);
    }
  }
  updatePixels();
}

function mousePressed() {
  val++;
  if(val > 7){
    val = 0;
  }
  console.log(val);
}

function convolution(x, y, matrix, matrixsize, img, gaussian) {
  let rtotal = 0.0;
  let gtotal = 0.0;
  let btotal = 0.0;
  const offset = Math.floor(matrixsize / 2);
  for (let i = 0; i < matrixsize; i++){
    for (let j = 0; j < matrixsize; j++){
      const xloc = (x + i - offset);
      const yloc = (y + j - offset); 
      let loc = (xloc + img.width * yloc) * 4;
      loc = constrain(loc, 0 , img.pixels.length - 1);
      rtotal += (img.pixels[loc]) * matrix[i][j];
      gtotal += (img.pixels[loc + 1]) * matrix[i][j];
      btotal += (img.pixels[loc + 2]) * matrix[i][j];  
      
    }
  }
  rtotal = constrain(rtotal, 0, 255);
  gtotal = constrain(gtotal, 0, 255);
  btotal = constrain(btotal, 0, 255);
  
  return color(rtotal, gtotal, btotal);
} 