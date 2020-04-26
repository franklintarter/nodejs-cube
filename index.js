const Cube = require("./src/cube");
const render = require("./src/renderer");
const { turns } = require("./src/random-moves");

const cube = new Cube();

const randomTurns = turns(50);

render(cube);

randomTurns.forEach((m, i) => {
  setTimeout(() => {
    cube.move(m);
    render(cube);
    console.log();
    console.log(m);
  }, 1000 * i + 200);
});

render(cube);
