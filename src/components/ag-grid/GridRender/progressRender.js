import React, {memo} from "react"

import { Progress } from 'antd'

const progressRender = (props) => {
    const value = Number(props.value).toFixed(1)

    return (
        value<100 ?
        <Progress
            percent={value}
            strokeColor={"rgb(30, 1, 120)"}
        />
        :
        value>100 ? <Progress 
            strokeColor={"rgb(146, 1, 1)"}
            percent={value}
            status={'exception'}/>
        : <Progress 
            strokeColor={"rgb(27, 90, 11)"}
            percent={value}
            status={'success'}
        />
    )
}
export default memo(progressRender)
