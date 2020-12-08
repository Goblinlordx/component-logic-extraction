import Model from "./Model";



class Example3 extends Model {
  constructor(config) {
    super(config);
    this._visibleFields = this._getVisibleFields(this);
  }
  get fields() {
    return ["a", "b", "c"];
  }
  getDefaults() {
    return { ...super.getDefaults(), a: "asdf", c: 3 };
  }
  _getVisibleFields() {
    const visible = new Set(["a", "b"]);
    const aIsLong = (this?.data?.a || "").length > 4;
    if (aIsLong) {
      visible.add("c");
    }
    return visible;
  }
  update(v) {
    super.update(v);
    this._visibleFields = this._getVisibleFields(this);
  }
  fieldVisible(k) {
    return this._visibleFields.has(k);
  }
}

export default Example3;
