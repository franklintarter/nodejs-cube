const Cube = require("../src/cube");
const { c } = require("../src/constants");

describe("cube", () => {
  it("starts out solved", () => {
    const cube = new Cube();
    expect(cube.isSolved()).toBe(true);
  });

  it("flips", () => {
    const cube = new Cube();

    const front = cube.front;
    const left = cube.left;
    const right = cube.right;
    const bottom = cube.bottom;
    const back = cube.back;
    const top = cube.top;

    cube.flip();

    expect(cube.front.color).toBe(top.color);
    expect(cube.left.color).toBe(left.color);
    expect(cube.right.color).toBe(right.color);
    expect(cube.back.color).toBe(bottom.color);
    expect(cube.bottom.color).toBe(front.color);
    expect(cube.top.color).toBe(back.color);
  });

  it("turns", () => {
    const cube = new Cube();

    const front = cube.front;
    const left = cube.left;
    const right = cube.right;
    const bottom = cube.bottom;
    const back = cube.back;
    const top = cube.top;

    cube.turn();

    expect(cube.front.color).toBe(left.color);
    expect(cube.left.color).toBe(back.color);
    expect(cube.right.color).toBe(front.color);
    expect(cube.back.color).toBe(right.color);
    expect(cube.bottom.color).toBe(bottom.color);
    expect(cube.top.color).toBe(top.color);
  });

  it("spins bottom", () => {
    const cube = new Cube();
    const leftColor = cube.left.color;
    cube.spinBottom();
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

  it("spins top", () => {
    const cube = new Cube();
    const leftColor = cube.left.color;
    cube.spinTop();
    expect(cube.front.toArray()).toEqual([
      leftColor,
      leftColor,
      leftColor,
      c.W,
      c.W,
      c.W,
      c.W,
      c.W,
      c.W,
    ]);
  });

  it("spins right", () => {
    const cube = new Cube();
    const topColor = cube.top.color;
    cube.spinRight();
    expect(cube.front.toArray()).toEqual([
      c.W,
      c.W,
      topColor,
      c.W,
      c.W,
      topColor,
      c.W,
      c.W,
      topColor,
    ]);
  });

  it("spins left", () => {
    const cube = new Cube();
    const topColor = cube.top.color;
    cube.spinLeft();
    expect(cube.front.toArray()).toEqual([
      topColor,
      c.W,
      c.W,
      topColor,
      c.W,
      c.W,
      topColor,
      c.W,
      c.W,
    ]);
  });
});
