import { editSelectCol } from "./GridCols"
import { DraggableEventRender } from "../GridRender"

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

export const TacheChantierDragCol = () => {
  return {
    type: "GroupeType",
    headerName: "Taches",
    valueGetter: (params) => params?.data?.nom,
    rowGroup: false,
    minWidth: false,
    wrapText: false,
    cellRendererSelector: (params) => {
      if (!params.node?.group)
        return {
          component: DraggableEventRender,
        }
        return {
          component: "agGroupCellRenderer",
        }
    },
  }
}
