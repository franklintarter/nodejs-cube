const Cube = require("./src/cube");
const render = require("./src/renderer");

const cube = new Cube();
render(cube);

// eslint-disable-next-line
const stdin = process.stdin;

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
  console.log("~ arrow keys to flip sides.");
  console.log("~ [ and ] to rotate");

  console.log();
  console.log("Algorithm Shortcuts");
  console.log("Rotate Top Right Corner  (1)");
  console.log("Second Layer Right       (2)");
  console.log("Second Layer Left        (3)");
  console.log("Third Layer Cross        (4)");
  console.log("Third Edges Cross        (5)");
  console.log("Place Top Corners        (6)");
  console.log("Orient Top Corners       (7)");

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
      cube.turnFrontPrime();
      break;
    case "i":
      cube.turnBack();
      break;
    case "e":
      cube.turnBackPrime();
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
      cube.turnDownPrime();
      break;
    case ";":
      cube.turnLeft();
      break;
    case "a":
      cube.turnLeftPrime();
      break;
    case "\u001B\u005B\u0041": // up
      cube.rotateUp();
      break;
    case "\u001B\u005B\u0043": // right
      cube.rotateRight();
      break;
    case "\u001B\u005B\u0042": // down
      cube.rotateDown();
      break;
    case "\u001B\u005B\u0044":
      cube.rotateLeft();
      break;
    case "]":
      cube.orientRight();
      break;
    case "[":
      cube.orientLeft();
      break;
    case "1":
      cube.turnUpPrime();
      cube.turnBackPrime();
      cube.turnUp();
      cube.turnBack();
      break;
    case "2":
      cube.turnUp();
      cube.turnRight();
      cube.turnUpPrime();
      cube.turnRightPrime();
      cube.turnUpPrime();
      cube.turnFrontPrime();
      cube.turnUp();
      cube.turnFront();
      break;
    case "3":
      cube.turnUpPrime();
      cube.turnLeftPrime();
      cube.turnUp();
      cube.turnLeft();
      cube.turnUp();
      cube.turnFront();
      cube.turnUpPrime();
      cube.turnFrontPrime();
      break;
    case "4":
      cube.turnFront();
      cube.turnRight();
      cube.turnUp();
      cube.turnRightPrime();
      cube.turnUpPrime();
      cube.turnFrontPrime();
      break;
    case "5":
      cube.turnRight();
      cube.turnUp();
      cube.turnRightPrime();
      cube.turnUp();
      cube.turnRight();
      cube.turnUp();
      cube.turnUp();
      cube.turnUpPrime();
      cube.turnUp();
      break;
    case "6":
      cube.turnUp();
      cube.turnRight();
      cube.turnUpPrime();
      cube.turnLeftPrime();
      cube.turnUp();
      cube.turnRightPrime();
      cube.turnUpPrime();
      cube.turnLeft();
      break;
    case "7":
      cube.turnUpPrime();
      cube.turnDownPrime();
      cube.turnRight();
      cube.turnDown();
      break;
    case "\u0003":
      // eslint-disable-next-line
      process.exit();
  }

  render(cube);
  printKeys();
});
