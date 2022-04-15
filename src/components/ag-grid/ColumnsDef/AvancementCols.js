import { QuantiteCol } from "./QuantiteCols"
import { TotalCol } from "./TotalCols"


export const ProgressCol = (hide) => {
  return {
    headerName: "Avancement",
    field: "avancement",
    type: "ProgressType",
    hide: hide,
    aggFunc: "avg",
  }
}


export const AvanementprixTotalCol = (hide) => {
  return {
    ...TotalCol(),
    hide: hide,
    headerName: "Réalisé",
    headerTooltip: "Avancement en €",
    valueGetter: (params) => {
      if (params?.data?.nature === "footer") return params.data.totalAvancement
      return (params.data?.prixUnitaire * params.data?.quantite * params.data?.avancement) / 100
    },
  }
}

export const AvanementPrixSoldeCol = (hide) => {
  return {
    ...TotalCol(),
    hide: hide,
    headerName: "Solde",
    headerTooltip: "Solde en € en fonction de l'avancement",
    valueGetter: (params) => {
      if (params?.data?.nature === "footer") return params.data.solde
      return (1 - params.data?.avancement / 100) * params.data?.quantite * params.data?.prixUnitaire
    },
    cellClassRules: {
      nonfavorable: "x < 0",
    },
  }
}

export const AvancementEuroGroupe = (hide) => {
  return {
    headerName: "Avancement €",
    children: [AvanementprixTotalCol(hide), AvanementPrixSoldeCol(hide)],
  }
}

export const AvancementPourcentGroupe = (hide) => {
  return {
    headerName: "Avancement %",
    children: [ProgressCol(hide)],
  }
}

export const AvanementQuantiteTotalCol = (hide) => {
  return {
    ...QuantiteCol(),
    headerName: "Réalisé",
    hide: hide,
    valueGetter: (params) => {
      if (params?.data?.nature === "poste")
        return (params.data?.quantite * params.data?.avancement) / 100
    },
  }
}

export const AvanementQuantiteSoldeCol = (hide) => {
  return {
    ...QuantiteCol(),
    headerName: "solde",
    hide: hide,
    valueGetter: (params) => {
      if (params?.data?.nature === "poste")
        return params.data?.quantite - (params.data?.quantite * params.data?.avancement) / 100
    },
    cellClassRules: {
      nonfavorable: "x < 0",
    },
  }
}

export const AvancementQuantiteGroupe = (hide) => {
  return {
    headerName: "Avancement Q",
    children: [AvanementQuantiteTotalCol(hide), AvanementQuantiteSoldeCol(hide)],
  }
}
