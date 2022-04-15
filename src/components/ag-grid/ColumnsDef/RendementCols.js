import { editCol } from './GridCols'


export const RendemementJourEquipeCol = (editable, rendementHandler, heuresJour) => {
    return({
        headerName: "Rend. (U/J)",
        valueGetter: params => { 
            if (heuresJour) return params?.data?.rendementEquipe/heuresJour
        },
        type: 'NombreType',
        aggFunc : 'avg',
        ...editCol(editable, rendementHandler, "rendementEquipe",
            (params, value)=> value*heuresJour
        ),
    })
}

export const RendemementCol = (editable, changeHandler, hide) => {
    return({
        headerName: "Rend. (U/h)",
        valueGetter: params => params?.data?.rendementEquipe,
        type: 'NombreType',
        aggFunc : 'avg',
        hide,
        ...editCol(editable, changeHandler, "rendementEquipe", (params, value)=>value),
    })
}


export const RendementPlanningCol = (hide, heuresJour) => {
    return({
        headerName: "Rend. Planning: U/J",
        valueGetter: params => (params.data?.quantite
            /(params.data?.dureePlanningPrevisionnelHeure/heuresJour)),
        type: 'NombreType',
        aggFunc : 'avg',
        hide,
    })
}
