import React from "react"
import "./InputComp.css"


const InputComp = () => {
  return (
    <input
      className={`type-input ${props.className}`}
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
