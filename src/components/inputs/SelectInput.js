import React from "react"
import Select from "react-select"
import "./SelectInput.css"
import "./InputComp.css"

const SelectInput = (props) => {
  const { onChange, name, options, placeholder, isMulti, invalide, value, zeroOK } = props

  const changeHandler = (value) => {
    onChange({ value, name })
  }

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: '1px solid rgb(0, 88, 164)',
      borderRadius: 'none',
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: "rgb(12, 12, 96)",
    }),
    multiValueLabel: (provided, state) => ({
      ...provided,
      color: "rgb(12, 12, 96)",
    }),
    multiValue: (provided, state) => ({
      ...provided,
      color: "rgb(12, 12, 96)",
      backgroundColor:'rgb(198, 228, 255)'
    }),
    menu: (provided, state) => ({
      ...provided,
      zIndex:9999, 
    }),
  }
  return (
    <Select
      value={props.value}
      onChange={changeHandler}
      placeholder={placeholder}
      styles={customStyles}
      options={options}
      getOptionLabel={(option) => option.nom}
      getOptionValue={(option) => option._id}
      className={`select ${invalide && !value ? "invalide" : ""}`}
      isMulti={isMulti}
    />
  )
}

export default SelectInput
