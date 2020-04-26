const { moves, rotations, turns } = require("./constants");

const movesArr = Object.keys(moves);
const rotationsArr = Object.keys(rotations);
const turnsArr = Object.keys(turns);

module.exports.all = (amount) => {
  const randomMoves = [];
  for (let i = 0; i < amount; i++) {
    randomMoves.push(movesArr[Math.floor(Math.random() * movesArr.length)]);
  }
  return randomMoves;
};

module.exports.rotations = (amount) => {
  const randomMoves = [];
  for (let i = 0; i < amount; i++) {
    randomMoves.push(
      rotationsArr[Math.floor(Math.random() * rotationsArr.length)]
    );
  }
  return randomMoves;
};

module.exports.turns = (amount) => {
  const randomMoves = [];
  for (let i = 0; i < amount; i++) {
    randomMoves.push(turnsArr[Math.floor(Math.random() * turnsArr.length)]);
  }
  return randomMoves;
};
