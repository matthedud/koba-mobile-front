import React from "react"
import Select from "react-select"
import './SelectInput.css'

const SelectInput = (props) => {
  return (
    <Select
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      options={props.options}
      getOptionLabel={(option) => option.nom}
      getOptionValue={(option) => option._id}
      className="select"
      isMulti={props.multi}
    />
  )
}

export default SelectInput
