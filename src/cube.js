const Face = require("./face");
const { c, moves } = require("./constants");
const { all } = require("./random-moves");

module.exports = class Cube {
  constructor() {
    this.front = new Face(c.W);
    this.left = new Face(c.G);
    this.back = new Face(c.Y);
    this.right = new Face(c.B);
    this.up = new Face(c.O);
    this.down = new Face(c.R);
  }

  positionUnsolvedCross() {
    while (this.front.right !== this.front.color) {
      this.turnFront();
    }
  }

  isSolved() {
    return (
      this.front.isSolved() &&
      this.left.isSolved() &&
      this.right.isSolved() &&
      this.up.isSolved() &&
      this.back.isSolved() &&
      this.down.isSolved()
    );
  }

  // need to test these
  // needs work
  turnFront() {
    this.rotateRight();
    this.rotateRight();
    this.rotateRight();
    this.turnLeft();
    this.rotateRight();
  }

  // need to test these
  // need work
  turnBack() {
    this.rotateRight();
    this.turnLeft();
    this.rotateRight();
    this.rotateRight();
    this.rotateRight();
  }

  turnDown() {
    this.rotate();
    this.rotate();
    this.rotate();
    this.rotateRight();
    this.turnRight();
    this.rotateRight();
    this.rotateRight();
    this.rotateRight();
    this.rotate();
  }

  turnUp() {
    this.rotate();
    this.rotateRight();
    this.turnRight();
    this.rotateRight();
    this.rotateRight();
    this.rotateRight();
    this.rotate();
    this.rotate();
    this.rotate();
  }

  turnRight() {
    this.right.transpose();

    const front = this.down.takeRight();
    const up = this.front.takeRight();
    const back = this.up.takeRight();
    const down = this.back.takeLeft();

    this.front.setRight(front);
    this.up.setRight(up);
    this.back.setLeft(back);
    this.down.setRight(down);
  }

  turnLeft() {
    this.rotateRight();
    this.rotateRight();
    this.turnRight();
    this.rotateRight();
    this.rotateRight();
  }

  rotateRight() {
    const right = this.front;
    const front = this.left;
    const left = this.back;
    const back = this.right;
    this.front = front;
    this.left = left;
    this.back = back;
    this.right = right;
    this.up.reverseTranspose();
    this.down.transpose();
  }

  rotate() {
    this.back.transpose();
    this.back.transpose();
    const front = this.up;
    const down = this.front;
    const up = this.back;
    const back = this.down;
    this.front = front;
    this.up = up;
    this.down = down;
    this.back = back;
    this.left.transpose();
    this.right.reverseTranspose();
    this.back.transpose();
    this.back.transpose();
  }

  move(move) {
    switch (move) {
      case moves.TURN_DOWN:
        this.turnDown();
        break;
      case moves.TURN_UP:
        this.turnUp();
        break;
      case moves.TURN_RIGHT:
        this.turnRight();
        break;
      case moves.TURN_LEFT:
        this.turnLeft();
        break;
      case moves.ROTATE_RIGHT:
        this.rotateRight();
        break;
      case moves.ROTATE:
        this.rotate();
        break;
      default:
    }
  }

  randomize() {
    const moves = all(1000);
    moves.forEach((m) => this.move(m));
  }
};
