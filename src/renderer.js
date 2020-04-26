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
      return "#EAEDF4";
    case c.B:
      return "#3E5FAA";
    case c.G:
      return "#6EB63F";
    case c.O:
      return "#F46722";
    case c.R:
      return "#D7204E";
    case c.Y:
      return "#FFB714";
  }
}

const chalk = require("chalk");

function getPad(col) {
  const diff = col - 69;
  let str = "";
  for (let i = 0; i < diff; i++) {
    str += "`";
  }
  return str;
}

let pad = getPad(process.stdout.columns);

process.stdout.on("resize", () => {
  pad = getPad(process.stdout.columns);
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
  // process.stdout.write(".|" + pad);
  // process.stdout.write(chalk.hex(toHex(cube.top.topRight))(""));
  process.stdout.write("|" + pad);
  // console.log(pad.length);
  // console.log()
}

function three(cube) {
  process.stdout.write("    .");
  process.stdout.write(chalk.hex(toHex(cube.top.left))("*******************"));
  process.stdout.write(".");
  process.stdout.write(
    chalk.hex(toHex(cube.top.center))("*******************")
  );
  process.stdout.write(".");
  process.stdout.write(
    chalk.hex(toHex(cube.top.right))("********************")
  );
  process.stdout.write(".");
  process.stdout.write(chalk.hex(toHex(cube.right.topRight))("**"));
  process.stdout.write("|" + pad);
}

function four(cube) {
  process.stdout.write("  .");
  process.stdout.write(
    chalk.hex(toHex(cube.top.bottomLeft))("*******************")
  );
  process.stdout.write(".");
  process.stdout.write(
    chalk.hex(toHex(cube.top.bottom))("*******************")
  );
  process.stdout.write(".");
  process.stdout.write(
    chalk.hex(toHex(cube.top.bottomRight))("*******************")
  );
  process.stdout.write(".");
  process.stdout.write(chalk.hex(toHex(cube.right.topRight))("*****"));
  process.stdout.write("|" + pad);
}

function five(cube) {
  process.stdout.write(
    "|-------------------+-------------------+-------------------+ "
  );
  process.stdout.write(chalk.blue("******"));
  process.stdout.write("|" + pad);
}

function six(cube) {
  process.stdout.write(
    "|*******************|*******************|*******************|        "
  );
  process.stdout.write("|" + pad);
}

// const offset = () => {
//   const off = process.stdout.columns - lineWidth;
// };

module.exports = function (cube) {
  console.clear();

  // var P = ["\\", "|", "/", "-"];
  // var x = 0;
  // return setInterval(function () {
  // const front = cube.front.toArray();
  // console.log(
  //   "Terminal size: " + process.stdout.columns + "x" + process.stdout.rows
  // );

  const str =
    "        _____________________________________________________________" +
    pad;
  // console.log(pad.length);

  // console.log(str.length, process.stdout.columns);

  process.stdout.write(str);
  // const three =
  //   "     .                   .                   .                    .   |" +
  //   pad;
  // const six =
  //   "" +
  // pad;
  // const seven =
  //   "|*******************|*******************|*******************|         |" +
  //   pad;
  // const eight =
  //   "|*******************|*******************|*******************|         |" +
  //   pad;
  // console.log(one);
  two(cube);
  three(cube);
  // console.log(two);
  four(cube);
  five(cube);
  // six(cube);
  // seven(cube);
  // console.log(six);
  // console.log(seven);
  // console.log(eight);
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

//        _____________________________________________________________
//      .*******************.*******************.*********************|
//    .*******************.*******************.********************.**|
//  .*******************.*******************.*******************.*****|
//|-------------------+-------------------+-------------------+ ******|
//|*******************|*******************|*******************| ******|
//|*******************|*******************|*******************| ******|
//|*******************|*******************|*******************| ******|
//|*******************|*******************|*******************| ****. |
//|*******************|*******************|*******************| **.   |
//|*******************|*******************|*******************| .     |
//+-------------------+-------------------+-------------------+       |
//|*******************|*******************|*******************|       |
//|*******************|*******************|*******************|       |
//|*******************|*******************|*******************|       |
//|*******************|*******************|*******************|     . |
//|*******************|*******************|*******************|   .   |
//|*******************|*******************|*******************| .     |
//+-------------------+-------------------+-------------------+       |
//|*******************|*******************|*******************|       |
//|*******************|*******************|*******************|       |
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

//      ____________________________________________________________
//    .*******************.*******************.*******************.|
//  .*******************.*******************.*******************.**|
