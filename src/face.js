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
    console.log(this.solved());
  }

  solved() {
    return [
      this.#topLeft,
      this.#top,
      this.#topRight,
      this.#left,
      this.#center,
      this.#right,
      this.#bottomLeft,
      this.#bottom,
      this.#bottomRight,
    ].every((i) => i === this.#topLeft);
  }
};
