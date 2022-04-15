import { StatutRender } from '../GridRender'

export const StatutCol = {
    headerName: "Statut",
    field: "statut",
    type: 'NomType',
    autoHeight: false,
    headerTooltip: 'Statut actuel du document',
    minWidth: 100,
    maxWidth: 150,
    cellRenderer: StatutRender,
}



export const StatutDAFCol = (onCellClicked, editable) => {
    // const onCellClicked = params => { if (!editable) window.location = (DAFLink(params.data.id)) } 
    return {
      ...StatutCol,
      headerTooltip: "Statut actuel de la DAF",
      cellClassRules: {
        "row-pointer": (params) => params.data && !editable && !params.node.group,
      },
      onCellClicked,
    }
  }
  