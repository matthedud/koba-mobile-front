import { editCol } from "./GridCols"

export const TotalCol = () => {
  return {
    headerName: "Total",
    field: "total",
    type: ["PrixType", "totalType"],
    aggFunc: "sum",
  }
}

export const prixTotalCol = {
  headerName: "Total",
  type: ["PrixType", "totalType"],
  editable: false,
  valueGetter: (params) => {
    if (params?.data?.nature === "footer") {
      return params.data.total
    } else {
      return params.data.prixUnitaire * params.data.quantite
    }
  },
  aggFunc: "sum",
}

export const prixTotalDQECol = (hide) => {
  return {
    ...prixTotalCol,
    headerName: "Total Marché",
    columnGroupShow: "closed",
    valueGetter: (params) => {
      if (params?.data?.nature === "footer") return params.data.totalDqe
      return params.data?.prixUnitaire * params.data?.quantiteDqe
    },
    hide,
  }
}

export const prixTotalReelCol = (hide) => {
  return {
    ...prixTotalCol,
    headerName: "Total Métré",
    valueGetter: (params) => {
      if (params?.data?.nature === "footer") return params.data.totalReel
      return params.data?.prixUnitaire * params.data?.quantiteReel
    },
    hide,
  }
}

export const TotalNonLivreCol = (hide) => {
  return {
    ...TotalCol(),
    hide,
    valueGetter: (params) => {
      if (params?.data?.nature === "footer") {
        return params?.data?.total
      }
      const prix = params?.data?.prix?.valeurNonLivre || params?.data?.valeurNonLivre 
      const quantite =  params?.data?.prix?.quantite ||  params?.data?.quantite
      return prix *quantite
    },
  }
}

export const TotalConsultationCol = (hide) => {
  return {
    ...TotalCol(),
    valueGetter: (params) => {
      if (params?.data?.nature === "footer") return params?.data?.total
      return params?.data?.prix?.valeur * params?.data?.prix?.quantite
    },
    hide,
  }
}

export const PrixDifferenceCol = (hide) => {
  return {
    headerName: "Différence €",
    type: ["PrixType", "totalType"],
    hide,
    headerTooltip:
      "Valeur total en € de la difference entre la quantité marché et la quantité réel",
    aggFunc: "sum",
    valueGetter: (params) => {
      if (params?.data?.nature === "footer") return params.data.difference
      return (params.data?.quantiteDqe - params.data?.quantiteReel) * params.data?.prixUnitaire
    },
    cellClassRules: {
      nonfavorable: "x < 0",
      favorable: "x > 0",
    },
  }
}

export const PourcentDifferenceCol = (hide) => {
  return {
    headerName: "Différence %",
    type: ["PourcentType"],
    hide,
    headerTooltip: "Pourcentage de la difference entre la quantité marché et la quantité réel",
    // aggFunc: "sum",
    valueGetter: (params) => {
      if (params?.data?.nature === "footer") return params.data.differencePourcent
      if (params.data?.quantiteDqe)
        return (
          ((params.data?.quantiteDqe - params.data?.quantiteReel) * 100) / params.data?.quantiteDqe
        )
    },
    cellClassRules: {
      nonfavorable: "x < 0",
      favorable: "x > 0",
    },
  }
}

export const TotalChiffrage = (editable, changePosteDQE) => ({
  ...prixTotalCol,
  valueGetter: (params) => {
    if (params.data) {
      if (params.data.margeBruteEtude) {
        return params.data.debourseSec / (1 - params.data.margeBruteEtude / 100)
      }
      if (params?.data?.nature === "poste") return params.data.prixUnitaire * params.data.quantite
      else {
        return params.data.total
      }
    }
  },
  ...editCol(editable, changePosteDQE, "margeBruteEtude", PrixTotalHandler),
})

export const TotalPrixCol = (hide) => {
  return {
    ...TotalCol(),
    hide,
    valueGetter: (params) =>
      params?.data?.nature === "footer"
        ? params?.data?.total
        : params?.data?.prix?.valeur * params?.data?.prix?.quantite,
  }
}

export const TotalAchatCol = (hide) => {
    return {
      ...TotalCol(),
      hide,
      valueGetter: (params) =>
        params?.data?.nature === "footer"
          ? params?.data?.total
          : params?.data?.valeur * params?.data?.quantite,
    }
  }
  

const PrixTotalHandler = (params, value) => {
  if (value !== 0 && params.data.debourseSec !== 0) {
    return (1 - params.data.debourseSec / value) * 100
  }
  return 0
}
