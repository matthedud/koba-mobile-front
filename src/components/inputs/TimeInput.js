import React from "react"
import TextField from "@mui/material/TextField"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { TimePicker } from "@mui/x-date-pickers/TimePicker"
import frLocale from 'date-fns/locale/fr'
import moment from "moment"
import "./TimeInput.css"

const TimeInput = (props) => {

  const changeHandler = (event) => {
    const value = moment(event).format("HH:mm")
    console.log({ value })
    props.onChange({ value, name: props.name })
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={frLocale}>
      <TimePicker
        label={props.placeholder}
        value={`Sun Apr 17 2022 ${props.value}`}
        className="time-input"
        onChange={changeHandler}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  )
}

export default TimeInput
