import "ag-grid-community/dist/styles/ag-grid.css"
import "ag-grid-community/dist/styles/ag-theme-alpine.css"
import "ag-grid-community/dist/styles/ag-theme-balham.css"
// import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css"
// import "ag-grid-community/dist/styles/ag-theme-material.css"


import "./FullHeightGrid.scss"

const FullHeightGrid = (props) => {
  return (
    <div className="ag-theme-alpine grid-full-height">
      {props.children}
    </div>
  )
}

export default FullHeightGrid
