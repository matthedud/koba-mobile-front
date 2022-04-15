import React, {memo} from "react"
import './MapsButton.scss'

import { GoLocation } from 'react-icons/go'

const MapsButton = props =>{
    return <span><div >
        <a href={props.value}  target="_blank" rel="noopener noreferrer">
            <GoLocation className={'map-button'}/>
        </a>
</div></span>
}

export default memo(MapsButton)