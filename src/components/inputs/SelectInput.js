import React from "react"
import Select from "react-select"

const SelectInput = (props) => {
  return (
    <Select
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      options={props.options}
      getOptionLabel={(option) => option.nom}
      getOptionValue={(option) => option._id}
      className="select-input"
      isMulti={props.multi}
    />
  )
}

export default SelectInput
