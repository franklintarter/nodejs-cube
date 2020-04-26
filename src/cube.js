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

  solveCross() {
    while (!this.front.isCrossSolved()) {}
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

  turnDown() {
    this.down.transpose();

    const right = this.front.takeDown();
    const back = this.right.takeDown();
    const left = this.back.takeDown();
    const front = this.left.takeDown();

    this.right.setDown(right);
    this.left.setDown(left);
    this.back.setDown(back);
    this.front.setDown(front);
  }

  turnUp() {
    this.up.transpose();

    const right = this.back.takeUp();
    const back = this.left.takeUp();
    const left = this.front.takeUp();
    const front = this.right.takeUp();

    this.right.setUp(right);
    this.left.setUp(left);
    this.back.setUp(back);
    this.front.setUp(front);
  }

  turnRight() {
    this.right.transpose();

    const front = this.down.takeRight();
    const up = this.front.takeRight();
    const back = this.up.takeRight();
    const down = this.back.takeRight();

    this.front.setRight(front);
    this.up.setRight(up);
    this.back.setRight(back);
    this.down.setRight(down);
  }

  turnLeft() {
    this.left.transpose();

    const front = this.up.takeLeft();
    const up = this.back.takeLeft();
    const back = this.down.takeLeft();
    const down = this.front.takeLeft();

    this.front.setLeft(front);
    this.up.setLeft(up);
    this.back.setLeft(back);
    this.down.setLeft(down);
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
