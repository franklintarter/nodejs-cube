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

  // solveCross() {
  //   while (!this.front.isCrossSolved()) {}
  // }

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
  turnFront() {
    this.rotateRight();
    this.turnLeft();
    this.rotateRight();
    this.rotateRight();
    this.rotateRight();
  }

  // need to test these
  turnBack() {
    this.rotateRight();
    this.rotateRight();
    this.rotateRight();
    this.turnLeft();
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

    // this.down.transpose();

    // const right = this.front.takeDown();
    // const back = this.right.takeDown();
    // const left = this.back.takeDown();
    // const front = this.left.takeDown();

    // this.right.setDown(right);
    // this.left.setDown(left);
    // this.back.setDown(back);
    // this.front.setDown(front);
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

    // this.up.transpose();
    // const right = this.back.takeUp();
    // const back = this.left.takeUp();
    // const left = this.front.takeUp();
    // const front = this.right.takeUp();

    // this.right.setUp(right);
    // this.left.setUp(left);
    // this.back.setUp(back);
    // this.front.setUp(front);
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
    // this.left.transpose();

    // const front = this.up.takeLeft();
    // const up = this.back.takeRight();
    // const back = this.down.takeLeft();
    // const down = this.front.takeLeft();

    // this.front.setLeft(front);
    // this.up.setLeft(up);
    // this.back.setRight(back);
    // this.down.setLeft(down);
  }

  // TODO turn front turn back

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
    // this.up.transpose();
    // this.up.transpose();
    // this.down.transpose();
    // this.down.transpose();
    this.front = front;
    this.up = up;
    this.down = down;
    this.back = back;
    // this.back.transpose();
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
