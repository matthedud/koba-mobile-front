import React, {memo} from "react"
import moment from 'moment'

const timeRender = (props) => {
    const value = moment(props.value, 'HH:mm:ss')

    return (
        <div >
            {value._i}
        </div>
    )
}
export default memo(timeRender)