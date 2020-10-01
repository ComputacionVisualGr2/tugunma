import React from "react";
 
export default (props) => {
    let x = 50;
    const y = 50;
 
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(500, 500).parent(canvasParentRef);
    };
 
    const draw = (p5) => {
        p5.background(0);
        p5.ellipse(x, y, 70, 70);
        x++;
    };
 
    if (typeof window !== 'undefined') {

      const Sketch =  import('react-p5');

      return <Sketch setup={setup} draw={draw}/>

    }
    return <div>No hay ventana</div>;
};