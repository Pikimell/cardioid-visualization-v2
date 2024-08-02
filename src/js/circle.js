class Circle {
  constructor() {
    this.centerCircle = { X: 0, Y: 0 };
    this.endPointVector = { X: 0, Y: 0 };
    this.lengthVector = 50;
    this.stepVector = 10;
    this.angle = 0;
    this.isDrawingCircle = false;
    this.isDrawingVector = false;
    this.penWidth = 2;
    this.color = [255, 0, 0];
  }

  drawPoint() {
    if (this.isDrawingCircle) {
      fill(0);
      stroke(0);
      ellipse(
        this.endPointVector.X - this.penWidth / 2,
        this.endPointVector.Y - this.penWidth / 2,
        this.penWidth,
        this.penWidth
      );
    }
  }

  drawVector() {
    if (this.isDrawingVector) {
      stroke(...this.color);
      line(
        this.centerCircle.X,
        this.centerCircle.Y,
        this.endPointVector.X,
        this.endPointVector.Y
      );
    }
  }

  setAngle(angleTurn) {
    const radian = (Math.PI * 2) / 360;
    let angle = radian * angleTurn;
    this.endPointVector = {
      X: this.lengthVector * Math.sin(angle) + this.centerCircle.X,
      Y: this.lengthVector * Math.cos(angle) + this.centerCircle.Y,
    };
  }

  nextStep() {
    this.angle += this.stepVector;

    if (this.angle > 360) this.angle -= 360;
    if (this.angle < 0) this.angle += 360;

    this.setAngle(this.angle);
  }

  drawCircle() {
    for (let i = 0; i < 360; i++) {
      this.drawPoint();
      this.drawVector();
      this.nextStep();
    }
  }
}
