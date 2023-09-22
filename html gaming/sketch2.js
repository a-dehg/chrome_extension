//p5.play function that shows up after clicking the button
/*const txt1 = document.getElementById('twithandleinput');
const btn1 = document.getElementById('button1');

function setup() {
	createCanvas(800, 400);
	new Sprite();
	this.lock = false;
}

function draw() {
	if (this.lock == true) {
		new Sprite();
	}
	
	background(255, 255, 255);
}

function fun1() {
	this.lock = true;
}

btn1.addEventListener('click', fun1());*/
const s = (sketch) => {

    let x = 100;
    let y = 100;

    sketch.setup = function() {
        sketch.createCanvas(600, 400);
        
    };

    sketch.draw = function() {
        sketch.background(0);
        sketch.fill(255);
        
        new sketch.Sprite();
        
    };
};

let myp5 = new p5(s);