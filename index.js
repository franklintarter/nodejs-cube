const readline = require("readline");

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

// cube.turnDown();
// cube.turnDown();
// cube.turnRight();
// cube.turnRight();
// cube.rotate();
// cube.rotate();
// cube.rotate();
// cube.rotate();
// cube.rotate();
// cube.rotate();
// cube.rotate();
// cube.rotate();
// cube.rotateRight();
// cube.rotateRight();
// cube.rotateRight();
// cube.rotateRight();

// cube.rotateRight();
// cube.rotateRight();
// cube.rotateRight();

render(cube);
// console.log();
// console.log(cube.front.isCrossSolved());

let running = true;

while (running) {
  let command = readline();
  if (command === "q") {
    running = false;
  }
}
