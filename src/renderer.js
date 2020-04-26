// const process = require("process");

// process.stdout.write("hello: ");
// process.stdout.write("hello: ");
// process.stdout.write("hello: ");
// process.stdout.write("hello: ");
// process.stdout.write("hello: ");

const { c } = require("./constants");

function toHex(color) {
  switch (color) {
    case c.W:
      return "#eee";
    case c.B:
      return "#888";
    case c.G:
      return "#eadead";
    case c.O:
      return "#982099";
    case c.R:
      return "#908193";
    case c.Y:
      return "#dba329";
  }
}

const chalk = require("chalk");

function getPad(col) {
  const diff = col - 70;
  let str = "";
  for (let i = 0; i < diff; i++) {
    str += " ";
  }
  return str;
}

let pad = getPad(process.stdout.columns);

process.stdout.on("resize", () => {
  pad = getPad();
});

function two(cube) {
  // const two =
  // "       .                   .                   .                     .|" +
  // pad;
  process.stdout.write("      .");
  process.stdout.write(
    chalk.hex(toHex(cube.top.topLeft))("*******************")
  );
  process.stdout.write(".");
  process.stdout.write(chalk.hex(toHex(cube.top.top))("*******************"));
  process.stdout.write(".");
  process.stdout.write(
    chalk.hex(toHex(cube.top.topRight))("*********************")
  );
  process.stdout.write(".|" + pad);
}

function three(cube) {
  process.stdout.write("    .");
  process.stdout.write(chalk.hex(toHex(cube.top.left))("*****************"));
  process.stdout.write(".");
  process.stdout.write(
    chalk.hex(toHex(cube.top.center))("********************")
  );
  process.stdout.write(".");
  process.stdout.write(
    chalk.hex(toHex(cube.top.right))("**********************")
  );
  process.stdout.write(".");
  process.stdout.write(chalk.hex(toHex(cube.right.topRight))("**"));
  process.stdout.write("|" + pad);
}

function four(cube) {
  process.stdout.write("  .");
  process.stdout.write(
    chalk.hex(toHex(cube.top.bottomLeft))("*****************")
  );
  process.stdout.write(".");
  process.stdout.write(
    chalk.hex(toHex(cube.top.bottom))("********************")
  );
  process.stdout.write(".");
  process.stdout.write(
    chalk.hex(toHex(cube.top.bottomRight))("*********************")
  );
  process.stdout.write(".");
  process.stdout.write(chalk.hex(toHex(cube.right.topRight))("*****"));
  process.stdout.write("|" + pad);
}

function five(cube) {
  process.stdout.write(
    "|-------------------+-------------------+-------------------+"
  );
  process.stdout.write(chalk.blue("********"));
  process.stdout.write("|" + pad);
}

// const offset = () => {
//   const off = process.stdout.columns - lineWidth;
// };

module.exports = function (cube) {
  // var P = ["\\", "|", "/", "-"];
  // var x = 0;
  // return setInterval(function () {
  // const front = cube.front.toArray();
  // console.log(
  //   "Terminal size: " + process.stdout.columns + "x" + process.stdout.rows
  // );

  const one =
    "        ______________________________________________________________" +
    pad;

  // const three =
  //   "     .                   .                   .                    .   |" +
  //   pad;
  const six =
    "|*******************|*******************|*******************|         |" +
    pad;
  const seven =
    "|*******************|*******************|*******************|         |" +
    pad;
  const eight =
    "|*******************|*******************|*******************|         |" +
    pad;
  console.clear();
  console.log(one);
  two(cube);
  // console.log(two);
  three(cube);
  four(cube);
  five(cube);
  console.log(six);
  console.log(seven);
  console.log(eight);
  // }, 250);
};

// ___
// |
// |
// |
//
//
//
//

//  _______
// |       |
// |       |
// |       |  _
// |_______| |_|

//    +--------------+
//   /              / |
//  /              /  |
// *--------------*   |
// |              |   |
// |              |   |
// |              |   |
// |              |   +
// |              |  /
// |              | /
// M.G.    *--------------*

// ****
// ****

//        ______________________________________________________________
//      .                   .                   .                     .|
//    .                   .                   .                    .   |
//  .                   .                   .                   .      |
//|-------------------+-------------------+-------------------+        |
//|*******************|*******************|*******************|        |
//|*******************|*******************|*******************|        |
//|*******************|*******************|*******************|       .|
//|*******************|*******************|*******************|     .  |
//|*******************|*******************|*******************|   .    |
//|*******************|*******************|*******************| .      |
//+-------------------+-------------------+-------------------+        |
//|*******************|*******************|*******************|        |
//|*******************|*******************|*******************|        |
//|*******************|*******************|*******************|       .|
//|*******************|*******************|*******************|     .  |
//|*******************|*******************|*******************|   .    |
//|*******************|*******************|*******************| .      |
//+-------------------+-------------------+-------------------+        |
//|*******************|*******************|*******************|        |
//|*******************|*******************|*******************|        |
//|*******************|*******************|*******************|      .
//|*******************|*******************|*******************|    .
//|*******************|*******************|*******************|  .
//|*******************|*******************|*******************|.
//+-------------------+-------------------+-------------------+

// +-------+-------+-------+
// |*******|*******|*******|
// |*******|*******|*******|
// |*******|*******|*******|
// +-------+-------+-------+
// |*******|*******|*******|
// |*******|*******|*******|
// |*******|*******|*******|
// +-------+-------+-------+
// |*******|*******|*******|
// |*******|*******|*******|
// |*******|*******|*******|
// +-------+-------+-------+
