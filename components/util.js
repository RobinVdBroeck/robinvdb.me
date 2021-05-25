export const classNames = (classes) =>
  Object.entries(classes)
    .filter(([_, value]) => value)
    .map(([key, _]) => key)
    .join(" ");
