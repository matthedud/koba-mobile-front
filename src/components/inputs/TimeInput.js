import React from "react"
import TimePicker from 'react-time-picker'
import moment from "moment"
import "./TimeInput.css"

const TimeInput = (props) => {
  const changeHandler = (value) => {
    console.log({ value })
    props.onChange({ value, name: props.name })
  }

  return (
    <TimePicker
      {...props}
      className="time-input"
      onChange={changeHandler}
    />
  )
}

export default TimeInput
