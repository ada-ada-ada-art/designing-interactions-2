var mic, body, btn;
var bodyColor = 0;

function setup() {
    createCanvas(400, 400);
    mic = new p5.AudioIn()
    mic.start();
    body = select('body');
    btn = select('button');
}

function draw() {
    micLevel = mic.getLevel();
    if(micLevel > 0.1) {
    	console.log(micLevel + " / " + bodyColor);
    	if(bodyColor < 80) {
    		console.log(bodyColor);
    		bodyColor++;
    	}
    }

    btn.mouseClicked(function() {
    	bodyColor = 0;
    });

    body.style('background', 'hsl(25, 47%, ' + bodyColor + '%)');
}