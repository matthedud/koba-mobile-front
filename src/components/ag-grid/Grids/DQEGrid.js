import React, { useState, forwardRef } from "react"

import { AgGridReact } from "ag-grid-react"

import {groupeColDQE, CustomOrdreCol} from '../ColumnsDef/PosteCols'
import {NumeroCol} from '../ColumnsDef/NumeroCols'
import {QuantiteCol} from '../ColumnsDef/QuantiteCols'
import {UniteCol} from '../ColumnsDef/UniteCols'

import FullHeightGrid from "../GridContainers/FullHeightGrid"
import GridFooter from "../GridContainers/GridFooter"
import GridTop from "../GridContainers/GridTop"

import { treeGridOptions, bottomOptions } from "../GridOptions/GridOptions"

const DQEGrid = forwardRef((props, ref) => {
  const [bottomData] = useState(props.bottomData)
  
  const [columnDefs] = useState([
    CustomOrdreCol,
    NumeroCol,
    groupeColDQE(),
    UniteCol(),
    QuantiteCol(),
  ])

  const gridOptions = {...treeGridOptions, suppressHorizontalScroll: true,  alignedGrids: []}
  const footerOptions = {...bottomOptions(treeGridOptions),  alignedGrids: []}

  gridOptions.alignedGrids.push(footerOptions)
  footerOptions.alignedGrids.push(gridOptions)

  return (
    <FullHeightGrid>
      <GridTop>
        <AgGridReact ref={ref} rowData={props.data} columnDefs={columnDefs} gridOptions={gridOptions} />
      </GridTop>
      <GridFooter>
        <AgGridReact rowData={bottomData} columnDefs={columnDefs} gridOptions={footerOptions} />
      </GridFooter>
    </FullHeightGrid>
  )
})

export default DQEGrid
