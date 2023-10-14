const types = ["number", "string", "object", "array", "boolean"];
export const isValidbyType = (value, type) => {
  if (type in types) {
    return false;
  }
  if (type === "object") {
    return (
      Object(value) === value &&
      !Array.isArray(value) &&
      typeof value !== "function"
    );
  } else if (type === "array") {
    return Array.isArray(item);
  } else {
    return type === typeof value;
  }
};
