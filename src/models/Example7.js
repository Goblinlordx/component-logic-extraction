import { createWithValues, filterKeys } from "./helpers";

const fields = ["a", "b", "c", "d", "e"];

const defaults = () => ({
  ...createWithValues(fields, null)(),
  a: "asdf",
  c: 3,
});
const filterValid = filterKeys(fields);

/* eslint-disable no-unused-vars */
const Example7 = (deps) => ({
  init: (data = {}) => ({ ...defaults(), ...filterValid(data) }),
  update: (state = {}, changes = {}) => filterValid({ ...state, ...changes }),
  visibleFields: (state = {}) => {
    const visible = new Set(["a", "b"]);
    if (state?.a?.length > 4) {
      visible.add("c");
    }
    if (visible.has("c") && state?.c > 999) {
      visible.add("d");
      visible.add("e");
    }
    return [...visible];
  },
  visibleData: (state = {}) => {
    const vFields = Example7().visibleFields(state);
    return filterKeys(vFields)(state);
  },
});

export default Example7;
