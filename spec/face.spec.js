const Face = require("../src/face");

describe("Face", () => {
  it("starts out solved", () => {
    const face = new Face("w");
    expect(face.isSolved()).toBe(true);
  });

  it("can set top", () => {
    const face = new Face("w");
    face.setTop({ left: "a", center: "b", right: "c" });
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

  it("can set bottom", () => {
    const face = new Face("w");
    face.setBottom({ left: "a", center: "b", right: "c" });
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
    face.setRight({ top: "a", center: "b", bottom: "c" });
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
    face.setLeft({ top: "a", center: "b", bottom: "c" });
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
    face.setTop({ left: "a", center: "b", right: "c" });
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
    face.setTop({ left: "a", center: "b", right: "c" });
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

  it("can take bottom", () => {
    const face = new Face("w");
    face.setBottom({ left: "a", center: "b", right: "c" });
    expect(face.takeBottom()).toEqual({ left: "a", center: "b", right: "c" });
  });

  it("can take top", () => {
    const face = new Face("w");
    face.setTop({ left: "a", center: "b", right: "c" });
    expect(face.takeTop()).toEqual({ left: "a", center: "b", right: "c" });
  });

  it("can take right", () => {
    const face = new Face("w");
    face.setRight({ top: "a", center: "b", bottom: "c" });
    expect(face.takeRight()).toEqual({ top: "a", center: "b", bottom: "c" });
  });

  it("can take left", () => {
    const face = new Face("w");
    face.setLeft({ top: "a", center: "b", bottom: "c" });
    expect(face.takeLeft()).toEqual({ top: "a", center: "b", bottom: "c" });
  });
});
