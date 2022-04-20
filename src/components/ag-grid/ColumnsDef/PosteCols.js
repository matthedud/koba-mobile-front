import { NumeroCol } from "./NumeroCols"
import { UniteCol } from "./UniteCols"

export const groupeColDQE = () => {
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
    cellEditorParams: {
      maxLength: 10000,
      rows: 1,
    },
    keyCreator: (params) => params.data?.nom + params.data?._id,

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


export const DQEClickCols = (clickPoste) => {
  return [
    NumeroCol,
    CustomOrdreCol,
    groupeColDQE(false, clickPoste),
    UniteCol(),
    // QuantiteCol(),
    // prixUnitaireCol(),
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
