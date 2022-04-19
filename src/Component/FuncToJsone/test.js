function onChangeHandler({ values, fieldsMap }) {
  const updatedValues = { ...values };
  const updatedFields = { ...fieldsMap };
  const { existForceMajeure, exporterGuilty, providerGuilty, recStandart } =
    updatedValues;
  const editorReasonsList = [
    existForceMajeure ? existForceMajeure[0] : null,
    exporterGuilty ? exporterGuilty[0] : null,
    providerGuilty ? providerGuilty[0] : null,
    recStandart ? recStandart[0] : null,
  ];
  if (
    [
      "recStandart-yes",
      "providerGuilty-yes",
      "exporterGuilty-yes",
      "existForceMajeure-yes",
    ].some((value) => editorReasonsList.includes(value))
  ) {
    updatedFields.adjustmentDescription = {
      ...updatedFields.adjustmentDescription,
      constraints: [{ name: "NotNull" }],
      validationSchema: {
        required: { message: "Заполните поле", html: undefined, path: "" },
      },
      isNeedValidate: true,
    };
  } else {
    updatedFields.adjustmentDescription = {
      ...updatedFields.adjustmentDescription,
      constraints: [],
      validationSchema: {},
      isNeedValidate: false,
    };
  }
  console.log("aaa");

  return { updatedFields, updatedValues };
}
