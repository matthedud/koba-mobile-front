import { editSelectCol } from "./GridCols"

export const groupeColTache = (onCellClicked) => {
  return {
    headerName: "Taches",
    valueGetter: (params) => params?.data?.tache?.nom,
    type: "GroupeType",
    onCellClicked,
    cellClassRules: { "row-pointer": (params) => !params.node.group },
  }
}

export const TacheCol = (onCellClicked) => {
  return {
    headerName: "Taches",
    valueGetter: (params) => params?.data?.tache.nom,
    type: "NomType",
    onCellClicked,
    cellClass: (params) => (!params.node?.group ? "row-pointer" : []),
  }
}

export const TacheChantierCol = (onCellClicked, editable, handler, taches) => {
  return {
    headerName: "Taches",
    editable: editable,
    type: "NomType",
    valueGetter: (params) => params.data?.tacheChantier?.tache.nom,
    cellClass: (params) => (!params.node?.group && params.data && !editable ? "row-pointer" : []),
    onCellClicked,
    ...editSelectCol(editable, handler, "tacheChantier", taches),
  }
}

export const MoyenneTacheCol = (hide) => {
  return {
    headerName: "Rend. Entreprise",
    valueGetter: (params) => params.data?.tache?.moyenne,
    type: "NombreType",
    aggFunc: "avg",
    hide,
  }
}
