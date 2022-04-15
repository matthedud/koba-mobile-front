import { editCol, editableHandler } from './GridCols'

export const MargeBruteCol = (editable, changePosteDQE) => {
    return ({
        headerName: "Marge Brute",
        valueGetter: (params) => {
            if (params.data) {
                if (params.data.margeBruteEtude) {
                    return params.data.margeBruteEtude
                }
                if (params?.data?.nature === "poste") {
                    const total = params.data.prixUnitaire * params.data.quantite
                    const debourseSec = (params.data.debourseSec)
                    return total ? (total - debourseSec) * 100 / total : 0
                } if (params?.data?.nature === "footer") {
                    return params.data.margeBrute
                }
            }
        },
        type: 'PourcentType',
        cellClass: "all-center",
        ...editCol(editable, changePosteDQE, 'margeBruteEtude', (params, value) => value),
        cellClassRules: {
            'nonfavorable': 'x < 0 || x > 100',
            'ag-edit-cell': (params) => { return editableHandler(params, editable) },
            'ag-edit-cell-wrong': (params) => {
                if (params.data)
                    return (params?.data?.nature === 'poste'
                        && (params.value === null
                            || isNaN(params.value)))
            },
        },
    })
}

