import Model from "../libs/VisibleModel";

class Example5Access extends Model {
  get fields() {
    return ["canAccess"];
  }
  getDefaults() {
    return { canAccess: false };
  }
  ACCESS() {
    return this.data.canAccess;
  }
  toggle() {
    this.update({canAccess: !this.data.canAccess});
  }
}

export default Example5Access;
