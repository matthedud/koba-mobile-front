const KEY_ENTER = 13
const noMoveKey = (key) => key === KEY_ENTER

const SelectSetter = (params, name, liste, handler) => {
  if (!Array.isArray(params.newValue))
    if (params.newValue) {
      if (params.newValue._id) {
        handler(params.data, name, params.newValue)
      }
      // else {
      //     const newValue = liste.find(element => {
      //     return params.newValue.toUpperCase() === element.nom.toUpperCase()
      // })
      //     handler(params.data, name, newValue)
      // }
    }
}

export const editableHandler = (params, editable) => {
  if (params.data) {
    if (params?.data?.nature === "footer" || params?.data?.nature === "groupe" || params.node.group) {
      return false
    }
    return editable
  } else return false
}

export const editCol = (editable, handler, name, formule, zeroOK) => {
  return {
    editable: (params) => editableHandler(params, editable),
    cellClassRules: {
      "ag-edit-cell": (params) => editableHandler(params, editable),
      "ag-edit-cell-wrong": (params) => {
        return (
          editableHandler(params, editable) &&
          (params.value === null ||
            isNaN(params.value) ||
            params.value === undefined ||
            (params.value === 0 && !zeroOK))
        )
      },
      "footer-cell": (params) => params.value && params?.data?.nature === "footer",
    },
    cellEditorParams: (params) => {
      if (params.data) {
        return {
          handler: handler,
          name: name,
          id: params.data._id,
          refresh: true,
          formule: (value) => formule(params, value),
        }
      }
    },
    valueSetter: (params) => {
      handler(params.data, name, formule(params, Number(params.newValue)))
    },
  }
}

export const editSelectCol = (editable, handler, name, options, zeroOK) => {
  return {
    cellEditorPopup: true,
    suppressKeyboardEvent: (params) => {
      return params.editing && noMoveKey(params.event.keyCode)
    },
    editable: (params) => editableHandler(params, editable),
    cellClassRules: {
      "ag-edit-cell": (params) => editableHandler(params, editable),
      "footer-cell": (params) => params.value && params?.data?.nature === "footer",
      "ag-edit-cell-wrong": (params) => {
        return (
          editableHandler(params, editable) &&
          !zeroOK &&
          (params.value === null || Number(params.value) === 0 || params.value === undefined)
        )
      },
    },
    cellEditorParams: (params) => {
      return {
        values: options,
        value: params.data[name] || params.data.prix[name],
        handler: handler,
        name,
        _id: params.data._id,
      }
    },
    valueSetter: (params) => SelectSetter(params, name, options, handler),
  }
}

export const groupeCol = {
  headerName: "Groupe",
  type: "GroupeType",
}


export const RowDragCol = {
  rowDrag: (params) => params?.data?.nature !== "footer",
  minWidth: 40,
  maxWidth: 40,
  editable: false,
}
