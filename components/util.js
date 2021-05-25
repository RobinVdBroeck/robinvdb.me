export const classNames = classes =>
  Object.entries(classes)
    .filter(([key, value]) => value)
    .map(([key, value]) => key)
    .join(" ");

export const toggle = x => !x;

export const times = (x, cb) => {
  let arr = [];
  for (let i = 0; i < x; i++) {
    arr.push(i);
  }
  return arr;
};
