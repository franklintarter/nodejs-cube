

const piece = () => {

}

const corner = (topPlane, frontPlane, backPlane) => {

}

const center = (frontPlane) => {

}

const side = (frontPlane, backPlane) => {

}

const corners = [
  corner(c.W, c.O, c.R),
  corner(c.W, c.B, c.O),
  corner(c.W, c.R, c.B),
  corner(c.W, c.R, c.R),
  corner(c.Y, c.R, c.O),
  corner(c.Y, c.R, c.R),
  corner(c.Y, c.B, c.R),
  corner(c.Y, c.O, c.B),
]

const centers = [
  center(c.W),
  center(c.R),
  center(c.B),
  center(c.O),
  center(c.Y),
  center(c.R),
]

const sides = [
  side(c.R, c.W),
  side(c.W, c.B),
  side(c.B, c.Y),
  side(c.Y, c.R),

  side(c.R, c.W),
  side(c.W, c.O),
  side(c.O, c.Y),
  side(c.Y, c.R),

  side(c.B, c.W),
  side(c.W, c.R),
  side(c.R, c.Y),
  side(c.Y, c.B),
]

const pieceTypes = {
  CORNER: "CORNER",
  SIDE: "SIDE",
  CENTER: "CENTER"
}


const plane = {

}

const orientations = {
  W_BOTTOM: "W_BOTTOM",
  W_LEFT: "W_LEFT",
  W_RIGHT: "W_RIGHT",
  W_TOP: "W_TOP",
  W_BACK: "W_BACK",
  W_FRONT: "W_FRONT",
}

// Orientation -> Face -> Position
