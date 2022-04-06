function onChangeHandler({ errors, fieldsMap, values }) {
  const updatedFields = { ...fieldsMap };
  const updatedValues = { ...values };
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
    } else if (newOkved) {
      updatedValues.serviceCatalog = null;
      updatedValues.serviceOkved = newOkved.codeOcved;
    }
  }
  if (!updatedValues.productCountry.value) {
    updatedValues.productCountry = {
      value: "Российская Федерация",
      key: "21b35792-6d8e-4e04-a5d2-a73b9efa8b91",
    };
  }
  const { productTable = [] } = updatedValues;
  if (productTable?.length >= 4) {
    updatedFields.productTable.canAddRow = false;
  } else {
    updatedFields.productTable.canAddRow = true;
  }
  const { serviceTable = [] } = updatedValues;
  if (serviceTable?.length >= 4) {
    updatedFields.serviceTable.canAddRow = false;
  } else {
    updatedFields.serviceTable.canAddRow = true;
  }

  return { updatedValues, updatedFields, updatedErrors: { ...errors } };
}
