import React, { useState, forwardRef } from "react"
import {useNavigate} from "react-router-dom"

import { AgGridReact } from "ag-grid-react"

import {groupeColDQE, CustomOrdreCol} from '../ColumnsDef/PosteCols'
import {NumeroCol} from '../ColumnsDef/NumeroCols'
import {QuantiteCol} from '../ColumnsDef/QuantiteCols'
import {UniteCol} from '../ColumnsDef/UniteCols'
import {prixUnitaireCol} from '../ColumnsDef/PrixCols'
import {prixTotalCol} from '../ColumnsDef/TotalCols'

import FullHeightGrid from "../GridContainers/FullHeightGrid"
import GridFooter from "../GridContainers/GridFooter"
import GridTop from "../GridContainers/GridTop"

import { treeGridOptions, bottomOptions } from "../GridOptions/GridOptions"

const DQEGrid = forwardRef((props, ref) => {
  const navigate = useNavigate()
  const [rowData] = useState(props.gridData)
  const [bottomData] = useState(props.bottomData)
  const onCellClicked = params => {if (params?.data?.nature === "poste") navigate((params.data))}
  
  const [columnDefs] = useState([
    CustomOrdreCol,
    NumeroCol,
    groupeColDQE(onCellClicked, false),
    UniteCol(),
    QuantiteCol(),
    prixUnitaireCol(),
    prixTotalCol,
  ])

  const gridOptions = {...treeGridOptions, suppressHorizontalScroll: true,  alignedGrids: []}
  const footerOptions = {...bottomOptions(treeGridOptions),  alignedGrids: []}

  gridOptions.alignedGrids.push(footerOptions)
  footerOptions.alignedGrids.push(gridOptions)

  return (
    <FullHeightGrid>
      <GridTop>
        <AgGridReact ref={ref} rowData={rowData} columnDefs={columnDefs} gridOptions={gridOptions} />
      </GridTop>
      <GridFooter>
        <AgGridReact rowData={bottomData} columnDefs={columnDefs} gridOptions={footerOptions} />
      </GridFooter>
    </FullHeightGrid>
  )
})

export default DQEGrid
