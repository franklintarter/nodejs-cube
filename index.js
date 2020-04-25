Array.prototype.transpose = function() {
  return [this[6], this[3], this[0], this[7], this[4], this[1], this[8], this[5], this[2]]
}

Array.prototype.reverseTranspose = function() {
  return [this[2], this[5], this[8], this[1], this[4], this[7], this[0], this[3], this[6]]
}

Array.prototype.takeTop = function () {
  return [this[0], this[1], this[2]]
}

Array.prototype.setTop = function (other) {
  return [other[0], other[1], other[2], this[3], this[4], this[5], this[6], this[7], this[8]]
}

Array.prototype.takeBottom = function () {
  return [this[6], this[7], this[8]]
}

Array.prototype.setBottom = function (other) {
  return [this[0], this[1], this[2], this[3], this[4], this[5], other[0], other[1], other[2], ]
}

Array.prototype.takeRight = function () {
  return [this[2], this[5], this[8]]
}

Array.prototype.setRight = function (other) {
  return [this[0], this[1], other[0], this[3], this[4], other[1], this[6], this[7], other[8]]
}

const moves = {
  TURN: "TURN",
  FLIP: "FLIP",
  ROTATE: "ROTATE",
  SPIN_BOTTOM: "SPIN_BOTTOM",
  SPIN_TOP: "SPIN_TOP"
}

const movesArr = Object.keys(moves)

const randomMoves = []
for(let i = 0; i < 1000; i++) {
  randomMoves.push(movesArr[Math.floor(Math.random() * movesArr.length)])
}

const c = {
  W: "W",
  Y: "Y",
  G: "G",
  R: "R",
  O: "O",
  B: "B"
}

const createFace = (color) => [color, color, color, color, color, color, color, color, color]

const to = {
  TOP: 1,
  RIGHT: 2,
  BACK: 3,
  BOTTOM: 4,
  LEFT: 5
}

class Cube {
  front = createFace(c.W)
  left = createFace(c.G)
  back = createFace(c.Y)
  right = createFace(c.B)
  top = createFace(c.O)
  bottom = createFace(c.R)

  spinBottom() {
    this.bottom = this.bottom.transpose()

    const right = this.front.takeBottom()
    const back = this.right.takeBottom()
    const left = this.back.takeBottom()
    const front = this.left.takeBottom()

    this.right = this.right.setBottom(right)
    this.left = this.left.setBottom(left)
    this.back = this.back.setBottom(back)
    this.front = this.front.setBottom(front)
  }

  spinTop() {
    this.top = this.top.transpose()

    const right = this.front.takeTop()
    const back = this.right.takeTop()
    const left = this.back.takeTop()
    const front = this.left.takeTop()

    this.right = this.right.setTop(right)
    this.left = this.left.setTop(left)
    this.back = this.back.setTop(back)
    this.front = this.front.setTop(front)
  }

  spinRight() {
    this.right = this.right.transpose()

    const front = this.bottom.takeRight()
    const top = this.front.takeRight()
    const back = this.top.takeRight()
    const bottom = this.back.takeRight()

    this.front = this.front.setRight(front)
    this.top = this.top.setRight(top)
    this.back = this.back.setRight(back)
    this.bottom = this.bottom.setRight(bottom)
  }

  turn () {
    const right = this.front
    const front = this.left
    const left = this.back
    const back = this.right
    this.front = front
    this.left = left
    this.back = back
    this.right = right
    this.top = this.top.reverseTranspose()
    this.bottom = this.bottom.transpose()
  }
  
  flip() {
    const front = this.top
    const bottom = this.front
    const top = this.back
    const back = this.bottom
    this.front = front
    this.top = top
    this.bottom = bottom
    this.back = back
    this.left = this.left.reverseTranspose()
    this.right = this.right.transpose()
  }

  move(move) {
    switch (move) {
      case moves.TURN:
        this.turn()
      case moves.FLIP:
        this.flip()
      case moves.SPIN_BOTTOM:
        this.spinBottom()
      case moves.SPIN_TOP:
        this.spinTop()
      default:
    }
  }
}

const cube = new Cube()
randomMoves.forEach(m => cube.move(m))

console.log(cube.front)
