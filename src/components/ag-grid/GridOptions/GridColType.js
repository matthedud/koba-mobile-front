import  PourcentRender from '../GridRender/PourcentRender'
import  timeRender from '../GridRender/timeRender'
import  BooleanRender from '../GridRender/BooleanRender'
import  NumberRender from '../GridRender/NumberRender'
import  MoneyRender from '../GridRender/MoneyRender'
import  DateRender from '../GridRender/DateRender'
import  progressRender from '../GridRender/progressRender'
import  ListeRender from '../GridRender/ListeRender'



// const KEY_ENTER = 13
// const noMoveKey = (key) => key === KEY_ENTER

const columnTypes = {
  BooleanType: {
    minWidth: 80,
    maxWidth: 80,
    flex: 1,
    cellClass: ["table-align-center"],
    valueFormatter: BooleanRender,
    suppressMenu: true,
    "footer-cell": (params) => params.value && params?.data?.nature === 'footer',
  },

  DateType: {
    minWidth: 100,
    maxWidth: 200,
    flex: 1,
    valueFormatter: DateRender,
    cellClass: "table-align-center",
    cellEditor: 'CalendarInput',
    "footer-cell": (params) => params.value && params?.data?.nature === 'footer',
  },

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
  
  MultiType: {
    minWidth: 200,
    flex: 3,
    enableRowGroup: false,
    cellClass: "table-align-left",
    cellRenderer: ListeRender,
    cellEditorPopup: true,
    cellEditorPopupPosition: 'over',
    autoHeight: true,
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

  PourcentType: {
    minWidth: 100,
    maxWidth: 250,
    flex: 1,
    cellClass: "table-align-center",
    valueFormatter: PourcentRender,
    cellRenderer: "agAnimateShowChangeCellRenderer",
    suppressMenu: true,
    "footer-cell": (params) => params.value && params?.data?.nature === 'footer',
  },

  PrixType: {
    minWidth: 130,
    maxWidth: 250,
    flex: 1,
    cellClass: "table-align-right",
    valueFormatter: MoneyRender,
    cellRenderer: "agAnimateShowChangeCellRenderer",
    suppressMenu: true,
    "footer-cell": (params) => params.value && params?.data?.nature === 'footer',
  },

  ProgressType: {
    minWidth: 100,
    maxWidth: 300,
    flex: 1,
    cellClass: "progress-cell",
    cellRenderer: progressRender,
    suppressMenu: true,
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
  TimeType: {
    minWidth: 100,
    maxWidth: 250,
    flex: 1,
    cellClass: "table-align-center",
    cellRenderer: timeRender,
    suppressMenu: true,
    "footer-cell": (params) => params.value && params?.data?.nature === 'footer',
  },

  totalType: {
    cellClass: ["table-align-right", "total-row"],
    suppressMenu: true,
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
