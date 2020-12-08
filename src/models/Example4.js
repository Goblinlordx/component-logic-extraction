import VisibleModel from "./VisibleModel";

class Example4 extends VisibleModel {
  get fields() {
    return ["a", "b", "c"];
  }
  getDefaults() {
    return { ...super.getDefaults(), a: "asdf", c: 3 };
  }
  _getVisibleFields() {
    const visible = new Set(["a", "b"]);
    const aIsLong = (this.data.a || "").length > 4;
    if (aIsLong) {
      visible.add("c");
    }
    return visible;
  }
}

export default Example4;
