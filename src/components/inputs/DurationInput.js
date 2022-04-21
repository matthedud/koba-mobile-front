import React from "react"
import { TimePicker } from "antd"
import moment from "moment"
import "./DurationInput.css"

const DurationInput = (props) => {
  const { value, name, zeroOK, invalide} = props
  const format = "HH:mm"

  const changeHandler = (event) => {
    const value = moment(event).format(format)
    props.onChange({value, name})
  }
  return (
    <TimePicker
      className="duration-input"
      type="time"
      value={moment(value, format)}
      format={format}
      onChange={changeHandler}
      status={`${invalide && !value && !zeroOK ? "error" : ""}`}
    />
  )
}

export default DurationInput
