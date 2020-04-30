module.exports = class Face {
  upLeft;
  up;
  upRight;
  left;
  center;
  right;
  downLeft;
  down;
  downRight;

  flippedX;
  flippedY;

  color;

  constructor(color) {
    this.upLeft = color;
    this.up = color;
    this.upRight = color;
    this.left = color;
    this.center = color;
    this.right = color;
    this.downLeft = color;
    this.down = color;
    this.downRight = color;
    this.color = color;
  }

  *[Symbol.iterator]() {
    yield this.upLeft;
    yield this.up;
    yield this.upRight;
    yield this.left;
    yield this.center;
    yield this.right;
    yield this.downLeft;
    yield this.down;
    yield this.downRight;
  }

  flipX() {
    const upLeft = this.upLeft;
    const left = this.left;
    const downLeft = this.downLeft;
    const upRight = this.upRight;
    const right = this.right;
    const downRight = this.downRight;
    this.upRight = upLeft;
    this.right = left;
    this.downRight = downLeft;
    this.downLeft = downRight;
    this.left = right;
    this.upLeft = upRight;
    this.flippedX = true;
  }

  flipY() {
    this.transpose();
    this.flipX();
    this.reverseTranspose();
    this.flippedX = false;
    this.flippedY = true;
  }

  unFlip() {
    if (this.flippedX) {
      this.flipX();
    }
    if (this.flippedY) {
      this.flipY();
    }
    this.flippedX = false;
    this.flippedY = false;
  }

  sides() {
    return [this.up, this.left, this.right, this.down];
  }

  isCrossSolved() {
    return this.sides().every((s) => s === this.color);
  }

  isSolved() {
    return this.toArray().every((p) => p === this.color);
  }

  toArray() {
    return Array.from(this);
  }

  setUp({ left, center, right }) {
    this.upLeft = left;
    this.up = center;
    this.upRight = right;
  }

  setDown({ left, center, right }) {
    this.downLeft = left;
    this.down = center;
    this.downRight = right;
  }

  setRight({ up, center, down }) {
    this.upRight = up;
    this.right = center;
    this.downRight = down;
  }

  setInvertedRight({ up, center, down }) {
    this.upLeft = down;
    this.left = center;
    this.downLeft = up;
  }

  setLeft({ up, center, down }) {
    this.upLeft = up;
    this.left = center;
    this.downLeft = down;
  }

  takeDown() {
    return {
      left: this.downLeft,
      center: this.down,
      right: this.downRight,
    };
  }

  takeUp() {
    return {
      left: this.upLeft,
      center: this.up,
      right: this.upRight,
    };
  }

  takeRight() {
    return {
      up: this.upRight,
      center: this.right,
      down: this.downRight,
    };
  }

  takeInvertedRight() {
    return {
      up: this.downRight,
      center: this.right,
      down: this.upRight,
    };
  }

  takeLeft() {
    return {
      up: this.upLeft,
      center: this.left,
      down: this.downLeft,
    };
  }

  transpose() {
    const nextUpLeft = this.downLeft;
    const nextUp = this.left;
    const nextUpRight = this.upLeft;
    const nextleft = this.down;
    const nextRight = this.up;
    const nextDownLeft = this.downRight;
    const nextDown = this.right;
    const nextDownRight = this.upRight;
    this.downLeft = nextDownLeft;
    this.left = nextleft;
    this.upLeft = nextUpLeft;
    this.down = nextDown;
    this.up = nextUp;
    this.downRight = nextDownRight;
    this.right = nextRight;
    this.upRight = nextUpRight;
  }

  reverseTranspose() {
    const nextUpLeft = this.upRight;
    const nextUp = this.right;
    const nextUpRight = this.downRight;
    const nextleft = this.up;
    const nextRight = this.down;
    const nextDownLeft = this.upLeft;
    const nextDown = this.left;
    const nextDownRight = this.downLeft;
    this.downLeft = nextDownLeft;
    this.left = nextleft;
    this.upLeft = nextUpLeft;
    this.down = nextDown;
    this.up = nextUp;
    this.downRight = nextDownRight;
    this.right = nextRight;
    this.upRight = nextUpRight;
  }
};
