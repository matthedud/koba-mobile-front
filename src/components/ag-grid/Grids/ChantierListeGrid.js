import React, { useState, forwardRef } from "react"
import { useNavigate } from "react-router-dom"

import { AgGridReact } from "ag-grid-react"
import FullHeightGrid from "../GridContainers/FullHeightGrid"

import { ListeOptions } from "../GridOptions/GridOptions"

const ChantierListeGrid = forwardRef((props, ref) => {
  const { statut, data } = props
  const navigate = useNavigate()
  console.log({ data })
  const [rowData] = useState(data)

  const onCellClicked = (params) => navigate(params.data)

  const [columnDefs] = useState([
    {
      headerName: "Chantiers",
      valueGetter: (params) => params.data?.nom,
      type: "NomType",
      cellClass: (params) => (!params.node?.group ? "row-pointer" : []),
      onCellClicked,
    },
  ])

  return (
    <FullHeightGrid>
      <AgGridReact
        key={statut + 1}
        ref={ref}
        rowData={rowData}
        columnDefs={columnDefs}
        gridOptions={ListeOptions}
      />
    </FullHeightGrid>
  )
})

export default ChantierListeGrid
