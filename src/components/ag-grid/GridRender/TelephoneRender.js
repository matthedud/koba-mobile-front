import React, {memo} from "react"


const TelephoneRender = props => {
    let values = []
    if (props.value){
        values= props.value
    } 
    return (
        <table style={{fontFamily: 'inherit', height:'100%'}}>
            <tbody>
                {values.map((ligne) => {
                    return (
                        <tr 
                            key = {ligne._id} 
                        >
                            <td className={'money-align'}> {ligne.num}</td>
                            <td className={'text-align'}> {' ('+ligne.nom+ ')'}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
export default memo(TelephoneRender)