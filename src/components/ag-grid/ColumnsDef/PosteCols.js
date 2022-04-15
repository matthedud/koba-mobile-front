import { editableHandler } from "./GridCols"
import { NumeroCol } from "./NumeroCols"
import { UniteCol } from "./UniteCols"
import { prixTotalCol } from "./TotalCols"

export const groupeColDQE = (onCellClicked, editable) => {
  return {
    headerName: "Désignation",
    flex: 10,
    minWidth: 200,
    showRowGroup: true,
    autoHeight: true,
    cellClass: "auto-height-column",
    cellRenderer: "agGroupCellRenderer",
    field: "nom",
    cellRendererParams: { suppressCount: true },
    cellEditor: "agLargeTextCellEditor",
    cellEditorPopup: true,
    onCellClicked,
    cellEditorParams: {
      maxLength: 10000,
      rows: 1,
    },
    keyCreator: (params) => params.data?.nom + params.data?._id,
    editable,
    cellClassRules: {
      ...editableHandler.cellClassRules,
      "row-pointer": (params) => params?.data?.nature === "poste" && !editable,
    },
    valueFormatter: (params) =>
      params?.data?.nature === "poste" ? "• " + params.value : params.value,
  }
}

export const PosteCol = () => {
  return {
    type: "NomType",
    headerName: "Postes",
    valueGetter: (params) => {
      if (params?.data?.poste?.numero)
        return params.data.poste.numero + " - " + params?.data?.poste?.nom
      else return params?.data?.poste?.nom
    },
    cellClassRules: {
      "row-pointer": (params) => (params.data ? true : false),
    },
  }
}

export const CustomOrdreCol = {
  headerName: "Ordre",
  field: "parentIndex",
  type: "NombreType",
  sortable: true,
  sort: "asc",
  hide: true,
}

export const PrepareCol = (handler) => {
  return {
    headerName: "Prép.",
    field: "estPrepare",
    type: "BooleanType",
    headerTooltip: "Indicateur si le poste à été préparé: quantité vérifié et taches attribuées",
    editable: (params) => params?.data?.nature === "poste",
    cellEditorParams: (params) => {
      if (params.data) {
        return {
          value: params.data?.estPrepare,
          handler: handler,
          name: "estPrepare",
          id: params.data?._id,
        }
      }
    },
    valueSetter: (params) => handler(params.data, "estPrepare", params.newValue),
    aggFunc: (params) => {
      let sum = true
      params.values.forEach((value) => (sum = sum && value))
      return sum
    },
    cellClassRules: {
      "cursor-edit": (params) => params?.data?.nature === "poste",
      valide: (params) => params.value,
      nonvalide: (params) => !params.value && params.data?.nature !=="footer",
    },
  }
}

export const DQEClickCols = (clickPoste, editable) => {
  return [
    NumeroCol,
    CustomOrdreCol,
    groupeColDQE(false, clickPoste),
    UniteCol(),
    // QuantiteCol(),
    // prixUnitaireCol(),
    prixTotalCol,
  ]
}

export const MarcheCols = (clickPoste, name) => ({
      headerName: name,
      children: DQEClickCols(clickPoste),
})

export const MarcheClickCols = (clickPoste, editable) => {
  return {
    headerName: "Marché",
    children: DQEClickCols(clickPoste, editable),
  }
}
