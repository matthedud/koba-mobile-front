import deleteButton from '../GridRender/deleteButton'
import editButton from '../GridRender/editButton'
import ViewButton from '../GridRender/ViewButton'
import MapsButton from '../GridRender/MapsButton'
import AdresseRender from '../GridRender/MapsButton/AdresseRender'


export const buttonCol = (onCellClicked, hide, renderer) => {
    return {
        headerName: "",
        minWidth: 50,
        maxWidth: 50,
        editable: false,
        // suppressMenu : true,
        sortable: false,
        onCellClicked: params => {
            if (params.data) if (params?.data?.nature !== 'footer') if (params?.data?.nature !== 'groupe')
                onCellClicked(params)
        },
        hide,
        cellRenderer: (params) => {
            if (params.data) {
                if (params?.data?.nature !== 'footer') {
                    if (params?.data?.nature !== 'groupe') {
                        return renderer
                    }
                }
            }
            return ''
        },
    }
}

export const SuppCol = (onCellClicked, hide) => {
    const checkCantDelete = (params) => {
        if (params?.data?.nature !== 'footer') {
            if (params?.data?.nature === 'groupe') {
                const checkCantDelete = params.node.allLeafChildren.reduce((total, ligne) => {
                    return total || ligne.cantDelete
                }, false)
                return checkCantDelete
            }
            else return params?.data ? params?.data?.cantDelete : true
        } return true
    }
    return {
        ...buttonCol(onCellClicked, hide, deleteButton),
        onCellClicked: params => { if (!checkCantDelete(params)) onCellClicked(params) },
        cellRenderer: (params) => {
            if (!checkCantDelete(params)) return deleteButton
            return ''
        },
    }
}


export const ViewCol = (click, name, hide) => {
    return {
        ...buttonCol(click, hide, ViewButton(name)),
        cellClass: (params) => !params.node?.group ? 'row-pointer' : [],
        minWidth: 40,
        maxWidth: 40,
    }
}

export const EditButtonCol = (click, hide) => {
    return {
        ...buttonCol(click, hide, editButton),
    }
}

export const mapButtonCol = (hide) => {
    return {
        ...buttonCol(res => console.log(), hide, MapsButton),
        valueGetter: AdresseRender,
        cellRenderer: MapsButton,
    }
}