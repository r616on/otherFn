export const funcToJson = (value) => {
  return `"onChangeHandler": ${JSON.stringify(
    `${value}`.replace(/"/g, "'").replace(/ {1,}/g, " "),
    null,
    0
  ).replace(/\\n/g, "")},`;
};

export const jsonToFunc = (value) => {
  return value.replace('"onChangeHandler": "', "").replace('",', "");
};
