function onChangeHandler({
  values: updatedValues,
  fieldsMap: updatedFields,
  readonlyFields = [
    "areThereSpecialProductFeatures",
    "specialProductFeatures",
    "specialProductFeatures_other",
    "haveInformationAboutPlaceOfExport",
    "informationAboutPlaceOfExport",
    "isDeliveryMethod",
    "taxationSystem",
    "informationAboutFees",
    "isHelpNeed",
    "isHelpNeedGettingDocuments",
    "whatDocument",
    "informationAboutFeesExport",
    "incoterms",
    "contractAmount",
    "currency",
    "productAmount",
    "currencyForProductAmount",
    "сustomsDeliveryAmount",
    "currencyForCustomsDeliveryAmount",
    "formOfPayment",
    "productTnvd",
    "serviceCaption",
    "productTnvdName",
    "productsScope",
    "certifiedProduction",
    "attachCertificates",
    "attachDocumentation",
    "attachDocumentationForInformationAboutFeesExport",
    "attachTechnicalDocuments",
    "attachVideoInfographicsMaterials",
    "attachAdditionalMaterials",
    "additionalInformation",
    "videoInfographicsMaterials",
    "productSelectionButtons",
    "productTnvdValue",
    "productDescription",
    "productCountry",
    "specifyTargetCountryExport",
    "productCatalog",
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
  if (!!updatedValues.rowsNumber) {
    if (updatedValues.serviceTableEditTitle !== "Изменить услугу") {
      updatedValues.serviceTableEditTitle = "Изменить услугу";
    }
    if (updatedValues.productTableEditTitle !== "Изменить товар") {
      updatedValues.productTableEditTitle = "Изменить товар";
    }
    const group = document.querySelector("[class*=KrGroupButtons]");
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
    if (updatedValues.productTableEditTitle === "Изменить товар") {
      updatedValues.productTableEditTitle = "Добавить товар";
    }
    const group = document.querySelector("[class*=KrGroupButtons]");
    if (group) {
      group.setAttribute("style", "display: flex");
    }
  }
  if (updatedValues.productSelectionButtons === "1") {
    const uploadedTnvd = updatedValues.productCatalog;
    const uploadedOkved = updatedValues.serviceCatalog;
    if (uploadedTnvd) {
      updatedValues.productTnvdValue = "";
      updatedValues.productTnvdName = null;
      updatedValues.productCaption = uploadedTnvd.prodDescription;
      updatedValues.productTnvdValue = uploadedTnvd.codeTnved;
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
      updatedValues.productTnvdValue = newTnvd.codeTnved;
    }
    if (newOkved) {
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
  const { productTnvd = [] } = updatedValues;
  if (productTnvd?.length >= 5) {
    updatedFields.productTnvd.canAddRow = false;
  } else {
    updatedFields.productTnvd.canAddRow = true;
  }
  return { updatedValues, updatedFields };
}
