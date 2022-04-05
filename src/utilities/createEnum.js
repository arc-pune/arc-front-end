export const createEnum = (values) => {
  if (!values || !values.length)
    throw Error("Enum values should not be empty.");

  return Object.freeze(
    values.reduce((enumObject, currentValue) => {
      enumObject[currentValue] = currentValue;
      return enumObject;
    }, {})
  );
};
