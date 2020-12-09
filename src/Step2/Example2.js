import Model from "../libs/Model";

class Example2 extends Model {
  get fields() {
    return ["a", "b", "c"];
  }
  getDefaults() {
    return { ...super.getDefaults(), a: "asdf", c: 3 };
  }
}

export default Example2;
