module.exports = class Face {
  #topLeft;
  #top;
  #topRight;
  #left;
  #center;
  #right;
  #bottomLeft;
  #bottom;
  #bottomRight;

  color;

  constructor(color) {
    this.#topLeft = color;
    this.#top = color;
    this.#topRight = color;
    this.#left = color;
    this.#center = color;
    this.#right = color;
    this.#bottomLeft = color;
    this.#bottom = color;
    this.#bottomRight = color;
    this.color = color;
  }

  *[Symbol.iterator]() {
    yield this.#topLeft;
    yield this.#top;
    yield this.#topRight;
    yield this.#left;
    yield this.#center;
    yield this.#right;
    yield this.#bottomLeft;
    yield this.#bottom;
    yield this.#bottomRight;
  }

  isSolved() {
    return this.toArray().every((p) => p === this.color);
  }

  toArray() {
    return Array.from(this);
  }

  setTop({ left, center, right }) {
    this.#topLeft = left;
    this.#top = center;
    this.#topRight = right;
  }

  setBottom({ left, center, right }) {
    this.#bottomLeft = left;
    this.#bottom = center;
    this.#bottomRight = right;
  }

  setRight({ top, center, bottom }) {
    this.#topRight = top;
    this.#right = center;
    this.#bottomRight = bottom;
  }

  setLeft({ top, center, bottom }) {
    this.#topLeft = top;
    this.#left = center;
    this.#bottomLeft = bottom;
  }

  takeBottom() {
    return {
      left: this.#bottomLeft,
      center: this.#bottom,
      right: this.#bottomRight,
    };
  }

  takeTop() {
    return {
      left: this.#topLeft,
      center: this.#top,
      right: this.#topRight,
    };
  }

  takeRight() {
    return {
      top: this.#topRight,
      center: this.#right,
      bottom: this.#bottomRight,
    };
  }

  takeLeft() {
    return {
      top: this.#topLeft,
      center: this.#left,
      bottom: this.#bottomLeft,
    };
  }

  transpose() {
    const nextTopLeft = this.#bottomLeft;
    const nextTop = this.#left;
    const nextTopRight = this.#topLeft;
    const nextleft = this.#bottom;
    const nextRight = this.#top;
    const nextBottomLeft = this.#bottomRight;
    const nextBottom = this.#right;
    const nextBottomRight = this.#topRight;
    this.#bottomLeft = nextBottomLeft;
    this.#left = nextleft;
    this.#topLeft = nextTopLeft;
    this.#bottom = nextBottom;
    this.#top = nextTop;
    this.#bottomRight = nextBottomRight;
    this.#right = nextRight;
    this.#topRight = nextTopRight;
  }

  reverseTranspose() {
    const nextTopLeft = this.#topRight;
    const nextTop = this.#right;
    const nextTopRight = this.#bottomRight;
    const nextleft = this.#top;
    const nextRight = this.#bottom;
    const nextBottomLeft = this.#topLeft;
    const nextBottom = this.#left;
    const nextBottomRight = this.#bottomLeft;
    this.#bottomLeft = nextBottomLeft;
    this.#left = nextleft;
    this.#topLeft = nextTopLeft;
    this.#bottom = nextBottom;
    this.#top = nextTop;
    this.#bottomRight = nextBottomRight;
    this.#right = nextRight;
    this.#topRight = nextTopRight;
  }
};
