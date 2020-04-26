const Face = require("../src/face");

describe("Face", () => {
  it("starts out solved", () => {
    const face = new Face("w");
    expect(face.isSolved()).toBe(true);
  });

  it("can set up", () => {
    const face = new Face("w");
    face.setUp({ left: "a", center: "b", right: "c" });
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

  it("can set down", () => {
    const face = new Face("w");
    face.setDown({ left: "a", center: "b", right: "c" });
    expect(face.toArray()).toEqual([
      "w",
      "w",
      "w",
      "w",
      "w",
      "w",
      "a",
      "b",
      "c",
    ]);
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

  it("can set left", () => {
    const face = new Face("w");
    face.setLeft({ up: "a", center: "b", down: "c" });
    expect(face.toArray()).toEqual([
      "a",
      "w",
      "w",
      "b",
      "w",
      "w",
      "c",
      "w",
      "w",
    ]);
  });

  it("can transpose", () => {
    const face = new Face("w");
    face.setUp({ left: "a", center: "b", right: "c" });
    face.transpose();
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

  it("can reverse transpose", () => {
    const face = new Face("w");
    face.setUp({ left: "a", center: "b", right: "c" });
    face.reverseTranspose();
    expect(face.toArray()).toEqual([
      "c",
      "w",
      "w",
      "b",
      "w",
      "w",
      "a",
      "w",
      "w",
    ]);
  });

  it("can take down", () => {
    const face = new Face("w");
    face.setDown({ left: "a", center: "b", right: "c" });
    expect(face.takeDown()).toEqual({ left: "a", center: "b", right: "c" });
  });

  it("can take up", () => {
    const face = new Face("w");
    face.setUp({ left: "a", center: "b", right: "c" });
    expect(face.takeUp()).toEqual({ left: "a", center: "b", right: "c" });
  });

  it("can take right", () => {
    const face = new Face("w");
    face.setRight({ up: "a", center: "b", down: "c" });
    expect(face.takeRight()).toEqual({ up: "a", center: "b", down: "c" });
  });

  it("can take left", () => {
    const face = new Face("w");
    face.setLeft({ up: "a", center: "b", down: "c" });
    expect(face.takeLeft()).toEqual({ up: "a", center: "b", down: "c" });
  });
});
