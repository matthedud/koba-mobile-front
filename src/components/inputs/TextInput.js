import React from "react"
import Input from "./InputComp"

const TextInput = (props) => {
  return (
    <Input
      className="text-input"
      type="text"
      {...props}
    />
  )
}

export default TextInput
