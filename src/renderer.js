// const process = require("process");

// process.stdout.write("hello: ");
// process.stdout.write("hello: ");
// process.stdout.write("hello: ");
// process.stdout.write("hello: ");
// process.stdout.write("hello: ");

module.exports = function (cube) {
  var P = ["\\", "|", "/", "-"];
  var x = 0;
  return setInterval(function () {
    const front = cube.front.toArray();
    console.log(
      "Terminal size: " + process.stdout.columns + "x" + process.stdout.rows
    );

    process.stdout.write(
      "\r" + "|" + front[0] + "|" + front[1] + "|" + front[2] + "|"
      // "\n" +
      // "foo"
    );
    x++;
    x &= 3;
  }, 250);
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

//         ______________________________________________________________
//       .                   .                   .                     .|
//     .                   .                   .                    .   |
//   .                   .                   .                   .      |
// |-------------------+-------------------+-------------------+        |
// |*******************|*******************|*******************|        |
// |*******************|*******************|*******************|        |
// |*******************|*******************|*******************|       .|
// |*******************|*******************|*******************|     .  |
// |*******************|*******************|*******************|   .    |
// |*******************|*******************|*******************| .      |
// +-------------------+-------------------+-------------------+        |
// |*******************|*******************|*******************|        |
// |*******************|*******************|*******************|        |
// |*******************|*******************|*******************|       .|
// |*******************|*******************|*******************|     .  |
// |*******************|*******************|*******************|   .    |
// |*******************|*******************|*******************| .      |
// +-------------------+-------------------+-------------------+        |
// |*******************|*******************|*******************|        |
// |*******************|*******************|*******************|        |
// |*******************|*******************|*******************|      .
// |*******************|*******************|*******************|    .
// |*******************|*******************|*******************|  .
// |*******************|*******************|*******************|.
// +-------------------+-------------------+-------------------+

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
