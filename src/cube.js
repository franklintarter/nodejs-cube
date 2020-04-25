require("./array-methods");

const { c, moves } = require("./constants");

const createFace = (color) => [
  color,
  color,
  color,
  color,
  color,
  color,
  color,
  color,
  color,
];

module.exports = class Cube {
  constructor() {
    this.front = createFace(c.W);
    this.left = createFace(c.G);
    this.back = createFace(c.Y);
    this.right = createFace(c.B);
    this.top = createFace(c.O);
    this.bottom = createFace(c.R);
  }

  spinBottom() {
    this.bottom = this.bottom.transpose();

    const right = this.front.takeBottom();
    const back = this.right.takeBottom();
    const left = this.back.takeBottom();
    const front = this.left.takeBottom();

    this.right = this.right.setBottom(right);
    this.left = this.left.setBottom(left);
    this.back = this.back.setBottom(back);
    this.front = this.front.setBottom(front);
  }

  spinTop() {
    this.top = this.top.transpose();

    const right = this.front.takeTop();
    const back = this.right.takeTop();
    const left = this.back.takeTop();
    const front = this.left.takeTop();

    this.right = this.right.setTop(right);
    this.left = this.left.setTop(left);
    this.back = this.back.setTop(back);
    this.front = this.front.setTop(front);
  }

  spinRight() {
    this.right = this.right.transpose();

    const front = this.bottom.takeRight();
    const top = this.front.takeRight();
    const back = this.top.takeRight();
    const bottom = this.back.takeRight();

    this.front = this.front.setRight(front);
    this.top = this.top.setRight(top);
    this.back = this.back.setRight(back);
    this.bottom = this.bottom.setRight(bottom);
  }

  turn() {
    const right = this.front;
    const front = this.left;
    const left = this.back;
    const back = this.right;
    this.front = front;
    this.left = left;
    this.back = back;
    this.right = right;
    this.top = this.top.reverseTranspose();
    this.bottom = this.bottom.transpose();
  }

  flip() {
    const front = this.top;
    const bottom = this.front;
    const top = this.back;
    const back = this.bottom;
    this.front = front;
    this.top = top;
    this.bottom = bottom;
    this.back = back;
    this.left = this.left.reverseTranspose();
    this.right = this.right.transpose();
  }

  move(move) {
    switch (move) {
      case moves.TURN:
        this.turn();
        break;
      case moves.FLIP:
        this.flip();
        break;
      case moves.SPIN_BOTTOM:
        this.spinBottom();
        break;
      case moves.SPIN_TOP:
        this.spinTop();
        break;
      default:
    }
  }
};
