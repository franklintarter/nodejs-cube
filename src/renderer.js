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
  writeColor(cube.top.topLeft, "*******************");
  write(".");
  writeColor(cube.top.top, "*******************");
  write(".");
  writeColor(cube.top.topRight, "*********************");
  writeEndLine("|");
}

function three(cube) {
  write("    .");
  writeColor(cube.top.left, "*******************");
  write(".");
  writeColor(cube.top.center, "*******************");
  write(".");
  writeColor(cube.top.right, "********************");
  write(".");
  writeColor(cube.right.topRight, "**");
  writeEndLine("|");
}

function four(cube) {
  write("  .");
  writeColor(cube.top.bottomLeft, "*******************");
  write(".");
  writeColor(cube.top.bottom, "*******************");
  write(".");
  writeColor(cube.top.bottomRight, "*******************");
  write(".");
  writeColor(cube.right.top, " **");
  writeColor(cube.right.topRight, "**");
  writeEndLine("|");
}

function five(cube) {
  process.stdout.write(
    "|-------------------+-------------------+-------------------+ "
  );
  process.stdout.write(chalk.hex(toHex(cube.right.topLeft))("**"));
  process.stdout.write(chalk.hex(toHex(cube.right.top))("**"));
  process.stdout.write(chalk.hex(toHex(cube.right.topRight))("**"));
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
  frontFace(cube.front.topLeft, cube.front.top, cube.front.topRight);
  writeColor(cube.right.topLeft, "**");
  writeColor(cube.right.top, "**");
  writeColor(cube.right.topRight, "**");
  writeEndLine("|");
}

function seven(cube) {
  frontFace(cube.front.topLeft, cube.front.top, cube.front.topRight);
  writeColor(cube.right.topLeft, "**");
  writeColor(cube.right.top, "**");
  writeColor(cube.right.topRight, "**");
  writeEndLine("|");
}

function eight(cube) {
  frontFace(cube.front.topLeft, cube.front.top, cube.front.topRight);
  writeColor(cube.right.topLeft, "**");
  writeColor(cube.right.top, "**");
  writeColor(cube.right.topRight, "**");
  writeEndLine("|");
}

function nine(cube) {
  frontFace(cube.front.topLeft, cube.front.top, cube.front.topRight);
  writeColor(cube.right.topLeft, "**");
  writeColor(cube.right.top, "**");
  write(". ");
  writeEndLine("|");
}

function ten(cube) {
  frontFace(cube.front.topLeft, cube.front.top, cube.front.topRight);
  writeColor(cube.right.topLeft, "**");
  write(". ");
  writeColor(cube.right.right, "**");
  writeEndLine("|");
}

function eleven(cube) {
  frontFace(cube.front.topLeft, cube.front.top, cube.front.topRight);
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
  writeColor(cube.right.bottomRight, "**");
  writeEndLine("|");
}

function eighteen(cube) {
  frontFace(cube.front.left, cube.front.center, cube.front.right);
  write(". ");
  writeColor(cube.right.bottom, "**");
  writeColor(cube.right.bottomRight, "**");
  writeEndLine("|");
}

function nineteen(cube) {
  write("+-------------------+-------------------+-------------------+ ");
  writeColor(cube.right.bottomLeft, "**");
  writeColor(cube.right.bottom, "**");
  writeColor(cube.right.bottomRight, "**");
  writeEndLine("|");
}

function twenty(cube) {
  frontFace(cube.front.bottomLeft, cube.front.bottom, cube.front.bottomRight);
  writeColor(cube.right.bottomLeft, "**");
  writeColor(cube.right.bottom, "**");
  writeColor(cube.right.bottomRight, "**");
  writeEndLine("|");
}

function twentyone(cube) {
  frontFace(cube.front.bottomLeft, cube.front.bottom, cube.front.bottomRight);
  writeColor(cube.right.bottomLeft, "**");
  writeColor(cube.right.bottom, "**");
  writeColor(cube.right.bottomRight, "**");
  writeEndLine("|");
}

function twentytwo(cube) {
  frontFace(cube.front.bottomLeft, cube.front.bottom, cube.front.bottomRight);
  writeColor(cube.right.bottomLeft, "**");
  writeColor(cube.right.bottom, "**");
  writeColor(cube.right.bottomRight, "**");
  writeEndLine("|");
}

function twentythree(cube) {
  frontFace(cube.front.bottomLeft, cube.front.bottom, cube.front.bottomRight);
  writeColor(cube.right.bottomLeft, "**");
  writeColor(cube.right.bottom, "**");
  writeEndLine(".  ");
}

function twentyfour(cube) {
  frontFace(cube.front.bottomLeft, cube.front.bottom, cube.front.bottomRight);
  writeColor(cube.right.bottomLeft, "**");
  writeEndLine(".    ");
}

function twentyfive(cube) {
  frontFace(cube.front.bottomLeft, cube.front.bottom, cube.front.bottomRight);
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
