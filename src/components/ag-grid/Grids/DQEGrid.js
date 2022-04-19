import React, { useState, forwardRef } from "react"

import { AgGridReact } from "ag-grid-react"

import {groupeColDQE, CustomOrdreCol} from '../ColumnsDef/PosteCols'
import {NumeroCol} from '../ColumnsDef/NumeroCols'
import {QuantiteCol} from '../ColumnsDef/QuantiteCols'
import {UniteCol} from '../ColumnsDef/UniteCols'

import FullHeightGrid from "../GridContainers/FullHeightGrid"

import { treeGridOptions } from "../GridOptions/GridOptions"

const DQEGrid = forwardRef((props, ref) => {
  
  const [columnDefs] = useState([
    CustomOrdreCol,
    NumeroCol,
    groupeColDQE(),
    UniteCol(),
    QuantiteCol(),
  ])

  const gridOptions = {...treeGridOptions, suppressHorizontalScroll: true,  alignedGrids: []}

  return (
    <FullHeightGrid>
        <AgGridReact ref={ref} rowData={props.data} columnDefs={columnDefs} gridOptions={gridOptions} />
    </FullHeightGrid>
  )
})

export default DQEGrid
