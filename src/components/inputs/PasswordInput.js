import React from "react"
import InputComp from "./InputComp"

const PasswordInput = (props) => {
  return (
    <InputComp
      type="password"
      name={"password"}
      placeholder={"password"}
      id={"password"}
      {...props}
    />
  )
}

export default PasswordInput
