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

if (
  updatedFields?.productTnvd &&
  updatedFields?.productTnvd?.validationSchema?.minLength?.value !== 4 &&
  updatedFields?.productTnvd?.validationSchema?.maxLength?.value !== 10
) {
  updatedFields.productTnvd.validationSchema = {
    minLength: {
      value: 4,
      message: "Код ТН ВЭД от 4 до 10 знаков знаков включительно",
      path: "",
    },
    maxLength: {
      value: 10,
      message: "Код ТН ВЭД от 4 до 10 знаков знаков включительно",
      path: "",
    },
  };
}
if (!updatedValues.productCountry) {
  updatedValues.productCountry = {
    value: "Россия",
    key: "21b35792-6d8e-4e04-a5d2-a73b9efa8b91",
  };
}
currency = {
  type: "Object",
  value: {
    key: "90538ed7-ee86-4810-a23f-a6403b4719f8",
    value: "Российский рубль",
  },
};

const a = {
  name: "Pattern",
  attributes: {
    regexp:
      "^(|-?[0-9]|-?1[0-9]|-?2[0-9]|-?3[0-9]|-?40|[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|6[0-9]|7[0-9]|8[0-9]|9[0-9]|10[0])$",
    message: "Только числовые символы от -40 до 100",
  },
};

const b = {
  name: "Pattern",
  attributes: {
    regexp: "^([1-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|6[0])$",
    message: "Только числовые символы от 1 до 60",
  },
};

const c = {
  name: "Pattern",
  attributes: {
    regexp:
      "^([0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|6[0-9]|7[0-9]|8[0-9]|9[0-9]|10[0])$",
    message: "Только числовые символы от 0 до 100",
  },
};

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
