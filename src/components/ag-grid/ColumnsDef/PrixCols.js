import { editCol } from './GridCols'


export const PrixCol = (editable, handler, hide) => {
    return ({
        headerName: "Prix",
        type: 'PrixType',
        hide,
        valueGetter: params=> params.data?.prix?.valeur || params.data?.valeur,
        ...editCol(editable, handler, 'valeur', (params, value) => value),
        valueSetter: params => {
            let value = params.newValue
            if (isNaN(params.newValue)) {
                value = params.newValue.replace(/[^0-9,.-]+/g, "")
                value = Number(value.replace(',', "."))
            }
            handler(params.data, 'valeur', value)
        }
    })
}


export const prixUnitaireCol = (editable, handler, hide) => {
    return {
        headerName: "Prix U.",
        field: "prixUnitaire",
        type: 'PrixType',
        hide,
        cellClassRules: {},
        ...editCol(editable, handler, 'prixUnitaire', (params, value) => value),
        valueSetter: params => {
            let value = params.newValue
            if (isNaN(value)) {
                value = value.replace(/[^0-9,.-]+/g, "")
                value = Number(value.replace(',', "."))
            }
            handler(params.data, 'prixUnitaire', value)
        }
    }
}


export const PrixLivreCol = (editable, handler, hide) => {
    return {
        ...PrixCol(editable, handler),
        headerName: "Prix Livré",
        hide,
    }
}

export const PrixNonLivreCol = (editable, handler, hide) => {
    return {
        ...PrixCol(editable, handler),
        headerName: "Prix U.",
        hide,
        valueGetter: params=> params.data?.prix?.valeurNonLivre || params.data?.valeurNonLivre,
        ...editCol(editable, handler, 'valeurNonLivre', (params, value) => value),
        valueSetter: params => {
            let value = params.newValue
            if (isNaN(value)) {
                value = value.replace(/[^0-9,.-]+/g, "")
                value = Number(value.replace(',', "."))
            }
            handler(params.data, 'valeurNonLivre', value)
        }
    }
}

// export const prixUnitaireCol = (editable, handler, hide) => {
//     return {
//         headerName: "Prix Unitaire",
//         columnGroupShow: 'closed',
//         type: 'PrixType',
//         hide,
//         ...editCol(editable, handler, 'valeurNonLivre', (params, value) => value),
//         valueSetter: params => {
//             let value = params.newValue
//             if (isNaN(params.newValue)) {
//                 value = params.newValue.replace(/[^0-9,.-]+/g, "")
//                 value = Number(value.replace(',', "."))
//             }
//             handler(params.data, 'valeurNonLivre', value)
//         },
//         valueGetter: params => params?.data?.prix?.valeurNonLivre,
//     }
// }


export const DernierPrixCol = (hide) => {
    return {
        ...PrixCol(false),
        headerName: "Dernier Prix",
        headerTooltip: 'Dernier prix offert pour cette founiture',
        valueGetter: params => params?.data?.prix?.dernierPrix,
        hide,
    }
}

export const DepenseMOCol = () => {
    return {
        type: 'PrixType',
        headerName: "Dépense MO",
        field: 'depenseMo',
        aggFunc: "sum",
    }
}


const PrixUnitaireHandler = (params, value) => {
    if (value !== 0 && params.data.quantite !== 0 && (
        params.data.debourseSec) !== 0) {
        return (1 - ((params.data.debourseSec) / (value * params.data.quantite))) * 100
    }
    return 0
}


export const prixUnitaireChiffrageCol = (editable, changePosteDQE) => {
    return ({
        headerName: "Prix U.",
        valueGetter: (params) => {
            if (params.data) {
                if (params?.data?.nature !== 'groupe' && params?.data?.nature !== 'footer') {
                    if (params.data.margeBruteEtude)
                        return ((params.data.debourseSec) /
                            (1 - params.data.margeBruteEtude / 100) / params.data.quantite)
                    else return params.data.prixUnitaire
                }
            }
        },
        type: 'PrixType',
        ...editCol(editable, changePosteDQE, 'margeBruteEtude', PrixUnitaireHandler),
        columnGroupShow: 'closed',
    })
}
