import React from "react"
import "./InputComp.css"

const InputComp = (props) => {
  const { value, className, type, name, placeholder, onChange } = props
  return (
    <input
      {...props}
      className={`type-input ${className} ${props.invalide ? "invalide" : ""}`}
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      id={name}
      onChange={onChange}
    />
  )
}

export default InputComp
