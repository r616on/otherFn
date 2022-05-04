function onChangeHandler({ errors, fieldsMap, values }) {
  const updatedFields = { ...fieldsMap };
  const updatedValues = { ...values };
  if (updatedValues?.docLink && updatedValues?.docLink[0]?.link) {
    if (updatedFields?.attachReport) {
      updatedFields.attachReport.tooltip = `Предоставьте отчетные материалы, проект доработанного экспортного контракта, подготовленные в соответствии с разделом 3.1, соответствующие разделу 3.2 <a href=${updatedValues?.docLink[0]?.link} target='_blank' rel='nofollow noopener'>стандарта</a>`;
    }
  }
  return { updatedValues, updatedFields, updatedErrors: { ...errors } };
}
