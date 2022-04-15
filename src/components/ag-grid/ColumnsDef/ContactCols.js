import { editSelectCol } from './GridCols'
import { TelephoneRender } from "../GridRender"


export const PreNomCol = (editable, Handler, values) => {
    return {
        headerName: "Prénom",
        valueGetter: params => params.data?.prenom,
        type: 'NomType',
        ...editSelectCol(editable, Handler, "type", values),
    }
}


export const NomCol = {
    headerName: "Nom",
    field: "nom",
    valueGetter: (params) => params.data.nom,
    type: "NomType",
  }

  
  export const TelephoneCol = () => {
    return {
      headerName: "Téléphone",
      valueGetter: (params) => {
        if (params.data) return params.data.telephone
      },
      flex: 2,
      minWidth: 150,
      type: "MultiType",
      cellRenderer: TelephoneRender,
    }
  }
  
  export const EmailCol = () => {
    return {
      headerName: "Email",
      valueGetter: (params) => {
        if (params.data) return params.data.email
      },
      type: "NomType",
    }
  }
  
  export const ContactCol = [NomCol, PreNomCol, EmailCol(), TelephoneCol()]