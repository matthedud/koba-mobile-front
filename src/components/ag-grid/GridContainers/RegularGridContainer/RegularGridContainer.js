export const RegularGrid = (props => {
    return (
        <div className="grid-content">
            <div className="ag-theme-balham grid-nofooter" >
                {props.children}
            </div>
      </div>
      )
})
