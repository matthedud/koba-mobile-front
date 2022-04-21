import React from "react"
import { InputNumber } from "antd"
import "./NumberInput.css"
import "./InputComp.css"

const NumberInput = (props) => {
  const { name, onChange, invalide, zeroOK, value } = props

  const changeHandler = (event) => {
    const value = parseFloat(event)
    if (!isNaN(value)) onChange({ value, name })
  }
  return (
    <InputNumber
      {...props}
      className={`number-input ${invalide && !value && !zeroOK ? "invalide" : ""}`}
      type="number"
      onChange={changeHandler}
    />
  )
}

export default NumberInput
