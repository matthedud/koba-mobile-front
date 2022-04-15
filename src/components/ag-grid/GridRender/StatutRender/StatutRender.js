import React, {memo} from "react"
import './StatutRender.scss'

const StatutRender = (props) => {
    const value = props.value?._id;
    switch (value){
        case 'BR': return <div className="brouillon">{props.value?.nom}</div>
        case 'VAL': return <div className="valide">{props.value?.nom}</div>
        case 'FT': return <div className="fait">{props.value?.nom}</div>
        case 'REF': return <div className="nonvalide">{props.value?.nom}</div>
        case 'ENV': return <div className="envoyer">{props.value?.nom}</div>
        case 'PAY': return <div className="valide">{props.value?.nom}</div>
        case 'FIX': return  <div>{props.value?.nom}</div>
        case 'LIE': return  <div>{props.value?.nom}</div>
        case 'EGA': return  <div>{props.value?.nom}</div>
        default : return <div className="brouillon">{props.value?.nom}</div>
    }

}
export default memo(StatutRender)
