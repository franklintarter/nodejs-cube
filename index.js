const Cube = require("./src/cube");
const render = require("./src/renderer");
const { turns } = require("./src/random-moves");

const cube = new Cube();

const randomTurns = turns(50);

render(cube);

randomTurns.forEach((m, i) => {
  setTimeout(() => {
    render(cube, m);
    cube.move(m);
    console.log();
    console.log(m);
  }, 1000 * i + 200);
  // setTimeout(() => {
  //   render(cube, m);
  // }, 100 * i + 250);
});

render(cube);

// cube.randomize();

// randomMoves(1000).forEach((m) => cube.move(m));

// console.log(cube.front);
