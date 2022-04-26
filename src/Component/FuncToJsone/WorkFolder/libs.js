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
