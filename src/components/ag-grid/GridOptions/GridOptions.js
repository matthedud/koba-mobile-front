import columnTypes from "./GridColType"
import { localeText } from "./GridLanguage"
import "ag-grid-enterprise"
import "./Grid.scss"

const getDataPath = (data) => data.hierarchie

const getRowId = (params) => params?.data?.idForm || params?.data?._id

const getRowHeight = params => params.node.group ? 27 : null;

export const usualGridOptions = {
  localeText,
  headerHeight: 25,
  rowHeight : 37,
  getRowHeight,
  defaultColDef: {
    editable: false,
    resizable: true,
    sortable: true,
    filter: true,
    enableRowGroup: true,
  },
  enableCharts: true,
  animateRows: true,

  getRowId,
  suppressRowClickSelection: true,
  suppressRowDeselection: true,
  enterMovesDown: true,
  groupDisplayType: "custom",
  groupDefaultExpanded: -1,
  suppressAggFuncInHeader: true,
  columnTypes,
  rowClassRules: {
    "grid-groupe": (params) => params.node.group || params?.data?.nature === "groupe",
  },
}

export const treeGridOptions = {
  ...usualGridOptions,
  treeData: true,
  getDataPath: getDataPath,
}
