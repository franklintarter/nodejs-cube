const Face = require("../src/face");

describe("Face", () => {
  it("starts out solved", () => {
    const face = new Face("w");
    expect(face.isSolved()).toBe(true);
  });

  it("can set right", () => {
    const face = new Face("w");
    face.setRight({ up: "a", center: "b", down: "c" });
    expect(face.toArray()).toEqual([
      "w",
      "w",
      "a",
      "w",
      "w",
      "b",
      "w",
      "w",
      "c",
    ]);
  });

  it("can transpose", () => {
    const face = new Face("w");
    face.setRight({ up: "a", center: "b", down: "c" });
    face.transpose();
    expect(face.toArray()).toEqual([
      "w",
      "w",
      "w",
      "w",
      "w",
      "w",
      "c",
      "b",
      "a",
    ]);
  });

  it("can reverse transpose", () => {
    const face = new Face("w");
    face.setRight({ up: "a", center: "b", down: "c" });
    face.reverseTranspose();
    expect(face.toArray()).toEqual([
      "a",
      "b",
      "c",
      "w",
      "w",
      "w",
      "w",
      "w",
      "w",
    ]);
  });

  it("can take right", () => {
    const face = new Face("w");
    face.setRight({ up: "a", center: "b", down: "c" });
    expect(face.takeRight()).toEqual({ up: "a", center: "b", down: "c" });
  });
});
