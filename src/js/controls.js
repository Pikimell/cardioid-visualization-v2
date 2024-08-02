const refs = {
  activeBtn: document.querySelector('.js-btn[data-type="activate"]'),
  addBtn: document.querySelector('.js-btn[data-type="add"]'),
  resetBtn: document.querySelector('.js-btn[data-type="reset"]'),
  cleanerBtn: document.querySelector('.js-btn[data-type="cleaner"]'),
  cleanerCanvasBtn: document.querySelector('.js-btn[data-type="clear-canvas"]'),
  animationBtn: document.querySelector('.js-btn[data-type="animation"]'),
  updateBtn: document.querySelector('[data-update]'),
  removeBtn: document.querySelector('[data-remove]'),
  form: document.querySelector('js-form'),
};

refs.activeBtn.addEventListener('click', onActiveBtnClick);
refs.addBtn.addEventListener('click', onAddBtnClick);
refs.cleanerCanvasBtn.addEventListener('click', onClearCanvasClick);
refs.cleanerBtn.addEventListener('click', onClearBtnClick);

function onActiveBtnClick() {
  options.isActive = !options.isActive;
}

function onAddBtnClick() {
  const i = circles.push(new Circle()) - 1;
  circles[i].centerCircle = {
    X: centerScreen.X,
    Y: centerScreen.Y,
  };
  circles[i].stepVector = 2;
  circles[i].isDrawingCircle = true;
  // circles[i].isDrawingVector = true;
}

function onClearCanvasClick() {
  background(255);
}

function onClearBtnClick() {
  options.clearCanvas = !options.clearCanvas;
}
