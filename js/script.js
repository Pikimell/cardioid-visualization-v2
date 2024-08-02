const width = window.innerWidth - 10;
const height = window.innerHeight - 20;
const centerScreen = { X: width / 2, Y: height / 2 };

let circles = [];
let FPS = 0;

function setup() {
  createCanvas(width, height);
  initialCircles();
  background(255);
}

function draw() {
  FPS++;
  FPS %= 2;

  if (FPS === 0) {
    background(255);
    drawCircles();
    newStep(circles.length - 2);
  }
}

function initialCircles() {
  let lengthArray = 4;

  for (let i = 0; i < lengthArray; i++) {
    circles.push(new Circle());
    circles[i].centerCircle = {
      X: centerScreen.X,
      Y: centerScreen.Y,
    };
    circles[i].stepVector = 0;
  }

  circles[0].lengthVector = 100;

  circles[circles.length - 2].isDrawingCircle = true;
  circles[circles.length - 1].isDrawingCircle = true;
  circles[circles.length - 1].isDrawingVector = true;
}

function drawCircles() {
  circles[0].nextStep();
  circles[0].drawVector();
  circles[0].drawCircle();

  for (let j = 0; j < 360; j++) {
    for (let i = 0; i < circles.length; i++) {
      circles[i].nextStep();

      if (i > 0) {
        circles[i].centerCircle = {
          X: circles[i - 1].endPointVector.X,
          Y: circles[i - 1].endPointVector.Y,
        };
      }

      circles[i].drawVector();
      circles[i].drawCircle();
    }
  }
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
