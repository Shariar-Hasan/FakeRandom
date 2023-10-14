export const typeError = (type = "", functionName = "") => {
  return new Error("Type " + type + " not fount in " + functionName);
};
export const parameterError = (text) => {
  return new Error(text);
};
