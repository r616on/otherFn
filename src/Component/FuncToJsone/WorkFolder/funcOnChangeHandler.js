function onChangeHandler({ errors, fieldsMap, values, prevValues: t }) {
  const updatedFields = { ...fieldsMap };
  const updatedValues = { ...values };

  function cleanBankDetails() {
    updatedValues.specialistEscCheckingAccount = null;
    updatedValues.specialistEscAccount = "";
    updatedValues.specialistEscBankName = "";
    updatedValues.specialistEscCorrAccount = "";
    updatedValues.specialistEscBik = "";
    updatedValues.specialistEscBikReference = null;
  }
  if (
    updatedValues.specialistEscSelectTypeFillingAccount ===
      "specialistEscSelectTypeFillingAccount-reference" &&
    t.specialistEscSelectTypeFillingAccount ===
      "specialistEscSelectTypeFillingAccount-new"
  ) {
    cleanBankDetails();
  } else if (
    updatedValues.specialistEscSelectTypeFillingAccount ===
      "specialistEscSelectTypeFillingAccount-new" &&
    t.specialistEscSelectTypeFillingAccount ===
      "specialistEscSelectTypeFillingAccount-reference"
  ) {
    cleanBankDetails();
  }
  function cleanUserData() {
    updatedValues.specialistEscUser = null;
    updatedValues.specialistEscSignerLastName = "";
    updatedValues.specialistEscSignerFirstName = "";
    updatedValues.specialistEscSignerMiddleName = "";
    updatedValues.specialistEscSignerFullName = "";
    updatedValues.specialistEscSignerRFullName = "";
  }
  if (
    updatedValues.specialistEscSelectTypeSigned ===
      "specialistEscSelectTypeSigned-reference" &&
    t.specialistEscSelectTypeSigned === "specialistEscSelectTypeSigned-new"
  ) {
    cleanUserData();
  } else if (
    updatedValues.specialistEscSelectTypeSigned ===
      "specialistEscSelectTypeSigned-new" &&
    t.specialistEscSelectTypeSigned ===
      "specialistEscSelectTypeSigned-reference"
  ) {
    cleanUserData();
  }
  let { specialistEscSignerFullName: a } = updatedValues;
  (updatedValues.specialistEscSignerLastName ===
    t.specialistEscSignerLastName &&
    updatedValues.specialistEscSignerMiddleName ===
      t.specialistEscSignerMiddleName &&
    updatedValues.specialistEscSignerFirstName ===
      t.specialistEscSignerFirstName) ||
    (a = [
      (updatedValues.specialistEscSignerLastName || "").trim(),
      (updatedValues.specialistEscSignerFirstName || "").trim(),
      (updatedValues.specialistEscSignerMiddleName || "").trim(),
    ].join(" "));
  return {
    updatedValues: {
      ...updatedValues,
      specialistEscSignerFullName: a,
    },
    updatedFields,
    updatedErrors: { ...errors },
  };
}
