class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(otherVec) {
    let xVal = this.x + otherVec.x;
    let yVal = this.y + otherVec.y;
    return new Vec(xVal, yVal);
  }

  minus(otherVec) {
    let xVal = Math.abs(this.x - otherVec.x);
    let yVal = Math.abs(this.y - otherVec.y);
    return new Vec(xVal, yVal);
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}
