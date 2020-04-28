const Cube = require("./src/cube");
const render = require("./src/renderer");

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

render(cube);
// console.log();
// console.log(cube.front.isCrossSolved());

let running = true;

var stdin = process.stdin;

// without this, we would only get streams once enter is pressed
stdin.setRawMode(true);

// resume stdin in the parent process (node app won't quit all by itself
// unless an error or process.exit() happens)
stdin.resume();

// i don't want binary, do you?
stdin.setEncoding("utf8");

function printKeys() {
  console.log();
  console.log("Counter Clockwise          Clockwise");
  console.log("   Right` (f)                 Right  (j)");
  console.log("   Up`    (d)                 Up     (k)");
  console.log("   Down`  (s)                 Down   (l)");
  console.log("   Left`  (a)                 Left   (;)");
  console.log("   Front` (r)                 Front  (u)");
  console.log("   Back`  (e)                 Back   (i)");

  console.log();
  console.log("~ put hands in typing position for turns.");
  console.log();
  console.log("~ arrow keys to rotate.");

  console.log();
  console.log("quit   (control + c)");
  console.log();
}

printKeys();

// on any data into stdin
stdin.on("data", function (key) {
  // if (key === "")

  switch (key) {
    case "u":
      cube.turnFront();
      break;
    case "r":
      cube.turnFront();
      cube.turnFront();
      cube.turnFront();
      break;
    case "i":
      cube.turnBack();
      break;
    case "e":
      cube.turnBack();
      cube.turnBack();
      cube.turnBack();
      break;
    case "j":
      cube.turnRight();
      break;
    case "f":
      cube.turnRight();
      cube.turnRight();
      cube.turnRight();
      break;
    case "k":
      cube.turnUp();
      break;
    case "d":
      cube.turnUp();
      cube.turnUp();
      cube.turnUp();
      break;
    case "l":
      cube.turnDown();
      break;
    case "s":
      cube.turnDown();
      cube.turnDown();
      cube.turnDown();
      break;
    case ";":
      cube.turnLeft();
      break;
    case "a":
      cube.turnLeft();
      cube.turnLeft();
      cube.turnLeft();
      break;
    case "\u001B\u005B\u0041": // up
      cube.rotate();
      break;
    case "\u001B\u005B\u0043": // right
      cube.rotateRight();
      break;
    case "\u001B\u005B\u0042": // down
      cube.rotate();
      cube.rotate();
      cube.rotate();
      break;
    case "\u001B\u005B\u0044":
      cube.rotateRight();
      cube.rotateRight();
      cube.rotateRight();
      break;
    case "\u0003":
      process.exit();
  }

  // write the key to stdout all normal like
  render(cube);
  printKeys();

  // process.stdout.write(key);
});
