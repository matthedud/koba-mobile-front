import React from "react"
import "./InputComp.css"

const TextAreaInput = (props) => {
  const { invalide, value, zeroOK } = props
  return (
    <textarea
      {...props}
      className={`type-input text-input ${invalide && !value && !zeroOK ? "invalide" : ""}`}
    />
  )
}

export default TextAreaInput
