import VisibleModel from "./VisibleModel";

class Example6B extends VisibleModel {
  get fields() {
    return ["c", "d", "e"];
  }
  _getVisibleFields() {
    const visible = new Set();
    const cIsLong = (this.data.c || "").length > 4;
    if (cIsLong) {
      visible.add("d");
      visible.add("e");
    }
    return visible;
  }
}

export default Example6B;
