

export const NumeroCol = {
    headerName: "N°",
    field: "numero",
    minWidth: 75,
    maxWidth: 90,
    flex: 1,
    headerTooltip: 'Numéro de référence du poste',
    suppressMenu: true,
}
export const NumeroEditCol = (handler, cellClassRules) => ({
  ...NumeroCol,
  valueSetter: (params) => handler(params.data, "numero", params.newValue),
  cellClassRules: { ...NumeroEditCol.cellClassRules, cellClassRules },
})


export const NumDafRow = (onCellClicked, editable) => {
    return {
        ...NumeroCol,
      sort: "asc",
      headerTooltip: "Numéro de la DAF",
      cellClassRules: {
        "row-pointer": (params) => params.data && !editable && !params.node.group,
      },
      onCellClicked,
    }
  }