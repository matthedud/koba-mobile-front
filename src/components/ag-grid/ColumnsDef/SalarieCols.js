import{ editSelectCol, editCol} from './GridCols'


export const SalarieCol = (editable, handler, salaries) => {
    return{
        headerName: "M.O.",
        valueGetter: params=> params.data?.salarie,
        flex : 2,
        minWidth:150,
        enableRowGroup:false,
        type: 'MultiType',
        ...editSelectCol(editable, handler, "salarie", salaries),
    }
}


export const TauxSalarieCol = (editable, handler, hide) => {
    return ({
        headerName: "Taux Horaire",
        valueGetter: params => params.data.tauxHoraire,
        type: 'PrixType',
        hide,
        ...editCol(editable, handler, 'tauxHoraire', (params, value) => value),
        valueSetter: params => {
            let value = params.newValue
            if (isNaN(params.newValue)) {
                value = params.newValue.replace(/[^0-9,.-]+/g, "")
                value = Number(value.replace(',', "."))
            }
            handler(params.data, 'tauxHoraire', value)
        }
    })
}