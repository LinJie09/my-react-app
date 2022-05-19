export const btn = (value, space, setSpace) => {
  if (space === "") {
    setSpace(value);
  } else {
    setSpace(space + value);
  }
};
