var mic;

function setup() {
    createCanvas(400, 400);
    mic = new p5.AudioIn()
    mic.start();
}

function draw() {
    micLevel = mic.getLevel();
    print(micLevel);
    ellipse(width / 2, height / 2, micLevel, micLevel);
}