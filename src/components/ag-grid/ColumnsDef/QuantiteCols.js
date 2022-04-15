
import { editCol } from './GridCols'

const quantiteTacheAchatSetter = (params, value) => {
    const quantiteTache = params.data.quantite / params.data.coefficient
    return value / quantiteTache
}


export const QuantiteCol = (editable, changehandler) => {
    return {
        headerName: "Quantité",
        columnGroupShow: 'closed',
        field:'quantite',
        // valueGetter: params => params?.data?.quantite,
        type: 'NombreType',
        ...editCol(editable, changehandler, 'quantite', (params, value) => value),
        valueSetter: params => {
            let value = params.newValue
            if (isNaN(value)) {
                value = value.replace(/[^0-9,.-]+/g, "")
                value = Number(value.replace(',', "."))
            }
            changehandler(params.data, 'quantite', value)
        }
    }
}

export const QuantitePrixCol = (editable, changehandler) => {
    return {
        ...QuantiteCol(editable, changehandler),
        valueGetter: params => params?.data?.prix?.quantite,
    }
}


export const QuantiteTacheAchatCol = (editable, changeHandler, quantiteTache, jours) => {
    return ({
        headerName: 'Quantite',
        type: 'NombreType',
        valueGetter: (params) => {
            if (params?.data?.quantite || params?.data?.quantite === 0) return params.data.quantite
            return params?.data?.coefficient * quantiteTache
        },
        ...editCol(
            editable,
            changeHandler,
            'coefficient',
            (params, value) => quantiteTacheAchatSetter(params, value)
        ),
    })
}


export const QuantiteDQECol = (editable, changePosteDQE) => {
    return ({
        headerName: "Qu. Marché",
        valueGetter: (params) => params.data?.quantiteDqe,
        type: 'NombreType',
        ...editCol(editable, changePosteDQE, 'quantiteDqe', (params, value) => value),
        columnGroupShow: 'closed',
        headerTooltip: 'Quantité du Marché/devis',
    })
}


export const QuantiteMetreCol = (editable, changePosteDQE) => {
    return ({
        headerName: "Qu. Métrée",
        valueGetter: (params) => params.data?.quantiteReel,
        type: 'NombreType',
        ...editCol(editable, changePosteDQE, 'quantiteReel', (params, value) => value),
        columnGroupShow: 'closed',
        headerTooltip: 'Quantité réel après vérification',
    })
}
