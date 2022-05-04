export const funcToJson = (value, comma) => {
  const result = `"onChangeHandler": ${JSON.stringify(
    `${value}`.replace(/\\n/g, "").replace(/"/g, "'").replace(/ {1,}/g, " "),
    null,
    0
  ).replace(/\\n/g, "")}`;
  if (comma) {
    return result + ",";
  } else {
    return result;
  }
};

export const jsonToFunc = (value) => {
  return value
    .replace(/\\n/g, "")
    .replace('"onChangeHandler": "', "")
    .replace('}"', "}")
    .replace(/,\s*$/, "");
};
