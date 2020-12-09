class Model {
  constructor(config) {
    this.data = {};
    const defaults = this.getDefaults();
    this.update({ ...defaults, ...config });
  }
  get fields() {
    return [];
  }
  getDefaults() {
    return Object.fromEntries(this.fields.map((k) => [k, null]));
  }
  validate(data) {
    const v = data || {};
    const fields = this.fields || [];
    const validFields = new Set(fields);
    return Object.fromEntries(
      Object.entries(v).filter(([k]) => validFields.has(k))
    );
  }
  update(data) {
    const validated = this.validate(data);
    Object.assign(this.data, validated);
  }
}

export default Model;
