/* eslint-disable import/prefer-default-export */
export const classNames = (classes) => Object.entries(classes)
  .filter(([_, value]) => value)
  .map(([key, _]) => key)
  .join(' ');
