function onChangeHandler({
  errors,
  fieldsMap,
  values,
  prevValues: t,
  utils: { isEmpty, set },
}) {
  const updatedFields = { ...fieldsMap };
  const updatedValues = { ...values };
  console.log(updatedFields);
  console.log("-----");
  console.log(updatedValues);
  const {
    executorAccount,
    executorCorrAccount,
    executorBik,
    resident,
    isExporterAcceptPartnerTemplate,
  } = updatedValues;
  const {
    executorAccount: executorAccountFild,
    executorCorrAccount: executorCorrAccountFild,
    executorBik: executorBikFild,
  } = updatedFields;
  if (
    resident &&
    isExporterAcceptPartnerTemplate !== "isExporterAcceptPartnerTemplate-yes"
  ) {
    const regxp = /^[\d.,]+$/;
    const message = "Только числовые символы";
    if (executorAccount) {
      const isEreExecutorAccount = !executorAccount.match(regxp);
      executorAccountFild.validationSchema.custom = {
        fn: () => isEreExecutorAccount,
        message,
      };
      set(errors, "executorAccount", isEreExecutorAccount ? { message } : null);
    }
    if (executorCorrAccount) {
      const isEreExecutorCorrAccount = !executorCorrAccount.match(regxp);

      executorCorrAccountFild.validationSchema.custom = {
        fn: () => isEreExecutorCorrAccount,
        message,
      };
      set(
        errors,
        "executorCorrAccount",
        isEreExecutorCorrAccount ? { message } : null
      );
    }
    if (executorBik) {
      const isEreExecutorBik = !executorBik.match(regxp);
      executorBikFild.validationSchema.custom = {
        fn: () => isEreExecutorBik,
        message,
      };
      set(errors, "executorBik", isEreExecutorBik ? { message } : null);
    }
  }
  if (
    !updatedValues?.resident &&
    updatedValues.executorSelectTypeFillingAccount ===
      "executorSelectTypeFillingAccount-new"
  ) {
    updatedFields.executorBankName.readonly === true
      ? (updatedFields.executorBankName.readonly = false)
      : null;
    updatedFields.executorBik.readonly === true
      ? (updatedFields.executorBik.readonly = false)
      : null;
  } else {
    updatedFields.executorBankName.readonly === false
      ? (updatedFields.executorBankName.readonly = true)
      : null;
    updatedFields.executorBik.readonly === false
      ? (updatedFields.executorBik.readonly = true)
      : null;
  }
  function cleanBankDetails() {
    updatedValues.executorCheckingAccount = null;
    updatedValues.executorAccount = "";
    updatedValues.executorBankName = "";
    updatedValues.executorCorrAccount = "";
    updatedValues.executorBik = "";
    updatedValues.executorBikReference = null;
  }
  if (
    updatedValues.executorSelectTypeFillingAccount ===
      "executorSelectTypeFillingAccount-reference" &&
    t.executorSelectTypeFillingAccount ===
      "executorSelectTypeFillingAccount-new"
  ) {
    cleanBankDetails();
  } else if (
    updatedValues.executorSelectTypeFillingAccount ===
      "executorSelectTypeFillingAccount-new" &&
    t.executorSelectTypeFillingAccount ===
      "executorSelectTypeFillingAccount-reference"
  ) {
    cleanBankDetails();
  }
  function cleanUserData() {
    updatedValues.executorUser = null;
    updatedValues.executorSignerLastName = "";
    updatedValues.executorSignerFirstName = "";
    updatedValues.executorSignerMiddleName = "";
    updatedValues.executorSignerFullName = "";
    updatedValues.executorSignerRFullName = "";
  }
  if (
    updatedValues.executorSelectTypeSigned ===
      "executorSelectTypeSigned-reference" &&
    t.executorSelectTypeSigned === "executorSelectTypeSigned-new"
  ) {
    cleanUserData();
  } else if (
    updatedValues.executorSelectTypeSigned === "executorSelectTypeSigned-new" &&
    t.executorSelectTypeSigned === "executorSelectTypeSigned-reference"
  ) {
    cleanUserData();
  }
  let { executorSignerFullName: a } = updatedValues;
  (updatedValues.executorSignerLastName === t.executorSignerLastName &&
    updatedValues.executorSignerMiddleName === t.executorSignerMiddleName &&
    updatedValues.executorSignerFirstName === t.executorSignerFirstName) ||
    (a = [
      (updatedValues.executorSignerLastName || "").trim(),
      (updatedValues.executorSignerFirstName || "").trim(),
      (updatedValues.executorSignerMiddleName || "").trim(),
    ].join(" "));
  return {
    updatedValues: { ...updatedValues, executorSignerFullName: a },
    updatedFields,
    updatedErrors: { ...errors },
  };
}
