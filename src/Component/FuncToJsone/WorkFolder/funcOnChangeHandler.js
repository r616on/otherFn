function onChangeHandler({ errors, fieldsMap, values }) {
  const updatedFields = { ...fieldsMap };
  const updatedValues = { ...values };
  if (
    updatedFields?.productTnvd &&
    updatedFields?.productTnvd?.validationSchema?.maxLength?.value !== 4
  ) {
    updatedFields.productTnvd.validationSchema = {
      maxLength: { value: 4, message: "Не более 4 цифр в ТН ВЭД", path: "" },
    };
  }
  if (
    updatedFields?.serviceOkved &&
    updatedFields?.serviceOkved?.validationSchema?.maxLength?.value !== 5
  ) {
    updatedFields.serviceOkved.validationSchema = {
      maxLength: { value: 5, message: "Не более 4 цифр в ОКВЭД", path: "" },
    };
  }
  if (!!updatedValues.rowsNumber) {
    if (updatedValues.serviceTableEditTitle !== "Изменить услугу") {
      updatedValues.serviceTableEditTitle = "Изменить услугу";
    }
    if (updatedValues.productTableEditTitle !== "Изменить продукцию") {
      updatedValues.productTableEditTitle = "Изменить продукцию";
    }
    const group = document.querySelector("[class^=KrGroupButtons]");
    if (group) {
      group.setAttribute("style", "display: none");
      updatedValues.productSelectionButtons = null;
    }
  } else {
    if (!updatedValues.productSelectionButtons) {
      updatedValues.productSelectionButtons = "1";
    }
    if (updatedValues.serviceTableEditTitle === "Изменить услугу") {
      updatedValues.serviceTableEditTitle = "Добавить услугу";
    }
    if (updatedValues.productTableEditTitle === "Изменить продукцию") {
      updatedValues.productTableEditTitle = "Добавить продукцию";
    }
    const group = document.querySelector("[class^=KrGroupButtons]");
    if (group) {
      group.setAttribute("style", "display: flex");
    }
  }
  if (updatedValues.productSelectionButtons === "1") {
    const uploadedTnvd = updatedValues.productCatalog;
    const uploadedOkved = updatedValues.serviceCatalog;
    if (uploadedTnvd) {
      updatedValues.productTnvd = "";
      updatedValues.productTnvdName = null;
      updatedValues.productCaption = uploadedTnvd.prodDescription;
      updatedValues.productTnvd = uploadedTnvd.codeTnved;
      updatedValues.productDescription =
        uploadedOkved?.naming || updatedValues.productDescription;
      updatedValues.productTnvdName = {
        value: uploadedTnvd.codeTnved,
        key: uploadedTnvd.key,
      };
    }
    if (uploadedOkved) {
      updatedValues.serviceOkved = "";
      updatedValues.serviceOKVEDName = null;
      updatedValues.serviceCaption = uploadedOkved.servDescription;
      updatedValues.serviceOkved = uploadedOkved.codeOkved;
      updatedValues.productDescription =
        uploadedOkved?.naming || updatedValues.productDescription;
      updatedValues.serviceOKVEDName = {
        value: uploadedOkved.codeOkved,
        key: uploadedOkved.key,
      };
    }
  }
  if (updatedValues.productSelectionButtons === "2") {
    const newTnvd = updatedValues.productTnvdName;
    const newOkved = updatedValues.serviceOKVEDName;
    if (newTnvd) {
      updatedValues.productCatalog = null;
      updatedValues.productTnvd = newTnvd.codeTnved;
    }
    if (newOkved) {
      updatedValues.serviceCatalog = null;
      updatedValues.serviceOkved = newOkved.codeOcved;
    }
  }
  if (!updatedValues.productCountry) {
    updatedValues.productCountry = {
      value: "Россия",
      key: "21b35792-6d8e-4e04-a5d2-a73b9efa8b91",
    };
  }
  if (updatedValues.contractAmount.length > 0) {
    if (updatedFields?.amountJurContract) {
      updatedFields.amountJurContract.validationSchema = {
        required: {
          html: undefined,
          message: "Заполните поле",
          path: undefined,
        },
      };
    }
  } else {
    if (updatedFields?.amountJurContract) {
      updatedFields.amountJurContract.validationSchema = {};
    }
  }
  if (
    updatedValues?.jurisdiction &&
    updatedValues.jurisdiction.includes("jurisdictionHelp-yes")
  ) {
    updatedValues.jurisdiction = ["jurisdictionHelp-yes"];
    if (
      updatedValues?.arbitrationCourtInfo &&
      updatedValues.arbitrationCourtInfo !== ""
    ) {
      updatedValues.arbitrationCourtInfo = "";
    }
    if (updatedValues?.stateCourtInfo) {
      updatedValues.stateCourtInfo = {};
    }
  }
  return { updatedValues, updatedFields, updatedErrors: { ...errors } };
}
