import { isValidbyType } from "./validation/validations";

export const frInt = ({ min = 0, max = 100 } = {}) => {
  // validation
  // console.log(typeof min, typeof max)
  if (!isValidbyType(min, "number") || !isValidbyType(max, "number")) {
    throw new Error("Value of min or max must be number");
  }

  // operation
  let negMax = 1;
  if (min >= max) {
    max = min + 10;
  } else if (max < 0) {
    [max, min] = [Math.abs(min), Math.abs(max)];
    negMax = -1;
  }

  return negMax * (min + Math.floor(Math.random() * Math.floor(max - min + 1)));
};

export const frFloat = ({ min = 0, max = 10.0, precition = 4 } = {}) => {
  // validation
  // console.log(typeof min, typeof max)
  if (
    !isValidbyType(min, "number") ||
    !isValidbyType(max, "number") ||
    !isValidbyType(precition, "number")
  ) {
    throw new Error("Value of min or max or precition must be number");
  }

  // operation
  let negMax = 1;
  if (min >= max) {
    max += min;
  } else if (max < 0) {
    [max, min] = [Math.abs(min), Math.abs(max)];
    negMax = -1;
  }
  return min + Namber((Math.random() * (max - min + 1)).toFixed(precition));
};
