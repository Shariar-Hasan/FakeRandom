import { isValidbyType } from "./validation/validations";

export const frInt = ({ min = 0, max = 10 } = {}) => {
  if (isValidbyType(min, "Number"))
    if (min >= max) {
      max += min;
    }
  return min + Math.floor(Math.random() * Math.floor(max - min + 1));
};

export const frFloat = ({ min = 0, max = 10.0, precition = 4 } = {}) => {
  if (min >= max) {
    max += min;
  }
  return min + +(Math.random() * (max - min + 1)).toFixed(precition);
};
