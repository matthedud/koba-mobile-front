import React from "react"
import "./InputComp.css"


const InputComp = props => {
  return (
    <input
      {...props}
      className={`type-input ${props.className} ${props.value?'':"invalide"}`}
      type={props.type}
      value={props.value}
      name={props.name}
      placeholder={props.placeholder}
      id={props.name}
      onChange={props.onChange}
    />
  )
}

export default InputComp
