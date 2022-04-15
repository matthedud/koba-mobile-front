import "ag-grid-community/dist/styles/ag-grid.css"
import "ag-grid-community/dist/styles/ag-theme-alpine.css"
// import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css"
// import "ag-grid-community/dist/styles/ag-theme-material.css"
import "ag-grid-community/dist/styles/ag-theme-balham.css"

import "./AutosizeGridContainer.scss"

const AutosizeGridContainer = (props) => {
  return (
    <div className="ag-theme-alpine grid-autosize">
      {props.children}
    </div>
  )
}

export default AutosizeGridContainer
