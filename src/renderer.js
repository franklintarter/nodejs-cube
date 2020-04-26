const { c } = require("./constants");

function toHex(color) {
  switch (color) {
    case c.W:
      return "#EAEDF4";
    case c.B:
      return "#3E5FAA";
    case c.G:
      return "#55D005";
    case c.O:
      return "#FF4D00";
    case c.R:
      return "#D80000";
    case c.Y:
      return "#F7FF03";
  }
}

const chalk = require("chalk");

function getPad(col) {
  const diff = col - 69;
  let str = "";
  for (let i = 0; i < diff; i++) {
    str += " ";
  }
  return str;
}

let pad = getPad(process.stdout.columns);

process.stdout.on("resize", () => {
  pad = getPad(process.stdout.columns);
});

function write(str) {
  process.stdout.write(str);
}

function writeColor(c, str) {
  write(chalk.hex(toHex(c))(str));
}

function writeEndLine(str) {
  write(str + pad);
}

function two(cube) {
  write("      .");
  writeColor(cube.up.upLeft, "*******************");
  write(".");
  writeColor(cube.up.up, "*******************");
  write(".");
  writeColor(cube.up.upRight, "*********************");
  writeEndLine("|");
}

function three(cube) {
  write("    .");
  writeColor(cube.up.left, "*******************");
  write(".");
  writeColor(cube.up.center, "*******************");
  write(".");
  writeColor(cube.up.right, "********************");
  write(".");
  writeColor(cube.right.upRight, "**");
  writeEndLine("|");
}

function four(cube) {
  write("  .");
  writeColor(cube.up.downLeft, "*******************");
  write(".");
  writeColor(cube.up.down, "*******************");
  write(".");
  writeColor(cube.up.downRight, "*******************");
  write(".");
  writeColor(cube.right.up, " **");
  writeColor(cube.right.upRight, "**");
  writeEndLine("|");
}

function five(cube) {
  process.stdout.write(
    "|-------------------+-------------------+-------------------+ "
  );
  process.stdout.write(chalk.hex(toHex(cube.right.upLeft))("**"));
  process.stdout.write(chalk.hex(toHex(cube.right.up))("**"));
  process.stdout.write(chalk.hex(toHex(cube.right.upRight))("**"));
  process.stdout.write("|" + pad);
}

function frontFace(left, center, right) {
  write("|");
  writeColor(left, "*******************");
  write("|");
  writeColor(center, "*******************");
  write("|");
  writeColor(right, "*******************");
  write("| ");
}

function six(cube) {
  frontFace(cube.front.upLeft, cube.front.up, cube.front.upRight);
  writeColor(cube.right.upLeft, "**");
  writeColor(cube.right.up, "**");
  writeColor(cube.right.upRight, "**");
  writeEndLine("|");
}

function seven(cube) {
  frontFace(cube.front.upLeft, cube.front.up, cube.front.upRight);
  writeColor(cube.right.upLeft, "**");
  writeColor(cube.right.up, "**");
  writeColor(cube.right.upRight, "**");
  writeEndLine("|");
}

function eight(cube) {
  frontFace(cube.front.upLeft, cube.front.up, cube.front.upRight);
  writeColor(cube.right.upLeft, "**");
  writeColor(cube.right.up, "**");
  writeColor(cube.right.upRight, "**");
  writeEndLine("|");
}

function nine(cube) {
  frontFace(cube.front.upLeft, cube.front.up, cube.front.upRight);
  writeColor(cube.right.upLeft, "**");
  writeColor(cube.right.up, "**");
  write(". ");
  writeEndLine("|");
}

function ten(cube) {
  frontFace(cube.front.upLeft, cube.front.up, cube.front.upRight);
  writeColor(cube.right.upLeft, "**");
  write(". ");
  writeColor(cube.right.right, "**");
  writeEndLine("|");
}

function eleven(cube) {
  frontFace(cube.front.upLeft, cube.front.up, cube.front.upRight);
  write(". ");
  writeColor(cube.right.center, "**");
  writeColor(cube.right.right, "**");
  writeEndLine("|");
}

function twelve(cube) {
  write("+-------------------+-------------------+-------------------+ ");
  writeColor(cube.right.left, "**");
  writeColor(cube.right.center, "**");
  writeColor(cube.right.right, "**");
  writeEndLine("|");
}

function thirteen(cube) {
  frontFace(cube.front.left, cube.front.center, cube.front.right);
  writeColor(cube.right.left, "**");
  writeColor(cube.right.center, "**");
  writeColor(cube.right.right, "**");
  writeEndLine("|");
}

function fourteen(cube) {
  frontFace(cube.front.left, cube.front.center, cube.front.right);
  writeColor(cube.right.left, "**");
  writeColor(cube.right.center, "**");
  writeColor(cube.right.right, "**");
  writeEndLine("|");
}

function fifteen(cube) {
  frontFace(cube.front.left, cube.front.center, cube.front.right);
  writeColor(cube.right.left, "**");
  writeColor(cube.right.center, "**");
  writeColor(cube.right.right, "**");
  writeEndLine("|");
}

