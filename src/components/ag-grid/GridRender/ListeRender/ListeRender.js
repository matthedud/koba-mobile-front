import React, {memo} from "react"
import './ListeRender.scss'

const ListeRender = (props) => {
    let values = []
    if (props.value){
        values= props.value
    }
    console.log({values});
    return ( 
        <table className="ag-liste-render" style={{fontFamily: 'inherit'}}>
            <tbody>
                {values.map((ligne) => {
                    return (
                        <tr 
                            key = {ligne._id} 
                        >
                            <td> {ligne.nom}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
export default memo(ListeRender)