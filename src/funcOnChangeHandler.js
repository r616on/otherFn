function onChangeHandler({ errors, fields, values }) {
  const updatedValues = { ...values };
  if (updatedValues.productSelectionButtons === "1") {
    const uploadedTnvd = updatedValues.productCatalog;
    const uploadedOkved = updatedValues.serviceCatalog;
    if (uploadedTnvd) {
      updatedValues.productTnvd = "";
      updatedValues.productTnvdName = null;
      updatedValues.productCaption = uploadedTnvd.prodDescription;
      updatedValues.productTnvd = uploadedTnvd.codeTnved;
      updatedValues.productDescription = uploadedTnvd.naming;
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
      updatedValues.productDescription = uploadedOkved.naming;
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
  if (!updatedValues.estimatedTransportationCostCurrencyIndicativeRate.value) {
    updatedValues.estimatedTransportationCostCurrencyIndicativeRate = {
      value: "РОССИЙСКИЙ РУБЛЬ ",
      key: "13727045-8b49-4bc3-923e-03d52bcf93ad",
    };
  }
  return {
    updatedValues,
    updatedFields: [...fields],
    updatedErrors: { ...errors },
  };
}
