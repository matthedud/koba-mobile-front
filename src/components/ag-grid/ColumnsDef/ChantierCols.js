import { editSelectCol } from "./GridCols"


export const ChantierCol = (onCellClicked) => {
    return {
        headerName: "Chantiers",
        valueGetter: (params) => params.data?.chantier?.nom,
        type: 'NomType',
        cellClass: (params) => !params.node?.group ? 'row-pointer' : [],
        onCellClicked,
    }
}

export const ChantierTacheCol = (onCellClicked, hide) => {return{
    ...ChantierCol(onCellClicked,),
    valueGetter: (params)=> params.data?.tacheChantier?.poste?.chantier,
    hide,
}}

export const ChantierListeCol = (onCellClicked,) => {return{
    ...ChantierCol(onCellClicked,),
    valueGetter: (params)=> params.data?.nom,
}}


export const ChantierEditCol = (onChantierClicked, editable, handler, values, hide) => {
    console.log({values});
    const editColParams = editSelectCol(editable, handler, "chantier", values)
    return {
        ...ChantierCol(onChantierClicked),
        ...editColParams,
        hide,
        cellClassRules: {
            ...editColParams.cellClassRules,
            'row-pointer': params => {
                return (params.data && !editable && !params.node.group)
            }
        }
    }
}
