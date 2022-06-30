function onChangeHandler({ errors, fieldsMap, values, prevValues: t }) {
  const updatedFields = { ...fieldsMap };
  const updatedValues = { ...values };

  function cleanBankDetails() {
    updatedValues.exporterCheckingAccount = null;
    updatedValues.exporterAccount = "";
    updatedValues.exporterBankName = "";
    updatedValues.exporterCorrAccount = "";
    updatedValues.exporterBik = "";
    updatedValues.exporterBikReference = null;
  }
  if (
    updatedValues.exporterSelectTypeFillingAccount ===
      "exporterSelectTypeFillingAccount-reference" &&
    t.exporterSelectTypeFillingAccount ===
      "exporterSelectTypeFillingAccount-new"
  ) {
    cleanBankDetails();
  } else if (
    updatedValues.exporterSelectTypeFillingAccount ===
      "exporterSelectTypeFillingAccount-new" &&
    t.exporterSelectTypeFillingAccount ===
      "exporterSelectTypeFillingAccount-reference"
  ) {
    cleanBankDetails();
  }
  function cleanUserData() {
    updatedValues.exporterUser = null;
    updatedValues.exporterSignerLastName = "";
    updatedValues.exporterSignerFirstName = "";
    updatedValues.exporterSignerMiddleName = "";
    updatedValues.exporterSignerFullName = "";
    updatedValues.exporterSignerRFullName = "";
  }
  if (
    updatedValues.exporterSelectTypeSigned ===
      "exporterSelectTypeSigned-reference" &&
    t.exporterSelectTypeSigned === "exporterSelectTypeSigned-new"
  ) {
    cleanUserData();
  } else if (
    updatedValues.exporterSelectTypeSigned === "exporterSelectTypeSigned-new" &&
    t.exporterSelectTypeSigned === "exporterSelectTypeSigned-reference"
  ) {
    cleanUserData();
  }
  let { exporterSignerFullName: a } = updatedValues;
  (updatedValues.exporterSignerLastName === t.exporterSignerLastName &&
    updatedValues.exporterSignerMiddleName === t.exporterSignerMiddleName &&
    updatedValues.exporterSignerFirstName === t.exporterSignerFirstName) ||
    (a = [
      (updatedValues.exporterSignerLastName || "").trim(),
      (updatedValues.exporterSignerFirstName || "").trim(),
      (updatedValues.exporterSignerMiddleName || "").trim(),
    ].join(" "));
  return {
    updatedValues: { ...updatedValues, exporterSignerFullName: a },
    updatedFields,
    updatedErrors: { ...errors },
  };
}
