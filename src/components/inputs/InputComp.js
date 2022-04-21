import React from "react"
import "./InputComp.css"

const InputComp = (props) => {
  const { value, className, type, name, placeholder, onChange, invalide, zeroOK } = props
  return (
    <input
      {...props}
      className={`type-input ${className} ${invalide && !value && !zeroOK ? "invalide" : ""}`}
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
