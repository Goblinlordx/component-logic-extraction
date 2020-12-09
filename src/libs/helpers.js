export const createWithValues = (keys, value) => () =>
  Object.fromEntries(keys.map((k) => [k, value]));

export const filterKeys = (keys) => {
  const exists = new Set(keys);
  return (state) => {
    return Object.fromEntries(
      Object.entries(state).filter(([k]) => exists.has(k))
    );
  };
};
