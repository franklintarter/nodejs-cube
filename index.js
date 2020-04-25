const Cube = require("./src/cube");
const randomMoves = require("./src/random-moves");
const cube = new Cube();

randomMoves(1000).forEach((m) => cube.move(m));

console.log(cube.front);
