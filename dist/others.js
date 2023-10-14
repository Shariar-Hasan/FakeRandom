import { colors } from "../datasets/otherDatas.js";
import { frInt } from "./numericals.js";
const hexString = "0123456789ABCDEF";

// ****************color Random********* ***************************
export const frColor = (code = "color") => {
  if (code === "color") {
    return frElement(colors);
  } else if (code === "hex") {
    return [1, 2, 3, 4, 5, 6].reduce(
      (hex, it) => hex + hexString[frInt({ max: hexString.length - 1 })],
      "#"
    );
  } else if (code === "rgb") {
    return [",", ",", ")"].reduce(
      (rgb, it) => rgb + frInt({ max: 255 }) + it,
      "rgb("
    );
  } else {
    throw new Error("Wrong color code");
  }
};
export const frElement = (array = [0]) => {
  return array[frInt({ max: array.length - 1 })];
};

export const frBoolean = () => {
  return Math.random() < 0.5;
};
