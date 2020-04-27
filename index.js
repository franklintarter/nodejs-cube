const Cube = require("./src/cube");
const render = require("./src/renderer");
// const { turns } = require("./src/random-moves");

const cube = new Cube();

// cube.randomize();

// const randomTurns = turns(50);
// randomTurns.forEach((m, i) => {
//   setTimeout(() => {
//     cube.move(m);
//     render(cube);
//     console.log();
//     console.log(m);
//   }, 1000 * i + 200);
// });

// cube.turnFront();

cube.turnDown();
// cube.turnRight();
// cube.turnRight();
// cube.turnRight();
// cube.rotateRight();
// cube.rotateRight();
// cube.rotate();
// cube.rotateRight();
// cube.rotateRight();

render(cube);
console.log();
console.log(cube.front.isCrossSolved());
