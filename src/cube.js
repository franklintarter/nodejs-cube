const Face = require("./face");
const { c, moves } = require("./constants");
const randomMoves = require("./random-moves");

module.exports = class Cube {
  constructor() {
    this.front = new Face(c.W);
    this.left = new Face(c.G);
    this.back = new Face(c.Y);
    this.right = new Face(c.B);
    this.top = new Face(c.O);
    this.bottom = new Face(c.R);
  }

  isSolved() {
    return (
      this.front.isSolved() &&
      this.left.isSolved() &&
      this.right.isSolved() &&
      this.top.isSolved() &&
      this.back.isSolved() &&
      this.bottom.isSolved()
    );
  }

  spinBottom() {
    this.bottom.transpose();

    const right = this.front.takeBottom();
    const back = this.right.takeBottom();
    const left = this.back.takeBottom();
    const front = this.left.takeBottom();

    this.right.setBottom(right);
    this.left.setBottom(left);
    this.back.setBottom(back);
    this.front.setBottom(front);
  }

  spinTop() {
    this.top.reverseTranspose();

    const right = this.front.takeTop();
    const back = this.right.takeTop();
    const left = this.back.takeTop();
    const front = this.left.takeTop();

    this.right.setTop(right);
    this.left.setTop(left);
    this.back.setTop(back);
    this.front.setTop(front);
  }

  spinRight() {
    this.right.reverseTranspose();

    const front = this.top.takeRight();
    const top = this.back.takeRight();
    const back = this.bottom.takeRight();
    const bottom = this.front.takeRight();

    this.front.setRight(front);
    this.top.setRight(top);
    this.back.setRight(back);
    this.bottom.setRight(bottom);
  }

  spinLeft() {
    this.left.transpose();

    const front = this.top.takeLeft();
    const top = this.back.takeLeft();
    const back = this.bottom.takeLeft();
    const bottom = this.front.takeLeft();

    this.front.setLeft(front);
    this.top.setLeft(top);
    this.back.setLeft(back);
    this.bottom.setLeft(bottom);
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
    this.top.reverseTranspose();
    this.bottom.transpose();
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
    this.left.transpose();
    this.right.reverseTranspose();
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

  randomize() {
    const moves = randomMoves(1000);
    moves.forEach((m) => this.move(m));
  }
};
