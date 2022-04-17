import React from "react"
import {TimePicker } from 'antd'
import "./TimeInput.css"

const TimeInput = (props) => {
  return <TimePicker className="time-input" type="time" {...props} />
}

export default TimeInput
