const Cube = require("../src/cube");
const { c } = require("../src/constants");

describe("cube", () => {
  it("starts out solved", () => {
    const cube = new Cube();
    expect(cube.isSolved()).toBe(true);
  });

  it("rotates", () => {
    const cube = new Cube();

    const front = cube.front;
    const left = cube.left;
    const right = cube.right;
    const down = cube.down;
    const back = cube.back;
    const up = cube.up;

    cube.rotate();

    expect(cube.front.color).toBe(up.color);
    expect(cube.left.color).toBe(left.color);
    expect(cube.right.color).toBe(right.color);
    expect(cube.back.color).toBe(down.color);
    expect(cube.down.color).toBe(front.color);
    expect(cube.up.color).toBe(back.color);
  });

  it("rotates right", () => {
    const cube = new Cube();

    const front = cube.front;
    const left = cube.left;
    const right = cube.right;
    const down = cube.down;
    const back = cube.back;
    const up = cube.up;

    cube.rotateRight();

    expect(cube.front.color).toBe(left.color);
    expect(cube.left.color).toBe(back.color);
    expect(cube.right.color).toBe(front.color);
    expect(cube.back.color).toBe(right.color);
    expect(cube.down.color).toBe(down.color);
    expect(cube.up.color).toBe(up.color);
  });

  it("turns down", () => {
    const cube = new Cube();
    const leftColor = cube.left.color;
    cube.turnDown();
    expect(cube.front.toArray()).toEqual([
      c.W,
      c.W,
      c.W,
      c.W,
      c.W,
      c.W,
      leftColor,
      leftColor,
      leftColor,
    ]);
  });

  it("turns up", () => {
    const cube = new Cube();
    const rightColor = cube.right.color;
    cube.turnUp();
    expect(cube.front.toArray()).toEqual([
      rightColor,
      rightColor,
      rightColor,
      c.W,
      c.W,
      c.W,
      c.W,
      c.W,
      c.W,
    ]);
  });

  it("turns right", () => {
    const cube = new Cube();
    const downColor = cube.down.color;
    cube.turnRight();
    expect(cube.front.toArray()).toEqual([
      c.W,
      c.W,
      downColor,
      c.W,
      c.W,
      downColor,
      c.W,
      c.W,
      downColor,
    ]);
  });

  it("turns left", () => {
    const cube = new Cube();
    const upColor = cube.up.color;
    cube.turnLeft();
    expect(cube.front.toArray()).toEqual([
      upColor,
      c.W,
      c.W,
      upColor,
      c.W,
      c.W,
      upColor,
      c.W,
      c.W,
    ]);
  });

  it("is not solved when randomized", () => {
    const cube = new Cube();
    cube.randomize();
    expect(cube.isSolved()).toBe(false);
  });
});
