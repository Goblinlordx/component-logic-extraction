import Model from "./Model";

class VisibleModel extends Model {
  constructor(config) {
    super(config);
    this._setVisibility();
  }
  /* eslint-disable no-unused-vars */
  _getVisibleFields(data) {
    return new Set(this.fields);
  }
  _setVisibility() {
    if (!this.visible) {
      this.visible = {};
    }
    this.visible.fields = this._getVisibleFields(this);
    this.visible.data = Object.fromEntries(
      Object.entries(this.data).filter(([k]) => this.visible.fields.has(k))
    );
  }
  update(v) {
    super.update(v);
    this._setVisibility();
  }
  fieldVisible(k) {
    return this.visible.fields.has(k);
  }
}

export default VisibleModel;
