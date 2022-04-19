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
  if (
    (updatedValues?.overall &&
      +updatedValues.overall < 3 &&
      +updatedValues.overall > 0) ||
    (updatedValues?.deadlineConformity &&
      +updatedValues.deadlineConformity < 3 &&
      +updatedValues.overall > 0) ||
    (updatedValues?.resultConformity &&
      +updatedValues.resultConformity < 3 &&
      +updatedValues.overall > 0) ||
    (updatedValues?.recommendations &&
      +updatedValues.recommendations < 3 &&
      +updatedValues.overall > 0) ||
    (updatedValues?.overallSatisfaction &&
      +updatedValues.overallSatisfaction < 3 &&
      +updatedValues.overall > 0)
  ) {
    if (updatedFields?.adjustment) {
      updatedFields.adjustment.visible = true;
    }
    if (updatedFields?.adjustment2) {
      updatedFields.adjustment2.visible = true;
    }
    if (updatedFields?.existForceMajeure) {
      updatedFields.existForceMajeure.visible = true;
    }
    if (updatedFields?.exporterGuilty) {
      updatedFields.exporterGuilty.visible = true;
    }
    if (updatedFields?.providerGuilty) {
      updatedFields.providerGuilty.visible = true;
    }
    if (updatedFields?.recStandart) {
      updatedFields.recStandart.visible = true;
    }
    if (updatedFields?.additionalServices) {
      updatedFields.additionalServices.visible = true;
    }
    if (updatedFields?.adjustmentDescription) {
      updatedFields.adjustmentDescription.visible = true;
    }
  } else {
    if (updatedFields?.adjustment) {
      updatedFields.adjustment.visible = false;
    }
    if (updatedFields?.adjustment2) {
      updatedFields.adjustment2.visible = false;
    }
    if (updatedFields?.existForceMajeure) {
      updatedFields.existForceMajeure.visible = false;
    }
    if (updatedFields?.exporterGuilty) {
      updatedFields.exporterGuilty.visible = false;
    }
    if (updatedFields?.providerGuilty) {
      updatedFields.providerGuilty.visible = false;
    }
    if (updatedFields?.recStandart) {
      updatedFields.recStandart.visible = false;
    }
    if (updatedFields?.additionalServices) {
      updatedFields.additionalServices.visible = false;
    }
    if (updatedFields?.adjustmentDescription) {
      updatedFields.adjustmentDescription.visible = false;
    }
  }

  return { updatedFields, updatedValues };
}
