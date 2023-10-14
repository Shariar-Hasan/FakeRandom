const types = ["number", "string", "object", "array", "boolean", "function"];
const typecheck = (value, type) => {
  // checking every types
  if (!types.find((t) => t === type)) {
    return false;
  } else if (type === "object") {
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

// main function
export const isValidbyType = (value, type) => {
  if (Array.isArray(type)) {
    return type.reduce(
      (retValue, typeValue) => retValue || typecheck(value, typeValue)
    );
  } else {
    return typecheck(value, type);
  }
};
