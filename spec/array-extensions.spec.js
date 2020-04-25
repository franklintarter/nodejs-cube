require("../src/array-methods");

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

describe("transpose", () => {
  it("transposes an array with 9 items", () => {
    expect(arr.transpose()).toEqual([6, 3, 0, 7, 4, 1, 8, 5, 2]);
  });
});

describe("reverseTranspose", () => {
  it("reverse transposes an array with 9 items", () => {
    expect(arr.reverseTranspose()).toEqual([2, 5, 8, 1, 4, 7, 0, 3, 6]);
  });
});

describe("take", () => {
  it("takes top 3", () => {
    expect(arr.takeTop()).toEqual([0, 1, 2]);
  });

  it("takes bottom 3", () => {
    expect(arr.takeBottom()).toEqual([6, 7, 8]);
  });

  it("takes right 3", () => {
    expect(arr.takeRight()).toEqual([2, 5, 8]);
  });

  it("takes left 3", () => {
    expect(arr.takeLeft()).toEqual([0, 3, 6]);
  });
});

const other = [9, 9, 9, 9, 9, 9, 9, 9, 9];
describe("set", () => {
  it("sets top 3", () => {
    expect(arr.setTop(other)).toEqual([9, 9, 9, 3, 4, 5, 6, 7, 8]);
  });

  it("sets bottom 3", () => {
    expect(arr.setBottom(other)).toEqual([0, 1, 2, 3, 4, 5, 9, 9, 9]);
  });

  it("sets right 3", () => {
    expect(arr.setRight(other)).toEqual([0, 1, 9, 3, 4, 9, 6, 7, 9]);
  });

  it("sets left 3", () => {
    expect(arr.setLeft(other)).toEqual([9, 1, 2, 9, 4, 5, 9, 7, 8]);
  });
});
