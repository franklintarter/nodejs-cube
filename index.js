const Cube = require("./src/cube");
const render = require("./src/renderer");

const cube = new Cube();
render(cube);

var stdin = process.stdin;

stdin.setRawMode(true);
stdin.resume();
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

stdin.on("data", function (key) {
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
      cube.turnRightPrime();
      break;
    case "k":
      cube.turnUp();
      break;
    case "d":
      cube.turnUpPrime();
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
      cube.rotate();
      cube.rotate();
      break;
    case "\u001B\u005B\u0043": // right
      cube.rotateRight();
      break;
    case "\u001B\u005B\u0042": // down
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

  render(cube);
  printKeys();
});
