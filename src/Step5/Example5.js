import VisibleModel from "../libs/VisibleModel";

class Example5 extends VisibleModel {
  constructor(config, { ACCESS }) {
    super(config);
    this.ACCESS = ACCESS;
    this._setVisibility();
  }
  get fields() {
    return ["a", "b", "c", "d"];
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
    if (this.ACCESS && this.ACCESS("asdf")) {
      visible.add("d");
    }
    return visible;
  }
}

export default Example5;
