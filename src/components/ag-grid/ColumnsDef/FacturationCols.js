import { DateCol } from './DateCols'
import { editCol } from './GridCols'


const QuantiteCumuleSetter = (params, value) => {
    return value - params.data.facture.quantitePrecedente
}

const QuantiteSoldeSetter = (params, value) => {
    return params.data.quantite - value - params.data.facture.quantitePrecedente
}

const EuroMoisSetter = (params, value) => {
    if (params.data.prixUnitaire !== 0) {
        return value / params.data.prixUnitaire
    }
    return 0
}

const EuroCumuleSetter = (params, value) => {
    if (params.data.prixUnitaire !== 0) {
        return value / params.data.prixUnitaire - params.data.facture.quantitePrecedente
    }
    return 0
}

const EuroSoldeSetter = (params, value) => {
    if (params.data.prixUnitaire !== 0) {
        return params.data.quantite - (value / params.data.prixUnitaire) - params.data.facture.quantitePrecedente
    }
    return 0
}

const PourcentMoisSetter = (params, value) => {
    return params.data.quantite * value / 100
}

const PourcentCumuleSetter = (params, value) => {
    return params.data.quantite * value / 100 - params.data.facture.quantitePrecedente
}


export const NumFactureRow = clickFacture => {
    return {
        headerName: "N°",
        type:'NomType',
        valueGetter: params => 'Situation N°' + params.data?.numero,
        headerTooltip: 'Numéro de référence du poste',
        onCellClicked: clickFacture,
        cellClass: (params) => !params.node?.group && params.data ? 'row-pointer' : [],
    }
}


export const DateFactureRow = clickFacture => {
    return {
        ...DateCol,
        sort: false,
        headerTooltip: 'Date de Facturation',
        onCellClicked: clickFacture,
        cellClass: (params) => !params.node?.group && params.data ? 'row-pointer' : [],
    }
}
export const CumuleRow = () => {
    return {
        headerName: "Cumule",
        field: "cumule",
        type: ['PrixType', 'totalType'],
    }
}
export const QuantitePrecedentRow = (hide) => {
    return ({
        headerName: 'M-1',
        columnGroupShow: 'open',
        valueGetter: (params) => {
            if (params?.data?.nature !== 'footer' && params?.data?.nature !== 'groupe')
                return params.data.facture.quantitePrecedente
        },
        type: 'NombreType',
        hide: hide,
    })
}


export const QuantiteMoisRow = (editable, hide, changePosteDQE) => {
    return ({
        headerName: 'Mois M',
        valueGetter: (params) => {
            if (params?.data?.nature !== 'footer' && params?.data?.nature !== 'groupe')
                return params.data.facture.quantite
        },
        type: 'NombreType',
        hide: hide,
        ...editCol(editable, changePosteDQE, 'quantite', (params, value) => value, true),
    })
}

export const QuantiteCumuleRow = (editable, hide, changePosteDQE) => {
    return ({
        headerName: 'Cumule',
        type: 'NombreType',
        hide: hide,
        valueGetter: (params) => {
            if (params?.data?.nature !== 'footer' && params?.data?.nature !== 'groupe')
                return params.data.facture.quantitePrecedente + params.data.facture.quantite
        },
        ...editCol(editable, changePosteDQE, 'quantite', QuantiteCumuleSetter, true),
    })
}

export const QuantiteSoldeCol = (editable, hide, changePosteDQE) => {
    return ({
        headerName: 'Solde',
        columnGroupShow: 'open',
        type: 'NombreType',
        hide: hide,
        valueGetter: (params) => {
            if (params?.data?.nature !== 'footer' && params?.data?.nature !== 'groupe')
                return params.data.quantite - params.data.facture.quantitePrecedente - params.data.facture.quantite
        },
        ...editCol(editable, changePosteDQE, 'quantite', QuantiteSoldeSetter, true),
    })
}

export const FactureQuantiteCols = (editable, hide, changePosteDQE) => [
    QuantitePrecedentRow(hide),
    QuantiteMoisRow(editable, hide, changePosteDQE),
    QuantiteCumuleRow(editable, hide, changePosteDQE),
    QuantiteSoldeCol(editable, hide, changePosteDQE),
]

export const FactureQuantiteGroupes = (editable, hide, changePosteDQE) => {
    return ({
        headerName: "Facture Q",
        children: FactureQuantiteCols(editable, hide, changePosteDQE)
    })
}


export const EurosPrecedentRow = (hide) => {
    return ({
        headerName: 'M-1',
        columnGroupShow: 'open',
        type: 'PrixType',
        hide: hide,
        aggFunc: "sum",
        valueGetter: (params) => {
            if (params?.data?.nature === 'footer')
                return params.data.totalPrecedent
            else if (params?.data?.nature === 'poste')
                return params.data.prixUnitaire * params.data.facture.quantitePrecedente
        },
    })
}

