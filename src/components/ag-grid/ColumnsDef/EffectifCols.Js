import { editCol } from './GridCols'


export const EffectifCol = (editable, changeTacheChantier) => {
    return({
        headerName: "Effectif",
        type: 'NombreType',
        valueGetter: params => params?.data?.effectif,
        aggFunc : 'avg',
        ...editCol(editable, changeTacheChantier, "effectif", (params, value)=>value),
    })
}