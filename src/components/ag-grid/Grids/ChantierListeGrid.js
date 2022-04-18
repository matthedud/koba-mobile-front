import React, { useState, forwardRef } from "react"
import { useNavigate } from "react-router-dom"

import { AgGridReact } from "ag-grid-react"
import FullHeightGrid from "../GridContainers/FullHeightGrid"

import { usualGridOptions } from "../GridOptions/GridOptions"

const ChantierListeGrid = forwardRef((props, ref) => {
  const { statut, data } = props
  const navigate = useNavigate()

  const onCellClicked = (params) => navigate('/chantiers/'+params.data._id)

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
        rowData={data}
        columnDefs={columnDefs}
        gridOptions={usualGridOptions}
      />
    </FullHeightGrid>
  )
})

export default ChantierListeGrid
