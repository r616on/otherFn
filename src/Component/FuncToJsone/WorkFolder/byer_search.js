function onChangeHandler({ errors, fieldsMap, values }) {
  const updatedFields = { ...fieldsMap };
  const updatedValues = { ...values };
  if (!!updatedValues.rowsNumber) {
    if (updatedValues.serviceTableEditTitle !== 'Изменить услугу') {
      updatedValues.serviceTableEditTitle = 'Изменить услугу';
    }
    if (updatedValues.productTableEditTitle !== 'Изменить продукцию') {
      updatedValues.productTableEditTitle = 'Изменить продукцию';
    }
    const group = document.querySelector('[class^=KrGroupButtons]');
    if (group) {
      group.setAttribute('style', 'display: none');
      updatedValues.productSelectionButtons = null;
    }
  } else {
    if (!updatedValues.productSelectionButtons) {
      updatedValues.productSelectionButtons = '1';
    }
    if (updatedValues.serviceTableEditTitle === 'Изменить услугу') {
      updatedValues.serviceTableEditTitle = 'Добавить услугу';
    }
    if (updatedValues.productTableEditTitle === 'Изменить продукцию') {
      updatedValues.productTableEditTitle = 'Добавить продукцию';
    }
    const group = document.querySelector('[class^=KrGroupButtons]');
    if (group) {
      group.setAttribute('style', 'display: flex');
    }
  }
  if (updatedValues.productSelectionButtons === '1') {
    const uploadedTnvd = updatedValues.productCatalog;
    const uploadedOkved = updatedValues.serviceCatalog;
    if (updatedValues.productTable.length > 0) {
      const tnvdUpdateFilter = updatedValues.productTable[0].productTnvd
        .split('')
        .slice(0, 4)
        .join('');
      updatedFields.productCatalog.requestParams.filters = [
        { name: 'tnved.code_startlike', value: tnvdUpdateFilter },
        { name: 'caption_like' },
        { name: 'goodsType', value: 'goods' },
        { valueFromField: 'client', name: 'org.uuid' },
      ];
    } else if (updatedValues.productTable.length === 0) {
      updatedFields.productCatalog.requestParams.filters = [
        { name: 'caption_like' },
        { name: 'goodsType', value: 'goods' },
        { valueFromField: 'client', name: 'org.uuid' },
      ];
    }
    if (uploadedTnvd) {
      updatedValues.productTnvd = '';
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
      updatedValues.serviceOkved = '';
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
  if (updatedValues.productSelectionButtons === '2') {
    let newTnvd = updatedValues.productTnvdName;
    const newOkved = updatedValues.serviceOKVEDName;
    if (updatedValues.productTable.length > 0) {
      const tnvdFilter = updatedValues.productTable[0].productTnvd
        .split('')
        .slice(0, 4)
        .join('');
      updatedFields.productTnvdName.requestParams.filters = [
        { name: 'code_startlike', value: tnvdFilter },
      ];
      if (
        typeof updatedValues.productTnvdName === 'string' ||
        updatedValues?.productTnvdName?.value?.length < 4
      ) {
        updatedValues.productTnvdName = {
          value: tnvdFilter,
          key: ' ',
          prodDescription: null,
          naming: '',
          codeTnved: tnvdFilter,
        };
      }
      if (updatedValues?.productTnvdName?.value?.length > 4) {
        if (
          updatedValues.productTnvdName.value.split('').slice(0, 4).join('') ===
          tnvdFilter
        ) {
          updatedFields.productTnvdName.requestParams.filters = [
            { name: 'code_startlike' },
          ];
        }
      }
    } else if (updatedValues.productTable.length === 0) {
      updatedFields.productTnvdName.requestParams.filters = [
        { name: 'code_startlike' },
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
  if (!updatedValues.productCountry) {
    updatedValues.productCountry = {
      value: 'Россия',
      key: '21b35792-6d8e-4e04-a5d2-a73b9efa8b91',
    };
  }
  function fixTableBag(updatedValues) {
    if (typeof updatedValues.productCatalog === 'string') {
      updatedValues.productCatalog = null;
    }
    if (typeof updatedValues.serviceCatalog === 'string') {
      updatedValues.serviceCatalog = null;
    }
    if (typeof updatedValues.productTnvdName === 'string') {
      updatedValues.productTnvdName = null;
    }
    if (typeof updatedValues.serviceOKVEDName === 'string') {
      updatedValues.serviceOKVEDName = null;
    }
  }
  fixTableBag(updatedValues);
  return { updatedValues, updatedFields, updatedErrors: { ...errors } };
}
