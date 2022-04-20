import React from "react"
import InputComp from "./InputComp"

const PasswordInput = (props) => {
  return (
    <InputComp
      type="password"
      name={"password"}
      placeholder={"Mot de passe"}
      id={"password"}
      {...props}
    />
  )
}

export default PasswordInput
