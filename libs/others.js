import { frInt } from "./numericals.js";

export const frElement = (array = [0]) => {
  return array[frInt({max : array.length - 1})];
};

export const frBoolean = () => {
  return Math.random() < 0.5;
};
