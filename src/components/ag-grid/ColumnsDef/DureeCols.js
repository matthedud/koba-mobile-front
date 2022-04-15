import { editCol, editableHandler } from './GridCols'

export const DureeTacheCol = (heuresJour, editable, Handler) => {
    return {
        headerName: 'Durée',
        editable: editable,
        valueGetter: params=> params.data?.dureeHeures,
        ...editCol(editable, Handler,"duree", (params, value)=>value),
        cellClassRules: {
            'ag-edit-cell': params => editableHandler(params, editable),
            'ag-edit-cell-wrong' : params => editableHandler(params, editable) && (!params.value)
        },
        valueFormatter : params =>{
            if(params.value || params.value===0){
                const days = Math.floor(params.value / heuresJour)
                const hours = Number((params.value % heuresJour).toFixed(1))
                return (days? `${days}j `:'') + (hours?`${hours}h`:'')
            }
        },
        // aggFunc:"sum",
        headerTooltip: 'Numéro de référence du poste',
        suppressMenu: true,
        width: 90,
}
}



export const JourMOCol = (editable, heuresJour, quantite, changeTacheChantier) => {
    return({
        headerName: "Jours",
        valueGetter: params => {
            if ( heuresJour && params.data?.rendementEquipe)
                return quantite/(params.data.rendementEquipe*heuresJour)
        },
        type: 'NombreType',
        ...editCol(editable, changeTacheChantier, "rendementEquipe",
            (params, value)=>{
                if(heuresJour && value)
                    return quantite/(value*heuresJour)
                else return 0
            }
        ),
    })
}

export const NbJourCol = (hide, heuresJour) => {
    return({
        headerName: "Total (J)",
        valueGetter: params => (params.data?.quantite/(params.data?.rendementEquipe))/(heuresJour),
        type: 'NombreType',
        aggFunc : 'sum',
        hide,
    })
}



export const JourPlanningCol = (hide, heuresJour) => {
    return({
        headerName: "Jour Planning",
        valueGetter: params => params?.data?.dureePlanningPrevisionnelHeure/heuresJour,
        type: 'NombreType',
        aggFunc : 'sum',
        hide,
    })
}

export const DurationCol = () => {
    return {
        headerName: 'Durée',
        editable: false,
        // type: 'TimeType',
        valueGetter: params=> params.data?.dureeHeures,
    }
}