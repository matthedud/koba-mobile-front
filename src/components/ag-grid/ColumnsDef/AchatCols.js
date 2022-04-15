import { editSelectCol } from "./GridCols"
import { SelectSearch } from "../GridInput"


export const AchatsCol = (onCellClicked, editable, handler, values) => {
  const editParms = editSelectCol(editable, handler, "achat", values)
  return {
    headerName: "Achats",
    type: "NomType",
    valueGetter: (params) => params?.data?.achat?.nom || ' ',
    onCellClicked:onCellClicked,
    cellEditor: SelectSearch,
    ...editParms,
    cellClassRules: {
      ...editParms.cellClassRules,
      "row-pointer": (params) =>
        !params.node.group &&
        !editable &&
        (params.data?.nom || params.data?.achat || params.data?.prix) &&
        !(params?.data?.nature === "footer" || params.data?._id === "MO"),
    },
  }
}

export const AchatsInfoCol = (onCellClicked, editable, handler, values) => {
  return {
    ...AchatsCol(onCellClicked, editable, handler, values),
    type: "NomType",
    wrapText: !editable,
    autoHeight: !editable,
    valueGetter: (params) => AchatInfoValuGetter(params, editable),
  }
}

export const GroupeAchatInfoCol = (onCellClicked, editable, handler, values) => {
  return {
    ...AchatsInfoCol(onCellClicked, editable, handler, values),
    type: "GroupeType",
    rowGroup: false,
  }
}

export const AchatPrixCol = (onCellClicked, editable, handler, values) => {
  return {
    ...AchatsCol(onCellClicked, editable, handler, values),
    valueGetter: (params) => params?.data?.achat?.prix?.nom || ' ',
  }
}

export const AchatListeCol = (onCellClicked) => {
  return {
    ...AchatsCol(onCellClicked),
    valueGetter: (params) => params?.data?.nom,
  }
}


const AchatInfoValuGetter = (params, editable) => {
  if (params.data) {
    const key = params.data?.prix || params.data
    if (editable) return key?.achat?.nom
    let info = ""
    if (key?.infoAchat)
      key.infoAchat.forEach((ligne) => {
        if (info === "") info = ": " + ligne.nom
        else info += ligne.nom + ", "
      })
    return key?.achat?.nom + info
  }
}
