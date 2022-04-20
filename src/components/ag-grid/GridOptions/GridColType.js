import  NumberRender from '../GridRender/NumberRender'

const columnTypes = {
  GroupeType: {
    flex: 5,
    minWidth: 300,
    showRowGroup: true,
    rowGroup: true,
    wrapText: true,
    autoHeight: true,
    cellClass: ["auto-height-column"],
    cellRenderer: "agGroupCellRenderer",
    "footer-cell": (params) => params.value && params?.data?.nature === 'footer',
  },

  NombreType: {
    minWidth: 100,
    maxWidth: 250,
    flex: 1,
    cellClass: "table-align-center",
    valueFormatter: NumberRender,
    cellRenderer: "agAnimateShowChangeCellRenderer",
    suppressMenu: true,
    "footer-cell": (params) => params.value && params?.data?.nature === 'footer',
  },
  
  NomType: {
    minWidth: 200,
    flex: 3,
    cellClass: ["auto-height-column"],
    wrapText: true,
    minHeight: 26,
    // cellEditorPopup: true,
    autoHeight: true,
    cellEditorPopupPosition: 'over',
    "footer-cell": (params) => params.value && params?.data?.nature === 'footer',
  },

  
  TextType: {
    flex: 4,
    wrapText: true,
    minWidth: 200,
    autoHeight: true,
    cellClass: ["auto-height-column"],
    cellEditor: "agLargeTextCellEditor",
    "footer-cell": (params) => params.value && params?.data?.nature === 'footer',
  },
  
  UniteType: {
    minWidth: 70,
    flex: 1,
    maxWidth: 150,
    cellClass: "table-align-center",
    suppressMenu: true,
    "footer-cell": (params) => params.value && params?.data?.nature === 'footer',
  },
}

export default columnTypes
