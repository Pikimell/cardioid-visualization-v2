const refs = {
  activeBtn: document.querySelector('.js-btn[data-type="activate"]'),
  addBtn: document.querySelector('.js-btn[data-type="add"]'),
  resetBtn: document.querySelector('.js-btn[data-type="reset"]'),
  cleanerBtn: document.querySelector('.js-btn[data-type="cleaner"]'),
  cleanerCanvasBtn: document.querySelector('.js-btn[data-type="clear-canvas"]'),
  animationBtn: document.querySelector('.js-btn[data-type="animation"]'),
  updateBtn: document.querySelector('[data-update]'),
  removeBtn: document.querySelector('[data-remove]'),
  form: document.querySelector('.js-form'),
  animationSpeed: document.querySelector('.js-animation-speed'),
};

refs.activeBtn.addEventListener('click', onActiveBtnClick);
refs.addBtn.addEventListener('click', onAddBtnClick);
refs.resetBtn.addEventListener('click', onResetBtnClick);
refs.animationBtn.addEventListener('click', onAnimationBtnClick);
refs.cleanerCanvasBtn.addEventListener('click', onClearCanvasClick);
refs.cleanerBtn.addEventListener('click', onClearBtnClick);
refs.updateBtn.addEventListener('click', onUpdateCircle);
refs.removeBtn.addEventListener('click', onRemoveClick);
refs.form.elements.index.addEventListener('input', onUpdateInfo);
refs.form.addEventListener('submit', e => e.preventDefault());

refs.animationSpeed.addEventListener('input', e => {
  const value = 30 - +e.target.value;
  FPS = value;
});

function onActiveBtnClick() {
  options.isActive = !options.isActive;
}

function onAddBtnClick() {
  const i = circles.push(new Circle()) - 1;
  circles[i].centerCircle = {
    X: centerScreen.X,
    Y: centerScreen.Y,
  };
  circles[i].stepVector = 1;
  circles[i].isDrawingCircle = false;
  circles[i].isDrawingVector = false;

  refs.form.index.setAttribute('max', circles.length);
}

function onClearCanvasClick() {
  background(255);
}

function onClearBtnClick() {
  options.clearCanvas = !options.clearCanvas;
}

function onRemoveClick(e) {
  const index = +refs.form.elements.index.value - 1;
  if (index >= circles.length) {
    return;
  }

  circles.splice(index, 1);
  refs.form.index.setAttribute('max', circles.length);
  refs.form.reset();
}

function onUpdateCircle(e) {
  const index = +refs.form.elements.index.value - 1;
  if (index >= circles.length) {
    return;
  }

  circles[index].stepVector = +refs.form.elements.speed.value;
  circles[index].lengthVector = +refs.form.elements.radius.value;
  circles[index].penWidth = +refs.form.elements.width.value;
  circles[index].isDrawingCircle = refs.form.elements.drawPoint.checked;
  circles[index].isDrawingVector = refs.form.elements.drawVector.checked;
  circles[index].color = hexToRgb(refs.form.elements.color.value);
  console.log(refs.form.elements.color.value);
}

function onUpdateInfo(e) {
  const index = +e.target.value - 1;
  if (index >= circles.length || !circles.length) {
    refs.form.reset();
    e.target.value = index + 1;
    return;
  }

  refs.form.elements.speed.value = circles[index].stepVector;
  refs.form.elements.radius.value = circles[index].lengthVector;
  refs.form.elements.width.value = circles[index].penWidth;
  refs.form.elements.drawPoint.checked = circles[index].isDrawingCircle;
  refs.form.elements.drawVector.checked = circles[index].isDrawingVector;
  refs.form.elements.color.value = rgbToHex(circles[index].color);
}

function onAnimationBtnClick() {
  options.drawAnimation = !options.drawAnimation;
}

function onResetBtnClick() {}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : [0, 0, 0];
}
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
}
function rgbToHex([r, g, b]) {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