function sixteen(cube) {
  frontFace(cube.front.left, cube.front.center, cube.front.right);
  writeColor(cube.right.left, "**");
  writeColor(cube.right.center, "**");
  write(". ");
  writeEndLine("|");
}

function seventeen(cube) {
  frontFace(cube.front.left, cube.front.center, cube.front.right);
  writeColor(cube.right.left, "**");
  write(". ");
  writeColor(cube.right.downRight, "**");
  writeEndLine("|");
}

function eighteen(cube) {
  frontFace(cube.front.left, cube.front.center, cube.front.right);
  write(". ");
  writeColor(cube.right.down, "**");
  writeColor(cube.right.downRight, "**");
  writeEndLine("|");
}

function nineteen(cube) {
  write("+-------------------+-------------------+-------------------+ ");
  writeColor(cube.right.downLeft, "**");
  writeColor(cube.right.down, "**");
  writeColor(cube.right.downRight, "**");
  writeEndLine("|");
}

function twenty(cube) {
  frontFace(cube.front.downLeft, cube.front.down, cube.front.downRight);
  writeColor(cube.right.downLeft, "**");
  writeColor(cube.right.down, "**");
  writeColor(cube.right.downRight, "**");
  writeEndLine("|");
}

function twentyone(cube) {
  frontFace(cube.front.downLeft, cube.front.down, cube.front.downRight);
  writeColor(cube.right.downLeft, "**");
  writeColor(cube.right.down, "**");
  writeColor(cube.right.downRight, "**");
  writeEndLine("|");
}

function twentytwo(cube) {
  frontFace(cube.front.downLeft, cube.front.down, cube.front.downRight);
  writeColor(cube.right.downLeft, "**");
  writeColor(cube.right.down, "**");
  writeColor(cube.right.downRight, "**");
  writeEndLine("|");
}

function twentythree(cube) {
  frontFace(cube.front.downLeft, cube.front.down, cube.front.downRight);
  writeColor(cube.right.downLeft, "**");
  writeColor(cube.right.down, "**");
  writeEndLine(".  ");
}

function twentyfour(cube) {
  frontFace(cube.front.downLeft, cube.front.down, cube.front.downRight);
  writeColor(cube.right.downLeft, "**");
  writeEndLine(".    ");
}

function twentyfive(cube) {
  frontFace(cube.front.downLeft, cube.front.down, cube.front.downRight);
  writeEndLine(".      ");
}

module.exports = function (cube, move) {
  console.clear();
  writeEndLine(
    "        _____________________________________________________________"
  );
  two(cube);
  three(cube);
  four(cube);
  five(cube);
  six(cube);
  seven(cube);
  eight(cube);
  eight(cube);
  eight(cube);
  nine(cube);
  ten(cube);
  eleven(cube);
  twelve(cube);
  thirteen(cube);
  fourteen(cube);
  fourteen(cube);
  fourteen(cube);
  fifteen(cube);
  sixteen(cube);
  seventeen(cube);
  eighteen(cube);
  nineteen(cube);
  twenty(cube);
  twentyone(cube);
  twentyone(cube);
  twentyone(cube);
  twentytwo(cube);
  twentythree(cube);
  twentyfour(cube);
  twentyfive(cube);
  writeEndLine(
    "+-------------------+-------------------+-------------------|       "
  );
  writeEndLine(
    "                                                                    "
  );
  writeEndLine(
    "                                                                    "
  );
};

//        _____________________________________________________________
//      .*******************.*******************.*********************|
//    .*******************.*******************.********************.**|
//  .*******************.*******************.*******************. ****|
//|-------------------+-------------------+-------------------+ ******|
//|*******************|*******************|*******************| ******|
//|*******************|*******************|*******************| ******|
//|*******************|*******************|*******************| ******|
//|*******************|*******************|*******************| ****. |
//|*******************|*******************|*******************| **. **|
//|*******************|*******************|*******************| . ****|
//+-------------------+-------------------+-------------------+ ******|
//|*******************|*******************|*******************| ******|
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

//   __________________________________________________
// /____
//|*****\_______
//|*****|*******\______
//|*****|*******|*****|---------------+---------------+---------------+ ******|
//|*****|*******|*****|***************|***************|***************|
//|*****|*******|*****|***************|***************|***************|
//  ****|*******|*****|***************|***************|***************|
//|    *|*******|*****|***************|***************|***************
//|         ****|*****|***************|***************
//|               ****|***************
//+-------------------+-------------------+-------------------+ ******|
//|*******************|*******************|*******************| ******|
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

//       | _____________________/|________________________________________
//      .|***.*****\*******.*******************.*********************|
//    .**|***.**.****\*****..***************.********************.**|
//  .    |   .  .  |   \          ..                                  ****|
//|------|---.--.--|---.-\\/-----------+-------------------+ ******|
//|******||**.**.**|**.**| /*******************|*******************| ******|
//|******|**.**.**|**.**|*******************|*******************| ******|
//|******|****.**|**.**|*******************|*******************| ******|
//|******|******|**.**|*******************|*******************| ****. |
//|              .**|*******************|*******************| **. **|
//|              ***|*******************|*******************| . ****|
//+-------------------+-------------------+-------------------+ ******|
//|*******************|*******************|*******************| ******|
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
