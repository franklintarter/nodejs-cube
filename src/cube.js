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

  turnFront() {
    this.rotate();
    this.rotate();
    this.turnBack();
    this.rotate();
    this.rotate();
  }

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

  turnUpPrime() {
    this.rotate();
    this.rotateRight();
    this.turnRightPrime();
    this.rotateRight();
    this.rotateRight();
    this.rotateRight();
    this.rotate();
    this.rotate();
    this.rotate();

    // this.rotate();
    // this.rotateRight();
    // this.turnRightPrime();
    // this.rotateRight();
    // this.rotateRight();
    // this.rotateRight();
    // this.rotate();
    // this.rotate();
    // this.rotate();
  }

  turnRightPrime() {
    this.turnRight();
    this.turnRight();
    this.turnRight();
    // this.right.transpose();

    // const back = this.down.takeRight();
    // const down = this.front.takeRight();
    // const front = this.up.takeRight();
    // const up = this.back.takeLeft();

    // this.front.setRight(front);
    // this.up.setRight(up);
    // this.back.setLeft(back);
    // this.down.setRight(down);
    // this.down.setRight({ up: down.down, center: down.center, down: down.up });
  }

  turnRight() {
    this.right.transpose();

    const front = this.down.takeRight();
    const up = this.front.takeRight();
    const back = this.up.takeRight();
    const down = this.back.takeRight();

    this.front.setRight(front);
    this.up.setRight(up);
    this.back.setRight({ up: back.down, center: back.center, down: back.up });
    this.down.setRight({ up: down.down, center: down.center, down: down.up });
    // this.down.setRight(down);
  }

  turnLeft() {
    this.rotateRight();
    this.rotateRight();
    this.turnRight();
    this.rotateRight();
    this.rotateRight();
  }

  // investigate something off?
  rotateRight() {
    // this.back.transpose();
    // this.back.transpose();

    // this.back.transpose();
    // this.back.transpose();
    // this.back.unFlip();
    this.back.flipX();

    const right = this.front;
    const front = this.left;
    const left = this.back;
    const back = this.right;

    this.front = front;
    this.left = left;
    this.back = back;
    this.right = right;

    this.back.flipX();

    this.up.reverseTranspose();
    this.down.transpose();
    // this.back.transpose();
    // this.back.transpose();
  }

  rotate() {
    // this.back.transpose();
    // this.back.transpose();
    // this.back.transpose();
    // this.back.transpose();

    // this.back.transpose();
    // this.back.transpose();
    // this.down.transpose();
    // this.back.unFlip();
    this.back.flipY();

    const front = this.up;
    const down = this.front;
    const up = this.back;
    const back = this.down;

    this.front = front;
    this.up = up;
    this.down = down;
    this.back = back;

    // this.back.transpose();
    this.back.flipY();
    // this.up.transpose();

    // this.up.transpose();
    // this.up.transpose();
    this.left.transpose();
    this.right.reverseTranspose();
    // this.back.transpose();
    // this.back.transpose();
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
