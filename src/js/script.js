const width = Math.round(window.innerWidth * 0.8);
const height = Math.round(window.innerHeight * 0.8);
const centerScreen = { X: width / 2, Y: height / 2 };

let circles = [];
let FPS = 1;
let frame = 0;

const options = {
  drawAnimation: true,
  clearCanvas: true,
  isActive: true,
};

function setup() {
  createCanvas(width, height);
  initialCircles();
  background(255);
}

function draw() {
  frame++;
  frame %= FPS;

  if (frame === 0 && options.isActive) {
    if (options.clearCanvas) background(255);

    if (options.drawAnimation) drawAnimation();
    else drawCircles();
  }
}

function initialCircles() {
  let lengthArray = 1;

  for (let i = 0; i < lengthArray; i++) {
    circles.push(new Circle());
    circles[i].centerCircle = {
      X: centerScreen.X,
      Y: centerScreen.Y,
    };
    circles[i].stepVector = 1;
  }

  circles[0].lengthVector = 100;

  circles[circles.length - 1].isDrawingCircle = true;
  circles[circles.length - 1].isDrawingVector = true;
}

function drawCircles() {
  for (let i = 0; i < circles.length; i++) {
    if (i > 0) {
      circles[i].centerCircle = {
        X: circles[i - 1].endPointVector.X,
        Y: circles[i - 1].endPointVector.Y,
      };
    }

    circles[i].drawVector();
    circles[i].drawPoint();
    circles[i].nextStep();
  }
}

function drawAnimation() {
  for (let j = 0; j < 360; j++) {
    for (let i = 0; i < circles.length; i++) {
      if (i > 0) {
        circles[i].centerCircle = {
          X: circles[i - 1].endPointVector.X,
          Y: circles[i - 1].endPointVector.Y,
        };
      }

      circles[i].drawVector();
      circles[i].drawPoint();
      circles[i].nextStep();
    }
  }
  newStep(circles.length - 1);
}

function newStep(index) {
  const min = -10;
  const max = 10;
  const step = 1;

  if (index < 1) index = 0;

  circles[index].stepVector -= step;
  if (circles[index].stepVector <= min) {
    circles[index].stepVector = max;
    if (index > 0) newStep(index - 1);
  }
}
