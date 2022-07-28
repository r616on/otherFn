function onChangeHandler({
  values: updatedValues,
  fieldsMap: updatedFields,
  readonlyFields = [
    "overall",
    "deadlineConformity",
    "resultConformity",
    "recommendations",
    "overallSatisfaction",
    "serviceRating",
    "reviewNotification",
    "exporterReview",
  ],
}) {
  const filedsValues = Object.values(updatedFields).reduce((acc, field) => {
    if (readonlyFields?.find((key) => key === field.id || key === field.name)) {
      return [...acc, field.id];
    }
    return [...acc];
  }, []);
  filedsValues.forEach((field) => {
    if (updatedFields[field] && !updatedFields[field]?.readonly) {
      updatedFields[field] =
        updatedFields[field].uiType === "krDropdown"
          ? {
              ...updatedFields[field],
              readonly: true,
              constraints: [],
              disabled: true,
              required: false,
            }
          : {
              ...updatedFields[field],
              readonly: true,
              constraints: [],
              required: false,
            };
    }
  });
  return { updatedValues, updatedFields };
}
