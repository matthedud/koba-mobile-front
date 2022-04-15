import { editSelectCol } from "./GridCols"

export const FournisseurCol = (onCellClicked, editable, handler, values, hide) => {
  const editParms = editSelectCol(editable, handler, "fournisseur", values)
  return {
    headerName: "Fournisseurs",
    valueGetter: (params) => params.data?.fournisseur?.nom || params.data?.prix?.fournisseur?.nom ,
    type: "NomType",
    hide,
    autoHeight: false,
    onCellClicked: editable || onCellClicked,
    ...editParms,
    cellClassRules: {
      ...editParms.cellClassRules,
      "row-pointer": (params) =>
        (params?.data?.nom ||
          params?.data?.fournisseur ||
          params?.data?.prix?.fournisseur ||
          params?.data?.docAchat?.fournisseur) &&
        !params?.node?.group &&
        !editable &&
        !(params?.data?.nature === "footer"),
    },
  }
}

export const FournisseurListCol = (onCellClicked) => ({
  ...FournisseurCol(onCellClicked),
  valueGetter: (params) => params?.data?.nom,
})


export const FournisseurDocCol = (onCellClicked, editable, handler, values) => ({
  ...FournisseurCol(onCellClicked, editable, handler, values),
  valueGetter: (params) => params?.data?.docAchat?.fournisseur?.nom,
})
