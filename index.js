const Cube = require("./src/cube");
const render = require("./src/renderer");
// const randomMoves = require("./src/random-moves");
const cube = new Cube();
cube.randomize();

render(cube);

// randomMoves(1000).forEach((m) => cube.move(m));

// console.log(cube.front);
