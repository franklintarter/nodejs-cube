const Cube = require("../src/cube");

describe("cube", () => {
  it("starts out solved", () => {
    const cube = new Cube();
    expect(cube.solved()).toBe(true);
  });
});
