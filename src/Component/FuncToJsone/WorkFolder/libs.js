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

if (updatedValues?.docLink && updatedValues?.docLink[0]?.link) {
  if (updatedFields?.attachReport) {
    const link = updatedValues.docLink[0].link;
    const linkFull = (
      <a href="" target="_blank" rel="nofollow noopener">
        стандарта
      </a>
    );
    if (updatedFields.attachReport.tooltip.indexOf(link, 0) === -1) {
      updatedFields.attachReport.tooltip =
        updatedFields.attachReport.tooltip + " " + linkFull;
    }
  }
}
const f = {
  gridAttributes: {
    style: {
      "margin-left": "21px",
    },
    lg: 6,
  },
  id: "lawAmountCountry",
};
const validParams = [
  {
    name: "Size",
    attributes: {
      min: 4,
      max: 6,
      message: "Код ТН ВЭД от 4 до 6 знаков знаков включительно",
    },
  },
];
if (typeof updatedValues.productCatalog === "string") {
  updatedValues.productCatalog = null;
}
if (typeof updatedValues.serviceCatalog === "string") {
  updatedValues.serviceCatalog = null;
}
if (updatedValues?.serviceCost && updatedValues?.penaltyAmount) {
  updatedValues.amountIncludingPenalty = (
    +updatedValues.serviceCost - +updatedValues.penaltyAmount
  ).toFixed(2);
}
function boundFields(updatedValues) {
  if (typeof updatedValues?.store === "object") {
    if (
      updatedValues.store?.pricePartnerServiceD &&
      updatedValues.store?.pricePartnerServiceD !== updatedValues?.amount
    ) {
      updatedValues.amount = updatedValues.store.pricePartnerServiceD;
    }
    if (
      updatedValues.store?.partnerServiceCompositionD &&
      updatedValues.store?.partnerServiceCompositionD !==
        updatedValues?.serviceComposition
    ) {
      updatedValues.serviceComposition =
        updatedValues.store.partnerServiceCompositionD;
    }
  }
}

const filters = [
  {
    name: "and",
    value: [
      {
        name: "code_like_ci",
      },
      {
        name: "etpState",
        value: "5",
      },
    ],
  },
];
const sanctions = {
  id: "sanctions",
  type: "String",
  uiType: "checkbox",
  name: "sanctions",
  value: "sanctions-2",
  constraints: [
    {
      name: "NotNull",
    },
  ],
  label:
    "Входит ли страна контрагента и сам контрагент в санкционные списки США и/или Евросоюза? ",
  data: [
    {
      label: "Да, США",
      value: "0",
      key: "sanctions-0",
      conditionals: [
        {
          type: "disabled",
          equalName: "sanctions",
          equalValue: ["2", "noInfo"],
        },
      ],
    },
    {
      label: "Да, Евросоюз",
      value: "1",
      key: "sanctions-1",
      conditionals: [
        {
          type: "disabled",
          equalName: "sanctions",
          equalValue: ["2", "noInfo"],
        },
      ],
    },
    {
      label: "Нет",
      value: "2",
      key: "sanctions-2",
      conditionals: [
        {
          type: "disabled",
          equalName: "sanctions",
          equalValue: ["0", "1", "noInfo"],
        },
      ],
    },
    {
      label: "Не располагаю информацией",
      value: "noInfo",
      key: "sanctions-noInfo",
      conditionals: [
        {
          type: "disabled",
          equalName: "sanctions",
          equalValue: ["0", "1", "2"],
        },
      ],
    },
  ],
};

function supFilterTNVD() {
  if (updatedValues.productSelectionButtons === "1") {
    const uploadedTnvd = updatedValues.productCatalog;
    const uploadedOkved = updatedValues.serviceCatalog;

    if (updatedValues.productTable.length > 0) {
      const tnvdUpdateFilter = updatedValues.productTable[0].productTnvd
        .split("")
        .slice(0, 4)
        .join("");

      updatedFields.productCatalog.requestParams.filters = [
        { name: "tnved.code_startlike", value: tnvdUpdateFilter },
        {
          name: "caption_like",
        },
        {
          name: "goodsType",
          value: "goods",
        },
        {
          valueFromField: "client",
          name: "org.uuid",
        },
      ];
    } else if (updatedValues.productTable.length === 0) {
      updatedFields.productCatalog.requestParams.filters = [
        {
          name: "caption_like",
        },
        {
          name: "goodsType",
          value: "goods",
        },
        {
          valueFromField: "client",
          name: "org.uuid",
        },
      ];
    }

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
    let newTnvd = updatedValues.productTnvdName;
    const newOkved = updatedValues.serviceOKVEDName;

    if (updatedValues.productTable.length > 0) {
      const tnvdFilter = updatedValues.productTable[0].productTnvd
        .split("")
        .slice(0, 4)
        .join("");

      updatedFields.productTnvdName.requestParams.filters = [
        { name: "code_startlike", value: tnvdFilter },
      ];

      if (
        typeof updatedValues.productTnvdName === "string" ||
        updatedValues?.productTnvdName?.value?.length < 4
      ) {
        updatedValues.productTnvdName = {
          value: tnvdFilter,
          key: " ",
          prodDescription: null,
          naming: "",
          codeTnved: tnvdFilter,
        };
      }

      if (updatedValues?.productTnvdName?.value?.length > 4) {
        if (
          updatedValues.productTnvdName.value.split("").slice(0, 4).join("") ===
          tnvdFilter
        ) {
          updatedFields.productTnvdName.requestParams.filters = [
            { name: "code_startlike" },
          ];
        }
      }
    } else if (updatedValues.productTable.length === 0) {
      updatedFields.productTnvdName.requestParams.filters = [
        { name: "code_startlike" },
      ];
    }

    if (newTnvd) {
      updatedValues.productCatalog = null;
      updatedValues.productTnvd = newTnvd.codeTnved;
    }
    if (newOkved) {
      updatedValues.serviceCatalog = null;
      updatedValues.serviceOkved = newOkved.codeOcved;
    }
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
}
