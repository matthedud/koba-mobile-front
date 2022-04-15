
export const UniteCol = (editable, Handler) => {
    return {
        headerName: "Unité",
        type: ['NomType', 'UniteType'],
        autoHeight: false,
        valueGetter: (params) => params?.data?.unite?.nom,
    }
}

export const UniteTacheCol = {
    ...UniteCol(),
    valueGetter: (params)=> params.data?.tache?.unite?.nom,
}

export const UniteTacheChantierCol = {
    ...UniteCol(),
    valueGetter: (params)=> params.data?.tacheChantier?.tache?.unite?.nom,
}


export const UnitePrixCol = (editable, handler) => {
    return {
        ...UniteCol(editable, handler),
        valueGetter: (params) => params?.data?.prix?.unite?.nom
    }
}