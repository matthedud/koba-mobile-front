import React from "react"
import Select from "react-select"
import './SelectInput.css'

const SelectInput = (props) => {

  const changeHandler =  (value) =>{
    props.onChange({value, name:props.name})
  }

  return (
    <Select
      value={props.value}
      onChange={changeHandler}
      placeholder={props.placeholder}
      options={props.options}
      getOptionLabel={(option) => option.nom}
      getOptionValue={(option) => option._id}
      className="select"
      isMulti={props.isMulti}
    />
  )
}

export default SelectInput
