import React, { useState, forwardRef } from "react"

import { AgGridReact } from "ag-grid-react"

import { QuantiteCol } from "../ColumnsDef/QuantiteCols"
import { TacheChantierCol } from "../ColumnsDef/TacheCols"
import { UniteTacheCol } from "../ColumnsDef/UniteCols"
import { SalarieCol } from "../ColumnsDef/SalarieCols"
import { SuppCol } from "../ColumnsDef/ButtonsCols"

import FullHeightGrid from "../GridContainers/FullHeightGrid"
import { usualGridOptions } from "../GridOptions/GridOptions"
import { DurationCol } from "../ColumnsDef/DureeCols"

const InterventionGrid = forwardRef((props, ref) => {
  const {
    editable,
    data,
    modifHandler,
    clickDelete,
    tacheChantier,
    salaries,
  } = props

  const [columnDefs] = useState([
    SalarieCol(editable, modifHandler, salaries),
    TacheChantierCol(null, editable, modifHandler, tacheChantier),
    DurationCol(editable, modifHandler),
    UniteTacheCol,
    QuantiteCol(editable, modifHandler),
    SuppCol(clickDelete, !editable),
])

  const gridOption = {
    ...usualGridOptions,
    // groupSuppressAutoColumn : false,
    stopEditingWhenCellsLoseFocus: false,
    getRowHeight: (params) => {
        const height = 30
        if (params.node.group) {
            return height;
        } else if (params.data.salarie) {
            if (params.data.salarie.length === 0) {
                return height
            } else { return params.data.salarie.length * height }
        } else { return height }
    },
}

  return (
    <FullHeightGrid>
      <AgGridReact ref={ref} rowData={data} columnDefs={columnDefs} {...gridOption} />
    </FullHeightGrid>
  )
})

export default InterventionGrid
