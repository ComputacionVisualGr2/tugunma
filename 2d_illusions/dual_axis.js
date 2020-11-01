function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(35)
	background(10);
}
var t
var a,b,c
var aa,bb,cc
var l1,l2,r1,r2
var radX,radY
function draw() {
	radX=width/2
	radY=height/4
	background(15);
	t=frameCount*0.02

	//stroke(cos(2*t)*255,cos(2*t+2/5*PI)*255,cos(2*t+4/5*PI)*255)
    stroke(255)
  
	a=cos(t)*radX
	b=cos(t+PI*2/3)*radX
	c=cos(t+PI*4/3)*radX

	l1=cos(t*1.5+PI/2)*radY
	l2=cos(t*1.5+PI*3/2)*radY

	r1=cos(t*1.5)*radY
	r2=cos(t*1.5+PI)*radY

	aa=cos(t+PI*1/3)*radX
	bb=cos(t+PI*2/3+PI*1/3)*radX
	cc=cos(t+PI*4/3+PI*1/3)*radX
	
	strokeWeight(35)
	noFill();
	beginShape();
	curveVertex(width/2+a, height/2);
	curveVertex(width/2+a, height/2);
	curveVertex(width/2+cc, height/2+radY);
	curveVertex(width/2+c, height/2);
	curveVertex(width/2+bb, height/2-radY);
	curveVertex(width/2+b, height/2);
	curveVertex(width/2+aa, height/2+radY);
	curveVertex(width/2+a, height/2);
	curveVertex(width/2+cc, height/2-radY);
	curveVertex(width/2+c, height/2);
	curveVertex(width/2+bb, height/2+radY);
	curveVertex(width/2+b, height/2);
	curveVertex(width/2+aa, height/2-radY);
	curveVertex(width/2+a, height/2);
	curveVertex(width/2+cc, height/2+radY);
	endShape();

}