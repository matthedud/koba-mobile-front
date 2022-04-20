import React from "react"
import "./InputComp.css"

const TextAreaInput = (props) => {
  return (
    <textarea
      className={`type-input text-input ${props.invalide ? "invalide" : ""}`}
      {...props}
    />
  )
}

export default TextAreaInput
