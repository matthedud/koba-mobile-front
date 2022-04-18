import React from "react"
import { TimePicker } from "antd"
import moment from "moment"
import "./DurationInput.css"

const DurationInput = (props) => {
  const format = "HH:mm"
  const changeHandler = (value) => {
    console.log({ value })
  }

  return (
    <TimePicker
      className="duration-input"
      type="time"
      value={moment(props.value, format)}
      format={format}
      {...props}
    />
  )
}

export default DurationInput
