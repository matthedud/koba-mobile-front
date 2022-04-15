import React, {memo} from "react"

const ListeRender = (props) => {
    let values = []
    if (props.value){
        values= props.value
    } 
    return ( 
        <table style={{fontFamily: 'inherit'}}>
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