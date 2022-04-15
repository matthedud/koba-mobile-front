import { editableHandler, editSelectCol } from './GridCols'



export const CommentaireCol = (editable, Handler, hide) => {
    return {
        headerName: "Info",
        type: 'TextType',
        hide,
        field: "commentaire",
        valueGetter: (params) => params?.data?.commentaire,
        editable: (params) => editableHandler(params, editable),
        valueSetter: (params) => {
            Handler(params.data, 'commentaire', params.newValue)
            params.data.commentaire = params.newValue
            return true
        },
        cellClassRules: {
            'ag-edit-cell': params => editableHandler(params, editable),
        },
    }
}



export const InfoRow = (hide, editable, handler, values) => {
    return {
        headerName: "Info",
        valueGetter: params => {
            if (params?.data?.prix)
                if (params.data.prix.achat.achatType === "VG")
                    handler(params.data, 'commentaire', params.newValue)
            return params.data.commentaire
        },
        hide,
        valueSetter: (params) => {
            handler(params.data, 'infoAchat', params.newValue)
            params.data.commentaire = params.newValue
            return true
        },
        type: 'MultiType',
        ...editSelectCol(editable, handler, "infoAchat", values, true),
    }
}
