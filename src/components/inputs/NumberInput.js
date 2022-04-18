import React from "react"
import { InputNumber } from "antd"
import  "./NumberInput.css"

const NumberInput = props => {
  return (
    <InputNumber
      className="number-input"
      type="number"
      {...props}
    />
  )
}

export default NumberInput
