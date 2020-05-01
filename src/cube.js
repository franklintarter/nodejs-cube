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
  }

  turnRightPrime() {
    this.turnRight();
    this.turnRight();
    this.turnRight();
  }

  turnFront() {
    this.rotateDown();
    this.rotateDown();
    this.turnBack();
    this.rotateDown();
    this.rotateDown();
  }

  turnFrontPrime() {
    this.turnFront();
    this.turnFront();
    this.turnFront();
  }

  turnBack() {
    this.rotateRight();
    this.turnLeft();
    this.rotateLeft();
  }

  turnBackPrime() {
    this.turnBack();
    this.turnBack();
    this.turnBack();
  }

  turnDown() {
    this.rotateUp();
    this.rotateRight();
    this.turnRight();
    this.rotateLeft();
    this.rotateDown();
  }

  turnDownPrime() {
    this.turnDown();
    this.turnDown();
    this.turnDown();
  }

  turnUp() {
    this.rotateDown();
    this.rotateRight();
    this.turnRight();
    this.rotateLeft();
    this.rotateUp();
  }

  turnUpPrime() {
    this.turnUp();
    this.turnUp();
    this.turnUp();
  }

  turnLeft() {
    this.rotateRight();
    this.rotateRight();
    this.turnRight();
    this.rotateRight();
    this.rotateRight();
  }

  turnLeftPrime() {
    this.turnLeft();
    this.turnLeft();
    this.turnLeft();
  }

  rotateLeft() {
    this.rotateRight();
    this.rotateRight();
    this.rotateRight();
  }

  rotateRight() {
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
  }

  rotateUp() {
    this.rotateDown();
    this.rotateDown();
    this.rotateDown();
  }

  rotateDown() {
    this.back.flipY();

    const front = this.up;
    const down = this.front;
    const up = this.back;
    const back = this.down;

    this.front = front;
    this.up = up;
    this.down = down;
    this.back = back;

    this.back.flipY();
    this.left.transpose();
    this.right.reverseTranspose();
  }

  orientRight() {
    this.rotateLeft();
    this.rotateDown();
    this.rotateRight();
  }

  orientLeft() {
    this.rotateRight();
    this.rotateDown();
    this.rotateLeft();
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
        this.rotateDown();
        break;
      default:
    }
  }

  randomize() {
    const moves = all(1000);
    moves.forEach((m) => this.move(m));
  }
};
