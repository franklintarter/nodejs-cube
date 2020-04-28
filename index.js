const inquirer = require("inquirer");

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

// function prompt() {
//   const questions = [
//     {
//       name: "username",
//       type: "list",
//       message: "Enter your GitHub username or e-mail address:",
//       choices: ["Rotate Up (up)", "Rotate Down (down)", "Right", "Left"],
//       validate: function (value) {
//         if (value.length) {
//           return true;
//         } else {
//           return "Please enter your username or e-mail address.";
//         }
//       },
//     },
//   ];
//   return inquirer.prompt(questions);
// }

// // while (running) {
// // }
// const result = prompt();
// console.log(result);

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
  console.log("Right  (r)");
  console.log("Right` (f)");
  console.log("Up     (e)");
  console.log("Up     (d)");
  console.log("Down   (w)");
  console.log("Down`  (s)");
  console.log("Left   (q)");
  console.log("Left`  (a)");
}

printKeys();

// on any data into stdin
stdin.on("data", function (key) {
  // if (key === "")

  switch (key) {
    case "r":
      cube.turnRight();
      break;
    case "f":
      cube.turnRight();
      cube.turnRight();
      cube.turnRight();
      break;
    case "e":
      cube.turnUp();
      break;
    case "d":
      cube.turnUp();
      cube.turnUp();
      cube.turnUp();
      break;
    case "w":
      cube.turnDown();
      break;
    case "s":
      cube.turnDown();
      cube.turnDown();
      cube.turnDown();
      break;
    case "q":
      cube.turnLeft();
      break;
    case "a":
      cube.turnLeft();
      cube.turnLeft();
      cube.turnLeft();
      break;
  }

  // ctrl-c ( end of text )
  if (key === "\u0003") {
    process.exit();
  }
  // write the key to stdout all normal like
  render(cube);
  printKeys();

  // process.stdout.write(key);
});