export const EurosMoisRow = (editable, hide, changePosteDQE) => {
    return ({
        headerName: 'Mois M',
        type: 'PrixType',
        hide: hide,
        aggFunc: "sum",
        valueGetter: (params) => {
            if (params?.data?.nature === 'footer')
                return params.data.totalMois
            else if (params?.data?.nature === 'poste')
                return params.data.prixUnitaire * params.data.facture.quantite
        },
        ...editCol(editable, changePosteDQE, 'quantite', EuroMoisSetter, true),
    })
}


export const EurosCumuleRow = (editable, hide, changePosteDQE) => {
    return ({
        headerName: 'Cumule',
        type: 'PrixType',
        hide: hide,
        aggFunc: "sum",
        valueGetter: (params) => {
            if (params?.data?.nature === 'footer')
                return params.data.totalCumule
            else if (params?.data?.nature === 'poste')
                return (params.data.prixUnitaire
                    * (params.data.facture.quantite + params.data.facture.quantitePrecedente)
                )
        },
        ...editCol(editable, changePosteDQE, 'quantite', EuroCumuleSetter, true),
    })
}


export const EurosSoldeCol = (editable, hide, changePosteDQE) => {
    return ({
        headerName: 'Solde',
        type: 'PrixType',
        hide: hide,
        columnGroupShow: 'open',
        aggFunc: "sum",
        valueGetter: (params) => {
            if (params?.data?.nature === 'footer')
                return params.data.totalSolde
            else if (params?.data?.nature === 'poste')
                return (params.data.prixUnitaire
                    * (params.data.quantite
                        - params.data.facture.quantite
                        - params.data.facture.quantitePrecedente
                    )
                )
        },
        ...editCol(editable, changePosteDQE, 'quantite', EuroSoldeSetter, true),
    })
}

export const FactureEurosRows = (editable, hide, changePosteDQE) => [
    EurosPrecedentRow(hide),
    EurosMoisRow(editable, hide, changePosteDQE),
    EurosCumuleRow(editable, hide, changePosteDQE),
    EurosSoldeCol(editable, hide, changePosteDQE),
]

export const FactureEurosGroupes = (editable, hide, changePosteDQE) => {
    return ({
        headerName: "Facture €",
        children: FactureEurosRows(editable, hide, changePosteDQE)
    })
}

export const PourcentPrecedentRow = (hide) => {
    return ({
        headerName: 'M-1',
        type: 'ProgressType',
        columnGroupShow: 'open',
        hide: hide,
        aggFunc: "avg",
        valueGetter: (params) => {
            if (params?.data?.nature === 'poste' && params.data?.quantite !== 0)
                return params.data.facture.quantitePrecedente * 100 / params.data.quantite
            if (params?.data?.nature === 'footer')
                return params.data.avancementPrecedent
        },
    })
}

export const PourcentMoisRow = (editable, hide, changePosteDQE) => {
    return ({
        headerName: 'Mois M',
        type: 'ProgressType',
        columnGroupShow: 'open',
        hide: hide,
        aggFunc: "avg",
        valueGetter: (params) => {
            if (params?.data?.nature === 'poste' && params.data?.quantite !== 0)
                return params.data.facture.quantite * 100 / params.data.quantite
            if (params?.data?.nature === 'footer')
                return params.data.avancementMois
        },
        ...editCol(editable, changePosteDQE, 'quantite', PourcentMoisSetter, true),
    })
}

export const PourcentCumuleRow = (editable, hide, changePosteDQE) => {
    return ({
        headerName: 'Cumule',
        type: 'ProgressType',
        hide: hide,
        aggFunc: "avg",
        valueGetter: (params) => {
            if (params?.data?.nature === 'poste' && params.data?.quantite !== 0)
                return (params.data.facture.quantitePrecedente + params.data.facture.quantite) * 100 / (params.data.quantite)
            if (params?.data?.nature === 'footer') return params.data.avancementCumule
        },
        ...editCol(editable, changePosteDQE, 'quantite', PourcentCumuleSetter, true),
    })
}


export const FacturePourcentRows = (editable, hide, changePosteDQE) => [
    PourcentPrecedentRow(hide),
    PourcentMoisRow(editable, hide, changePosteDQE),
    PourcentCumuleRow(editable, hide, changePosteDQE),
]

export const FacturePourcentGroupes = (editable, hide, changePosteDQE) => {
    return ({
        headerName: "Facture %",
        children: FacturePourcentRows(editable, hide, changePosteDQE)
    })
}