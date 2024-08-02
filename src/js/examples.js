const examples = [
  {
    circles: [
      {
        stepVector: 1,
        lengthVector: 100,
        isDrawingCircle: false,
        isDrawingVector: false,
      },
      {
        stepVector: 1,
        lengthVector: 100,
        isDrawingCircle: true,
        isDrawingVector: true,
      },
      {
        stepVector: 1,
        lengthVector: 100,
        isDrawingCircle: true,
        isDrawingVector: true,
      },
    ],
    fps: 1,
    drawAnimation: true,
    clearCanvas: true,
  },
  {
    circles: [
      {
        stepVector: 1,
        lengthVector: 100,
        isDrawingCircle: false,
        isDrawingVector: false,
      },
      {
        stepVector: 1,
        lengthVector: 100,
        isDrawingCircle: false,
        isDrawingVector: false,
      },
      {
        stepVector: 1,
        lengthVector: 100,
        isDrawingCircle: false,
        isDrawingVector: true,
      },
    ],
    fps: 1,
    drawAnimation: true,
    clearCanvas: true,
  },
  {
    circles: [
      {
        stepVector: 1,
        lengthVector: 100,
        isDrawingCircle: false,
        isDrawingVector: false,
      },
      {
        stepVector: 1,
        lengthVector: 100,
        isDrawingCircle: false,
        isDrawingVector: true,
      },
    ],
    fps: 1,
    drawAnimation: true,
    clearCanvas: true,
  },
  {
    circles: [
      {
        stepVector: 1,
        lengthVector: 100,
        isDrawingCircle: false,
        isDrawingVector: false,
      },
      {
        stepVector: 1,
        lengthVector: 100,
        isDrawingCircle: true,
        isDrawingVector: false,
        penWidth: 4,
      },
    ],
    fps: 1,
    drawAnimation: true,
    clearCanvas: true,
  },
  {
    circles: [
      {
        stepVector: 1,
        lengthVector: 100,
        isDrawingCircle: false,
        isDrawingVector: false,
      },
      {
        stepVector: 1,
        lengthVector: 100,
        isDrawingCircle: false,
        isDrawingVector: true,
        color: [255, 255, 0],
      },
      {
        stepVector: 1,
        lengthVector: 100,
        isDrawingCircle: false,
        isDrawingVector: true,
        penWidth: 4,
        color: [255, 0, 0],
      },
    ],
    fps: 3,
    drawAnimation: true,
    clearCanvas: true,
  },
];

const exampleContainer = document.querySelector('.js-example');

function initExamples() {
  const markup = examples
    .map((el, i) => {
      return `<button class="btn" data-i="${i}">Example ${i + 1}</button>`;
    })
    .join('');

  exampleContainer.innerHTML = markup;
}

initExamples();

exampleContainer.addEventListener('click', onSelectExample);

function onSelectExample(e) {
  if (e.target === e.currentTarget) return;
  const index = e.target.dataset.i;
  const example = examples[index];
  circles = [];

  example.circles.forEach(el => {
    const circle = new Circle();

    circle.lengthVector = el.lengthVector || 100;
    circle.stepVector = el.stepVector || 1;
    circle.isDrawingCircle = el.isDrawingCircle || false;
    circle.isDrawingVector = el.isDrawingVector || false;
    circle.penWidth = el.penWidth || 1;
    circle.color = el.color || [255, 0, 0];

    circles.push(circle);
  });

  circles[0].centerCircle = {
    X: centerScreen.X,
    Y: centerScreen.Y,
  };
  options.drawAnimation = example.drawAnimation;
  options.clearCanvas = example.clearCanvas;
  FPS = example.fps || 1;
  refs.form.elements.index.setAttribute('max', circles.length);
}
