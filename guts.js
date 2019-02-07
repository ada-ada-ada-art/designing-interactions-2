var myCanvas,
	sliderOne, sliderTwo, sliderThree, sliderFour,
	headImg, heartImg, gutsImg, feetImg;

function setup() {
    myCanvas = createCanvas(400, 400);
    myCanvas.parent('main');

    sliderOne = select('.slider-input-one');
    sliderTwo = select('.slider-input-two');
    sliderThree = select('.slider-input-three');
    sliderFour = select('.slider-input-four');

    headImg = loadImage('img/head.png');
    heartImg = loadImage('img/heart.png');
    gutsImg = loadImage('img/guts.png');
    feetImg = loadImage('img/feet.png');

    // background(0);
    noStroke();
}

function draw() {

	fill(120, 120, 120);
	rect(0, 0, width, 100);
	image(headImg, width/2 - 50, 0, 100, 100);

	fill(100, 100, 100);
	rect(0, 100, width, 100);
	image(heartImg, width/2 - 50, 100, 100, 100);

	fill(80, 80, 80);
	rect(0, 200, width, 100);
	image(gutsImg, width/2 - 50, 200, 100, 100);

	fill(60, 60, 60);
	rect(0, 300, width, 100);
	image(feetImg, width/2 - 50, 300, 100, 100);

	mouseXDeg = constrain(map(mouseX, 0, 400, -90, 90), -90, 90);
	if(mouseY > 0 && mouseY < 100) {
		sliderOne.value(mouseX);
		sliderOne.style('transform', 'skew(' + mouseXDeg + 'deg)');
	}
	else if(mouseY > 100 && mouseY < 200) {
		sliderTwo.value(mouseX);
		sliderTwo.style('transform', 'skew(' + mouseXDeg + 'deg)');
	}
	else if(mouseY > 200 && mouseY < 300) {
		sliderThree.value(mouseX);
		sliderThree.style('transform', 'skew(' + mouseXDeg + 'deg)');
	}
	else if(mouseY > 300 && mouseY < 400) {
		sliderFour.value(mouseX);
		sliderFour.style('transform', 'skew(' + mouseXDeg + 'deg)');
	}
}