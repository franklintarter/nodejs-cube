Array.prototype.transpose = function () {
  return [
    this[6],
    this[3],
    this[0],
    this[7],
    this[4],
    this[1],
    this[8],
    this[5],
    this[2],
  ];
};

Array.prototype.reverseTranspose = function () {
  return [
    this[2],
    this[5],
    this[8],
    this[1],
    this[4],
    this[7],
    this[0],
    this[3],
    this[6],
  ];
};

Array.prototype.takeTop = function () {
  return [this[0], this[1], this[2]];
};

Array.prototype.setTop = function (other) {
  return [
    other[0],
    other[1],
    other[2],
    this[3],
    this[4],
    this[5],
    this[6],
    this[7],
    this[8],
  ];
};

Array.prototype.takeBottom = function () {
  return [this[6], this[7], this[8]];
};

Array.prototype.setBottom = function (other) {
  return [
    this[0],
    this[1],
    this[2],
    this[3],
    this[4],
    this[5],
    other[0],
    other[1],
    other[2],
  ];
};

Array.prototype.takeRight = function () {
  return [this[2], this[5], this[8]];
};

Array.prototype.setRight = function (other) {
  return [
    this[0],
    this[1],
    other[0],
    this[3],
    this[4],
    other[1],
    this[6],
    this[7],
    other[8],
  ];
};
