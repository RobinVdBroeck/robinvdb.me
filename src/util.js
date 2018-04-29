export const classNames = classes =>
  Object.entries(classes)
    .filter(([key, value]) => value)
    .map(([key, value]) => key)
    .join(" ");
