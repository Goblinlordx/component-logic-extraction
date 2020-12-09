import Model from "./Model";
import Example6A from "./Example6A";
import Example6B from "./Example6B";

const a = new Example6A();
const b = new Example6B();

class Example6 extends Model {
  constructor(config) {
    super(config);
  }
  get fields() {
    return [...new Set([...a.fields, ...b.fields])];
  }
  getDefaults() {
    return { ...b.getDefaults(), ...a.getDefaults() };
  }
}

export default Example6;
