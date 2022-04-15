import { PointageLink, DAFLink } from "../../ClickLinks/ClickLinks"

export const DateCol = {
  headerName: "Date",
  field: "date",
  type: "DateType",
}

export const DateClickCol = (onCellClicked, hide) => {
  return {
    ...DateCol,
    cellClass: (params) => (!params.node?.group ? "row-pointer" : []),
    onCellClicked,
    hide,
  }
}

export const DatePointageCol = (onCellClicked, hide) => {
  return {
    ...DateClickCol(onCellClicked, hide),
    valueGetter: (params) => params?.data?.pointage?.date,
  }
}

export const DatePrixCol = (onCellClicked, hide) => ({
  ...DateClickCol(onCellClicked, hide),
    valueGetter: (params) => params?.data?.prix?.date,
    aggFunc: "max",
})

export const DateDocCol = (onCellClicked, hide) => ({
    ...DateClickCol(onCellClicked, hide),
    valueGetter: (params) => params?.data?.docAchat?.date,
})

export const DateLivraisonCol = {
  headerName: "Date Livraison",
  field: "date_Livraison",
  type: "DateType",
}

export const DateDAFCol = (onCellClicked, editable) => {
  // const onCellClicked = params => { window.location = (DAFLink(params.data?.id)) }
  return {
    ...DateClickCol(onCellClicked),
    headerTooltip: "Dernière Date du changement de statut",
    cellClassRules: {
      "row-pointer": (params) => params.data && !editable && !params.node.group,
    },
  }
}

export const DateEnvoiRow = (onCellClicked, editable) => {
  return {
    ...DateDAFCol(onCellClicked, editable),
    headerTooltip: "Date Envoyé",
    field: "dateEnvoi",
    headerName: "Date Envoyé",
  }
}
export const DateRetourRow = (onCellClicked, editable) => {
  return {
    ...DateDAFCol(onCellClicked, editable),
    headerTooltip: "Date Retour",
    field: "dateRetour",
    headerName: "Date Retour",
  }
}
