console.log('erm');
//this is currently just in the bottom of random pages


const s = (sketch) => {

    let x = 100;
    let y = 100;

    sketch.setup = () => {
        sketch.createCanvas(200, 200);
    };

    sketch.draw = () => {
        sketch.background(0);
        sketch.fill(255);
        sketch.rect(x, y, 50, 50);

        let s = 'landon is gay';
        sketch.text(s, 10, 10, 70, 80);
    };
};

let myp5 = new p5(s);