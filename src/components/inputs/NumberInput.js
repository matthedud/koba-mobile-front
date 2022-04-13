import React from "react"
import Input from "./InputComp"

const NumberInput = () => {
  return (
    <Input
      className="number-input"
      type="number"
      {...props}
    />
  )
}

export default NumberInput
