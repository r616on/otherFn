function onChangeHandler({ errors, fieldsMap, values, modalPath }) {
  const updatedFields = { ...fieldsMap };
  const updatedValues = { ...values };

  if (updatedValues?.docLink && updatedValues?.docLink[0]?.link) {
    if (updatedFields?.attachReport) {
      const a = document.createElement("a");
      a.href = updatedValues?.docLink[0]?.link;
      if (updatedFields.attachReport.tooltip.indexOf(a, 0) === -1) {
        updatedFields.attachReport.tooltip =
          updatedFields.attachReport.tooltip + " " + a;
      }
    }
  }
  if (
    updatedFields?.productTnvd &&
    updatedFields?.productTnvd?.validationSchema?.minLength?.value !== 4 &&
    updatedFields?.productTnvd?.validationSchema?.maxLength?.value !== 6
  ) {
    updatedFields.productTnvd.validationSchema = {
      minLength: {
        value: 4,
        message: "Код ТН ВЭД от 4 до 6 знаков знаков включительно",
        path: "",
      },
      maxLength: {
        value: 6,
        message: "Код ТН ВЭД от 4 до 6 знаков знаков включительно",
        path: "",
      },
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
    } else if (newOkved) {
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
  const { productTable = [] } = updatedValues;
  if (updatedValues?.exportContract === "no") {
    if (updatedFields?.productTooltip?.text) {
      updatedFields.productTooltip.text =
        "Укажите не более 3-х смежных категорий, код ТНВЭД до 6 знаков включительно";
    }
    if (productTable?.length >= 3) {
      updatedFields.productTable.canAddRow = false;
    } else {
      updatedFields.productTable.canAddRow = true;
    }
  } else {
    updatedFields.productTooltip.text = "Код ТНВЭД до 6 знаков включительно";
    updatedFields.productTable.canAddRow = true;
  }
  if (modalPath === "sendersAddressTable") {
    if (updatedValues?.recipientsMatchesDeliveryAddress !== "") {
      updatedValues.recipientsMatchesDeliveryAddress = "";
    }
  }
  if (modalPath === "deliveryAddressTable") {
    if (updatedValues?.sendersCompanyMatchesSenders !== "") {
      updatedValues.sendersCompanyMatchesSenders = "";
    }
  }
  const { sendersAddressTable = [] } = updatedValues;
  if (sendersAddressTable?.length >= 1) {
    updatedFields.sendersAddressTable.canAddRow = false;
  } else {
    updatedFields.sendersAddressTable.canAddRow = true;
  }
  const { deliveryAddressTable = [] } = updatedValues;
  if (deliveryAddressTable?.length >= 1) {
    updatedFields.deliveryAddressTable.canAddRow = false;
  } else {
    updatedFields.deliveryAddressTable.canAddRow = true;
  }
  const {
    extRegion = "",
    extCity = "",
    extCommunity = "",
    extStreet = "",
    extHouse = "",
    extBuilding = "",
    extOffice = "",
    extIndex = "",
  } = updatedValues;
  updatedValues.fullAddressReadOnly = "";
  if (extRegion) {
    updatedValues.fullAddressReadOnly =
      updatedValues.fullAddressReadOnly + "Регион: " + extRegion + ", ";
  }
  if (extCity) {
    updatedValues.fullAddressReadOnly =
      updatedValues.fullAddressReadOnly + "Город: " + extCity + ", ";
  }
  if (extCommunity) {
    updatedValues.fullAddressReadOnly =
      updatedValues.fullAddressReadOnly + "Нас. пункт: " + extCommunity + ", ";
  }
  if (extStreet) {
    updatedValues.fullAddressReadOnly =
      updatedValues.fullAddressReadOnly + "Ул.: " + extStreet + ", ";
  }
  if (extHouse) {
    updatedValues.fullAddressReadOnly =
      updatedValues.fullAddressReadOnly + "Дом: " + extHouse + ", ";
  }
  if (extBuilding) {
    updatedValues.fullAddressReadOnly =
      updatedValues.fullAddressReadOnly +
      "Корпус/Строение: " +
      extBuilding +
      " , ";
  }
  if (extOffice) {
    updatedValues.fullAddressReadOnly =
      updatedValues.fullAddressReadOnly + "Офис/Кв.: " + extOffice + ", ";
  }
  if (extIndex) {
    updatedValues.fullAddressReadOnly =
      updatedValues.fullAddressReadOnly + "Индекс: " + extIndex + ", ";
  }
  if (updatedValues.fullAddressReadOnly.length > 2) {
    updatedValues.fullAddressReadOnly = updatedValues.fullAddressReadOnly.slice(
      0,
      -2
    );
  }
  return { updatedValues, updatedFields, updatedErrors: { ...errors } };
}
